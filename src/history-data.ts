export interface StatisticValue {
  start: number | string;
  mean?: number | null;
}

export interface DailyMetricPoint {
  day: string;
  timestamp: number;
  value: number;
}

export interface ProviderDailySeries {
  name: string;
  color: string;
  values: Map<string, number>;
}

export interface ComparisonSummary {
  comparableDays: number;
  winnerIndex: number | null;
  winnerDays: number;
  tiedDays: number;
}

export function localDayKey(value: Date): string {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function completeDayKeys(days: number, reference = new Date()): string[] {
  const count = Math.max(1, Math.round(days));
  const today = new Date(
    reference.getFullYear(),
    reference.getMonth(),
    reference.getDate(),
    0,
    0,
    0,
    0,
  );
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (count - index));
    return localDayKey(date);
  });
}

export function statisticPoints(
  values: StatisticValue[] | undefined,
  dayOffset: number,
  allowedDays: ReadonlySet<string>,
): DailyMetricPoint[] {
  if (!Array.isArray(values)) return [];
  const points = new Map<string, DailyMetricPoint>();
  for (const item of values) {
    if (item.mean == null) continue;
    const timestamp =
      typeof item.start === "number" ? item.start : new Date(item.start).getTime();
    const mean = Number(item.mean);
    if (!Number.isFinite(timestamp) || !Number.isFinite(mean)) continue;
    const shifted = new Date(timestamp);
    shifted.setDate(shifted.getDate() + dayOffset);
    const day = localDayKey(shifted);
    if (!allowedDays.has(day)) continue;
    points.set(day, { day, timestamp: shifted.getTime(), value: mean });
  }
  return [...points.values()].sort((first, second) => first.day.localeCompare(second.day));
}

export function alignedValues(
  days: string[],
  points: DailyMetricPoint[],
): Array<number | null> {
  const byDay = new Map(points.map((point) => [point.day, point.value]));
  return days.map((day) => byDay.get(day) ?? null);
}

export function comparisonSummary(series: ProviderDailySeries[]): ComparisonSummary {
  if (series.length < 2) {
    return { comparableDays: 0, winnerIndex: null, winnerDays: 0, tiedDays: 0 };
  }

  const days = new Set([...series[0]!.values.keys(), ...series[1]!.values.keys()]);
  const wins: [number, number] = [0, 0];
  let comparableDays = 0;
  let tiedDays = 0;
  for (const day of days) {
    const first = series[0]!.values.get(day);
    const second = series[1]!.values.get(day);
    if (!Number.isFinite(first) || !Number.isFinite(second)) continue;
    comparableDays += 1;
    const firstDistance = Math.abs(first!);
    const secondDistance = Math.abs(second!);
    if (Math.abs(firstDistance - secondDistance) < 1e-9) {
      tiedDays += 1;
    } else if (firstDistance < secondDistance) {
      wins[0] += 1;
    } else {
      wins[1] += 1;
    }
  }

  const winnerIndex = wins[0] === wins[1] ? null : wins[0] > wins[1] ? 0 : 1;
  return {
    comparableDays,
    winnerIndex,
    winnerDays: winnerIndex === null ? Math.max(...wins) : wins[winnerIndex],
    tiedDays,
  };
}
