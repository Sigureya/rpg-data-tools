import type {
  EventCommand,
  Command_ShowMessageHeader,
} from "@sigureya/rpgtypes";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { createMessageGroup } from "src/eventCommand";
import { test, expect, describe } from "vitest";
import { extractTextParamFromMessage } from "./message";
import type { TextCommandParameter } from "./types";

const test2 = (command: EventCommand[], expected: TextCommandParameter) => {
  test("", () => {
    const group = createMessageGroup(command, 0);
    const result = extractTextParamFromMessage(group);
    expect(result satisfies typeof expected).toEqual(expected);
  });
};

describe("extractTextParamFromMessage", () => {
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx "),
      makeCommandShowMessageBody("yyy"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx\nyyy",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx\nyyy"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx\nyyy",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
});
describe("", () => {
  const command: Command_ShowMessageHeader = makeCommandShowMessage({
    speakerName: "abc",
  });
  test("", () => {
    const group = createMessageGroup([command], 0);
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual({
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "",
      paramIndex: 0,
    } satisfies typeof result);
  });
});
