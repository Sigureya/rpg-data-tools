import type * as Types from "@sigureya/rpgtypes";
import { describe, expect, test } from "vitest";
import { normalizedCommands } from "./groupMerge";

const MockJoinedText = "ふるいけや\nかわずとびこむ\nみずのおと" as const;
const createMockCommand = <
  Code extends Types.PickCommandByParam<[string]>["code"]
>(
  code: Code,
  textList = ["ふるいけや", "かわずとびこむ", "みずのおと"]
) =>
  textList.map((s) => ({
    code,
    indent: 0,
    parameters: [s] as [string],
  }));

const sss = (name: string, command: Types.PickCommandByParam<[string]>) => {
  test(`code:${command.code} ${name}`, () => {
    const result: Types.EventCommand[][] = normalizedCommands([command]);
    expect(result).toEqual([]);
  });
};

describe("groupJoin", () => {
  describe("body単体は消せるか？", () => {
    sss("showMessageBody", {
      code: 401,
      indent: 0,
      parameters: ["abcd"],
    });
    test("scrollingTextBody", () => {
      const mockScrollingText: Types.Command_ShowScrollingTextBody = {
        code: 405,
        indent: 0,
        parameters: ["abcd"],
      };
      const result: Types.EventCommand[][] = normalizedCommands([
        mockScrollingText,
      ]);
      expect(result.flat()).toEqual([]);
    });
  });
});
describe("case showMessage", () => {
  test("showMessage", () => {
    const command: Types.Command_ShowMessage = {
      code: 101,
      indent: 0,
      parameters: ["test", 0, 0, 0, "speaker"],
    };
    const bodies: Types.Command_ShowMessageBody[] = createMockCommand(401);
    const result: Types.EventCommand[][] = normalizedCommands([
      command,
      ...bodies,
    ]);
    expect<Types.EventCommand[]>(result.flat()).toMatchObject([
      command,
      {
        code: 401,
        indent: 0,
        parameters: [MockJoinedText],
      } as Types.Command_ShowMessageBody,
    ]);
  });
});
describe("case comment", () => {
  test("comment", () => {
    const command: Types.Command_Comment = {
      code: 108,
      indent: 0,
      parameters: ["松尾芭蕉"],
    };
    const bodies: Types.Command_CommentBody[] = createMockCommand(408);
    const result: Types.EventCommand[][] = normalizedCommands([
      command,
      ...bodies,
    ]);
    expect(result.flat()).toMatchObject([
      {
        code: 108,
        indent: 0,
        parameters: ["松尾芭蕉\n" + MockJoinedText],
      } as Types.Command_Comment,
    ]);
  });
});
