import type { TypeInfo, Blueprint } from "./blueprint";
import { createSample } from "./blueprint";
import {
  INVALID_ARRAY_LENGTH,
  RETURN_SAME_OBJECT,
  MEMBERS_UNMATCH,
} from "./errorMessages";

export class ParameterFactory<
  MappedParamObject extends object,
  ParameterArray extends unknown[]
> {
  private readonly _sample: ProductSample = createSample(this._blueprint);

  constructor(
    private readonly _blueprint: Blueprint<MappedParamObject, ParameterArray>
  ) {}

  validateBlueprint() {
    const sample = this._blueprint.construct({});
    const array = this._blueprint.array(sample);
    const object = this._blueprint.fromArray(array);
    this.validate(sample);
    this.validateArray(array);
    this.validate(object);
    // TODO:sampleとobjectが一致することを確認
  }
  /**
   * 型情報を収集
   */
  collectTypeInfos(parameters: Partial<MappedParamObject>): TypeInfo[] {
    return Object.entries(parameters).map<TypeInfo>(([key, value]) => ({
      key,
      requiredType: this._sample.object.get(key),
      type: typeof value,
      value,
    }));
  }

  hasError(typeInfo: TypeInfo) {
    return typeInfo.type !== typeInfo.requiredType;
  }
  /**
   * 型エラー情報を収集
   */
  collectTypeErrors(parameters: Partial<MappedParamObject>): TypeInfo[] {
    return this.collectTypeInfos(parameters).filter((info) =>
      this.hasError(info)
    );
  }
  /**
   * バリデーションメインメソッド
   * 全てのバリデーションはこの関数に集約
   */
  validate(parameters: Partial<MappedParamObject>) {
    // 型エラー情報の収集
    const typeInfos = this.collectTypeInfos(parameters);

    // オブジェクトのキー数が一致しない場合
    if (typeInfos.length !== this._sample.object.size) {
      throw new Error(INVALID_ARRAY_LENGTH, { cause: typeInfos });
    }

    const erros = typeInfos.filter((info) => this.hasError(info));
    // 型の不一致が存在する場合
    if (erros.length > 0) {
      throw new Error(MEMBERS_UNMATCH, { cause: typeInfos });
    }

    // ユーザー定義バリデーションの呼び出し
    this._blueprint.validate?.(parameters as MappedParamObject);
  }

  validateArrayParam(parameters: ParameterArray) {
    if (parameters.length !== this._sample.array.size) {
      throw new Error(INVALID_ARRAY_LENGTH, { cause: parameters });
    }
    Object.entries(parameters).forEach(([key, value]) => {
      if (typeof value !== this._sample.array.get(key)) {
        throw new Error(MEMBERS_UNMATCH, { cause: parameters });
      }
    });
  }

  /**
   * 配列用バリデーション。配列をオブジェクト化してvalidate()を呼ぶ
   */
  validateArray(parameters: ParameterArray) {
    if (parameters.length !== this._sample.array.size) {
      throw new Error(INVALID_ARRAY_LENGTH, { cause: parameters });
    }
    const object = this._blueprint.fromArray(parameters);
    this.validate(object);
  }

  /**
   * 配列の生成
   */
  array(proto: Partial<MappedParamObject> = {}): ParameterArray {
    const newParam = this._blueprint.construct(proto);
    this.validate(newParam);
    return this._blueprint.array(newParam);
  }

  /**
   * オブジェクトの生成
   */
  construct(proto: Partial<MappedParamObject> = {}): MappedParamObject {
    const newParam = this._blueprint.construct(proto);
    if (newParam === proto) {
      throw new Error(RETURN_SAME_OBJECT, { cause: proto });
    }
    this.validate(newParam);
    return newParam;
  }

  /**
   * 配列からオブジェクトに変換
   */
  fromArray(parameters: Readonly<ParameterArray>): MappedParamObject {
    this.validateArrayParam(parameters);
    const object = this._blueprint.fromArray(parameters);
    return this.construct(object);
  }
}

interface ProductSample {
  object: ReadonlyMap<string, string>;
  array: ReadonlyMap<string, string>;
}
