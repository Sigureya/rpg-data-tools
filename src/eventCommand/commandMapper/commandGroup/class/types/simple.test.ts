import { describe, test, expect } from "vitest";
import { SimpleEventCommandGroup } from "./simple";
import {
  createEventCommand,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  EventCommand,
} from "@sigureya/rpgtypes";

const testXXX = (
  header: Command_ShowMessage,
  xxxx: string[],
  expectedText: string
) => {
  const group = new SimpleEventCommandGroup(
    SHOW_MESSAGE_BODY,
    header,
    xxxx.map((text) => createEventCommand(SHOW_MESSAGE_BODY, [text]))
  );
  describe("", () => {
    test("should return the correct body text", () => {
      expect(group.getBodyText()).toEqual(expectedText);
    });
    const body: Command_ShowMessageBody = group.mergedBody();

    test("", () => {
      expect(body).toEqual({
        code: SHOW_MESSAGE_BODY,
        parameters: [expectedText],
        indent: 0,
      } satisfies Command_ShowMessageBody);
    });
    test("", () => {
      expect(group.bodies).not.toContain(body);
    });
  });
  describe("", () => {
    const result: EventCommand[] = group.normalizedCommands();
    test("", () => {
      expect(result[0]).toEqual(header);
    });
    test("", () => {
      expect(result[0]).not.toBe(header);
    });
  });
};

describe("", () => {
  testXXX(makeCommandShowMessage({}), [], "");
  testXXX(makeCommandShowMessage({}), ["xxx  "], "xxx");
  testXXX(makeCommandShowMessage({}), ["aaa", "bbb", "ccc"], "aaa\nbbb\nccc");
  testXXX(
    makeCommandShowMessage({}),
    [" aaa", "bbb\n", "ccc  "],
    " aaa\nbbb\nccc"
  );
});

describe("SimpleEventCommandGroup - Edge Cases", () => {
  test("Empty bodies array", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      [] as Command_ShowMessageBody[]
    );
    expect(group.getBodyText()).toBe(""); // 空のボディの場合、空文字列を返す
    expect(group.normalizedCommands()).toEqual([header]); // ボディが空の場合、ヘッダーのみを返す
  });

  test("Single body with special characters", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const body: Command_ShowMessageBody = createEventCommand(
      SHOW_MESSAGE_BODY,
      ["Line1\nLine2"]
    );
    const group = new SimpleEventCommandGroup(SHOW_MESSAGE_BODY, header, [
      body,
    ]);
    expect(group.getBodyText()).toBe("Line1\nLine2"); // 改行を含む文字列が正しく結合される
    expect(group.normalizedCommands()).toEqual([header, body]); // 正しい形式で返される
  });

  test("Multiple bodies with special characters", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const bodies: Command_ShowMessageBody[] = [
      createEventCommand(SHOW_MESSAGE_BODY, ["aaa"]),
      createEventCommand(SHOW_MESSAGE_BODY, ["bbb"]),
    ];
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      bodies
    );
    expect(group.getBodyText()).toBe("aaa\nbbb"); // ボディが正しく結合される
    expect(group.normalizedCommands()).toEqual([
      header,
      createEventCommand(SHOW_MESSAGE_BODY, ["aaa\nbbb"]),
    ]);
  });
});
describe("getBodyText", () => {
  test("", () => {
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      makeCommandShowMessage({}),
      [] as Command_ShowMessageBody[]
    );
    expect(group.getBodyText()).toBe("");
  });

  test("", () => {
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      makeCommandShowMessage({}),
      [makeCommandShowMessageBody("aaa   ")]
    );
    expect(group.getBodyText()).toBe("aaa");
  });
  test("should return the correct body text", () => {
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      makeCommandShowMessage({}),
      [makeCommandShowMessageBody("aaa"), makeCommandShowMessageBody("bbb")]
    );
    expect(group.getBodyText()).toBe("aaa\nbbb");
  });
});
