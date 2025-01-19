export interface Blueprint<MappedParamObject extends object, ParameterArray extends unknown[]> {
    construct(proto: Partial<Readonly<MappedParamObject>>): MappedParamObject;
    array(parameters: Readonly<MappedParamObject>): ParameterArray;
    fromArray(parameters: Readonly<ParameterArray>): MappedParamObject;
    validate?(parameters: MappedParamObject): void;
}
export declare const createSample: <ParameterArray extends unknown[], MappedParamObject extends object>(blueprint: Blueprint<MappedParamObject, ParameterArray>) => {
    object: ReadonlyMap<string, string>;
    array: ReadonlyMap<string, string>;
};
export declare const typeMapFromArray: (array: unknown[]) => ReadonlyMap<string, string>;
export declare const createTypeMap: <K extends string, V extends Record<K, V>>(obj: Record<K, V>) => ReadonlyMap<string, string>;
export interface TypeInfo {
    key: string;
    requiredType: string | undefined;
    type: string;
    value: unknown;
}
