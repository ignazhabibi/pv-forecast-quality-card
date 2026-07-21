import { LineChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TooltipComponent,
} from "echarts/components";
import { init, use, type EChartsType } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LitElement, css, html, nothing, type TemplateResult } from "lit";

import {
  aggregateHistory,
  forecastPoints,
  localDayBounds,
  nearestPointValue,
  powerCurveEnergy,
  powerFactor,
  snapshotEnergy,
  snapshotPoints,
  type ChartPoint,
  type CompactHistoryState,
  type PowerUnit,
} from "./day-data";
import { isSnapshotStale, parseSnapshot, readNumericEntity, safeColor } from "./metrics";
import type { HomeAssistant } from "./types";

use([
  LineChart,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TooltipComponent,
  CanvasRenderer,
]);

const ACTUAL_COLOR = "#F59E0B";
const PRIMARY_FORECAST_COLOR = "#22C55E";
const SECONDARY_FORECAST_COLOR = "#7C4DFF";
const STEP_MS = 5 * 60 * 1000;

interface DaySeriesConfig {
  name?: string;
  entity?: string;
  color?: string;
  unit?: PowerUnit;
  attribute?: string;
  datetime_key?: string;
  value_key?: string;
}

interface SnapshotSetConfig {
  value: string;
  label?: string;
  snapshot_entity: string;
  forecast_1_entities: string[];
  forecast_2_entities?: string[];
  value_scale?: number;
  actual_energy_entity?: string;
  actual_energy_label?: string;
}

export interface PvForecastDayCardConfig {
  type: string;
  title?: string;
  actual: DaySeriesConfig;
  forecast_1: DaySeriesConfig;
  forecast_2?: DaySeriesConfig;
  selection_entity?: string;
  actual_energy_entity?: string;
  snapshot_sets?: SnapshotSetConfig[];
}

type HistoryStates = Record<string, CompactHistoryState[]>;

interface SeriesView {
  name: string;
  color: string;
  points: ChartPoint[];
  kind: "actual" | "forecast";
  energy: number | null;
}

