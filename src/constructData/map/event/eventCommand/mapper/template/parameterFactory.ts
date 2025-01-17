import type { TypeInfo, Blueprint } from "./blueprint";
import { createTypeMap } from "./blueprint";

class Factory<
  ParameterArray extends unknown[],
  MappedParamObject extends object
> {
  private _typeMap = createTypeMap(this._blueprint.construct({}));
  constructor(
    private readonly _blueprint: Blueprint<ParameterArray, MappedParamObject>
  ) {}

  validate(parameters: Partial<MappedParamObject>) {
    const typeInfos = Object.entries(parameters).map<TypeInfo>(
      ([key, value]) => ({
        key,
        requiredType: this._typeMap.get(key),
        type: typeof value,
        value,
      })
    );

    if (typeInfos.length !== this._typeMap.size) {
      throw new Error("length is invalid", { cause: typeInfos });
    }

    if (typeInfos.some((info) => info.type !== info.requiredType)) {
      throw new Error("undefined type", { cause: typeInfos });
    }
    if (this._blueprint.validate) {
      this._blueprint.validate(parameters as MappedParamObject);
    }
  }
  array(proto: Partial<MappedParamObject> = {}): ParameterArray {
    const newParam = this._blueprint.construct(proto);
    this.validate(newParam);
    return this._blueprint.toArray(newParam);
  }
  construct(proto: Partial<MappedParamObject> = {}): MappedParamObject {
    const newParam = this._blueprint.construct(proto);
    this.validate(newParam);
    return newParam;
  }
  fromArray(parameters: ParameterArray): MappedParamObject {
    const newParam = this._blueprint.fromArray(parameters);
    return this.construct(newParam);
  }
}
