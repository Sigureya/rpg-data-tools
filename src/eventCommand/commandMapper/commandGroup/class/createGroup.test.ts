import { describe, expect, test } from "vitest";
import {
  createScriptGroup,
  createMessageGroup,
  createCommentGroup,
} from "./createGroup";
import type {
  Command_Comment,
  Command_CommentBody,
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import { makeCommandShowMessage, SHOW_MESSAGE_BODY } from "@sigureya/rpgtypes";
import {
  createEventCommand,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
} from "@sigureya/rpgtypes";
import type { EventCommandGroup_Script } from "./types/groopTypes";
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from "./types";
import { CHOICE_HELP_TEXT } from "./commentUtils";

describe("script", () => {
  describe("", () => {
    const group: EventCommandGroup_Script = createScriptGroup(
      createEventCommand(355, ["abc"]),
      []
    );
    test("", () => {
      expect(group).instanceOf(CombinedEventCommandGroup);
      expect(group.getBodyText("\n")).toBe("abc");
    });
    test("", () => {
      const expected = [createEventCommand(355, ["abc"])];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
  describe("", () => {
    const group: EventCommandGroup_Script = createScriptGroup(
      createEventCommand(SCRIPT_EVAL, ["aaa"]),
      [
        createEventCommand(SCRIPT_EVAL_BODY, ["bbb"]),
        createEventCommand(655, ["ccc"]),
        createEventCommand(655, ["ddd"]),
      ]
    );
    test("", () => {
      expect(group).instanceOf(CombinedEventCommandGroup);
      expect(group.getBodyText(",")).toBe("aaa,bbb,ccc,ddd");
    });
    test("", () => {
      const expected: Command_ScriptHeader[] = [
        createEventCommand(SCRIPT_EVAL, ["aaa\nbbb\nccc\nddd"]),
      ];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
});

describe("message", () => {
  describe("", () => {
    const head: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "bob",
    });
    const body: Command_ShowMessageBody = createEventCommand(
      SHOW_MESSAGE_BODY,
      ["Dark Confidant"]
    );
    const group = createMessageGroup(head, [body]);
    test("", () => expect(group).instanceOf(SimpleEventCommandGroup));
    test("", () => expect(group.getBodyText(",")).toBe("Dark Confidant"));
    test("", () => expect(group.normalizedCommands()).toEqual([head, body]));
  });

  describe("", () => {
    const head: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "bob",
    });
    const body: Command_ShowMessageBody[] = [
      createEventCommand(SHOW_MESSAGE_BODY, ["Dark Confidant"]),
      createEventCommand(SHOW_MESSAGE_BODY, ["闇の腹心"]),
    ];
    const group = createMessageGroup(head, body);
    const expectedText = "Dark Confidant\n闇の腹心";
    test("", () => expect(group).instanceOf(SimpleEventCommandGroup));
    test("", () => expect(group.getBodyText("\n")).toBe(expectedText));
    test("", () => {
      const expected: [Command_ShowMessage, Command_ShowMessageBody] = [
        head,
        createEventCommand(SHOW_MESSAGE_BODY, [expectedText]),
      ];
      expect(group.normalizedCommands()).toEqual(expected);
    });
  });
});

describe("comment", () => {
  describe("", () => {
    const head: Command_Comment = createEventCommand(108, ["aaa"]);
    const body: Command_CommentBody = createEventCommand(408, ["bbb"]);
    const group = createCommentGroup(head, [body]);
    test("", () => expect(group).instanceOf(CombinedEventCommandGroup));
    test("", () => expect(group.getBodyText(",")).toBe("aaa,bbb"));
    test("", () => {
      expect(group.normalizedCommands()).toEqual([
        createEventCommand(108, ["aaa\nbbb"]),
      ]);
    });
  });
});

describe("comment ex", () => {
  describe("", () => {
    const head: Command_Comment = createEventCommand(108, [CHOICE_HELP_TEXT]);
    const body: Command_CommentBody[] = [
      createEventCommand(408, ["bbb"]),
      createEventCommand(408, ["ccc"]),
    ];
    const group = createCommentGroup(head, body);
    test("", () => expect(group).instanceOf(SimpleEventCommandGroup));
    test("", () => expect(group.getBodyText(",")).toBe("bbb,ccc"));
    test("", () => {
      expect(group.normalizedCommands()).toEqual([
        head,
        createEventCommand(408, ["bbb\nccc"]),
      ]);
    });
  });
});
