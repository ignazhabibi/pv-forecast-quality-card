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
  low: string;
  high: string;
  infoLabel: string;
  staleSnapshot: string;
  powerTooltipTitle: string;
  energyTooltipTitle: string;
  powerExplanation: (example: string, energy: string) => string;
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
  powerTitle: "PV-Leistungsfehler",
  energyTitle: "PV-Ertragsabweichung",
  equal: "Gleichauf",
  unavailable: "Noch keine Auswertung",
  unavailableHint: "Entitäten prüfen oder auf das erste Intervall warten.",
  bestMatch: (name) => `${name} liegt näher am Ist`,
  lessDistance: (difference) => `${difference} geringerer Fehler`,
  singlePowerHint: "mittlerer Fehler zur Ist-Leistung",
  tooHigh: "über Ist",
  tooLow: "unter Ist",
  exact: "exakt am Ist",
  idealZero: "0 · ideal",
  low: "zu wenig",
  high: "zu viel",
  infoLabel: "Kennzahl erklären",
  staleSnapshot: "Der Prognose-Snapshot ist nicht von heute.",
  powerTooltipTitle: "Mittlerer absoluter Fehler (MAE)",
  energyTooltipTitle: "Ertragsabweichung",
  powerExplanation: (example, energy) =>
    `Mittelt den Abstand zwischen Prognose und Ist-Leistung je abgeschlossenem 15-Minuten-Intervall. ${example} kW entsprechen dabei ${energy} kWh. Kleiner ist besser.`,
  energyExplanation:
    "Vergleicht prognostizierte und tatsächliche Energie der abgeschlossenen Intervalle. Plus bedeutet zu viel, Minus zu wenig; 0 % ist ideal.",
  completedIntervals: (count) => `${count} Intervalle`,
  firstTrend: (count, minimum) => `${count}/${minimum} Intervalle · erste Tendenz`,
  waitingIntervals: "Kein Intervall",
  dayAhead: "Day-ahead",
  morning: "Stand 07:00",
  current: "Aktuell",
  earlyVerdict: "Noch zu früh für ein Urteil",
  liveUnavailable: "Der aktuelle Stand verändert sich laufend und wird erst als fester Prognosestand fair bewertet.",
  liveVerdict: "Kein Qualitätsurteil",
  liveHint: "laufend aktualisiert",
  forecastEnergy: "Prognose",
  actualEnergy: "Ist",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2",
};

const en: CardCopy = {
  powerTitle: "PV power error",
  energyTitle: "PV yield deviation",
  equal: "Tied",
  unavailable: "No evaluation yet",
  unavailableHint: "Check the entities or wait for the first interval.",
  bestMatch: (name) => `${name} is closer to actual`,
  lessDistance: (difference) => `${difference} lower error`,
  singlePowerHint: "average error against actual power",
  tooHigh: "above actual",
  tooLow: "below actual",
  exact: "exactly on actual",
  idealZero: "0 · ideal",
  low: "too low",
  high: "too high",
  infoLabel: "Explain this metric",
  staleSnapshot: "The forecast snapshot is not from today.",
  powerTooltipTitle: "Mean absolute error (MAE)",
  energyTooltipTitle: "Yield deviation",
  powerExplanation: (example, energy) =>
    `Averages the distance between forecast and actual power for each completed 15-minute interval. ${example} kW corresponds to ${energy} kWh. Lower is better.`,
  energyExplanation:
    "Compares forecast and actual energy for completed intervals. Positive means too high, negative too low; 0% is ideal.",
  completedIntervals: (count) => `${count} intervals`,
  firstTrend: (count, minimum) => `${count}/${minimum} intervals · early trend`,
  waitingIntervals: "No interval yet",
  dayAhead: "Day-ahead",
  morning: "07:00 issue",
  current: "Current",
  earlyVerdict: "Too early for a verdict",
  liveUnavailable: "The current issue keeps changing and can only be evaluated fairly once it is stored as a fixed forecast issue.",
  liveVerdict: "No quality verdict",
  liveHint: "continuously updated",
  forecastEnergy: "Forecast",
  actualEnergy: "Actual",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2",
};

export function getCopy(language: string | undefined, _metric: ForecastQualityMetric): CardCopy {
  return language?.toLowerCase().startsWith("de") ? de : en;
}
