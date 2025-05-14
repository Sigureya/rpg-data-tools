import { describe, test, expect } from "vitest";
import { SimpleEventCommandGroup } from "./simple";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  createEventCommand,
  makeCommandShowMessage,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { createMessageGroup } from "../createGroup";
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
