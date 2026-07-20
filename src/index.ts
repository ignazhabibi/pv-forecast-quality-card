/*! PV Forecast Quality Card | MIT | Includes Lit (BSD-3-Clause) | See THIRD_PARTY_NOTICES.md */
import { PvForecastQualityCard } from "./card";

const CARD_TAG = "pv-forecast-quality-card";

if (!customElements.get(CARD_TAG)) {
  customElements.define(CARD_TAG, PvForecastQualityCard);
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

console.info(
  "%c PV FORECAST QUALITY CARD %c v0.1.1 ",
  "color: white; background: #111827; font-weight: 700; padding: 3px 6px; border-radius: 4px 0 0 4px;",
  "color: #111827; background: #e5e7eb; font-weight: 600; padding: 3px 6px; border-radius: 0 4px 4px 0;",
);
