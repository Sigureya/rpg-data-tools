import { TwoWayMap } from "./twoWayMap";
export const TOGGLE = new TwoWayMap({ OFF: 1, ON: 0 }, "ON");
export const DESIGNATION = new TwoWayMap({
    DIRECT: 0,
    VARIABLE: 1,
}, "DIRECT");
export const OPETION_PLUSMINUS = new TwoWayMap({
    PLUS: 0,
    MINUS: 1,
}, "PLUS");
export const OPERATION_ADDSUB = new TwoWayMap({
    ADD: 0,
    SUB: 1,
}, "ADD");
//# sourceMappingURL=enumMaps.js.map