export interface ParameterFactory<
  ParameterArray extends unknown[],
  MappedParamObject extends object
> {
  constructParamArray(proto?: Partial<MappedParamObject>): ParameterArray;
  constructMappedParamObject(
    proto?: Partial<MappedParamObject>
  ): MappedParamObject;
  toArray(parameters: MappedParamObject): ParameterArray;
  fromArray(parameters: ParameterArray): MappedParamObject;
}
