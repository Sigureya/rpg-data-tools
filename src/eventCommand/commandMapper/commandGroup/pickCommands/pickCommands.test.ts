import { describe, test, expect } from "vitest";
import { isBodyParams, isHeadCommand, pickHead } from "./pickCommands";
import { codeTest } from "./commandCheck";
import { COMMENT_HEAD as COMMENT } from "@sigureya/rpgtypes";

describe("codeTest", () => {
  test("true", () => {
    expect(codeTest(108, { code: 108, parameters: [], indent: 0 })).toBe(true);
  });
  test("false", () => {
    expect(codeTest(108, { code: 118, parameters: [], indent: 0 })).toBe(false);
  });
});

describe("isBodyParams", () => {
  test("true", () => {
    expect(isBodyParams(["aaa"])).toBe(true);
  });
  test("false", () => {
    expect(isBodyParams(["aaa", "bbb"])).toBe(false);
    expect(isBodyParams([1])).toBe(false);
  });
});
describe("isHeadCoomand", () => {
  test("true", () => {
    expect(
      isHeadCommand(108, { code: 108, parameters: ["aaa"], indent: 0 })
    ).toBe(true);
  });
  test("false", () => {
    expect(
      isHeadCommand(108, { code: 118, parameters: ["aaa"], indent: 0 })
    ).toBe(false);
  });
});

describe("pickHead", () => {
  test("pick", () => {
    expect(() => pickHead([], 0, COMMENT)).toThrowError();
  });
});
