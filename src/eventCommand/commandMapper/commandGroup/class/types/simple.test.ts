import { describe, test, expect } from "vitest";
import { SimpleEventCommandGroup } from "./simple";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
} from "@sigureya/rpgtypes";
import {
  createEventCommand,
  makeCommandShowMessage,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { createMessageGroup } from "../createGroup";
import type { EventCommandGroup_ScrollingText } from "./groopTypes";
const createScrlloingTextMock = (indent = 0) => {
  return new SimpleEventCommandGroup<
    Command_ShowScrollingText,
    Command_ShowScrollingTextBody
  >(
    405,
    {
      code: 105,
      indent: indent,
      parameters: [0, false],
    },
    ["aaa", "bbb"].map<Command_ShowScrollingTextBody>((text) => ({
      code: 405,
      indent: indent,
      parameters: [text],
    }))
  );
};

describe("message", () => {
  describe("Single message group", () => {
    const head: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "bob",
    });
    const body: Command_ShowMessageBody = createEventCommand(
      SHOW_MESSAGE_BODY,
      ["Dark Confidant"]
    );
    const group = new SimpleEventCommandGroup(SHOW_MESSAGE_BODY, head, [body]);
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

describe("ShowScrollingText", () => {
  const scrollingText: EventCommandGroup_ScrollingText =
    createScrlloingTextMock(2);
  test("normalizedCommands", () => {
    const result = scrollingText.normalizedCommands();
    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
      code: 105,
      indent: 2,
      parameters: [0, false],
    });
    expect(result[1]).toMatchObject<Command_ShowScrollingTextBody>({
      code: 405,
      indent: 2,
      parameters: ["aaa\nbbb"],
    });
  });
});
