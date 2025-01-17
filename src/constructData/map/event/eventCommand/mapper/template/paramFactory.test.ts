import { describe, test, expect, beforeEach, vitest } from "vitest";
import { ParameterFactory } from "./parameterFactory";
import type { Blueprint } from "./blueprint";
import { INVALID_ARRAY_LENGTH } from "./errorMessages";

describe("ParameterFactory", () => {
  let mockBlueprint: Blueprint<{ a: string; b: number }, [string, number]>;
  let factory: ParameterFactory<{ a: string; b: number }, [string, number]>;
  beforeEach(() => {
    mockBlueprint = {
      construct: (proto) => {
        return { a: proto.a ?? "default", b: proto.b ?? 0 };
      },
      array: (obj) => {
        return [obj.a, obj.b];
      },
      fromArray: (arr) => {
        return { a: arr[0], b: arr[1] };
      },
      validate: vitest.fn(),
    };
    factory = new ParameterFactory(mockBlueprint);
  });
  test("should create a valid parameter object", () => {
    const arg = { a: "test", b: 1 };
    const param = factory.construct(arg);
    expect(arg).toEqual(arg);
    expect(arg).not.toBe(param);
    expect(param.a).toBe("test");
    expect(param.b).toBe(1);
    expect(mockBlueprint.validate).toHaveBeenCalledWith(param);
  });

  test("should create a valid parameter object with default values", () => {
    const param = factory.construct({});
    expect(param.a).toBe("default");
    expect(param.b).toBe(0);
    expect(mockBlueprint.validate).toHaveBeenCalledWith(param);
  });

  test("should create a valid parameter array", () => {
    const param = factory.array({ a: "test", b: 1 });
    expect(param).toEqual(["test", 1]);
    expect(mockBlueprint.validate).toHaveBeenCalledWith({ a: "test", b: 1 });
  });

  test("should create a valid parameter object from array", () => {
    const param = factory.fromArray(["test", 1]);
    expect(param.a).toBe("test");
    expect(param.b).toBe(1);
    expect(mockBlueprint.validate).toHaveBeenCalledWith(param);
  });

  test("should throw an error when the length of the object is invalid", () => {
    expect(() => factory.validate({})).toThrowError(INVALID_ARRAY_LENGTH);
    expect(mockBlueprint.validate).not.toHaveBeenCalled();
  });

  test("should throw an error when the type of the object is invalid", () => {
    expect(() =>
      factory.validate({ a: 1, b: "test" } as unknown as {
        a: string;
        b: number;
      })
    ).toThrowError("undefined type");
    expect(mockBlueprint.validate).not.toHaveBeenCalled();
  });
});
