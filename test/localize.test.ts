import { describe, expect, it } from "vitest";

import { getCopy } from "../src/localize";

describe("German UX copy", () => {
  it("names both quality cards as forecast accuracy, not as PV faults", () => {
    const copy = getCopy("de-DE", "power");

    expect(copy.powerTitle).toBe("Prognosegenauigkeit · Leistungsverlauf");
    expect(copy.energyTitle).toBe("Prognosegenauigkeit · Tagesenergie");
    expect(copy.powerTitle).not.toContain("Fehler");
  });

  it("distinguishes power deviation from energy", () => {
    const copy = getCopy("de-DE", "power");
    const explanation = copy.powerExplanation("1,40");

    expect(explanation).toContain("keine Energiemenge");
    expect(explanation).toContain("mittlerer absoluter Fehler (MAE)");
    expect(copy.energyExplanation).toContain("kWh");
  });
});
