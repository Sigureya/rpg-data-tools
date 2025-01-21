import { describe, test, expect, vi, beforeEach } from "vitest";
import { ParameterFactory } from "./parameterFactory";
import {
  INVALID_ARRAY_LENGTH,
  MEMBERS_UNMATCH,
  RETURN_SAME_OBJECT,
} from "./errorMessages";
import type { Blueprint } from "./blueprint";

// Blueprint モックの型
interface MockedParamObject {
  name: string;
  age: number;
  id: number;
}
type MockedArray = [string, number, number];

// モック用 Blueprint のテンプレート
const createMockBlueprint = (): Blueprint<MockedParamObject, MockedArray> => ({
  validate: vi.fn(),
  construct: (proto: Partial<MockedParamObject>) => ({
    name: proto.name ?? "default",
    age: proto.age ?? 0,
    id: proto.id ?? 1,
  }),
  array: (obj: MockedParamObject) => [obj.name, obj.age, obj.id],
  fromArray: (arr: MockedArray) => ({
    name: arr[0],
    age: arr[1],
    id: arr[2],
  }),
});

describe("ParameterFactory - Valid Scenarios", () => {
  let factory: ParameterFactory<MockedParamObject, MockedArray>;
  let blueprint: ReturnType<typeof createMockBlueprint>;

  beforeEach(() => {
    blueprint = createMockBlueprint();
    factory = new ParameterFactory(blueprint);
    vi.resetAllMocks(); // モックのリセット
  });

  test("object creation is validated and custom validation is called once", () => {
    const proto = { name: "Alice", age: 30, id: 123 };

    // オブジェクトの生成とバリデーション
    const result = factory.construct(proto);

    // 結果確認
    expect(result).toEqual(proto);

    // validate() の呼び出し確認
    expect(blueprint.validate).toHaveBeenCalledTimes(1);
    expect(blueprint.validate).toHaveBeenCalledWith(proto);
  });

  test("array creation validates object and ensures correctness", () => {
    const proto = { name: "Alice", age: 30, id: 123 };

    // 配列の生成とバリデーション
    const resultArray = factory.toArray(proto);
    //    const resultObject = factory.fromArray(resultArray);

    // 結果確認
    expect(resultArray).toEqual(["Alice", 30, 123]);
    //  expect(resultObject).toEqual(proto);

    // validate() の呼び出し確認
    expect(blueprint.validate).toHaveBeenCalledTimes(1);
    expect(blueprint.validate).toHaveBeenCalledWith(proto);
  });
  test("object creation fromArray() ", () => {
    // 配列の生成とバリデーション
    const object = factory.fromArray(["Alice", 30, 123]);
    //    const resultObject = factory.fromArray(resultArray);

    // 結果確認
    expect(object).toEqual({ name: "Alice", age: 30, id: 123 });
    //  expect(resultObject).toEqual(proto);

    // validate() の呼び出し確認
    expect(blueprint.validate).toHaveBeenCalledTimes(1);
    expect(blueprint.validate).toHaveBeenCalledWith(object);
  });
  test("object creation when ParamObject has extra members", () => {
    const invalidObject = { name: "Alice", age: 30, id: 123, extra: true };

    const result = factory.construct(invalidObject);
    expect(result).toEqual({ name: "Alice", age: 30, id: 123 });
    expect(result).not.property("extra");

    // validate() が呼び出されないことを確認
    expect(blueprint.validate).toBeCalledWith(result);
  });
});

describe("ParameterFactory - Invalid Blueprint Scenarios", () => {
  test("throws error when construct() returns the same object", () => {
    const blueprint = createMockBlueprint();
    blueprint.construct = (proto) => proto as MockedParamObject; // 手抜き実装

    const factory = new ParameterFactory(blueprint);
    const proto = { name: "Alice", age: 30, id: 123 };

    // construct() が同じオブジェクトを返した場合のエラー確認
    expect(() => factory.construct(proto)).toThrowError(RETURN_SAME_OBJECT);
  });

  // test("throws error when array-to-object conversion mismatches", () => {
  //   const blueprint = createMockBlueprint();
  //   blueprint.fromArray = ([name, id, age]) => ({
  //     name,
  //     age: id, // age と id を間違える
  //     id: age,
  //   });

  //   const factory = new ParameterFactory(blueprint);
  //   const array = ["Alice", 30, 123] as const;

  //   // fromArray() に問題がある場合のエラー確認
  //   //    expect(() => factory.fromArray(array)).toThrowError(MEMBERS_UNMATCH);
  // });
});
describe("ParameterFactory - Invalid Parameters", () => {
  let factory: ParameterFactory<MockedParamObject, MockedArray>;
  let blueprint: ReturnType<typeof createMockBlueprint>;

  beforeEach(() => {
    blueprint = createMockBlueprint();
    factory = new ParameterFactory(blueprint);
    blueprint.validate = vi.fn();
  });

  test("throws error when ParamObject has incorrect type", () => {
    const invalidObject = { name: "Alice", age: "30", id: 123 }; // age が string

    // 型が間違っている場合のテスト
    expect(() =>
      factory.construct(invalidObject as unknown as MockedParamObject)
    ).toThrowError(MEMBERS_UNMATCH);

    // validate() が呼び出されないことを確認
    expect(blueprint.validate).not.toHaveBeenCalled();
  });

  test("throws error when fromArray() is called with too many elements", () => {
    const invalidArray = ["Alice", 30, 123, "extra"]; // 要素が多い

    // 要素数が多い場合のテスト
    expect(() =>
      factory.fromArray(invalidArray as unknown as MockedArray)
    ).toThrowError(INVALID_ARRAY_LENGTH);

    // validate() が呼び出されないことを確認
    expect(blueprint.validate).not.toHaveBeenCalled();
  });

  test("throws error when fromArray() is called with too few elements", () => {
    const invalidArray = ["Alice", 30]; // 要素が少ない

    // 要素数が少ない場合のテスト
    expect(() =>
      factory.fromArray(invalidArray as unknown as MockedArray)
    ).toThrowError(INVALID_ARRAY_LENGTH);

    // validate() が呼び出されないことを確認
    expect(blueprint.validate).not.toHaveBeenCalled();
  });

  test("throws error when fromArray() is called with incorrect types", () => {
    const invalidArray = ["Alice", "thirty", 123]; // age が string

    // 要素の型が間違っている場合のテスト
    expect(() =>
      factory.fromArray(invalidArray as unknown as MockedArray)
    ).toThrowError(MEMBERS_UNMATCH);

    // validate() が呼び出されないことを確認
    expect(blueprint.validate).not.toHaveBeenCalled();
  });
});
