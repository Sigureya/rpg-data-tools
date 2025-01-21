import { TypeInfo, Blueprint } from './blueprint';
export declare class ParameterFactory<MappedParamObject extends object, ParameterArray extends unknown[]> {
    private readonly _blueprint;
    private readonly _sample;
    constructor(_blueprint: Blueprint<MappedParamObject, ParameterArray>);
    collectTypeInfos(parameters: Partial<MappedParamObject>): TypeInfo[];
    hasError(typeInfo: TypeInfo): boolean;
    collectTypeErrors(parameters: Partial<MappedParamObject>): TypeInfo[];
    validate(parameters: Partial<MappedParamObject>): void;
    validateArrayParam(parameters: ParameterArray): void;
    toArray(proto?: Partial<MappedParamObject>): ParameterArray;
    construct(proto?: Partial<MappedParamObject>): MappedParamObject;
    fromArray(parameters: Readonly<ParameterArray>): MappedParamObject;
}
