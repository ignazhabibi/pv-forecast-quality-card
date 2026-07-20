import { describe, expect, it } from "vitest";

import {
  aggregateHistory,
  forecastPoints,
  nearestPointValue,
} from "../src/day-data";

const start = new Date(2026, 6, 20, 0, 0, 0, 0);
const end = new Date(2026, 6, 21, 0, 0, 0, 0);

describe("day chart data helpers", () => {
  it("reads and interpolates Solcast kW forecast points", () => {
    const points = forecastPoints(
      {
        detailedForecast: [
          { period_start: new Date(2026, 6, 20, 8, 0).toISOString(), pv_estimate: 2 },
          { period_start: new Date(2026, 6, 20, 8, 30).toISOString(), pv_estimate: 5 },
        ],
      },
      {
        attribute: "detailedForecast",
        datetime_key: "period_start",
        value_key: "pv_estimate",
        unit: "kW",
      },
      "kWh",
      start,
      end,
    );

    expect(points).toHaveLength(7);
    expect(points[3]?.[1]).toBeCloseTo(3.5);
  });

  it("converts Helios watts to kilowatts", () => {
    const points = forecastPoints(
      {
        forecast: [
          { datetime: new Date(2026, 6, 20, 9, 0).toISOString(), watts: 1250 },
          { datetime: new Date(2026, 6, 20, 9, 5).toISOString(), watts: 1750 },
        ],
      },
      { attribute: "forecast", datetime_key: "datetime", value_key: "watts", unit: "W" },
      "W",
      start,
      end,
    );

    expect(points.map((point) => point[1])).toEqual([1.25, 1.75]);
  });

  it("averages raw actual values into five-minute bins", () => {
    const states = [
      { s: "1000", lu: new Date(2026, 6, 20, 10, 0).getTime() / 1000 },
      { s: "3000", lu: new Date(2026, 6, 20, 10, 4).getTime() / 1000 },
      { s: "unavailable", lu: new Date(2026, 6, 20, 10, 4, 30).getTime() / 1000 },
      { s: "4000", lu: new Date(2026, 6, 20, 10, 5).getTime() / 1000 },
    ];

    const points = aggregateHistory(states, 0.001, start, end);
    expect(points).toEqual([
      [new Date(2026, 6, 20, 10, 0).getTime(), 2],
      [new Date(2026, 6, 20, 10, 5).getTime(), 4],
    ]);
  });

  it("returns only nearby values for shared tooltips", () => {
    const points: [number, number][] = [[new Date(2026, 6, 20, 12, 0).getTime(), 4.2]];
    expect(nearestPointValue(points, new Date(2026, 6, 20, 12, 2).getTime(), 150_000)).toBe(4.2);
    expect(nearestPointValue(points, new Date(2026, 6, 20, 12, 5).getTime(), 150_000)).toBeNull();
  });
});
