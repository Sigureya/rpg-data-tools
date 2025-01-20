import type { Toggle } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { createBiDirectionalMap } from "./utils";

const mockTable: Toggle = {
  OFF: 1,
  ON: 0,
};

describe("constructEventCommand", () => {
  const mockMap = createBiDirectionalMap(mockTable);

  test("getValueFromKey", () => {
    expect(mockMap.getValueFromKey("OFF")).toBe(1);
    expect(mockMap.getValueFromKey("ON")).toBe(0);
  });
  test("getKeyFromValue", () => {
    expect(mockMap.getKeyFromValue(1)).toBe("OFF");
    expect(mockMap.getKeyFromValue(0)).toBe("ON");
  });
});
