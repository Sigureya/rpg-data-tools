import type { ParamArray } from "@sigureya/rpgtypes";

export interface ParamTable<T> {
  mhp: T;
  mmp: T;
  atk: T;
  def: T;
  mat: T;
  mdf: T;
  agi: T;
  luk: T;
  hit: T;
  eva: T;
}

export const createParamArray = (
  params: Partial<ParamTable<number>>
): ParamArray => {
  return [
    params.mhp ?? 0,
    params.mmp ?? 0,
    params.atk ?? 0,
    params.def ?? 0,
    params.mat ?? 0,
    params.mdf ?? 0,
    params.agi ?? 0,
    params.luk ?? 0,
    // names.hit ?? 0,
    // names.eva ?? 0,
  ];
};
