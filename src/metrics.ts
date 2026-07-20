import type {
  ForecastQualityMetric,
  HassEntity,
  HomeAssistant,
  ProviderReading,
} from "./types";

const INVALID_STATES = new Set(["", "unknown", "unavailable", "none", "null"]);

export function parseNumericState(state: HassEntity | undefined): number | null {
  if (!state || INVALID_STATES.has(state.state.toLowerCase())) return null;
  const value = Number(state.state);
  return Number.isFinite(value) ? value : null;
}

export function readNumericEntity(
  hass: HomeAssistant | undefined,
  entityId: string | undefined,
): number | null {
  if (!hass || !entityId) return null;
  return parseNumericState(hass.states[entityId]);
}

export function powerScale(values: Array<number | null>): number {
  const maximum = Math.max(0, ...values.filter((value): value is number => value !== null));
  return Math.max(0.5, Math.ceil((maximum * 1.2) / 0.5) * 0.5);
}

export function energyScale(values: Array<number | null>): number {
  const maximum = Math.max(
    0,
    ...values
      .filter((value): value is number => value !== null)
      .map((value) => Math.abs(value)),
  );
  return Math.max(10, Math.ceil((maximum * 1.2) / 5) * 5);
}

export function normalizedPosition(
  metric: ForecastQualityMetric,
  value: number | null,
  scale: number,
): number {
  if (value === null || !Number.isFinite(value) || scale <= 0) return 0;
  if (metric === "power") return Math.max(0, Math.min(100, (value / scale) * 100));
  return Math.max(0, Math.min(100, ((value + scale) / (2 * scale)) * 100));
}

export interface ComparisonResult {
  kind: "single" | "winner" | "tie" | "unavailable";
  winner?: ProviderReading;
  other?: ProviderReading;
  difference?: number;
}

export function compareReadings(
  metric: ForecastQualityMetric,
  readings: ProviderReading[],
): ComparisonResult {
  const validReadings = readings.filter(
    (reading) =>
      reading.value !== null &&
      Number.isFinite(reading.value) &&
      (metric !== "power" || reading.value >= 0),
  );

  if (validReadings.length === 0) return { kind: "unavailable" };
  if (validReadings.length === 1) {
    return { kind: "single", winner: validReadings[0] };
  }

  const first = validReadings[0];
  const second = validReadings[1];
  if (!first || !second || first.value === null || second.value === null) {
    return { kind: "unavailable" };
  }

  const firstScore = metric === "power" ? first.value : Math.abs(first.value);
  const secondScore = metric === "power" ? second.value : Math.abs(second.value);
  if (Math.abs(firstScore - secondScore) < 0.000_001) return { kind: "tie" };

  const winner = firstScore < secondScore ? first : second;
  const other = winner === first ? second : first;
  return {
    kind: "winner",
    winner,
    other,
    difference: Math.abs(firstScore - secondScore),
  };
}

export interface SnapshotInfo {
  date?: string;
  timestamp?: string;
  mode?: string;
}

export function parseSnapshot(value: string | undefined): SnapshotInfo {
  if (!value) return {};
  const [date, timestamp, mode] = value.split("|");
  return { date, timestamp, mode };
}

export function isSnapshotStale(snapshot: SnapshotInfo, today: string): boolean {
  return Boolean(snapshot.date && snapshot.date !== today);
}

export function safeColor(value: string | undefined, fallback: string): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  const accepted = [
    /^#[0-9a-f]{3,8}$/i,
    /^rgba?\([\d\s.,%]+\)$/i,
    /^hsla?\([\d\s.,%a-z-]+\)$/i,
    /^var\(--[a-z0-9-_]+\)$/i,
    /^[a-z]+$/i,
  ];
  return accepted.some((pattern) => pattern.test(trimmed)) ? trimmed : fallback;
}
