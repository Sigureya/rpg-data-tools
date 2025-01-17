// 設計図
export interface Blueprint<
  MappedParamObject extends object,
  ParameterArray extends unknown[]
> {
  construct(proto: Partial<MappedParamObject>): MappedParamObject;
  array(parameters: MappedParamObject): ParameterArray;
  fromArray(parameters: ParameterArray): MappedParamObject;
  validate?(parameters: MappedParamObject): void;
}

export const createSample = <
  ParameterArray extends unknown[],
  MappedParamObject extends object
>(
  blueprint: Blueprint<MappedParamObject, ParameterArray>
): {
  object: ReadonlyMap<string, string>;
  array: ReadonlyMap<string, string>;
} => {
  const proto = blueprint.construct({});
  const array = blueprint.array(proto);
  return { object: createTypeMap(proto), array: typeMapFromArray(array) };
};

export const typeMapFromArray = (
  array: unknown[]
): ReadonlyMap<string, string> => {
  return new Map(array.map((value, index) => [index.toString(), typeof value]));
};

export const createTypeMap = <K extends string, V extends Record<K, V>>(
  obj: Record<K, V>
): ReadonlyMap<string, string> => {
  const list = Object.entries(obj).map(
    ([key, value]) => [key as K, typeof value] as const
  );
  return new Map(list);
};

export interface TypeInfo {
  key: string;
  requiredType: string | undefined;
  type: string;
  value: unknown;
}
