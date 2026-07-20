import type { ForecastQualityMetric } from "./types";

export interface CardCopy {
  context: string;
  powerTitle: string;
  energyTitle: string;
  subtitle: string;
  closerPower: string;
  closerEnergy: string;
  againstActualPower: string;
  againstActualEnergy: string;
  equal: string;
  unavailable: string;
  unavailableHint: string;
  lessDistance: (difference: string, name: string) => string;
  singlePowerHint: string;
  tooHigh: string;
  tooLow: string;
  exact: string;
  idealZero: string;
  low: string;
  high: string;
  infoLabel: string;
  preliminary: string;
  staleSnapshot: string;
  powerExplanation: (example: string, energy: string) => string;
  energyExplanation: string;
  completedIntervals: (count: number) => string;
  firstTrend: (count: number, minimum: number) => string;
  waitingIntervals: string;
  dayAhead: string;
  testRun: string;
  providerOne: string;
  providerTwo: string;
}

const de: CardCopy = {
  context: "PV-Prognosequalität",
  powerTitle: "Leistungsgenauigkeit",
  energyTitle: "Ertragsprognose",
  subtitle: "Heute · abgeschlossene 15-Minuten-Intervalle",
  closerPower: "Näher an der Ist-Leistung",
  closerEnergy: "Näher am tatsächlichen Ertrag",
  againstActualPower: "gegen die Ist-Leistung",
  againstActualEnergy: "gegen den tatsächlichen Ertrag",
  equal: "Beide Prognosen liegen gleichauf",
  unavailable: "Noch keine Bewertung möglich",
  unavailableHint: "Prüfe die ausgewählten Entitäten und warte auf das erste abgeschlossene Intervall.",
  lessDistance: (difference, name) => `${difference} weniger mittlerer Abstand als ${name}`,
  singlePowerHint: "mittlerer Abstand je ausgewertetem Viertelstunden-Intervall",
  tooHigh: "bisher etwas zu viel erwartet",
  tooLow: "bisher etwas zu wenig erwartet",
  exact: "entspricht bisher exakt dem Ist-Ertrag",
  idealZero: "0 · ideal",
  low: "zu wenig",
  high: "zu viel",
  infoLabel: "Kennzahl erklären",
  preliminary: "Erste Tendenz",
  staleSnapshot: "Der hinterlegte Prognose-Snapshot gehört nicht zum heutigen Tag.",
  powerExplanation: (example, energy) =>
    `Fachbegriff: mittlerer absoluter Fehler (MAE). Für jedes abgeschlossene 15-Minuten-Intervall wird der Abstand zwischen Prognose und tatsächlicher Durchschnittsleistung berechnet; anschließend werden alle Abstände gemittelt. ${example} kW bedeutet nicht „pro Stunde“. Für ein Viertelstunden-Intervall entsprechen ${example} kW rechnerisch ${energy} kWh Abstand. Kleiner ist besser.`,
  energyExplanation:
    "Verglichen wird die vorhergesagte Energie mit der tatsächlich erzeugten Energie derselben abgeschlossenen Intervalle. Plus bedeutet insgesamt zu viel erwartet, Minus zu wenig. 0 % wäre exakt; für die Genauigkeit zählt daher der Abstand zu 0 %.",
  completedIntervals: (count) => `${count} ausgewertete Viertelstunden`,
  firstTrend: (count, minimum) => `Erste Tendenz · ${count} von mindestens ${minimum} Viertelstunden`,
  waitingIntervals: "Warten auf abgeschlossene Intervalle",
  dayAhead: "Day-ahead",
  testRun: "Testlauf",
  providerOne: "Anbieter 1",
  providerTwo: "Anbieter 2",
};

const en: CardCopy = {
  context: "PV forecast quality",
  powerTitle: "Power accuracy",
  energyTitle: "Yield forecast",
  subtitle: "Today · completed 15-minute intervals",
  closerPower: "Closer to actual power",
  closerEnergy: "Closer to actual yield",
  againstActualPower: "against actual power",
  againstActualEnergy: "against actual yield",
  equal: "Both forecasts are tied",
  unavailable: "No evaluation available yet",
  unavailableHint: "Check the selected entities and wait for the first completed interval.",
  lessDistance: (difference, name) => `${difference} less average distance than ${name}`,
  singlePowerHint: "average distance per evaluated 15-minute interval",
  tooHigh: "forecast has been slightly too high",
  tooLow: "forecast has been slightly too low",
  exact: "matches the actual yield so far",
  idealZero: "0 · ideal",
  low: "too low",
  high: "too high",
  infoLabel: "Explain this metric",
  preliminary: "Early trend",
  staleSnapshot: "The configured forecast snapshot does not belong to today.",
  powerExplanation: (example, energy) =>
    `Scientific term: mean absolute error (MAE). For every completed 15-minute interval, the distance between forecast and actual average power is calculated; all distances are then averaged. ${example} kW does not mean “per hour”. Over one 15-minute interval, ${example} kW corresponds to ${energy} kWh of energy distance. Lower is better.`,
  energyExplanation:
    "Forecast energy is compared with actual energy from the same completed intervals. Positive means the forecast was too high, negative means it was too low. 0% would be exact, so accuracy is measured by the distance from 0%.",
  completedIntervals: (count) => `${count} evaluated 15-minute intervals`,
  firstTrend: (count, minimum) => `Early trend · ${count} of at least ${minimum} intervals`,
  waitingIntervals: "Waiting for completed intervals",
  dayAhead: "Day-ahead",
  testRun: "Test run",
  providerOne: "Provider 1",
  providerTwo: "Provider 2",
};

export function getCopy(language: string | undefined, _metric: ForecastQualityMetric): CardCopy {
  return language?.toLowerCase().startsWith("de") ? de : en;
}
