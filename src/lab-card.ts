import { LitElement, css, html, type TemplateResult } from "lit";

import type { HomeAssistant } from "./types";

interface LabOptionConfig {
  value: string;
  label?: string;
  caption?: string;
}

export interface PvForecastLabCardConfig {
  type: string;
  title?: string;
  entity: string;
  options?: LabOptionConfig[];
}

const DEFAULT_OPTIONS: LabOptionConfig[] = [
  { value: "Day-ahead", label: "Vorabend", caption: "23:55" },
  { value: "07:00", label: "Heute 07:00", caption: "gespeichert" },
  { value: "Aktuell", label: "Live", caption: "ändert sich" },
];

export class PvForecastLabCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  hass?: HomeAssistant;
  private _config?: PvForecastLabCardConfig;

  static getConfigForm(): Record<string, unknown> {
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        { name: "entity", required: true, selector: { entity: { domain: ["input_select", "select"] } } },
      ],
      computeLabel: (schema: { name?: string }) =>
        schema.name === "entity"
          ? "Forecast time selector / Prognosezeitpunkt-Auswahl"
          : "Title / Titel",
    };
  }

  static getStubConfig(): Omit<PvForecastLabCardConfig, "type"> {
    return {
      title: "PV-Prognose-Labor",
      entity: "input_select.pv_forecast_issue",
      options: DEFAULT_OPTIONS,
    };
  }

  setConfig(config: PvForecastLabCardConfig): void {
    if (!config?.entity?.trim()) throw new Error("entity is required");
    this._config = {
      ...config,
      options: config.options?.length
        ? config.options.map((option) => ({ ...option }))
        : DEFAULT_OPTIONS.map((option) => ({ ...option })),
    };
  }

  getCardSize(): number {
    return 2;
  }

  getGridOptions(): Record<string, number> {
    return { columns: 12, min_columns: 6 };
  }

  protected render(): TemplateResult {
    if (!this._config) return html``;
    const locale = this.hass?.locale?.language ?? navigator.language;
    const german = locale.toLowerCase().startsWith("de");
    const current = this.hass?.states[this._config.entity]?.state;
    const options = this._config.options ?? DEFAULT_OPTIONS;
    const title = this._config.title?.trim() || (german ? "PV-Prognose-Labor" : "PV forecast lab");

    return html`
      <ha-card>
        <div class="card-content">
          <div class="heading">
            <div>
              <h1>${title}</h1>
              <p>${german ? "Prognosezeitpunkt wählen" : "Choose forecast time"}</p>
            </div>
            <div class="info-control">
              <button
                class="info-button"
                type="button"
                aria-label=${german ? "Prognosestände erklären" : "Explain forecast issues"}
                aria-describedby="lab-tooltip"
              >
                ${this._infoIcon()}
              </button>
              <span id="lab-tooltip" class="info-tooltip" role="tooltip">
                ${german
                  ? "Vorabend und heute 07:00 sind gespeicherte Prognosen. So bleibt ihr ursprünglicher Stand erhalten und lässt sich fair mit der tatsächlichen Erzeugung vergleichen. Live zeigt die neuesten, noch veränderlichen Prognosen und erhält deshalb kein Qualitätsurteil."
                  : "Previous evening and today at 07:00 are saved forecasts. Their original state is preserved for a fair comparison with actual production. Live shows the newest, still-changing forecasts and therefore receives no quality verdict."}
              </span>
            </div>
          </div>

          <div class="timeline" role="group" aria-label=${german ? "Prognosezeitpunkt" : "Forecast time"}>
            ${options.map((option) => {
              const selected = option.value === current;
              return html`<button
                type="button"
                class=${selected ? "selected" : ""}
                aria-pressed=${selected}
                @click=${() => this._select(option.value)}
              >
                <span class="node" aria-hidden="true"></span>
                <strong>${option.label?.trim() || option.value}</strong>
                ${option.caption ? html`<small>${option.caption}</small>` : html``}
              </button>`;
            })}
          </div>
        </div>
      </ha-card>
    `;
  }

  private async _select(value: string): Promise<void> {
    if (!this._config || !this.hass?.callService) return;
    const domain = this._config.entity.split(".")[0] || "input_select";
    const service = domain === "select" ? "select_option" : "select_option";
    await this.hass.callService(domain, service, {
      entity_id: this._config.entity,
      option: value,
    });
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
      display: grid;
      grid-template-columns: minmax(190px, 0.72fr) minmax(360px, 1.8fr);
      gap: 28px;
      align-items: center;
      box-sizing: border-box;
      padding: 20px 24px;
    }

    .heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
    }

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
    }

    p {
      margin: 4px 0 0;
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.35;
    }

    .timeline {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
      min-width: 0;
    }

    .timeline::before {
      position: absolute;
      top: 11px;
      right: 16.666%;
      left: 16.666%;
      height: 2px;
      background: var(--divider-color);
      content: "";
    }

    .timeline button {
      position: relative;
      z-index: 1;
      display: grid;
      justify-items: center;
      gap: 3px;
      min-width: 0;
      padding: 0 6px 4px;
      color: var(--secondary-text-color);
      border: 0;
      background: transparent;
      cursor: pointer;
      font: inherit;
    }

    .timeline button:hover,
    .timeline button:focus-visible,
    .timeline button.selected {
      color: var(--primary-text-color);
    }

    .timeline button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 4px;
      border-radius: 8px;
    }

    .node {
      width: 12px;
      height: 12px;
      margin-bottom: 3px;
      border: 3px solid var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: 50%;
      background: var(--divider-color);
      box-shadow: 0 0 0 1px var(--divider-color);
    }

    .selected .node {
      background: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color);
    }

    strong,
    small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    strong {
      max-width: 100%;
      font-size: 13px;
      line-height: 1.25;
    }

    small {
      color: var(--secondary-text-color);
      font-size: 11px;
      line-height: 1.2;
    }

    .info-control {
      position: relative;
      z-index: 6;
      flex: 0 0 auto;
    }

    .info-button {
      display: grid;
      width: 32px;
      height: 32px;
      place-items: center;
      margin: -5px -5px 0 0;
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

    .info-button svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.8;
    }

    .info-tooltip {
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      width: min(330px, calc(100vw - 64px));
      box-sizing: border-box;
      padding: 12px 14px;
      visibility: hidden;
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0, 0, 0, 0.18));
      opacity: 0;
      transform: translateY(-3px);
      transition: opacity 120ms ease, transform 120ms ease, visibility 120ms;
      pointer-events: none;
      font-size: 13px;
      line-height: 1.45;
    }

    .info-control:hover .info-tooltip,
    .info-control:focus-within .info-tooltip {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 720px) {
      .card-content {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 20px 16px;
      }

      .info-tooltip {
        right: 0;
        left: auto;
      }
    }
  `;
}
