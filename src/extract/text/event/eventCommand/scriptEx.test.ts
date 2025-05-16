import { describe, expect, test } from "vitest";

import { literalsFromScript } from "./scriptEx";

describe("literalsFromScript", () => {
  test("empty", () => {
    const result = literalsFromScript("");
    expect(result).toEqual([]);
  });

  test("single backtick", () => {
    const result = literalsFromScript("`hello`");
    expect(result).toEqual(["hello"]);
  });

  test("single double quote", () => {
    const result = literalsFromScript('"hello"');
    expect(result).toEqual(["hello"]);
  });

  test("single single quote", () => {
    const result = literalsFromScript("'hello'");
    expect(result).toEqual(["hello"]);
  });

  test("multiple quotes", () => {
    const result = literalsFromScript(
      "`hello` 'world' \"test\" `example` 'sample'"
    );
    expect(result).toEqual(["hello", "world", "test", "example", "sample"]);
  });
});
