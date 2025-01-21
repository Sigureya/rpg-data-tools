import type { TypeInfo, Blueprint } from "./blueprint";
export declare class ParameterFactory<MappedParamObject extends object, ParameterArray extends unknown[]> {
    private readonly _blueprint;
    private readonly _sample;
    constructor(_blueprint: Blueprint<MappedParamObject, ParameterArray>);
    paramErrors(parameters: Partial<MappedParamObject>): TypeInfo[];
    validate(parameters: Partial<MappedParamObject>): void;
    validateArray(parameters: ParameterArray): void;
    array(proto?: Partial<MappedParamObject>): ParameterArray;
    construct(proto?: Partial<MappedParamObject>): MappedParamObject;
    fromArray(parameters: ParameterArray): MappedParamObject;
}
