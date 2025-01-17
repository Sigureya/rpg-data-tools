import type { TypeInfo, Blueprint } from "./blueprint";
import { createSample } from "./blueprint";
import { INVALID_ARRAY_LENGTH } from "./errorMessages";

export class ParameterFactory<
  MappedParamObject extends object,
  ParameterArray extends unknown[]
> {
  private readonly _sample = createSample(this._blueprint);
  constructor(
    private readonly _blueprint: Blueprint<MappedParamObject, ParameterArray>
  ) {}

  paramErrors(parameters: Partial<MappedParamObject>): TypeInfo[] {
    return Object.entries(parameters).map<TypeInfo>(([key, value]) => ({
      key,
      requiredType: this._sample.object.get(key),
      type: typeof value,
      value,
    }));
  }

  validate(parameters: Partial<MappedParamObject>) {
    const typeInfos = this.paramErrors(parameters);

    if (typeInfos.length !== this._sample.object.size) {
      throw new Error(INVALID_ARRAY_LENGTH, { cause: typeInfos });
    }

    if (typeInfos.some((info) => info.type !== info.requiredType)) {
      throw new Error("undefined type", { cause: typeInfos });
    }
    if (this._blueprint.validate) {
      this._blueprint.validate(parameters as MappedParamObject);
    }
  }
  validateArray(parameters: ParameterArray) {
    if (parameters.length !== this._sample.array.size) {
      throw new Error(INVALID_ARRAY_LENGTH, { cause: parameters });
    }
    this.fromArray(parameters);
  }

  array(proto: Partial<MappedParamObject> = {}): ParameterArray {
    const newParam = this._blueprint.construct(proto);
    this.validate(newParam);
    return this._blueprint.array(newParam);
  }
  construct(proto: Partial<MappedParamObject> = {}): MappedParamObject {
    const newParam = this._blueprint.construct(proto);
    if (newParam === proto) {
      // 引数をそのままreturnするのは禁止。as anyされると発生しうる
      throw new Error("return same object", { cause: proto });
    }
    this.validate(newParam);
    return newParam;
  }
  fromArray(parameters: ParameterArray): MappedParamObject {
    const newParam = this._blueprint.fromArray(parameters);
    return this.construct(newParam);
  }
}
