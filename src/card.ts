import { LitElement, css, html, nothing, type TemplateResult } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { getCopy } from "./localize";
import {
  compareReadings,
  energyScale,
  isSnapshotStale,
  normalizedPosition,
  parseSnapshot,
  powerScale,
  readNumericEntity,
  safeColor,
} from "./metrics";
import type {
  ForecastQualityCardConfig,
  ForecastQualityMetric,
  HomeAssistant,
  ProviderConfig,
  ProviderReading,
} from "./types";

const DEFAULT_PRIMARY_COLOR = "#22C55E";
const DEFAULT_COMPARISON_COLOR = "#7C4DFF";

export class PvForecastQualityCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _explanationOpen: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: ForecastQualityCardConfig;
  private _explanationOpen = false;

  static getConfigForm(): Record<string, unknown> {
    return {
      schema: [
        {
          name: "metric",
          required: true,
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "power", label: "Power accuracy / Leistungsgenauigkeit" },
                { value: "energy", label: "Energy deviation / Ertragsabweichung" },
              ],
            },
          },
        },
        { name: "title", selector: { text: {} } },
        {
          type: "expandable",
          name: "provider_1",
          title: "Provider 1",
          schema: [
            { name: "name", selector: { text: {} } },
            { name: "entity", required: true, selector: { entity: { domain: "sensor" } } },
            { name: "color", selector: { text: {} } },
            {
              name: "marker",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "circle", label: "Circle / Kreis" },
                    { value: "diamond", label: "Diamond / Raute" },
                  ],
                },
              },
            },
          ],
        },
        {
          type: "expandable",
          name: "provider_2",
          title: "Provider 2 (optional)",
          schema: [
            { name: "name", selector: { text: {} } },
            { name: "entity", selector: { entity: { domain: "sensor" } } },
            { name: "color", selector: { text: {} } },
            {
              name: "marker",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "circle", label: "Circle / Kreis" },
                    { value: "diamond", label: "Diamond / Raute" },
                  ],
                },
              },
            },
          ],
        },
        {
          type: "expandable",
          name: "evaluation",
          title: "Evaluation context / Auswertungskontext",
          flatten: true,
          schema: [
            {
              name: "interval_count_entity",
              selector: { entity: { domain: ["counter", "sensor", "input_number"] } },
            },
            {
              name: "snapshot_entity",
              selector: { entity: { domain: ["input_text", "sensor"] } },
            },
            {
              name: "minimum_intervals",
              selector: { number: { min: 1, max: 96, mode: "box", step: 1 } },
            },
          ],
        },
      ],
      computeLabel: (schema: { name?: string }) => {
        const labels: Record<string, string> = {
          metric: "Metric / Kennzahl",
          title: "Title / Titel",
          name: "Name",
          entity: "Metric entity / Kennzahl-Entität",
          color: "Color / Farbe",
          marker: "Marker",
          interval_count_entity: "Interval counter / Intervallzähler",
          snapshot_entity: "Snapshot status entity / Snapshot-Status",
          minimum_intervals: "Minimum intervals / Mindestintervalle",
        };
        return labels[schema.name ?? ""] ?? schema.name ?? "";
      },
    };
  }

  static getStubConfig(): Omit<ForecastQualityCardConfig, "type"> {
    return {
      metric: "power",
      provider_1: {
        name: "Solcast",
        entity: "sensor.pv_forecast_quality",
        color: DEFAULT_PRIMARY_COLOR,
        marker: "circle",
      },
      provider_2: {
        name: "Helios Forecast",
        color: DEFAULT_COMPARISON_COLOR,
        marker: "diamond",
      },
      minimum_intervals: 8,
    };
  }

  setConfig(config: ForecastQualityCardConfig): void {
    if (!config || !["power", "energy"].includes(config.metric)) {
      throw new Error("metric must be either 'power' or 'energy'");
    }
    if (!config.provider_1?.entity?.trim()) {
      throw new Error("provider_1.entity is required");
    }

    this._config = {
      ...config,
      provider_1: { ...config.provider_1 },
      provider_2: config.provider_2 ? { ...config.provider_2 } : undefined,
    };
  }

  getCardSize(): number {
    return 5;
  }

  getGridOptions(): Record<string, number> {
    return {
      columns: 6,
      min_columns: 6,
    };
  }

  protected render(): TemplateResult {
    if (!this._config) return html``;

    const metric = this._config.metric;
    const language = this.hass?.locale?.language ?? navigator.language;
    const copy = getCopy(language, metric);
    const locale = language || "en";
    const readings = this._readings(metric, copy.providerOne, copy.providerTwo);
    const values = readings.map((reading) => reading.value);
    const scale = metric === "power" ? powerScale(values) : energyScale(values);
    const title =
      this._config.title ?? (metric === "power" ? copy.powerTitle : copy.energyTitle);
    const intervalCount = readNumericEntity(this.hass, this._config.interval_count_entity);
    const minimumIntervals = Math.max(1, Math.round(this._config.minimum_intervals ?? 8));
    const snapshotValue = this._config.snapshot_entity
      ? this.hass?.states[this._config.snapshot_entity]?.state
      : undefined;
    const snapshot = parseSnapshot(snapshotValue);
    const snapshotStale = isSnapshotStale(snapshot, this._todayKey());
    const noCompletedIntervals = intervalCount !== null && intervalCount <= 0;
    const preliminary =
      intervalCount !== null && intervalCount > 0 && intervalCount < minimumIntervals;
    const comparison =
      snapshotStale || noCompletedIntervals
        ? ({ kind: "unavailable" } as const)
        : compareReadings(metric, readings);
    const unavailableReason = snapshotStale
      ? copy.staleSnapshot
      : noCompletedIntervals
        ? copy.waitingIntervals
        : undefined;

    return html`
      <ha-card>
        <div class="card-content">
          <header class="card-header">
            <div class="title-block">
              <span class="context">${copy.context}</span>
              <h2>${title}</h2>
              <p>${copy.subtitle}</p>
            </div>
            <button
              class="info-button"
              type="button"
              aria-label=${copy.infoLabel}
              aria-expanded=${String(this._explanationOpen)}
              aria-controls="metric-explanation"
              @click=${() => {
                this._explanationOpen = !this._explanationOpen;
              }}
            >
              ${this._infoIcon()}
            </button>
          </header>

          ${this._explanationOpen
            ? html`<aside id="metric-explanation" class="explanation">
                ${this._explanation(metric, readings[0]?.value ?? null, locale, copy)}
              </aside>`
            : nothing}

          ${this._verdict(metric, comparison, locale, copy, preliminary, unavailableReason)}
          ${this._chart(metric, readings, scale, locale, copy)}

          <footer class="card-footer">
            <span>${this._intervalStatus(intervalCount, minimumIntervals, copy)}</span>
            ${snapshotStale
              ? html`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${copy.staleSnapshot}</span>`
              : snapshot.mode === "bootstrap" || snapshot.mode === "day_ahead"
              ? html`<span class="footer-separator" aria-hidden="true">·</span>
                  <span>${snapshot.mode === "bootstrap" ? copy.testRun : copy.dayAhead}</span>`
              : nothing}
          </footer>
        </div>
      </ha-card>
    `;
  }

  private _readings(
    metric: ForecastQualityMetric,
    primaryFallback: string,
    comparisonFallback: string,
  ): ProviderReading[] {
    if (!this._config) return [];
    const result = [
      this._reading(
        metric,
        this._config.provider_1,
        primaryFallback,
        DEFAULT_PRIMARY_COLOR,
        "circle",
      ),
    ];
    if (this._config.provider_2?.entity) {
      result.push(
        this._reading(
          metric,
          this._config.provider_2,
          comparisonFallback,
          DEFAULT_COMPARISON_COLOR,
          "diamond",
        ),
      );
    }
    return result;
  }

  private _reading(
    metric: ForecastQualityMetric,
    config: ProviderConfig,
    fallbackName: string,
    fallbackColor: string,
    fallbackMarker: "circle" | "diamond",
  ): ProviderReading {
    const entity = config.entity;
    const stateObj = entity ? this.hass?.states[entity] : undefined;
    const formattedName =
      stateObj && this.hass?.formatEntityName
        ? this.hass.formatEntityName(
            stateObj,
            [{ type: "device" }, { type: "entity" }],
            { separator: " · " },
          )
        : undefined;
    const attributeName = stateObj?.attributes.friendly_name;

    const numericValue = readNumericEntity(this.hass, entity);

    return {
      name:
        config.name?.trim() ||
        formattedName ||
        (typeof attributeName === "string" ? attributeName : fallbackName),
      entity,
      color: safeColor(config.color, fallbackColor),
      marker: config.marker ?? fallbackMarker,
      value: metric === "power" && numericValue !== null && numericValue < 0 ? null : numericValue,
    };
  }

  private _verdict(
    metric: ForecastQualityMetric,
    comparison: ReturnType<typeof compareReadings>,
    locale: string,
    copy: ReturnType<typeof getCopy>,
    preliminary: boolean,
    unavailableReason?: string,
  ): TemplateResult {
    if (comparison.kind === "unavailable") {
      return html`<section class="verdict unavailable">
        <span class="verdict-label">${copy.unavailable}</span>
        <strong>${unavailableReason ?? copy.unavailableHint}</strong>
      </section>`;
    }

    if (comparison.kind === "tie") {
      return html`<section class="verdict">
        <span class="verdict-label">
          ${preliminary ? `${copy.preliminary} · ` : ""}${metric === "power"
            ? copy.closerPower
            : copy.closerEnergy}
        </span>
        <strong class="verdict-value">${copy.equal}</strong>
      </section>`;
    }

    const winner = comparison.winner;
    if (!winner || winner.value === null) return html``;

    if (comparison.kind === "single") {
      const value = this._formatValue(metric, winner.value, locale);
      const support =
        metric === "power" ? copy.singlePowerHint : this._energyDirection(winner.value, copy);
      return html`<section class="verdict">
        <span class="verdict-label">
          ${preliminary ? `${copy.preliminary} · ` : ""}
          ${winner.name}
          ${metric === "power" ? copy.againstActualPower : copy.againstActualEnergy}
        </span>
        <strong class="verdict-value numeric">${value}</strong>
        <span class="verdict-support">${support}</span>
      </section>`;
    }

    const support =
      metric === "power" && comparison.difference !== undefined && comparison.other
        ? copy.lessDistance(
            this._formatValue(metric, comparison.difference, locale),
            comparison.other.name,
          )
        : `${this._formatValue(metric, winner.value, locale)} · ${this._energyDirection(
            winner.value,
            copy,
          )}`;

    return html`<section class="verdict">
      <span class="verdict-label">
        ${preliminary ? `${copy.preliminary} · ` : ""}${metric === "power"
          ? copy.closerPower
          : copy.closerEnergy}
      </span>
      <div class="winner-line">
        ${preliminary ? nothing : this._checkIcon()}<strong class="verdict-value">${winner.name}</strong>
      </div>
      <span class="verdict-support">${support}</span>
    </section>`;
  }

  private _chart(
    metric: ForecastQualityMetric,
    readings: ProviderReading[],
    scale: number,
    locale: string,
    copy: ReturnType<typeof getCopy>,
  ): TemplateResult {
    const aria = readings
      .map(
        (reading) =>
          `${reading.name}: ${
            reading.value === null ? copy.unavailable : this._formatValue(metric, reading.value, locale)
          }`,
      )
      .join(", ");

    return html`<div class=${metric === "power" ? "chart power-chart" : "chart energy-chart"} role="img" aria-label=${aria}>
      ${readings.map((reading) => this._chartRow(metric, reading, scale, locale))}
      <div class="axis" aria-hidden="true">
        ${metric === "power"
          ? html`<span>${copy.idealZero}</span><span>${this._formatAxis(scale, locale)} kW</span>`
          : html`<span>${copy.low}</span><span>${copy.idealZero}</span><span>${copy.high}</span>`}
      </div>
    </div>`;
  }

  private _chartRow(
    metric: ForecastQualityMetric,
    reading: ProviderReading,
    scale: number,
    locale: string,
  ): TemplateResult {
    const position = normalizedPosition(metric, reading.value, scale);
    const segmentLeft = metric === "energy" ? Math.min(50, position) : 0;
    const segmentWidth = metric === "energy" ? Math.abs(position - 50) : position;
    const styles = {
      "--series-color": reading.color,
      "--marker-position": `${position}%`,
      "--segment-left": `${segmentLeft}%`,
      "--segment-width": `${segmentWidth}%`,
    };

    return html`<div class="chart-row" style=${styleMap(styles)}>
      <div class="row-label">
        <span class="provider-name">
          <i class=${`series-marker ${reading.marker}`} aria-hidden="true"></i>
          <span>${reading.name}</span>
        </span>
        <strong>${
          reading.value === null ? "–" : this._formatValue(metric, reading.value, locale)
        }</strong>
      </div>
      <div class="track" aria-hidden="true">
        ${metric === "energy" ? html`<i class="zero-line"></i>` : nothing}
        <i class="segment"></i>
        ${reading.value !== null
          ? html`<i class=${`value-marker ${reading.marker}`}></i>`
          : nothing}
      </div>
    </div>`;
  }

  private _formatValue(
    metric: ForecastQualityMetric,
    value: number,
    locale: string,
  ): string {
    const format = new Intl.NumberFormat(locale, {
      minimumFractionDigits: metric === "power" ? 2 : 1,
      maximumFractionDigits: metric === "power" ? 2 : 1,
      signDisplay: metric === "energy" ? "always" : "auto",
    });
    return `${format.format(value)} ${metric === "power" ? "kW" : "%"}`;
  }

  private _formatAxis(value: number, locale: string): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: value % 1 === 0 ? 0 : 1,
      maximumFractionDigits: 1,
    }).format(value);
  }

  private _energyDirection(value: number, copy: ReturnType<typeof getCopy>): string {
    if (value > 0) return copy.tooHigh;
    if (value < 0) return copy.tooLow;
    return copy.exact;
  }

  private _intervalStatus(
    count: number | null,
    minimum: number,
    copy: ReturnType<typeof getCopy>,
  ): string {
    if (count === null) return copy.subtitle;
    const rounded = Math.max(0, Math.round(count));
    if (rounded === 0) return copy.waitingIntervals;
    if (rounded < minimum) return copy.firstTrend(rounded, minimum);
    return copy.completedIntervals(rounded);
  }

  private _todayKey(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  private _explanation(
    metric: ForecastQualityMetric,
    primaryValue: number | null,
    locale: string,
    copy: ReturnType<typeof getCopy>,
  ): string {
    if (metric === "energy") return copy.energyExplanation;
    const exampleValue = primaryValue ?? 1.4;
    const number = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return copy.powerExplanation(number.format(exampleValue), number.format(exampleValue * 0.25));
  }

  private _infoIcon(): TemplateResult {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 10.8v5.7"></path>
      <path d="M12 7.4h.01"></path>
    </svg>`;
  }

  private _checkIcon(): TemplateResult {
    return html`<svg class="check-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="m8.2 12.2 2.5 2.5 5.4-5.5"></path>
    </svg>`;
  }

  static styles = css`
    :host {
      display: block;
      min-width: 0;
      font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Inter, sans-serif));
      color: var(--primary-text-color);
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
      gap: 20px;
      padding: 24px;
    }

    .card-header,
    .winner-line,
    .row-label,
    .provider-name,
    .card-footer {
      display: flex;
      align-items: center;
    }

    .card-header {
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .title-block {
      min-width: 0;
    }

    .context,
    .verdict-label,
    .axis,
    .card-footer {
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 1.4;
    }

    .context {
      display: block;
      margin-bottom: 3px;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      overflow-wrap: anywhere;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.25;
    }

    .title-block p {
      margin-top: 3px;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .info-button {
      display: grid;
      width: 36px;
      height: 36px;
      flex: 0 0 36px;
      place-items: center;
      margin: -6px -6px 0 0;
      padding: 0;
      color: var(--secondary-text-color);
      border: 0;
      border-radius: 50%;
      background: transparent;
      cursor: pointer;
    }

    .info-button:hover,
    .info-button:focus-visible,
    .info-button[aria-expanded="true"] {
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }

    .info-button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .info-button svg,
    .check-icon {
      width: 21px;
      height: 21px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .explanation {
      padding: 14px 16px;
      color: var(--primary-text-color);
      border-left: 3px solid var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.09));
      font-size: 13px;
      line-height: 1.55;
    }

    .verdict {
      display: grid;
      gap: 4px;
      min-height: 64px;
      align-content: start;
    }

    .verdict.unavailable strong {
      max-width: 42ch;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.45;
    }

    .winner-line {
      gap: 8px;
      min-width: 0;
    }

    .check-icon {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
    }

    .verdict-value {
      min-width: 0;
      overflow-wrap: anywhere;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.15;
    }

    .verdict-value.numeric,
    .row-label strong {
      font-variant-numeric: tabular-nums;
    }

    .verdict-support {
      color: var(--primary-text-color);
      font-size: 13px;
      line-height: 1.4;
    }

    .chart {
      display: grid;
      gap: 16px;
    }

    .chart-row {
      display: grid;
      gap: 7px;
      min-width: 0;
    }

    .row-label {
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
      font-size: 13px;
      line-height: 1.3;
    }

    .row-label strong {
      flex: 0 0 auto;
      font-weight: 600;
    }

    .provider-name {
      gap: 8px;
      min-width: 0;
    }

    .provider-name span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .series-marker {
      display: block;
      width: 9px;
      height: 9px;
      flex: 0 0 9px;
      background: var(--series-color);
    }

    .series-marker.circle {
      border-radius: 50%;
    }

    .series-marker.diamond {
      border-radius: 2px;
      transform: rotate(45deg);
    }

    .track {
      position: relative;
      height: 8px;
      background: color-mix(in srgb, var(--divider-color, #9aa0a6) 58%, transparent);
    }

    .power-chart .track {
      border-radius: 999px;
    }

    .segment {
      position: absolute;
      top: 0;
      bottom: 0;
      left: var(--segment-left);
      width: var(--segment-width);
      border-radius: inherit;
      background: color-mix(in srgb, var(--series-color) 58%, transparent);
    }

    .zero-line {
      position: absolute;
      z-index: 1;
      top: -5px;
      bottom: -5px;
      left: 50%;
      width: 2px;
      background: var(--primary-text-color);
      transform: translateX(-50%);
    }

    .value-marker {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: var(--marker-position);
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
      background: var(--series-color);
      transform: translate(-50%, -50%);
    }

    .value-marker.circle {
      border-radius: 50%;
    }

    .value-marker.diamond {
      border-radius: 3px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .axis {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      margin-top: -8px;
    }

    .energy-chart .axis span:nth-child(2) {
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .card-footer {
      flex-wrap: wrap;
      gap: 5px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color);
    }

    .footer-separator {
      opacity: 0.65;
    }

    @media (max-width: 360px) {
      .card-content {
        gap: 16px;
        padding: 18px;
      }

      h2 {
        font-size: 16px;
      }

      .verdict-value {
        font-size: 21px;
      }

      .row-label {
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
      }

      .provider-name span {
        white-space: normal;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
      }
    }
  `;
}
