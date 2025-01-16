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
export declare const createParamArray: (params: Partial<ParamTable<number>>) => ParamArray;
