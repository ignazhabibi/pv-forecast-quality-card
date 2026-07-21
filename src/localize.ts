import type { ForecastQualityMetric } from "./types";

export interface CardCopy {
  powerTitle: string;
  energyTitle: string;
  equal: string;
  unavailable: string;
  unavailableHint: string;
  bestMatch: (name: string) => string;
  lessDistance: (difference: string) => string;
  singlePowerHint: string;
  tooHigh: string;
  tooLow: string;
  exact: string;
  idealZero: string;
  greaterDeviation: string;
  low: string;
  high: string;
  infoLabel: string;
  staleSnapshot: string;
  powerTooltipTitle: string;
  energyTooltipTitle: string;
  powerExplanation: (example: string) => string;
  energyExplanation: string;
  completedIntervals: (count: number) => string;
  firstTrend: (count: number, minimum: number) => string;
  waitingIntervals: string;
  dayAhead: string;
  morning: string;
  current: string;
  earlyVerdict: string;
  liveUnavailable: string;
  liveVerdict: string;
  liveHint: string;
  forecastEnergy: string;
  actualEnergy: string;
  testRun: string;
  providerOne: string;
  providerTwo: string;
}

const de: CardCopy = {
  powerTitle: "Prognosegenauigkeit · Leistungsverlauf",
  energyTitle: "Prognosegenauigkeit · Tagesenergie",
  equal: "Beide gleich genau",
  unavailable: "Noch keine Messwerte",
  unavailableHint:
    "Die Auswertung startet nach dem ersten abgeschlossenen 15-Minuten-Zeitraum.",
  bestMatch: (name) => `${name} liegt näher`,
  lessDistance: (difference) => `${difference} weniger Abweichung`,
  singlePowerHint: "durchschnittliche Abweichung",
  tooHigh: "mehr erwartet als erzeugt",
  tooLow: "weniger erwartet als erzeugt",
  exact: "genau getroffen",
  idealZero: "0 · genau",
  greaterDeviation: "größere Abweichung",
  low: "zu wenig erwartet",
  high: "zu viel erwartet",
  infoLabel: "Kennzahl verständlich erklären",
  staleSnapshot: "Die gespeicherte Prognose stammt nicht von heute.",
  powerTooltipTitle: "Abweichung im Leistungsverlauf",
  energyTooltipTitle: "Abweichung der erzeugten Energie",
  powerExplanation: (example) =>
    `${example} kW bedeutet: Die Prognose lag in den bisherigen 15-Minuten-Zeiträumen durchschnittlich ${example} kW neben der gemessenen Leistung. Das ist keine Energiemenge; 0 kW wäre exakt. Fachbegriff: mittlerer absoluter Fehler (MAE).`,
  energyExplanation:
    "Vergleicht die bis jetzt erwartete mit der tatsächlich erzeugten Energie. +20 % heißt: 20 % mehr erwartet als erzeugt; −20 % heißt: 20 % weniger. 0 % wäre exakt. Die absoluten Werte stehen in kWh bei jedem Anbieter.",
  completedIntervals: (count) => `${count} Messpunkte ausgewertet`,
  firstTrend: (count, minimum) => `${count} von ${minimum} Messpunkten`,
  waitingIntervals: "Noch kein Messpunkt",
  dayAhead: "Prognose vom Vorabend",
  morning: "Prognose von 07:00",
  current: "Live-Prognose",
  earlyVerdict: "Noch nicht aussagekräftig",
  liveUnavailable:
    "Live-Prognosen ändern sich laufend und werden deshalb nicht wie gespeicherte Prognosen bewertet.",
  liveVerdict: "Live-Prognosen werden nicht bewertet",
  liveHint: "Der Stand ändert sich laufend",
  forecastEnergy: "Erwartet",
  actualEnergy: "Erzeugt",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2",
};

const en: CardCopy = {
  powerTitle: "Forecast accuracy · power profile",
  energyTitle: "Forecast accuracy · daily energy",
  equal: "Both are equally accurate",
  unavailable: "No measurements yet",
  unavailableHint: "Evaluation starts after the first completed 15-minute period.",
  bestMatch: (name) => `${name} is closer`,
  lessDistance: (difference) => `${difference} less deviation`,
  singlePowerHint: "average deviation",
  tooHigh: "more expected than produced",
  tooLow: "less expected than produced",
  exact: "matched exactly",
  idealZero: "0 · exact",
  greaterDeviation: "greater deviation",
  low: "too little expected",
  high: "too much expected",
  infoLabel: "Explain this metric in plain language",
  staleSnapshot: "The saved forecast is not from today.",
  powerTooltipTitle: "Power profile deviation",
  energyTooltipTitle: "Produced energy deviation",
  powerExplanation: (example) =>
    `${example} kW means that, across the completed 15-minute periods, the forecast was on average ${example} kW away from measured power. This is not an amount of energy; 0 kW would be exact. Technical term: mean absolute error (MAE).`,
  energyExplanation:
    "Compares energy expected so far with energy actually produced. +20% means 20% more was expected than produced; −20% means 20% less. 0% would be exact. Absolute values are shown in kWh for each provider.",
  completedIntervals: (count) => `${count} measurements evaluated`,
  firstTrend: (count, minimum) => `${count} of ${minimum} measurements`,
  waitingIntervals: "No measurement yet",
  dayAhead: "Previous-evening forecast",
  morning: "07:00 forecast",
  current: "Live forecast",
  earlyVerdict: "Not meaningful yet",
  liveUnavailable:
    "Live forecasts keep changing, so they are not evaluated like saved forecasts.",
  liveVerdict: "Live forecasts are not evaluated",
  liveHint: "This forecast keeps changing",
  forecastEnergy: "Expected",
  actualEnergy: "Produced",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2",
};

export function getCopy(language: string | undefined, _metric: ForecastQualityMetric): CardCopy {
  return language?.toLowerCase().startsWith("de") ? de : en;
}
