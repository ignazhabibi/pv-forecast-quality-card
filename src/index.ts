/*! PV Forecast Quality Card | MIT | Includes ECharts (Apache-2.0) and Lit (BSD-3-Clause) | See THIRD_PARTY_NOTICES.md */
import { PvForecastQualityCard } from "./card";
import { PvForecastDayCard } from "./day-card";

const CARD_TAG = "pv-forecast-quality-card";
const DAY_CARD_TAG = "pv-forecast-day-card";

if (!customElements.get(CARD_TAG)) {
  customElements.define(CARD_TAG, PvForecastQualityCard);
}

if (!customElements.get(DAY_CARD_TAG)) {
  customElements.define(DAY_CARD_TAG, PvForecastDayCard);
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TAG,
  name: "PV Forecast Quality Card",
  description:
    "Understand and compare PV forecast accuracy against actual production in a Home Assistant Sections view.",
  preview: true,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card",
});

window.customCards.push({
  type: DAY_CARD_TAG,
  name: "PV Forecast Day Card",
  description:
    "Compare today's actual PV power with one or two forecast profiles using ECharts.",
  preview: true,
  documentationURL: "https://github.com/ignazhabibi/pv-forecast-quality-card",
});

console.info(
  "%c PV FORECAST QUALITY CARD %c v0.2.0 ",
  "color: white; background: #111827; font-weight: 700; padding: 3px 6px; border-radius: 4px 0 0 4px;",
  "color: #111827; background: #e5e7eb; font-weight: 600; padding: 3px 6px; border-radius: 0 4px 4px 0;",
);
