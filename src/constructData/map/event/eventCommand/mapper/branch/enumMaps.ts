import type {
  Designation,
  Operation_AddSub,
  Operation_PlusMinus,
  Toggle,
} from "@sigureya/rpgtypes";
import { TwoWayMap } from "./twoWayMap";

export const TOGGLE = new TwoWayMap<Toggle>({ OFF: 1, ON: 0 });
export const DESIGNATION = new TwoWayMap<Designation>({
  DIRECT: 0,
  VARIABLE: 1,
});
export const OPETION_PLUSMINUS = new TwoWayMap<Operation_PlusMinus>({
  PLUS: 0,
  MINUS: 1,
});
export const OPERATION_ADDSUB = new TwoWayMap<Operation_AddSub>({
  ADD: 0,
  SUB: 1,
});
