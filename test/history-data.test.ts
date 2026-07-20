import { describe, expect, it } from "vitest";

import {
  alignedValues,
  comparisonSummary,
  completeDayKeys,
  statisticPoints,
} from "../src/history-data";

describe("history chart data helpers", () => {
  it("creates keys for complete days and excludes today", () => {
    const days = completeDayKeys(3, new Date(2026, 6, 20, 18, 0));
    expect(days).toEqual(["2026-07-17", "2026-07-18", "2026-07-19"]);
  });

  it("moves after-midnight daily statistics to the evaluated previous day", () => {
    const allowed = new Set(["2026-07-18", "2026-07-19"]);
    const points = statisticPoints(
      [
        { start: new Date(2026, 6, 19, 0, 0).getTime(), mean: 1.25 },
        { start: new Date(2026, 6, 20, 0, 0).toISOString(), mean: -2.4 },
        { start: new Date(2026, 6, 20, 0, 0).getTime(), mean: null },
      ],
      -1,
      allowed,
    );

    expect(points).toEqual([
      {
        day: "2026-07-18",
        timestamp: new Date(2026, 6, 18, 0, 0).getTime(),
        value: 1.25,
      },
      {
        day: "2026-07-19",
        timestamp: new Date(2026, 6, 19, 0, 0).getTime(),
        value: -2.4,
      },
    ]);
  });

  it("aligns missing provider values as null", () => {
    const days = ["2026-07-17", "2026-07-18", "2026-07-19"];
    const values = alignedValues(days, [
      { day: "2026-07-17", timestamp: 1, value: 4 },
      { day: "2026-07-19", timestamp: 3, value: -2 },
    ]);
    expect(values).toEqual([4, null, -2]);
  });

  it("compares signed deviations by absolute distance from zero", () => {
    const summary = comparisonSummary([
      {
        name: "Solcast",
        color: "green",
        values: new Map([
          ["2026-07-17", 12],
          ["2026-07-18", -3],
          ["2026-07-19", 8],
        ]),
      },
      {
        name: "Helios Forecast",
        color: "purple",
        values: new Map([
          ["2026-07-17", -4],
          ["2026-07-18", -7],
          ["2026-07-19", 8],
        ]),
      },
    ]);

    expect(summary).toEqual({
      comparableDays: 3,
      winnerIndex: null,
      winnerDays: 1,
      tiedDays: 1,
    });
  });

  it("ignores days that are missing for either provider", () => {
    const summary = comparisonSummary([
      {
        name: "Solcast",
        color: "green",
        values: new Map([
          ["2026-07-17", 1.2],
          ["2026-07-18", 0.9],
        ]),
      },
      {
        name: "Helios Forecast",
        color: "purple",
        values: new Map([["2026-07-17", 0.8]]),
      },
    ]);

    expect(summary).toEqual({
      comparableDays: 1,
      winnerIndex: 1,
      winnerDays: 1,
      tiedDays: 0,
    });
  });
});
