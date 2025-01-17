import type { ArrayToObjectMapper } from "./arrayToObjectMapper";

export interface ParameterFactory<
  ParameterArray extends unknown[],
  MappedParamObject extends object,
  Mapper extends ArrayToObjectMapper<
    ParameterArray,
    MappedParamObject
  > = ArrayToObjectMapper<ParameterArray, MappedParamObject>
> {
  mapper: Mapper;
  constructParamArray(proto?: Partial<MappedParamObject>): ParameterArray;
  constructMappedParamObject(
    proto?: Partial<MappedParamObject>
  ): MappedParamObject;
  toArray(mapper: Mapper, parameters: MappedParamObject): ParameterArray;
  fromArray(mapper: Mapper, parameters: ParameterArray): MappedParamObject;
}
