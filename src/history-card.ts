import { BarChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TooltipComponent,
} from "echarts/components";
import { init, use, type EChartsType } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LitElement, css, html, nothing, type TemplateResult } from "lit";

import {
  alignedValues,
  comparisonSummary,
  completeDayKeys,
  statisticPoints,
  type ProviderDailySeries,
  type StatisticValue,
} from "./history-data";
import { safeColor } from "./metrics";
import type { ForecastQualityMetric, HomeAssistant } from "./types";

use([
  BarChart,
  LineChart,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  TooltipComponent,
  CanvasRenderer,
]);

const ACTUAL_COLOR = "#F59E0B";
const SOLCAST_COLOR = "#22C55E";
const HELIOS_COLOR = "#7C4DFF";
const REFRESH_MS = 30 * 60 * 1000;

interface HistoryProviderConfig {
  name?: string;
  color?: string;
  mae_entity?: string;
  energy_entity?: string;
}

interface HistoryContextConfig {
  value: string;
  label?: string;
  provider_1?: HistoryProviderConfig;
  provider_2?: HistoryProviderConfig;
  evaluable?: boolean;
}

export interface PvForecastHistoryCardConfig {
  type: string;
  title?: string;
  days?: number;
  day_offset?: number;
  default_metric?: ForecastQualityMetric;
  actual_color?: string;
  provider_1: HistoryProviderConfig;
  provider_2?: HistoryProviderConfig;
  selection_entity?: string;
  contexts?: HistoryContextConfig[];
}

type StatisticsResponse = Record<string, StatisticValue[]>;

interface MetricSeries {
  name: string;
  color: string;
  values: Map<string, number>;
  aligned: Array<number | null>;
}

interface MetricView {
  days: string[];
  series: MetricSeries[];
}