export class PvForecastDayCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _historyPoints: { state: true },
    _historyError: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: PvForecastDayCardConfig;
  private _historyPoints: ChartPoint[] = [];
  private _historyError = false;
  private _chart?: EChartsType;
  private _resizeObserver?: ResizeObserver;
  private _refreshTimer?: number;
  private _historyRequest = 0;
  private _loadedDay?: string;
  private _historyLoading = false;

  static getConfigForm(): Record<string, unknown> {
    const unitOptions = [
      { value: "auto", label: "Auto" },
      { value: "W", label: "W" },
      { value: "kW", label: "kW" },
    ];
    const seriesSchema = (required: boolean, forecast: boolean) => [
      { name: "name", selector: { text: {} } },
      { name: "entity", required, selector: { entity: { domain: "sensor" } } },
      { name: "color", selector: { text: {} } },
      { name: "unit", selector: { select: { mode: "dropdown", options: unitOptions } } },
      ...(forecast
        ? [
            { name: "attribute", selector: { text: {} } },
            { name: "datetime_key", selector: { text: {} } },
            { name: "value_key", selector: { text: {} } },
          ]
        : []),
    ];

    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          type: "expandable",
          name: "actual",
          title: "Measured power / Gemessene Leistung",
          schema: seriesSchema(true, false),
        },
        {
          type: "expandable",
          name: "forecast_1",
          title: "Forecast 1 / Prognose 1",
          schema: seriesSchema(true, true),
        },
        {
          type: "expandable",
          name: "forecast_2",
          title: "Forecast 2 (optional) / Prognose 2 (optional)",
          schema: seriesSchema(false, true),
        },
      ],
      computeLabel: (schema: { name?: string }) => {
        const labels: Record<string, string> = {
          title: "Title / Titel",
          name: "Name",
          entity: "Entity / Entität",
          color: "Color / Farbe",
          unit: "Source unit / Quelleneinheit",
          attribute: "Forecast attribute / Prognoseattribut",
          datetime_key: "Timestamp field / Zeitfeld",
          value_key: "Power field / Leistungsfeld",
        };
        return labels[schema.name ?? ""] ?? schema.name ?? "";
      },
    };
  }

  static getStubConfig(): Omit<PvForecastDayCardConfig, "type"> {
    return {
      title: "Heute: PV-Erzeugung und Prognosen",
      actual: {
        name: "Gemessene Leistung",
        entity: "sensor.pv_power",
        color: ACTUAL_COLOR,
        unit: "auto",
      },
      forecast_1: {
        name: "Solcast",
        entity: "sensor.solcast_forecast_today",
        color: PRIMARY_FORECAST_COLOR,
        unit: "kW",
        attribute: "detailedForecast",
        datetime_key: "period_start",
        value_key: "pv_estimate",
      },
      forecast_2: {
        name: "Helios Forecast",
        color: SECONDARY_FORECAST_COLOR,
        unit: "W",
        attribute: "forecast",
        datetime_key: "datetime",
        value_key: "watts",
      },
    };
  }

  setConfig(config: PvForecastDayCardConfig): void {
    if (!config?.actual?.entity?.trim()) {
      throw new Error("actual.entity is required");
    }
    if (!config.forecast_1?.entity?.trim()) {
      throw new Error("forecast_1.entity is required");
    }
    this._config = {
      ...config,
      actual: { ...config.actual },
      forecast_1: { ...config.forecast_1 },
      forecast_2: config.forecast_2 ? { ...config.forecast_2 } : undefined,
      snapshot_sets: config.snapshot_sets?.map((set) => ({
        ...set,
        forecast_1_entities: [...set.forecast_1_entities],
        forecast_2_entities: set.forecast_2_entities
          ? [...set.forecast_2_entities]
          : undefined,
      })),
    };
    this._loadedDay = undefined;
  }

  getCardSize(): number {
    return 7;
  }

  getGridOptions(): Record<string, number> {
    return {
      columns: 12,
      min_columns: 6,
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._refreshTimer = window.setInterval(() => this._loadHistory(), STEP_MS);
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
    const language = this.hass?.locale?.language ?? navigator.language;
    const german = language.toLowerCase().startsWith("de");
    const title =
      this._config.title?.trim() ||
      (german ? "Heute: PV-Erzeugung und Prognosen" : "Today: PV production and forecasts");
    const activeSet = this._activeSnapshotSet();
    const selectedIssue = this._selectedIssue();
    const issueLabel =
      activeSet?.label ??
      (selectedIssue === "Aktuell"
        ? german
          ? "Live-Prognose"
          : "Live forecast"
        : selectedIssue ?? (german ? "Live-Prognose" : "Live forecast"));
    const { start, end } = localDayBounds();
    const series = this._series(start, end);

    return html`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <div class="title-block">
              <h2>${title}</h2>
              <span>${issueLabel}</span>
            </div>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${german ? "Diagramm erklären" : "Explain chart"}
                aria-describedby="day-chart-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="day-chart-tooltip" class="info-tooltip" role="tooltip">
                <strong>${german ? "Leistung und Energie" : "Power and energy"}</strong>
                <span>
                  ${german
                    ? "Das Diagramm zeigt Leistung in kW: Orange ist die gemessene Leistung, die gestrichelten Linien sind Prognosen. Die Werte darüber zeigen Energie in kWh: bisher erzeugt und für den gesamten Tag erwartet."
                    : "The chart shows power in kW: orange is measured power and the dashed lines are forecasts. The values above show energy in kWh: produced so far and expected for the whole day."}
                  ${activeSet
                    ? german
                      ? " Die Prognosen sind unverändert aus dem gewählten Zeitpunkt gespeichert."
                      : " The forecasts are saved unchanged from the selected time."
                    : german
                      ? " Die Live-Prognosen werden von den Integrationen laufend aktualisiert."
                      : " The live forecasts are continuously updated by the integrations."}
                </span>
              </span>
            </div>
          </header>
          ${this._energySummary(series, activeSet, language, german)}
          <div class="chart" role="img" aria-label=${this._chartAriaLabel(german)}></div>
          ${this._historyError
            ? html`<p class="chart-note">
                ${german
                  ? "Der gemessene Leistungsverlauf konnte nicht vollständig geladen werden."
                  : "The measured power profile could not be loaded completely."}
              </p>`
            : nothing}
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
    this._loadHistory();
    this._updateChart();
  }

  protected updated(): void {
    if (!this._chart) return;
    const today = this._dayKey();
    if (this._loadedDay !== today && !this._historyLoading) {
      this._loadHistory();
    }
    this._updateChart();
  }

  private async _loadHistory(): Promise<void> {
    const hass = this.hass;
    const entity = this._config?.actual.entity;
    if (!hass?.callWS || !entity) return;

    const request = ++this._historyRequest;
    this._historyLoading = true;
    const { start, end } = localDayBounds();
    try {
      const history = await hass.callWS<HistoryStates>({
        type: "history/history_during_period",
        entity_ids: [entity],
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        minimal_response: true,
        no_attributes: true,
        significant_changes_only: false,
      });
      if (request !== this._historyRequest) return;
      const stateObj = hass.states[entity];
      const factor = powerFactor(
        this._config?.actual.unit,
        stateObj?.attributes.unit_of_measurement,
      );
      this._historyPoints = aggregateHistory(history[entity] ?? [], factor, start, end);
      this._historyError = false;
      this._loadedDay = this._dayKey();
    } catch {
      if (request !== this._historyRequest) return;
      this._historyError = true;
      this._loadedDay = this._dayKey();
    } finally {
      if (request === this._historyRequest) this._historyLoading = false;
    }
  }

  private _updateChart(): void {
    if (!this._chart || !this._config || !this.hass) return;

    const styles = getComputedStyle(this);
    const primaryText = styles.getPropertyValue("--primary-text-color").trim() || "#1f2937";
    const secondaryText = styles.getPropertyValue("--secondary-text-color").trim() || "#6b7280";
    const divider = styles.getPropertyValue("--divider-color").trim() || "rgba(127, 127, 127, 0.2)";
    const cardBackground =
      styles.getPropertyValue("--ha-card-background").trim() ||
      styles.getPropertyValue("--card-background-color").trim() ||
      "#ffffff";
    const fontFamily =
      styles.getPropertyValue("--ha-font-family-body").trim() ||
      styles.getPropertyValue("--paper-font-body1_-_font-family").trim() ||
      "sans-serif";
    const { start, end } = localDayBounds();
    const series = this._series(start, end);
    const actual = series.find((item) => item.kind === "actual");
    const actualLast = actual?.points.at(-1);
    const now = Math.min(Date.now(), end.getTime());
    const locale = this.hass.locale?.language ?? navigator.language;
    const tooltipBackground = this._opaqueColor(cardBackground, "#ffffff");

    this._chart.setOption(
      {
        animation: false,
        backgroundColor: "transparent",
        textStyle: { fontFamily, color: primaryText },
        grid: { left: 50, right: 18, top: 24, bottom: 76, containLabel: false },
        legend: {
          show: true,
          left: 0,
          bottom: 4,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 18,
          icon: "circle",
          selectedMode: true,
          data: series.map((item) => ({ name: item.name, icon: "circle" })),
          textStyle: { color: secondaryText, fontSize: 12 },
        },
        tooltip: {
          show: true,
          trigger: "axis",
          confine: true,
          transitionDuration: 0,
          axisPointer: { type: "line", snap: true, lineStyle: { color: secondaryText, width: 1 } },
          backgroundColor: tooltipBackground,
          borderColor: divider,
          borderWidth: 1,
          padding: 0,
          textStyle: { color: primaryText, fontFamily, fontSize: 13 },
          formatter: (parameters: unknown) =>
            this._tooltip(parameters, series, locale, divider, secondaryText),
        },
        xAxis: {
          type: "time",
          min: start.getTime(),
          max: end.getTime(),
          boundaryGap: false,
          name: locale.toLowerCase().startsWith("de") ? "Uhrzeit" : "Time",
          nameLocation: "middle",
          nameGap: 32,
          nameTextStyle: { color: secondaryText, fontSize: 12 },
          axisLine: { show: true, lineStyle: { color: divider } },
          axisTick: { show: false },
          axisLabel: {
            color: secondaryText,
            fontSize: 11,
            hideOverlap: true,
            formatter: (value: number) =>
              value === end.getTime()
                ? ""
                : new Intl.DateTimeFormat(locale, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  }).format(value),
          },
          splitLine: { show: false },
        },
        yAxis: {
          type: "value",
          min: 0,
          name: locale.toLowerCase().startsWith("de") ? "Leistung (kW)" : "Power (kW)",
          nameLocation: "end",
          nameGap: 8,
          nameTextStyle: { color: secondaryText, align: "right", fontSize: 12 },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: secondaryText,
            fontSize: 11,
            formatter: (value: number) =>
              new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value),
          },
          splitLine: { show: true, lineStyle: { color: divider, width: 1 } },
        },
        series: series.map((item) => ({
          name: item.name,
          type: "line",
          data: item.points,
          showSymbol: false,
          symbol: "circle",
          symbolSize: 5,
          connectNulls: false,
          clip: true,
          emphasis: { disabled: true },
          itemStyle: { color: item.color },
          lineStyle: {
            color: item.color,
            width: 1.5,
            type: item.kind === "actual" ? "solid" : "dashed",
          },
          areaStyle:
            item.kind === "actual"
              ? { color: this._withAlpha(item.color, 0.08), opacity: 1 }
              : undefined,
          markLine:
            item.kind === "actual"
              ? {
                  silent: true,
                  symbol: "none",
                  lineStyle: { color: secondaryText, width: 1, type: "dashed", opacity: 0.7 },
                  label: {
                    show: true,
                    formatter: locale.toLowerCase().startsWith("de") ? "Jetzt" : "Now",
                    color: secondaryText,
                    backgroundColor: tooltipBackground,
                    borderRadius: 8,
                    padding: [3, 6],
                    position: "insideEndTop",
                  },
                  data: [{ xAxis: now }],
                }
              : undefined,
          markPoint:
            item.kind === "actual" && actualLast
              ? {
                  silent: true,
                  symbol: "circle",
                  symbolSize: 7,
                  label: { show: false },
                  itemStyle: {
                    color: item.color,
                    borderColor: tooltipBackground,
                    borderWidth: 1,
                  },
                  data: [{ coord: actualLast }],
                }
              : undefined,
        })),
      },
      { notMerge: true, lazyUpdate: true },
    );
  }

  private _series(start: Date, end: Date): SeriesView[] {
    if (!this._config || !this.hass) return [];
    const actualConfig = this._config.actual;
    const actualState = actualConfig.entity ? this.hass.states[actualConfig.entity] : undefined;
    const actualPoints = [...this._historyPoints];
    const currentValue = Number(actualState?.state);
    const currentTime = new Date(actualState?.last_updated ?? "").getTime();
    const actualFactor = powerFactor(
      actualConfig.unit,
      actualState?.attributes.unit_of_measurement,
    );
    if (
      Number.isFinite(currentValue) &&
      Number.isFinite(currentTime) &&
      currentTime >= start.getTime() &&
      currentTime < end.getTime()
    ) {
      actualPoints.push([currentTime, Math.max(0, currentValue * actualFactor)]);
    }

    const result: SeriesView[] = [
      {
        name: actualConfig.name?.trim() || "Gemessene Leistung",
        color: this._seriesColor(actualConfig.color, ACTUAL_COLOR),
        points: actualPoints.sort((a, b) => a[0] - b[0]),
        kind: "actual",
        energy: null,
      },
    ];

    const activeSet = this._activeSnapshotSet();
    const snapshot = activeSet
      ? parseSnapshot(this.hass.states[activeSet.snapshot_entity]?.state)
      : undefined;
    const validSnapshot = activeSet && snapshot && !isSnapshotStale(snapshot, this._todayKeyIso());

    const forecasts = [
      [this._config.forecast_1, PRIMARY_FORECAST_COLOR, "Solcast"],
      [this._config.forecast_2, SECONDARY_FORECAST_COLOR, "Helios Forecast"],
    ] as const;
    for (const [config, fallbackColor, fallbackName] of forecasts) {
      if (!config?.entity) continue;
      const stateObj = this.hass.states[config.entity];
      const snapshotEntities =
        config === this._config.forecast_1
          ? activeSet?.forecast_1_entities
          : activeSet?.forecast_2_entities;
      const chunks = snapshotEntities?.map((entity) => this.hass?.states[entity]?.state ?? "") ?? [];
      const points = validSnapshot && chunks.length
        ? snapshotPoints(chunks, start, end, activeSet.value_scale ?? 100)
        : activeSet
          ? []
          : forecastPoints(
              stateObj?.attributes,
              config,
              stateObj?.attributes.unit_of_measurement,
              start,
              end,
            );
      result.push({
        name: config.name?.trim() || fallbackName,
        color: this._seriesColor(config.color, fallbackColor),
        points,
        kind: "forecast",
        energy:
          validSnapshot && chunks.length
            ? snapshotEnergy(chunks, activeSet.value_scale ?? 100)
            : activeSet
              ? null
              : powerCurveEnergy(points),
      });
    }
    return result;
  }

  private _energySummary(
    series: SeriesView[],
    activeSet: SnapshotSetConfig | undefined,
    locale: string,
    german: boolean,
  ): TemplateResult {
    const actualEntity = activeSet?.actual_energy_entity ?? this._config?.actual_energy_entity;
    const actual = readNumericEntity(this.hass, actualEntity);
    const items = [
      {
        name:
          activeSet?.actual_energy_label ??
          (german ? "Bisher erzeugt" : "Produced so far"),
        color: series.find((item) => item.kind === "actual")?.color ?? ACTUAL_COLOR,
        value: actual,
      },
      ...series
        .filter((item) => item.kind === "forecast")
        .map((item) => ({
          name: `${item.name} ${german ? "erwartet" : "expected"}`,
          color: item.color,
          value: item.energy,
        })),
    ];
    const number = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return html`<div class="energy-summary" aria-label=${german ? "Energie in Kilowattstunden" : "Energy in kilowatt-hours"}>
      ${items.map(
        (item) => html`<span style=${`--series-color:${item.color}`}>
          <i aria-hidden="true"></i>
          <span>${item.name}</span>
          <strong>${item.value === null ? "–" : `${number.format(item.value)} kWh`}</strong>
        </span>`,
      )}
    </div>`;
  }

  private _selectedIssue(): string | undefined {
    return this._config?.selection_entity
      ? this.hass?.states[this._config.selection_entity]?.state
      : undefined;
  }

  private _activeSnapshotSet(): SnapshotSetConfig | undefined {
    const selected = this._selectedIssue();
    return this._config?.snapshot_sets?.find((set) => set.value === selected);
  }

  private _todayKeyIso(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  private _tooltip(
    parameters: unknown,
    series: SeriesView[],
    locale: string,
    divider: string,
    secondaryText: string,
  ): string {
    const params = Array.isArray(parameters) ? parameters : [parameters];
    const first = params.find((item) => item && typeof item === "object") as
      | { axisValue?: unknown; value?: unknown }
      | undefined;
    const rawAxis = Number(first?.axisValue);
    const rawValue = Array.isArray(first?.value) ? Number(first.value[0]) : Number.NaN;
    const timestamp = Number.isFinite(rawAxis) ? rawAxis : rawValue;
    if (!Number.isFinite(timestamp)) return "";

    const number = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const time = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(timestamp);
    const rows = series
      .map((item) => {
        const value = nearestPointValue(item.points, timestamp, STEP_MS * 0.6);
        return `<div style="display:flex;align-items:center;gap:8px;padding:3px 10px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${this._escapeHtml(item.color)};flex:0 0 8px;"></span>
          <span style="flex:1;">${this._escapeHtml(item.name)}</span>
          <strong style="margin-left:12px;">${value === null ? "–" : `${number.format(value)} kW`}</strong>
        </div>`;
      })
      .join("");
    return `<div style="min-width:260px;padding:7px 0 8px;color:inherit;">
      <div style="font-weight:600;padding:0 10px 6px;border-bottom:1px solid ${this._escapeHtml(divider)};margin-bottom:3px;">${this._escapeHtml(time)}</div>
      ${rows}
      <div style="color:${this._escapeHtml(secondaryText)};font-size:11px;padding:5px 10px 0;">${locale.toLowerCase().startsWith("de") ? "Leistung in kW" : "Power in kW"}</div>
    </div>`;
  }

  private _seriesColor(value: string | undefined, fallback: string): string {
    const safe = safeColor(value, fallback);
    const variable = safe.match(/^var\((--[a-z0-9-_]+)\)$/i)?.[1];
    if (!variable) return safe;
    return getComputedStyle(this).getPropertyValue(variable).trim() || fallback;
  }

  private _withAlpha(color: string, alpha: number): string {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return color;
    context.fillStyle = "#000000";
    context.fillStyle = color;
    const normalized = context.fillStyle;
    if (/^#[0-9a-f]{6}$/i.test(normalized)) {
      const red = Number.parseInt(normalized.slice(1, 3), 16);
      const green = Number.parseInt(normalized.slice(3, 5), 16);
      const blue = Number.parseInt(normalized.slice(5, 7), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    return color;
  }

  private _opaqueColor(color: string, fallback: string): string {
    return color && color !== "transparent" ? color : fallback;
  }

  private _escapeHtml(value: string): string {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  private _dayKey(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  private _chartAriaLabel(german: boolean): string {
    if (!this._config) return "";
    const names = [
      this._config.actual.name || (german ? "Gemessene Leistung" : "Measured power"),
      this._config.forecast_1.name || (german ? "Prognose 1" : "Forecast 1"),
      this._config.forecast_2?.entity
        ? this._config.forecast_2.name || (german ? "Prognose 2" : "Forecast 2")
        : undefined,
    ].filter(Boolean);
    return german
      ? `Tagesverlauf von ${names.join(", ")} in Kilowatt`
      : `Daily profile of ${names.join(", ")} in kilowatts`;
  }

  private _infoIcon(): TemplateResult {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
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

    .title-block {
      display: grid;
      gap: 3px;
      min-width: 0;
    }

    .title-block > span {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.3;
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
      z-index: 5;
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
      width: min(340px, calc(100vw - 64px));
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

    .info-tooltip strong,
    .info-tooltip span {
      display: block;
    }

    .info-tooltip strong {
      margin-bottom: 5px;
      font-size: 13px;
      line-height: 1.35;
    }

    .info-control:hover .info-tooltip,
    .info-control:focus-within .info-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .chart {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      height: 360px;
      min-height: 280px;
    }

    .energy-summary {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 20px;
      min-height: 24px;
      padding: 4px 0 2px;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.35;
    }

    .energy-summary > span {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .energy-summary i {
      width: 8px;
      height: 8px;
      flex: 0 0 8px;
      border-radius: 50%;
      background: var(--series-color);
    }

    .energy-summary strong {
      color: var(--primary-text-color);
      font-variant-numeric: tabular-nums;
      font-weight: 600;
    }

    .chart-note {
      margin: -2px 0 0;
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.4;
    }

    @media (max-width: 600px) {
      .card-content {
        padding: 20px 16px 12px;
      }

      .chart {
        height: 320px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .info-tooltip {
        transition: none;
      }
    }
  `;
}
