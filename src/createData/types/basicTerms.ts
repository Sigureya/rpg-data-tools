import type { BasicTerms as BasicTermsArray } from "@sigureya/rpgtypes";

export interface BasicTerms {
  level: string;
  levelA: string;
  hp: string;
  hpA: string;
  mp: string;
  mpA: string;
  tp: string;
  tpA: string;
  experience: string;
  exp: string;
}

export const createBasicTerms = (
  proto?: Partial<BasicTerms>
): BasicTermsArray => [
  proto?.level ?? "",
  proto?.levelA ?? "",
  proto?.hp ?? "",
  proto?.hpA ?? "",
  proto?.mp ?? "",
  proto?.mpA ?? "",
  proto?.tp ?? "",
  proto?.tpA ?? "",
  proto?.experience ?? "",
  proto?.exp ?? "",
];