export class PvForecastHistoryCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _statistics: { state: true },
    _selectedMetric: { state: true },
    _loading: { state: true },
    _loadError: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: PvForecastHistoryCardConfig;
  private _statistics: StatisticsResponse = {};
  private _selectedMetric: ForecastQualityMetric = "energy";
  private _loading = false;
  private _loadError = false;
  private _chart?: EChartsType;
  private _resizeObserver?: ResizeObserver;
  private _refreshTimer?: number;
  private _request = 0;
  private _loadedSignature?: string;

  static getConfigForm(): Record<string, unknown> {
    const providerSchema = (required: boolean) => [
      { name: "name", selector: { text: {} } },
      { name: "color", selector: { text: {} } },
      { name: "mae_entity", required, selector: { entity: { domain: "sensor" } } },
      { name: "energy_entity", required, selector: { entity: { domain: "sensor" } } },
    ];
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          name: "days",
          selector: { number: { min: 7, max: 90, step: 1, mode: "box" } },
        },
        {
          name: "day_offset",
          selector: { number: { min: -3, max: 3, step: 1, mode: "box" } },
        },
        {
          name: "default_metric",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "energy", label: "Yield / Tagesertrag" },
                { value: "power", label: "Power profile / Leistungsverlauf" },
              ],
            },
          },
        },
        { name: "actual_color", selector: { text: {} } },
        {
          type: "expandable",
          name: "provider_1",
          title: "Provider 1",
          schema: providerSchema(true),
        },
        {
          type: "expandable",
          name: "provider_2",
          title: "Provider 2 (optional)",
          schema: providerSchema(false),
        },
      ],
      computeLabel: (schema: { name?: string }) => {
        const labels: Record<string, string> = {
          title: "Title / Titel",
          days: "Days / Tage",
          day_offset: "Day offset / Tagesverschiebung",
          default_metric: "Default metric / Standardkennzahl",
          actual_color: "Actual reference color / Farbe der Ist-Referenz",
          name: "Name",
          color: "Color / Farbe",
          mae_entity: "Daily MAE entity / MAE-Tagesentität",
          energy_entity: "Daily yield deviation entity / Tagesertragsabweichung",
        };
        return labels[schema.name ?? ""] ?? schema.name ?? "";
      },
    };
  }

  static getStubConfig(): Omit<PvForecastHistoryCardConfig, "type"> {
    return {
      title: "Prognosequalität · 30 Tage",
      days: 30,
      day_offset: -1,
      default_metric: "energy",
      actual_color: ACTUAL_COLOR,
      provider_1: {
        name: "Solcast",
        color: SOLCAST_COLOR,
        mae_entity: "sensor.solcast_mae_day",
        energy_entity: "sensor.solcast_energy_deviation_day",
      },
      provider_2: {
        name: "Helios Forecast",
        color: HELIOS_COLOR,
        mae_entity: "sensor.helios_mae_day",
        energy_entity: "sensor.helios_energy_deviation_day",
      },
    };
  }

  setConfig(config: PvForecastHistoryCardConfig): void {
    if (!config?.provider_1?.mae_entity?.trim()) {
      throw new Error("provider_1.mae_entity is required");
    }
    if (!config.provider_1.energy_entity?.trim()) {
      throw new Error("provider_1.energy_entity is required");
    }
    if (
      config.provider_2 &&
      (!config.provider_2.mae_entity?.trim() || !config.provider_2.energy_entity?.trim())
    ) {
      throw new Error("provider_2 requires both mae_entity and energy_entity");
    }
    const days = Math.min(90, Math.max(7, Math.round(config.days ?? 30)));
    const dayOffset = Math.min(3, Math.max(-3, Math.round(config.day_offset ?? -1)));
    this._config = {
      ...config,
      days,
      day_offset: dayOffset,
      default_metric: config.default_metric === "power" ? "power" : "energy",
      provider_1: { ...config.provider_1 },
      provider_2: config.provider_2 ? { ...config.provider_2 } : undefined,
      contexts: config.contexts?.map((context) => ({
        ...context,
        provider_1: context.provider_1 ? { ...context.provider_1 } : undefined,
        provider_2: context.provider_2 ? { ...context.provider_2 } : undefined,
      })),
    };
    this._selectedMetric = this._config.default_metric ?? "energy";
    this._loadedSignature = undefined;
  }

  getCardSize(): number {
    return 7;
  }

  getGridOptions(): Record<string, number> {
    return { columns: 12, min_columns: 6 };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._refreshTimer = window.setInterval(() => {
      this._loadedSignature = undefined;
      this._loadStatistics();
    }, REFRESH_MS);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._refreshTimer !== undefined) window.clearInterval(this._refreshTimer);
    this._resizeObserver?.disconnect();
    this._chart?.dispose();
    this._chart = undefined;
  }

  protected render(): TemplateResult {
    if (!this._config) return html``;
    const locale = this.hass?.locale?.language ?? navigator.language;
    const german = locale.toLowerCase().startsWith("de");
    const title =
      this._config.title?.trim() ||
      (german ? "Prognosequalität · 30 Tage" : "Forecast quality · 30 days");
    const view = this._metricView(this._selectedMetric);
    const active = this._activeContext();
    const hasData = active.evaluable && view.series.some((item) => item.values.size > 0);
    const evaluatedDays = this._evaluatedDays(view);

    return html`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <h2>${title}</h2>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${german ? "Diagramm erklären" : "Explain chart"}
                aria-describedby="history-chart-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="history-chart-tooltip" class="info-tooltip" role="tooltip">
                ${german
                  ? "Tagesertrag zeigt die prozentuale Abweichung von der tatsächlich erzeugten Tagesenergie. Leistungsverlauf zeigt den mittleren absoluten Leistungsfehler (MAE) aller Intervalle eines Tages."
                  : "Yield shows the percentage deviation from actual daily energy. Power profile shows the mean absolute power error (MAE) across each day's intervals."}
              </span>
            </div>
          </header>

          <div class="metric-tabs" role="group" aria-label=${german ? "Kennzahl" : "Metric"}>
            <button
              type="button"
              class=${this._selectedMetric === "energy" ? "selected" : ""}
              aria-pressed=${this._selectedMetric === "energy"}
              @click=${() => this._selectMetric("energy")}
            >
              ${german ? "Tagesertrag" : "Yield"}
            </button>
            <button
              type="button"
              class=${this._selectedMetric === "power" ? "selected" : ""}
              aria-pressed=${this._selectedMetric === "power"}
              @click=${() => this._selectMetric("power")}
            >
              ${german ? "Leistungsverlauf" : "Power profile"}
            </button>
          </div>

          ${hasData
            ? html`<p class="summary">${this._summary(view, this._selectedMetric, german)}</p>`
            : nothing}
          <div
            class="chart"
            ?hidden=${!hasData}
            role="img"
            aria-label=${this._chartAriaLabel(view, this._selectedMetric, german)}
          ></div>
          ${!hasData ? this._emptyState(german, active.evaluable) : nothing}

          <footer class="card-footer">
            ${hasData
              ? html`${active.label ? `${active.label} · ` : ""}${evaluatedDays} ${german ? "vollständige Tage" : "complete days"}
                  <span aria-hidden="true">·</span>
                  ${german
                    ? `letzte ${this._config.days ?? 30} Tage`
                    : `last ${this._config.days ?? 30} days`}`
              : !active.evaluable
                ? german
                  ? "Der laufend aktualisierte Stand wird nicht als feste Prognose archiviert."
                  : "The continuously updated issue is not archived as a fixed forecast."
                : german
                  ? `Die Auswertung für ${active.label ?? "diesen Prognosestand"} beginnt nach dem ersten vollständigen Tag.`
                  : `Evaluation for ${active.label ?? "this forecast issue"} starts after the first complete day.`}
          </footer>
        </div>
      </ha-card>
    `;
  }

  protected firstUpdated(): void {
    const chartElement = this.renderRoot.querySelector<HTMLElement>(".chart");
    if (!chartElement) return;
    this._chart = init(chartElement, undefined, { renderer: "canvas" });
    this._resizeObserver = new ResizeObserver(() => this._chart?.resize());
    this._resizeObserver.observe(chartElement);
    this._loadStatistics();
    this._updateChart();
  }

  protected updated(): void {
    this._loadStatistics();
    this._updateChart();
  }

  private _selectMetric(metric: ForecastQualityMetric): void {
    this._selectedMetric = metric;
  }

  private async _loadStatistics(): Promise<void> {
    if (!this._config || !this.hass?.callWS || this._loading) return;
    const signature = this._signature();
    if (signature === this._loadedSignature) return;
    this._loading = true;
    const request = ++this._request;
    const days = this._config.days ?? 30;
    const offset = Math.abs(this._config.day_offset ?? -1);
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - days - offset - 2);
    const statisticIds = this._entityIds();
    try {
      const statistics = await this.hass.callWS<StatisticsResponse>({
        type: "recorder/statistics_during_period",
        start_time: start.toISOString(),
        end_time: new Date().toISOString(),
        statistic_ids: statisticIds,
        period: "day",
        types: ["mean"],
        units: {},
      });
      if (request !== this._request) return;
      this._statistics = statistics ?? {};
      this._loadError = false;
      this._loadedSignature = signature;
    } catch {
      if (request !== this._request) return;
      this._loadError = true;
      this._loadedSignature = signature;
    } finally {
      if (request === this._request) this._loading = false;
    }
  }

  private _metricView(metric: ForecastQualityMetric): MetricView {
    const days = completeDayKeys(this._config?.days ?? 30);
    const allowedDays = new Set(days);
    const entityKey = metric === "energy" ? "energy_entity" : "mae_entity";
    const active = this._activeContext();
    const providers = [active.provider_1, active.provider_2].filter(
      (provider): provider is HistoryProviderConfig => Boolean(provider),
    );
    const fallbackNames = ["Solcast", "Helios Forecast"];
    const fallbackColors = [SOLCAST_COLOR, HELIOS_COLOR];
    const series = providers.map((provider, index) => {
      const entity = provider[entityKey];
      const points = statisticPoints(
        entity ? this._statistics[entity] : undefined,
        this._config?.day_offset ?? -1,
        allowedDays,
      );
      return {
        name: provider.name?.trim() || fallbackNames[index]!,
        color: this._seriesColor(provider.color, fallbackColors[index]!),
        values: new Map(points.map((point) => [point.day, point.value])),
        aligned: alignedValues(days, points),
      };
    });
    return { days, series };
  }

  private _updateChart(): void {
    if (!this._chart || !this._config) return;
    const view = this._metricView(this._selectedMetric);
    const hasData = view.series.some((item) => item.values.size > 0);
    if (!hasData) {
      this._chart.clear();
      return;
    }
    this._chart.resize();
    const styles = getComputedStyle(this);
    const primaryText = styles.getPropertyValue("--primary-text-color").trim() || "#1f2937";
    const secondaryText = styles.getPropertyValue("--secondary-text-color").trim() || "#6b7280";
    const divider = styles.getPropertyValue("--divider-color").trim() || "rgba(127,127,127,.2)";
    const cardBackground =
      styles.getPropertyValue("--ha-card-background").trim() ||
      styles.getPropertyValue("--card-background-color").trim() ||
      "#ffffff";
    const fontFamily =
      styles.getPropertyValue("--ha-font-family-body").trim() ||
      styles.getPropertyValue("--paper-font-body1_-_font-family").trim() ||
      "sans-serif";
    const locale = this.hass?.locale?.language ?? navigator.language;
    const energy = this._selectedMetric === "energy";
    const actualColor = this._seriesColor(this._config.actual_color, ACTUAL_COLOR);
    const tooltipBackground = cardBackground === "transparent" ? "#ffffff" : cardBackground;
    const values = view.series.flatMap((item) =>
      item.aligned.filter((value): value is number => value !== null),
    );
    const bounds = energy ? this._energyBounds(values) : this._powerBounds(values);
    const legendNames = [
      ...(energy ? ["Ist-Ertrag"] : []),
      ...view.series.map((item) => item.name),
    ];
    const chartSeries: Array<Record<string, unknown>> = [];
    if (energy) {
      chartSeries.push({
        name: "Ist-Ertrag",
        type: "line",
        data: view.days.map(() => 0),
        symbol: "none",
        lineStyle: { color: actualColor, width: 1.5, type: "solid" },
        itemStyle: { color: actualColor },
        markArea: {
          silent: true,
          itemStyle: {
            color: styles.getPropertyValue("--secondary-background-color").trim() || divider,
            opacity: 0.46,
          },
          label: {
            show: true,
            color: secondaryText,
            formatter: locale.toLowerCase().startsWith("de")
              ? "nah am Ist (±10 %)"
              : "close to actual (±10%)",
            position: "insideTopRight",
          },
          data: [[{ yAxis: -10 }, { yAxis: 10 }]],
        },
        z: 4,
      });
    }
    for (const item of view.series) {
      chartSeries.push({
        name: item.name,
        type: energy ? "bar" : "line",
        data: item.aligned,
        barMaxWidth: 11,
        barGap: "20%",
        showSymbol: !energy,
        symbol: "circle",
        symbolSize: 5,
        connectNulls: false,
        lineStyle: { color: item.color, width: 1.5, type: "dashed" },
        itemStyle: { color: item.color, opacity: energy ? 0.84 : 1 },
        emphasis: { focus: "series" },
      });
    }

    this._chart.setOption(
      {
        animation: false,
        backgroundColor: "transparent",
        textStyle: { fontFamily, color: primaryText },
        grid: { left: 52, right: 18, top: 28, bottom: 72 },
        legend: {
          show: true,
          left: 0,
          bottom: 4,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 18,
          icon: "circle",
          data: legendNames.map((name) => ({ name, icon: "circle" })),
          textStyle: { color: secondaryText, fontSize: 12 },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          confine: true,
          transitionDuration: 0,
          axisPointer: energy
            ? { type: "shadow", shadowStyle: { color: divider, opacity: 0.35 } }
            : { type: "line", snap: true, lineStyle: { color: secondaryText, width: 1 } },
          backgroundColor: tooltipBackground,
          borderColor: divider,
          borderWidth: 1,
          padding: 0,
          textStyle: { color: primaryText, fontFamily, fontSize: 13 },
          formatter: (parameters: unknown) =>
            this._tooltip(parameters, view, this._selectedMetric, locale, divider, actualColor),
        },
        xAxis: {
          type: "category",
          data: view.days,
          axisLine: { show: true, lineStyle: { color: divider } },
          axisTick: { show: false },
          axisLabel: {
            color: secondaryText,
            fontSize: 11,
            interval: Math.max(0, Math.ceil(view.days.length / 6) - 1),
            hideOverlap: true,
            formatter: (value: string) => this._shortDate(value, locale),
          },
          splitLine: { show: false },
        },
        yAxis: {
          type: "value",
          min: bounds.min,
          max: bounds.max,
          name: energy ? "%" : "kW",
          nameLocation: "end",
          nameGap: 8,
          nameTextStyle: { color: secondaryText, align: "right", fontSize: 12 },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: secondaryText,
            fontSize: 11,
            formatter: (value: number) =>
              new Intl.NumberFormat(locale, { maximumFractionDigits: energy ? 0 : 1 }).format(
                value,
              ),
          },
          splitLine: { show: true, lineStyle: { color: divider, width: 1 } },
        },
        series: chartSeries,
      },
      { notMerge: true, lazyUpdate: true },
    );
  }

  private _tooltip(
    parameters: unknown,
    view: MetricView,
    metric: ForecastQualityMetric,
    locale: string,
    divider: string,
    actualColor: string,
  ): string {
    const params = Array.isArray(parameters) ? parameters : [parameters];
    const first = params.find((item) => item && typeof item === "object") as
      | { dataIndex?: unknown }
      | undefined;
    const index = Number(first?.dataIndex);
    if (!Number.isInteger(index) || index < 0 || index >= view.days.length) return "";
    const german = locale.toLowerCase().startsWith("de");
    const number = new Intl.NumberFormat(locale, {
      minimumFractionDigits: metric === "energy" ? 1 : 2,
      maximumFractionDigits: metric === "energy" ? 1 : 2,
      signDisplay: metric === "energy" ? "always" : "auto",
    });
    const rows: string[] = [];
    if (metric === "energy") {
      rows.push(
        this._tooltipRow(
          actualColor,
          german ? "Ist-Ertrag" : "Actual yield",
          new Intl.NumberFormat(locale, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            signDisplay: "always",
          }).format(0) + " %",
          german ? "Referenz" : "Reference",
        ),
      );
    }
    for (const item of view.series) {
      const value = item.aligned[index];
      const shown =
        value == null
          ? "–"
          : metric === "energy"
            ? `${number.format(value)} %`
            : `${number.format(value)} kW`;
      const note =
        value == null
          ? ""
          : metric === "power"
            ? german
              ? "kleiner ist besser"
              : "lower is better"
            : value > 0
              ? german
                ? "zu hoch"
                : "too high"
              : value < 0
                ? german
                  ? "zu niedrig"
                  : "too low"
                : german
                  ? "genau am Ist"
                  : "exact";
      rows.push(this._tooltipRow(item.color, item.name, shown, note));
    }
    const date = this._longDate(view.days[index]!, locale);
    return `<div style="min-width:285px;padding:7px 0 8px;color:inherit;">
      <div style="font-weight:600;padding:0 10px 6px;border-bottom:1px solid ${this._escapeHtml(divider)};margin-bottom:3px;">${this._escapeHtml(date)}</div>
      ${rows.join("")}
    </div>`;
  }

  private _tooltipRow(color: string, name: string, value: string, note: string): string {
    return `<div style="display:grid;grid-template-columns:8px 1fr auto;align-items:center;column-gap:8px;padding:3px 10px;">
      <span style="width:8px;height:8px;border-radius:50%;background:${this._escapeHtml(color)};"></span>
      <span>${this._escapeHtml(name)}${note ? `<small style="display:block;color:var(--secondary-text-color);font-size:11px;">${this._escapeHtml(note)}</small>` : ""}</span>
      <strong style="margin-left:12px;">${this._escapeHtml(value)}</strong>
    </div>`;
  }

  private _summary(
    view: MetricView,
    metric: ForecastQualityMetric,
    german: boolean,
  ): string {
    if (view.series.length < 2) {
      const count = this._evaluatedDays(view);
      return german
        ? `${count} vollständige Tage für ${view.series[0]?.name ?? "den Anbieter"}.`
        : `${count} complete days for ${view.series[0]?.name ?? "the provider"}.`;
    }
    const summary = comparisonSummary(view.series as ProviderDailySeries[]);
    if (summary.comparableDays === 0) return german ? "Noch kein gemeinsamer Vergleich." : "No shared comparison yet.";
    if (summary.winnerIndex === null) {
      return german
        ? `Beide Anbieter lagen über ${summary.comparableDays} Tage gleich oft näher am Ziel.`
        : `Both providers were closer to target equally often across ${summary.comparableDays} days.`;
    }
    const winner = view.series[summary.winnerIndex]!.name;
    if (metric === "energy") {
      return german
        ? `${winner} lag an ${summary.winnerDays} von ${summary.comparableDays} Tagen näher am tatsächlichen Tagesertrag.`
        : `${winner} was closer to actual yield on ${summary.winnerDays} of ${summary.comparableDays} days.`;
    }
    return german
      ? `${winner} hatte an ${summary.winnerDays} von ${summary.comparableDays} Tagen den kleineren mittleren Leistungsfehler.`
      : `${winner} had the lower mean power error on ${summary.winnerDays} of ${summary.comparableDays} days.`;
  }

  private _emptyState(german: boolean, evaluable = true): TemplateResult {
    const title = !evaluable
      ? german
        ? "Für „Aktuell“ gibt es bewusst kein Langzeiturteil"
        : "Current deliberately has no long-term verdict"
      : this._loadError
      ? german
        ? "Tagesdaten konnten nicht geladen werden"
        : "Daily data could not be loaded"
      : this._loading
        ? german
          ? "Tagesdaten werden geladen"
          : "Loading daily data"
        : german
          ? "Noch keine vollständigen Tagesdaten"
          : "No complete daily data yet";
    return html`<div class="empty-state">
      ${this._calendarIcon()}
      <strong>${title}</strong>
    </div>`;
  }

  private _evaluatedDays(view: MetricView): number {
    return new Set(view.series.flatMap((item) => [...item.values.keys()])).size;
  }

  private _energyBounds(values: number[]): { min: number; max: number } {
    const minimum = Math.min(-10, ...values);
    const maximum = Math.max(10, ...values);
    return {
      min: Math.floor(minimum / 10) * 10,
      max: Math.ceil(maximum / 10) * 10,
    };
  }

  private _powerBounds(values: number[]): { min: number; max: number } {
    const maximum = Math.max(1, ...values);
    return { min: 0, max: Math.ceil(maximum * 2.2) / 2 };
  }

  private _entityIds(): string[] {
    const active = this._activeContext();
    return [
      active.provider_1.mae_entity,
      active.provider_1.energy_entity,
      active.provider_2?.mae_entity,
      active.provider_2?.energy_entity,
    ].filter((entity): entity is string => Boolean(entity));
  }

  private _activeContext(): {
    provider_1: HistoryProviderConfig;
    provider_2?: HistoryProviderConfig;
    label?: string;
    evaluable: boolean;
  } {
    if (!this._config) return { provider_1: {}, evaluable: false };
    const selected = this._config.selection_entity
      ? this.hass?.states[this._config.selection_entity]?.state
      : undefined;
    const context = this._config.contexts?.find((item) => item.value === selected);
    return {
      provider_1: { ...this._config.provider_1, ...context?.provider_1 },
      provider_2:
        this._config.provider_2 || context?.provider_2
          ? { ...this._config.provider_2, ...context?.provider_2 }
          : undefined,
      label: context?.label,
      evaluable: context?.evaluable !== false,
    };
  }

  private _signature(): string {
    return `${this._entityIds().join("|")}|${this._config?.days}|${this._config?.day_offset}|${this._dayKey()}`;
  }

  private _seriesColor(value: string | undefined, fallback: string): string {
    const safe = safeColor(value, fallback);
    const variable = safe.match(/^var\((--[a-z0-9-_]+)\)$/i)?.[1];
    if (!variable) return safe;
    return getComputedStyle(this).getPropertyValue(variable).trim() || fallback;
  }

  private _shortDate(day: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit" }).format(
      new Date(`${day}T12:00:00`),
    );
  }

  private _longDate(day: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(`${day}T12:00:00`));
  }

  private _dayKey(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  private _chartAriaLabel(
    view: MetricView,
    metric: ForecastQualityMetric,
    german: boolean,
  ): string {
    const providers = view.series.map((item) => item.name).join(", ");
    return german
      ? `${metric === "energy" ? "Tagesertragsabweichung" : "Mittlerer Leistungsfehler"} von ${providers} über ${view.days.length} Tage`
      : `${metric === "energy" ? "Daily yield deviation" : "Mean power error"} for ${providers} across ${view.days.length} days`;
  }

  private _escapeHtml(value: string): string {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  private _infoIcon(): TemplateResult {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }

  private _calendarIcon(): TemplateResult {
    return html`<svg class="calendar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 3.5v3M17.5 3.5v3M4 8.5h16"></path>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2"></rect>
      <circle cx="15.7" cy="15.7" r="3.2"></circle>
      <path d="M15.7 13.9v2l1.3.8"></path>
    </svg>`;
  }

  static styles = css`
    :host {
      display: block;
      min-width: 0;
      color: var(--primary-text-color);
      font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, sans-serif));
    }

    ha-card {
      display: block;
      height: auto;
      overflow: visible;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: var(--ha-card-border-radius, 12px);
    }

    .card-content {
      box-sizing: border-box;
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      min-width: 0;
      padding: 24px 24px 16px;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-width: 0;
    }

    h2 {
      min-width: 0;
      margin: 0;
      overflow-wrap: anywhere;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
    }

    .info-control {
      position: relative;
      z-index: 8;
      flex: 0 0 auto;
    }

    .info-button {
      display: grid;
      width: 36px;
      height: 36px;
      place-items: center;
      margin: -6px -6px -6px 0;
      padding: 0;
      color: var(--secondary-text-color);
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }

    .info-button:hover,
    .info-button:focus-visible {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }

    .info-button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .info-button svg {
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .info-tooltip {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: min(370px, calc(100vw - 64px));
      box-sizing: border-box;
      padding: 12px 14px;
      visibility: hidden;
      color: var(--primary-text-color);
      font-size: 13px;
      line-height: 1.45;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0, 0, 0, 0.18));
      opacity: 0;
      pointer-events: none;
      transform: translateY(-3px);
      transition: opacity 120ms ease, transform 120ms ease, visibility 120ms;
    }

    .info-control:hover .info-tooltip,
    .info-control:focus-within .info-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .metric-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .metric-tabs button {
      min-height: 34px;
      padding: 6px 12px;
      color: var(--secondary-text-color);
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      border: 1px solid var(--divider-color);
      border-radius: 18px;
      background: transparent;
      cursor: pointer;
    }

    .metric-tabs button:hover {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
    }

    .metric-tabs button.selected {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
      border-color: var(--secondary-text-color);
    }

    .metric-tabs button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .summary {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
    }

    .chart {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      height: 340px;
      min-height: 280px;
    }

    .chart[hidden] {
      display: none;
    }

    .empty-state {
      display: grid;
      min-height: 150px;
      place-items: center;
      align-content: center;
      gap: 10px;
      color: var(--secondary-text-color);
      text-align: center;
    }

    .empty-state strong {
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 600;
    }

    .calendar-icon {
      width: 34px;
      height: 34px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.6;
    }

    .card-footer {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-top: 12px;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.35;
      border-top: 1px solid var(--divider-color);
    }

    @media (max-width: 600px) {
      .card-content {
        padding: 20px 16px 12px;
      }

      .chart {
        height: 310px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .info-tooltip {
        transition: none;
      }
    }
  `;
}
