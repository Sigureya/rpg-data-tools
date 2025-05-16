import { createMessageGroup, type CommandParameter } from "src";
import * as RpgTypes from "@sigureya/rpgtypes";
import type {
  Command_ChangeName,
  Command_ChangeNickName,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@sigureya/rpgtypes";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  SHOW_CHOICES,
  SHOW_MESSAGE_BODY,
  type Command_ShowMessage,
  type EventCommand,
} from "@sigureya/rpgtypes";
import { describe, expect, test } from "vitest";
import {
  extractTextFromEventCommands,
  extractTextParamsFromChoice,
  extractTextParamFromMessage,
} from "./getTextFromCommand";
import type { TextCommandParameter } from "./fitures";
import { extractTextFromActorCommand } from "./fitures/actor";
const MockJoinedText = "The quick\nbrown fox\njumps over" as const;

const createMockCommand = <
  Code extends RpgTypes.PickCommandByParam<[string]>["code"]
>(
  code: Code,
  textList = ["The quick", "brown fox", "jumps over"]
) =>
  textList.map((s) => ({
    code,
    indent: 0,
    parameters: [s] as [string],
  }));

const flattenExtractedText = (s: EventCommand[]) =>
  extractTextFromEventCommands(s).flat();

const test2 = (command: EventCommand[], expected: TextCommandParameter) => {
  test("", () => {
    const group = createMessageGroup(command, 0);
    const result = extractTextParamFromMessage(group);
    expect(result satisfies typeof expected).toEqual(expected);
  });
  test("", () => {
    const result = flattenExtractedText(command);
    expect(result).toEqual([expected] satisfies typeof result);
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
  test("", () => {
    const result: TextCommandParameter[] = flattenExtractedText([command]);
    expect(result).toEqual([]);
  });
});

describe("extractTextParamsFromChoice", () => {
  describe("", () => {
    const command: RpgTypes.Command_ShowChoices =
      RpgTypes.makeCommandSetupChoice({
        choices: [],
      });
    test("", () => {
      const result = extractTextParamsFromChoice(command);
      expect(result).toEqual([]);
    });
    test("", () => {
      const result = flattenExtractedText([command]);
      expect(result).toEqual([]);
    });
  });
  describe("", () => {
    const command: RpgTypes.Command_ShowChoices =
      RpgTypes.makeCommandSetupChoice({
        choices: ["choice1", "choice2"],
      });
    const expected: CommandParameter<string>[] = [
      { code: SHOW_CHOICES, value: "choice1", paramIndex: 0 },
      { code: SHOW_CHOICES, value: "choice2", paramIndex: 1 },
    ];
    test("", () => {
      const result = extractTextParamsFromChoice(command);
      expect(result).toEqual(expected);
    });
    test("", () => {
      const result = flattenExtractedText([command]);
      expect(result).toEqual(expected);
    });
  });
});

describe.skip("extractTextFromEventCommands", () => {
  describe("showMessage", () => {
    test("empty", () => {
      const command: Command_ShowMessage = makeCommandShowMessage({
        speakerName: "abc",
      });
      const result = flattenExtractedText([command]);
      expect(result).toEqual([]);
    });
    test("single", () => {
      const command: [
        RpgTypes.Command_ShowMessage,
        RpgTypes.Command_ShowMessageBody
      ] = [
        makeCommandShowMessage({
          speakerName: "speaker",
        }),
        {
          code: RpgTypes.SHOW_MESSAGE_BODY,
          parameters: ["message"],
          indent: 0,
        },
      ];
      const result = flattenExtractedText(command);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: RpgTypes.SHOW_MESSAGE_BODY,
          value: "message",
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
    test("multi", () => {
      const command: RpgTypes.Command_ShowMessage = makeCommandShowMessage({
        speakerName: "speaker",
      });
      const bodies: RpgTypes.Command_ShowMessageBody[] = createMockCommand(
        RpgTypes.SHOW_MESSAGE_BODY
      );
      const result = flattenExtractedText([command, ...bodies]);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: RpgTypes.SHOW_MESSAGE_BODY,
          value: MockJoinedText,
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
    test("multi with empty", () => {
      const textList = ["", "The quick", "brown fox", "jumps over"];
      const bodies: RpgTypes.Command_ShowMessageBody[] = createMockCommand(
        RpgTypes.SHOW_MESSAGE_BODY,
        textList
      );
      const command: RpgTypes.Command_ShowMessage = {
        code: RpgTypes.SHOW_MESSAGE,
        parameters: ["", 0, 0, 0, "speaker"],
        indent: 0,
      };
      const result = flattenExtractedText([command, ...bodies]);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: RpgTypes.SHOW_MESSAGE_BODY,
          value: textList.join("\n"),
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
  });
  describe("comment", () => {
    test("empty", () => {
      const command: RpgTypes.Command_Comment = {
        code: RpgTypes.COMMENT_HEAD,
        parameters: [""],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.COMMENT_HEAD, value: "", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
      expect(result.length).toEqual(1);
    });
    test("single", () => {
      const command: RpgTypes.Command_Comment = {
        code: RpgTypes.COMMENT_HEAD,
        parameters: ["comment"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.COMMENT_HEAD, value: "comment", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
    });
    test.skip("multi", () => {
      const command: RpgTypes.Command_Comment = {
        code: RpgTypes.COMMENT_HEAD,
        parameters: ["comment"],
        indent: 0,
      };
      const bodies: RpgTypes.Command_Comment[] = createMockCommand(
        RpgTypes.COMMENT_HEAD
      );
      const result = flattenExtractedText([command, ...bodies]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.COMMENT_HEAD, value: "comment", paramIndex: 0 },
        {
          code: RpgTypes.COMMENT_HEAD,
          value: MockJoinedText,
          paramIndex: 0,
        },
      ];
      expect(result[1]).toEqual(expected[1]);
    });
  });

  describe("Character Modifications", () => {
    test("changeName", () => {
      const command: RpgTypes.Command_ChangeName = {
        code: RpgTypes.CHANGE_NAME,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.CHANGE_NAME, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
    test("changeNickname", () => {
      const command: RpgTypes.Command_ChangeNickName = {
        code: RpgTypes.CHANGE_NICKNAME,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.CHANGE_NICKNAME, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
    test("changeProfile", () => {
      const command: RpgTypes.Command_ChangeProfile = {
        code: RpgTypes.CHANGE_PROFILE,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.CHANGE_PROFILE, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("showChoices", () => {
    test("empty", () => {
      const command: RpgTypes.Command_ShowChoices = {
        code: RpgTypes.SHOW_CHOICES,
        parameters: [[], 0, 0, 0, 2],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      expect(result).toEqual([]);
      expect(result.length).toEqual(0);
    });
    test("showChoices", () => {
      const command: RpgTypes.Command_ShowChoices = {
        code: RpgTypes.SHOW_CHOICES,
        parameters: [["choice1", "choice2"], 0, 0, 0, 2],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: RpgTypes.SHOW_CHOICES, value: "choice1", paramIndex: 0 },
        { code: RpgTypes.SHOW_CHOICES, value: "choice2", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
  });
});
