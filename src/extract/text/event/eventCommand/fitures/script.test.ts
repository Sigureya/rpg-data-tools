import { describe, test, expect } from "vitest";
import { extractTextParamFromScript } from "./script";
import type { EventCommand } from "@sigureya/rpgtypes";
import {
  makeCommandScriptBody,
  makeCommandScriptHeader,
  SCRIPT_EVAL,
} from "@sigureya/rpgtypes";
import { createScriptGroup } from "src/eventCommand";
import type { TextCommandParameter } from "./types";

const test44 = (script: string, command: EventCommand[], index = 0) => {
  const expected: TextCommandParameter = {
    code: SCRIPT_EVAL,
    paramIndex: 0,
    value: script,
  };
  const group = createScriptGroup(command, index);
  const result = extractTextParamFromScript(group);
  test("", () => {
    expect(result).toEqual(expected);
  });
};

describe("", () => {
  describe("", () => test44("", [makeCommandScriptHeader("")]));
  describe("", () => {
    test44("const a=0;", [makeCommandScriptHeader("const a=0;")]);
  });
  describe("", () => {
    const commands = [
      makeCommandScriptHeader("const a=0;"),
      makeCommandScriptHeader("var v=99;"),
    ];
    test44("const a=0;", commands, 0);
    test44("var v=99;", commands, 1);
  });
  describe("", () => {
    const commands = [
      makeCommandScriptHeader("const a=0;"),
      makeCommandScriptHeader("var v=99;"),
      makeCommandScriptBody("alert(v);"),
    ];
    test44("const a=0;", commands, 0);
    test44("var v=99;\nalert(v);", commands, 1);
  });
  describe("", () => {
    const commands = [
      makeCommandScriptHeader("const z=6;"),
      makeCommandScriptBody("const r=3;"),
      makeCommandScriptHeader("var v=99;"),
      makeCommandScriptBody("alert(v);"),
    ];
    test44("const z=6;\nconst r=3;", commands, 0);
    test44("var v=99;\nalert(v);", commands, 2);
  });
});
describe("", () => {
  test("", () => {
    expect(() => {
      createScriptGroup([], 0);
    }).toThrow();
  });
  test("", () => {
    expect(() => {
      createScriptGroup([makeCommandScriptBody("")], 0);
    }).toThrow();
  });
});
