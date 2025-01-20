import type { Toggle } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { TwoWayMap } from "./twoWayMap";

const mockTable: Toggle = {
  OFF: 1,
  ON: 0,
};

describe("constructEventCommand", () => {
  const mockMap = new TwoWayMap(mockTable);

  test("getValueFromKey", () => {
    expect(mockMap.getValueFromKey("ON")).toBe(0);
    expect(mockMap.getValueFromKey("OFF")).toBe(1);
    expect(mockMap.getValueFromKey("INVALID")).toBeUndefined();
  });
  test("getKeyFromValue", () => {
    expect(mockMap.getKeyFromValue(0)).toBe("ON");
    expect(mockMap.getKeyFromValue(1)).toBe("OFF");
    expect(mockMap.getKeyFromValue(2)).toBeUndefined();
  });
});
