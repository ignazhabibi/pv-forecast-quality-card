export type ChartPoint = [timestamp: number, value: number];

export type PowerUnit = "auto" | "W" | "kW";

export interface ForecastPointConfig {
  attribute?: string;
  datetime_key?: string;
  value_key?: string;
  unit?: PowerUnit;
}

export interface CompactHistoryState {
  s: string;
  lu: number;
  lc?: number;
}

export function snapshotValues(chunks: string[], scale = 100): number[] {
  if (!Number.isFinite(scale) || scale <= 0) return [];
  return chunks
    .flatMap((chunk) => chunk.split(","))
    .map((value) => Number(value) / scale)
    .filter((value) => Number.isFinite(value))
    .map((value) => Math.max(0, value));
}

export function snapshotPoints(
  chunks: string[],
  start: Date,
  end: Date,
  scale = 100,
  sourceStepMs = 15 * 60 * 1000,
  outputStepMs = 5 * 60 * 1000,
): ChartPoint[] {
  const values = snapshotValues(chunks, scale);
  const source = values.map<ChartPoint>((value, index) => [
    start.getTime() + index * sourceStepMs,
    value,
  ]);
  if (source.length < 2) return source;

  const result: ChartPoint[] = [];
  const endMs = Math.min(end.getTime(), source.at(-1)![0] + sourceStepMs);
  for (let timestamp = start.getTime(); timestamp < endMs; timestamp += outputStepMs) {
    const index = Math.min(
      source.length - 1,
      Math.max(0, Math.floor((timestamp - start.getTime()) / sourceStepMs)),
    );
    const lower = source[index];
    const upper = source[Math.min(source.length - 1, index + 1)];
    if (!lower || !upper) continue;
    const ratio = upper[0] === lower[0] ? 0 : (timestamp - lower[0]) / (upper[0] - lower[0]);
    result.push([timestamp, lower[1] + (upper[1] - lower[1]) * ratio]);
  }
  return result;
}

export function snapshotEnergy(chunks: string[], scale = 100, intervalHours = 0.25): number | null {
  const values = snapshotValues(chunks, scale);
  if (values.length === 0) return null;
  return values.reduce((sum, value) => sum + value * intervalHours, 0);
}

export function powerCurveEnergy(points: ChartPoint[]): number | null {
  if (points.length < 2) return null;
  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    if (!previous || !current) continue;
    const hours = (current[0] - previous[0]) / 3_600_000;
    if (hours <= 0 || hours > 1) continue;
    total += ((previous[1] + current[1]) / 2) * hours;
  }
  return Number.isFinite(total) ? total : null;
}

const INVALID_STATES = new Set(["", "unknown", "unavailable", "none", "null"]);

export function localDayBounds(reference = new Date()): { start: Date; end: Date } {
  const start = new Date(
    reference.getFullYear(),
    reference.getMonth(),
    reference.getDate(),
    0,
    0,
    0,
    0,
  );
  const end = new Date(
    reference.getFullYear(),
    reference.getMonth(),
    reference.getDate() + 1,
    0,
    0,
    0,
    0,
  );
  return { start, end };
}

export function powerFactor(unit: unknown, fallbackUnit: unknown): number {
  const selected = unit === "auto" || unit == null ? fallbackUnit : unit;
  return typeof selected === "string" && selected.trim().toLowerCase() === "w"
    ? 0.001
    : 1;
}

export function forecastPoints(
  attributes: Record<string, unknown> | undefined,
  config: ForecastPointConfig,
  fallbackUnit: unknown,
  start: Date,
  end: Date,
  stepMs = 5 * 60 * 1000,
): ChartPoint[] {
  const entries = readAttribute(attributes, config.attribute ?? "forecast");
  if (!Array.isArray(entries)) return [];

  const dateKey = config.datetime_key ?? "datetime";
  const valueKey = config.value_key ?? "watts";
  const factor = powerFactor(config.unit, fallbackUnit);
  const startMs = start.getTime();
  const endMs = end.getTime();
  const source: ChartPoint[] = [];

  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    const record = entry as Record<string, unknown>;
    const timestamp = new Date(String(record[dateKey] ?? "")).getTime();
    const value = Number(record[valueKey]);
    if (
      !Number.isFinite(timestamp) ||
      !Number.isFinite(value) ||
      timestamp < startMs ||
      timestamp > endMs
    ) {
      continue;
    }
    source.push([timestamp, Math.max(0, value * factor)]);
  }

  source.sort((a, b) => a[0] - b[0]);
  if (source.length === 0) return [];
  if (source.length === 1) return source;

  const result: ChartPoint[] = [];
  let sourceIndex = 0;
  for (let timestamp = startMs; timestamp <= endMs; timestamp += stepMs) {
    while (
      sourceIndex < source.length - 2 &&
      source[sourceIndex + 1]![0] < timestamp
    ) {
      sourceIndex += 1;
    }

    const lower = source[sourceIndex];
    const upper = source[sourceIndex + 1];
    if (!lower || !upper || timestamp < lower[0] || timestamp > upper[0]) continue;
    const ratio = upper[0] === lower[0] ? 0 : (timestamp - lower[0]) / (upper[0] - lower[0]);
    result.push([timestamp, lower[1] + (upper[1] - lower[1]) * ratio]);
  }

  return result;
}

export function aggregateHistory(
  states: CompactHistoryState[],
  factor: number,
  start: Date,
  end: Date,
  stepMs = 5 * 60 * 1000,
): ChartPoint[] {
  const startMs = start.getTime();
  const endMs = end.getTime();
  const bins = new Map<number, { sum: number; count: number }>();

  for (const state of states) {
    if (!state || INVALID_STATES.has(String(state.s).toLowerCase())) continue;
    const value = Number(state.s);
    const seconds = state.lc ?? state.lu;
    const timestamp = Number(seconds) * 1000;
    if (!Number.isFinite(value) || !Number.isFinite(timestamp)) continue;
    if (timestamp < startMs || timestamp >= endMs) continue;

    const bin = startMs + Math.floor((timestamp - startMs) / stepMs) * stepMs;
    const current = bins.get(bin) ?? { sum: 0, count: 0 };
    current.sum += Math.max(0, value * factor);
    current.count += 1;
    bins.set(bin, current);
  }

  return [...bins.entries()]
    .sort(([first], [second]) => first - second)
    .map(([timestamp, bin]) => [timestamp, bin.sum / bin.count]);
}

export function nearestPointValue(
  points: ChartPoint[],
  timestamp: number,
  toleranceMs: number,
): number | null {
  let nearest: ChartPoint | undefined;
  let distance = Number.POSITIVE_INFINITY;
  for (const point of points) {
    const currentDistance = Math.abs(point[0] - timestamp);
    if (currentDistance < distance) {
      nearest = point;
      distance = currentDistance;
    }
  }
  return nearest && distance <= toleranceMs ? nearest[1] : null;
}

function readAttribute(
  attributes: Record<string, unknown> | undefined,
  path: string,
): unknown {
  if (!attributes) return undefined;
  return path.split(".").reduce<unknown>((value, key) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[key];
  }, attributes);
}
