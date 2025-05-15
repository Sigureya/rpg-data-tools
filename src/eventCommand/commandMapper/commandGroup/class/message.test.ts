import { describe, test, expect } from "vitest";
import { createMessageGroup } from "./message";
import type {
  Command_ShowMessage,
  ParamArray_ShowMessage,
} from "@sigureya/rpgtypes";
import {
  makeCommandShowMessage,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  type EventCommand,
} from "@sigureya/rpgtypes";
import { SimpleEventCommandGroup } from "./types";

describe("makeCommmand", () => {
  test("createMessageGroup", () => {
    const command: Command_ShowMessage = makeCommandShowMessage({});
    const expected: Command_ShowMessage = {
      code: SHOW_MESSAGE,
      parameters: ["", 0, 0, 2, ""],
      indent: 0,
    };
    expect(command).toEqual(expected);
  });
});
describe("createMessageGroup", () => {
  describe("", () => {
    const mockCommands: EventCommand[] = [
      makeCommandShowMessage({
        facename: "face",
        speakerName: "speaker",
      }),
      { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
      { code: 401, parameters: ["bbb"], indent: 0 },
      { code: 401, parameters: ["ccc"], indent: 0 },
    ];
    const group = createMessageGroup(mockCommands, 0);
    test("group", () => {
      expect(group).instanceOf(SimpleEventCommandGroup);
      expect(group.header.code).toBe(SHOW_MESSAGE);
      expect(group.header.parameters).toEqual([
        "face",
        0,
        0,
        2,
        "speaker",
      ] satisfies ParamArray_ShowMessage);
      expect(group.bodies).toHaveLength(3);
      expect(group.bodies[0].code).toBe(SHOW_MESSAGE_BODY);
      expect(group.bodies[0].parameters).toEqual(["aaa"]);
      expect(group.bodies[1].code).toBe(401);
      expect(group.bodies[1].parameters).toEqual(["bbb"]);
      expect(group.bodies[2].code).toBe(401);
      expect(group.bodies[2].parameters).toEqual(["ccc"]);
    });
    test("getBodyText", () => {
      expect(group.getBodyText()).toBe("aaa\nbbb\nccc");
    });
    test("mergedBody", () => {
      expect(group.mergedBody()).toEqual({
        code: SHOW_MESSAGE_BODY,
        indent: 0,
        parameters: ["aaa\nbbb\nccc"],
      });
    });
    test("normalizedCommands", () => {
      expect(group.normalizedCommands()).toEqual([
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        { code: SHOW_MESSAGE_BODY, parameters: ["aaa\nbbb\nccc"], indent: 0 },
      ]);
    });
  });
});
