import type {
  BranchCode,
  BranchCodeTable,
  BranchParameters,
  PickByType,
  ValueOf,
} from "@sigureya/rpgtypes";
import type { BranchByScript } from "./branchParams";

type MMM<Map extends Record<keyof BranchCodeTable, unknown>> = {
  //  [K in keyof Map]: { branchCode: BranchCodeTable[K] };
};

type M<T extends { branchCode: BranchCode }> = {
  paramArray: PickByType<ValueOf<BranchParameters>, { "0": ["branchCode"] }>;
  paramObject: T;
};

interface XX extends Record<keyof BranchCodeTable, { branchCode: BranchCode }> {
  SELF_SWITCH: { branchCode: 0 };
}

type S = M<BranchByScript>;
// const s: S["paramArray"] = [12, "test"];
