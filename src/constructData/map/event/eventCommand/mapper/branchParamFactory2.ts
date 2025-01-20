import type { BranchCode } from "@sigureya/rpgtypes";
import type { ParameterFactory } from "./template";

type BranchParameterFactory2<BranchObject extends { branchCode: BranchCode }> =
  ParameterFactory<BranchObject, []>;
