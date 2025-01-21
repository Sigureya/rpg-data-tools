import { describe, test, expect } from "vitest";
import { TwoWayMap } from "./twoWayMap";
const mockTable = {
    OFF: 1,
    ON: 0,
};
describe("constructEventCommand", () => {
    const mockMap = new TwoWayMap(mockTable, "ON");
    test("getValueFromKey", () => {
        expect(mockMap.getValue("ON")).toBe(0);
        expect(mockMap.getValue("OFF")).toBe(1);
        expect(mockMap.getValue("INVALID")).toBe(mockMap.defaultValue);
        expect(mockMap.getValue(undefined)).toBe(mockMap.defaultValue);
    });
    test("getKeyFromValue", () => {
        expect(mockMap.getKey(0)).toBe("ON");
        expect(mockMap.getKey(1)).toBe("OFF");
        expect(mockMap.getKey(2)).toBe(mockMap.defaultKey);
        expect(mockMap.getKey(undefined)).toBe(mockMap.defaultKey);
    });
});
//# sourceMappingURL=twoWayMap.test.js.map