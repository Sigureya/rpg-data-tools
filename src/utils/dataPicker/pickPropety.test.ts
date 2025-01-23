import { describe, expect, vi, test } from "vitest";
import { pickString } from "./pickPropety";

describe("pickPropety", () => {
  const person = {
    name: "John",
    age: 30,
    city: "New York",
  } as const;
  test("pick", () => {
    const result = pickString(person, ["name", "city"], (key, value) => [
      key,
      value,
    ]);
    expect(result).toEqual([
      ["name", "John"],
      ["city", "New York"],
    ]);
  });
  test("call fn", () => {
    const fn = vi.fn();
    pickString(person, ["name", "city"], fn);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[0]).toEqual(["name", "John", person]);
    expect(fn.mock.calls[1]).toEqual(["city", "New York", person]);
  });
});
