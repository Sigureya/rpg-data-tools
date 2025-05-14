import { describe, test, expect } from "vitest";
import { CombinedEventCommandGroup } from "./combined";
import type {
  Command_ScriptBody,
  Command_ScriptHeader,
} from "@sigureya/rpgtypes";
import {
  createEventCommand,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
} from "@sigureya/rpgtypes";

describe("CombinedEventCommandGroup", () => {
  const header = {
    code: SCRIPT_EVAL,
    parameters: ["aaa"],
    indent: 0,
  } satisfies Command_ScriptHeader;
  const bodies = [
    { code: SCRIPT_EVAL_BODY, parameters: ["bbb"], indent: 0 },
    { code: SCRIPT_EVAL_BODY, parameters: ["ccc"], indent: 0 },
  ] satisfies Command_ScriptBody[];
  const group = new CombinedEventCommandGroup(header, bodies);
  test("getBodyText", () => {
    expect(group.getBodyText()).toBe("aaa\nbbb\nccc");
  });

  test("mergedBody", () => {
    const mergedBody: Command_ScriptHeader = group.mergedBody();
    expect(mergedBody).toEqual({
      code: SCRIPT_EVAL,
      parameters: ["aaa\nbbb\nccc"],
      indent: 0,
    } satisfies Command_ScriptHeader);
  });
});

describe("Single command group", () => {
  const group = new CombinedEventCommandGroup(
    createEventCommand(SCRIPT_EVAL, ["abc"]),
    []
  );
  test("should be an instance of CombinedEventCommandGroup", () => {
    expect(group.getBodyText()).toBe("abc");
  });
  test("should normalize commands correctly", () => {
    const expected = [createEventCommand(SCRIPT_EVAL, ["abc"])];
    expect(group.normalizedCommands()).toEqual(expected);
  });
});
