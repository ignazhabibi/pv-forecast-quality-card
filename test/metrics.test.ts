import { describe, expect, it } from "vitest";

import {
  compareReadings,
  energyScale,
  isSnapshotStale,
  normalizedPosition,
  parseNumericState,
  parseSnapshot,
  powerScale,
  safeColor,
} from "../src/metrics";
import type { ProviderReading } from "../src/types";

const provider = (name: string, value: number | null): ProviderReading => ({
  name,
  value,
  entity: `sensor.${name.toLowerCase()}`,
  color: "#123456",
  marker: "circle",
});

describe("metric helpers", () => {
  it("parses numeric states and rejects unavailable values", () => {
    expect(
      parseNumericState({ entity_id: "sensor.x", state: "1.218", attributes: {} }),
    ).toBe(1.218);
    expect(
      parseNumericState({ entity_id: "sensor.x", state: "unavailable", attributes: {} }),
    ).toBeNull();
  });

  it("selects the lower MAE as power winner", () => {
    const result = compareReadings("power", [provider("Solcast", 1.5), provider("Helios", 1.218)]);
    expect(result.kind).toBe("winner");
    expect(result.winner?.name).toBe("Helios");
    expect(result.difference).toBeCloseTo(0.282);
  });

  it("selects the energy deviation closest to zero", () => {
    const result = compareReadings("energy", [provider("Solcast", 23.7), provider("Helios", -2.4)]);
    expect(result.kind).toBe("winner");
    expect(result.winner?.name).toBe("Helios");
    expect(result.difference).toBeCloseTo(21.3);
  });

  it("keeps a valid provider usable when the comparison provider is unavailable", () => {
    const result = compareReadings("power", [provider("Solcast", 1.5), provider("Helios", null)]);
    expect(result.kind).toBe("single");
    expect(result.winner?.name).toBe("Solcast");
  });

  it("rejects negative MAE readings", () => {
    const result = compareReadings("power", [provider("Solcast", -0.2)]);
    expect(result.kind).toBe("unavailable");
  });

  it("creates readable dynamic scales", () => {
    expect(powerScale([1.5, 1.218])).toBe(2);
    expect(energyScale([23.7, -2.4])).toBe(30);
    expect(normalizedPosition("power", 1.5, 2)).toBe(75);
    expect(normalizedPosition("energy", -15, 30)).toBe(25);
  });

  it("parses the snapshot state contract", () => {
    expect(parseSnapshot("2026-07-20|2026-07-20T09:10:22+02:00|bootstrap")).toEqual({
      date: "2026-07-20",
      timestamp: "2026-07-20T09:10:22+02:00",
      mode: "bootstrap",
    });
    expect(
      isSnapshotStale(
        parseSnapshot("2026-07-19|2026-07-19T23:55:00+02:00|day_ahead"),
        "2026-07-20",
      ),
    ).toBe(true);
  });

  it("rejects unsafe CSS color input", () => {
    expect(safeColor("#22C55E", "red")).toBe("#22C55E");
    expect(safeColor("url(javascript:alert(1))", "red")).toBe("red");
  });
});
