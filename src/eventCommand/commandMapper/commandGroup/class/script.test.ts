import { describe, test, expect } from "vitest";
import { createScriptGroup, extractScriptGroup } from "./script";

import type {
  Command_ScriptBody,
  Command_ScriptHeader,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  makeCommandScriptBody,
  makeCommandScriptHeader,
  SCRIPT_EVAL,
  makeCommand2_CommonEvent,
} from "@sigureya/rpgtypes";
import { CombinedEventCommandGroup } from "./types";

const mockCommands: EventCommand[] = [
  makeCommand2_CommonEvent({ eventId: 6 }),
  makeCommandScriptHeader("const a=0;"),
  makeCommandScriptBody("const b=1;"),
  makeCommandScriptBody("const c=2;"),
  makeCommand2_CommonEvent({ eventId: 8 }),
];

describe("extractScriptGroup - Validation Tests", () => {
  const expected = {
    header: makeCommandScriptHeader("const a=0;"),
    bodies: [
      makeCommandScriptBody("const b=1;"),
      makeCommandScriptBody("const c=2;"),
    ] satisfies Command_ScriptBody[],
  };

  test("should extract a valid script group", () => {
    expect(extractScriptGroup(mockCommands, 1)).toEqual(expected);
  });

  const result = extractScriptGroup(mockCommands, 1);

  test("should extract the correct header", () => {
    expect(result.header).toEqual(expected.header);
  });

  test("should extract the correct bodies", () => {
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createScriptGroup - CombinedEventCommandGroup Creation", () => {
  const result = createScriptGroup(mockCommands, 1);
  const expectedScript = "const a=0;\nconst b=1;\nconst c=2;" as const;

  describe("CombinedEventCommandGroup instance validation", () => {
    test("should create an instance of CombinedEventCommandGroup", () => {
      expect(result).toBeInstanceOf(CombinedEventCommandGroup);
    });
    test("should return correct body text", () => {
      expect(result.getBodyText()).toEqual(expectedScript);
    });

    test("should return correct merged body", () => {
      const mergedBody: Command_ScriptHeader = result.mergedBody();
      expect(mergedBody).toEqual({
        code: SCRIPT_EVAL,
        indent: 0,
        parameters: [expectedScript],
      } satisfies Command_ScriptHeader);
    });

    test("should return normalized commands", () => {
      const newCommands: [Command_ScriptHeader] = result.normalizedCommands();
      const expectedCommands: EventCommand[] = [
        {
          code: SCRIPT_EVAL,
          indent: 0,
          parameters: [expectedScript],
        } satisfies Command_ScriptHeader,
      ];
      expect(newCommands).toEqual(expectedCommands);
      expect(newCommands).not.toBe(result.header);
    });
  });
});
