import * as Types from "@sigureya/rpgtypes";
import { describe, expect, test } from "vitest";
import { normalizedCommands } from "./groupMerge";
import { CHOICE_HELP_TEXT } from "./commandGroup";

const MockJoinedText = "The quick\nbrown fox\njumps over" as const;

const createMockCommand = <
  Code extends Types.PickCommandByParam<[string]>["code"]
>(
  code: Code,
  textList = ["The quick", "brown fox", "jumps over"]
) =>
  textList.map((s) => ({
    code,
    indent: 0,
    parameters: [s] as [string],
  }));

const testCommandRemoval = (
  name: string,
  command: Types.PickCommandByParam<[string]>
) => {
  test(`code:${command.code} (${name}) should be removed`, () => {
    const result = normalizedCommands([command]);
    expect(result).toEqual([[]]);
    expect(result.flat()).toEqual([]);
  });
};

describe("Body-only commands should be removed", () => {
  testCommandRemoval("showMessageBody", {
    code: Types.SHOW_MESSAGE_BODY,
    indent: 0,
    parameters: ["abcd"],
  });
  testCommandRemoval("scrollingTextBody", {
    code: Types.SHOW_SCROLLING_TEXT_BODY,
    indent: 0,
    parameters: ["abcd"],
  });
  testCommandRemoval("commentBody", {
    code: Types.COMMENT_BODY,
    indent: 0,
    parameters: ["abcd"],
  });
  testCommandRemoval("scriptBody", {
    code: Types.SCRIPT_EVAL_BODY,
    indent: 0,
    parameters: ["abcd"],
  });
});
const testCommandMerge = (
  name: string,
  commands: [Types.EventCommand, ...Types.PickCommandByParam<[string]>[]],
  expectedBody: Types.PickCommandByParam<[string]>
) => {
  test(`code:${commands[0].code} (${name}) should be merged`, () => {
    const result: Types.EventCommand[][] = normalizedCommands(commands);
    const flat: Types.EventCommand[] = result.flat();
    expect(flat.length).lessThanOrEqual(commands.length);
    expect(flat[0]).toMatchObject(commands[0]);
    expect(flat).toMatchObject([commands[0], expectedBody]);
  });
};

describe("case showMessage", () => {
  testCommandMerge(
    "showMessage",
    [
      {
        code: Types.SHOW_MESSAGE,
        indent: 0,
        parameters: ["test", 0, 0, 0, "speaker"],
      },
      ...createMockCommand(Types.SHOW_MESSAGE_BODY),
    ],
    {
      code: Types.SHOW_MESSAGE_BODY,
      indent: 0,
      parameters: [MockJoinedText],
    }
  );
  testCommandMerge(
    "showMessage2",
    [
      {
        code: Types.SHOW_MESSAGE,
        indent: 0,
        parameters: ["test", 0, 0, 0, "speaker"],
      },
      ...createMockCommand(Types.SHOW_MESSAGE_BODY, ["Hello world!"]),
    ],
    {
      code: Types.SHOW_MESSAGE_BODY,
      indent: 0,
      parameters: ["Hello world!"],
    }
  );
});

describe("case showScrollingText", () => {
  testCommandMerge(
    "showScrollingText",
    [
      {
        code: Types.SHOW_SCROLLING_TEXT,
        indent: 0,
        parameters: [0, false],
      },
      ...createMockCommand(Types.SHOW_SCROLLING_TEXT_BODY),
    ],
    {
      code: Types.SHOW_SCROLLING_TEXT_BODY,
      indent: 0,
      parameters: [MockJoinedText],
    }
  );
});
describe("選択肢ヘルプ", () => {
  testCommandMerge(
    "選択肢ヘルプ",
    [
      {
        code: Types.COMMENT,
        indent: 0,
        parameters: [CHOICE_HELP_TEXT],
      },
      ...createMockCommand(Types.COMMENT_BODY),
    ],
    {
      code: Types.COMMENT_BODY,
      indent: 0,
      parameters: [MockJoinedText],
    }
  );
});

const testCommandMergeToSingle = <
  Head extends Types.PickCommandByParam<[string]>,
  Body extends Exclude<Types.PickCommandByParam<[string]>, Head>
>(
  name: string,
  commands: [Head, ...Body[]],
  expectedBody: Head
) => {
  const code = commands[0].code;
  test(`code:${code} (${name}) should be merged`, () => {
    const result = normalizedCommands(commands);

    const flat = result.flat();

    expect(flat).toMatchObject([expectedBody]);
    expect(flat.length).toBe(1);
  });
};

describe("case comment", () => {
  testCommandMergeToSingle(
    "comment",
    [
      {
        code: Types.COMMENT,
        indent: 0,
        parameters: ["John Doe"],
      },
      ...createMockCommand(Types.COMMENT_BODY),
    ],
    {
      code: Types.COMMENT,
      indent: 0,
      parameters: ["John Doe\n" + MockJoinedText],
    }
  );
});
describe("case script", () => {
  testCommandMergeToSingle(
    "script",
    [
      {
        code: Types.SCRIPT_EVAL,
        indent: 0,
        parameters: ["console.log('Hello World')"],
      },
      ...createMockCommand(Types.SCRIPT_EVAL_BODY),
    ],
    {
      code: Types.SCRIPT_EVAL,
      indent: 0,
      parameters: ["console.log('Hello World')\n" + MockJoinedText],
    }
  );
});
