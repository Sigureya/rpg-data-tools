import { describe, test, expect } from "vitest";
import { createMessageGroup, extractMessageGroup } from "./message";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@sigureya/rpgtypes";
import {
  makeCommand2_CommonEvent,
  makeCommandShowMessage,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  type EventCommand,
} from "@sigureya/rpgtypes";
import type { EventCommandGroupBase } from "./types";
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

describe("", () => {
  const mockCommands: EventCommand[] = [
    makeCommand2_CommonEvent({ eventId: 6 }),
    makeCommandShowMessage({
      facename: "face",
      speakerName: "speaker",
    }),
    { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
    { code: 401, parameters: ["bbb"], indent: 0 },
    { code: 401, parameters: ["ccc"], indent: 0 },
    makeCommand2_CommonEvent({ eventId: 10 }),
  ];
  const result = createMessageGroup(mockCommands, 1);
  describe("", () => {
    expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    test("", () => {
      expect(result.getBodyText()).toBe("aaa\nbbb\nccc");
    });
    test("", () => {
      expect(result.mergedBody()).toEqual({
        code: SHOW_MESSAGE_BODY,
        indent: 0,
        parameters: ["aaa\nbbb\nccc"],
      });
    });
    test("", () => {
      const newCommands: EventCommand[] = result.normalizedCommands();
      const expectedCommands: EventCommand[] = [
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        { code: SHOW_MESSAGE_BODY, parameters: ["aaa\nbbb\nccc"], indent: 0 },
      ];
      expect(newCommands).toEqual(expectedCommands);
    });
  });
  describe("", () => {
    const expected: EventCommandGroupBase<
      Command_ShowMessageHeader,
      Command_ShowMessageBody
    > = {
      header: makeCommandShowMessage({
        facename: "face",
        speakerName: "speaker",
      }),
      bodies: [
        { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
        { code: 401, parameters: ["bbb"], indent: 0 },
        { code: 401, parameters: ["ccc"], indent: 0 },
      ] satisfies Command_ShowMessageBody[],
    };
    test("", () => {
      expect(extractMessageGroup(mockCommands, 1)).toEqual(expected);
    });
    test("", () => {
      expect(result).toMatchObject(expected);
    });
  });
});
