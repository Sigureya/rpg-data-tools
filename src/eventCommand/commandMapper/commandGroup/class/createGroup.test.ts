import type {
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_Comment,
  Command_CommentBody,
} from "@sigureya/rpgtypes";
import {
  createEventCommand,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  makeCommandShowMessage,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { CHOICE_HELP_TEXT } from "./commentUtils";
import {
  createScriptGroup,
  createMessageGroup,
  createCommentGroup,
} from "./createGroup";
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from "./types";
import type { EventCommandGroup_Script } from "./types/groopTypes";

describe("script", () => {
  describe("Single command group", () => {
    const group: EventCommandGroup_Script = createScriptGroup(
      createEventCommand(355, ["abc"]),
      []
    );
    test("should be an instance of CombinedEventCommandGroup", () => {
      expect(group).instanceOf(CombinedEventCommandGroup);
      expect(group.getBodyText("\n")).toBe("abc");
    });
    test("should normalize commands correctly", () => {
      const expected = [createEventCommand(355, ["abc"])];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
  describe("Multiple command group", () => {
    const group: EventCommandGroup_Script = createScriptGroup(
      createEventCommand(SCRIPT_EVAL, ["aaa"]),
      [
        createEventCommand(SCRIPT_EVAL_BODY, ["bbb"]),
        createEventCommand(655, ["ccc"]),
        createEventCommand(655, ["ddd"]),
      ]
    );
    test("should be an instance of CombinedEventCommandGroup", () => {
      expect(group).instanceOf(CombinedEventCommandGroup);
      expect(group.getBodyText(",")).toBe("aaa,bbb,ccc,ddd");
    });
    test("should normalize commands with combined body text", () => {
      const expected: Command_ScriptHeader[] = [
        createEventCommand(SCRIPT_EVAL, ["aaa\nbbb\nccc\nddd"]),
      ];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
});

describe("message", () => {
  describe("Single message group", () => {
    const head: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "bob",
    });
    const body: Command_ShowMessageBody = createEventCommand(
      SHOW_MESSAGE_BODY,
      ["Dark Confidant"]
    );
    const group = createMessageGroup(head, [body]);
    test("should be an instance of SimpleEventCommandGroup", () =>
      expect(group).instanceOf(SimpleEventCommandGroup));
    test("should return correct body text", () =>
      expect(group.getBodyText(",")).toBe("Dark Confidant"));
    test("should normalize commands correctly", () =>
      expect(group.normalizedCommands()).toEqual([head, body]));
  });

  describe("Multiple message group", () => {
    const head: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "bob",
    });
    const body: Command_ShowMessageBody[] = [
      createEventCommand(SHOW_MESSAGE_BODY, ["Dark Confidant"]),
      createEventCommand(SHOW_MESSAGE_BODY, ["闇の腹心"]),
    ];
    const group = createMessageGroup(head, body);
    const expectedText = "Dark Confidant\n闇の腹心";
    test("should be an instance of SimpleEventCommandGroup", () =>
      expect(group).instanceOf(SimpleEventCommandGroup));
    test("should return correct combined body text", () =>
      expect(group.getBodyText("\n")).toBe(expectedText));
    test("should normalize commands with combined body text", () => {
      const expected: [Command_ShowMessage, Command_ShowMessageBody] = [
        head,
        createEventCommand(SHOW_MESSAGE_BODY, [expectedText]),
      ];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
});

describe("comment", () => {
  describe("Single comment group", () => {
    const head: Command_Comment = createEventCommand(108, ["aaa"]);
    const body: Command_CommentBody = createEventCommand(408, ["bbb"]);
    const group = createCommentGroup(head, [body]);
    test("should be an instance of CombinedEventCommandGroup", () =>
      expect(group).instanceOf(CombinedEventCommandGroup));
    test("should return correct body text", () =>
      expect(group.getBodyText(",")).toBe("aaa,bbb"));
    test("should normalize commands with combined body text", () => {
      expect(group.normalizedCommands()).toEqual([
        createEventCommand(108, ["aaa\nbbb"]),
      ]);
    });
  });
});

describe("comment ex", () => {
  describe("Multiple comment group", () => {
    const head: Command_Comment = createEventCommand(108, [CHOICE_HELP_TEXT]);
    const body: Command_CommentBody[] = [
      createEventCommand(408, ["bbb"]),
      createEventCommand(408, ["ccc"]),
    ];
    const group = createCommentGroup(head, body);
    test("should be an instance of SimpleEventCommandGroup", () =>
      expect(group).instanceOf(SimpleEventCommandGroup));
    test("should return correct combined body text", () =>
      expect(group.getBodyText(",")).toBe("bbb,ccc"));
    test("should normalize commands with combined body text", () => {
      expect(group.normalizedCommands()).toEqual([
        head,
        createEventCommand(408, ["bbb\nccc"]),
      ]);
    });
  });
});
