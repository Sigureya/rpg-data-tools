import { describe, test, expect } from "vitest";
import { SimpleEventCommandGroup } from "./simple";
import {
  createEventCommand,
  makeCommandShowMessage,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  EventCommand,
} from "@sigureya/rpgtypes";

const testSimpleEventCommandGroup = (
  bodyTexts: [string, ...string[]],
  expectedText: string,
  header: Command_ShowMessage = makeCommandShowMessage({})
) => {
  const group = new SimpleEventCommandGroup(
    SHOW_MESSAGE_BODY,
    header,
    bodyTexts.map((text) => createEventCommand(SHOW_MESSAGE_BODY, [text]))
  );

  describe("SimpleEventCommandGroup - Body Text and Merged Body Validation", () => {
    test("should return the correct body text", () => {
      expect(group.getBodyText()).toEqual(expectedText);
    });

    const body: Command_ShowMessageBody = group.mergedBody();
    test("should create a merged body", () => {
      expect(body).toBeTruthy();
    });

    test("should create a merged body with the correct parameters", () => {
      expect(body).toEqual({
        code: SHOW_MESSAGE_BODY,
        parameters: [expectedText],
        indent: 0,
      } satisfies Command_ShowMessageBody);
    });

    test("should not include the merged body in the original bodies array", () => {
      expect(group.bodies).not.toContain(body);
    });
  });

  describe("SimpleEventCommandGroup - Normalized Commands Validation", () => {
    const result: EventCommand[] = group.normalizedCommands();
    test("", () => {
      expect(result).toHaveLength(2);
      expect(result.length).toBe(2);
    });

    test("should include a copy of the header in the normalized commands", () => {
      expect(result[0]).toEqual(header);
    });

    test("should not include the original header object in the normalized commands", () => {
      expect(result[0]).not.toBe(header);
    });
  });
};

describe("SimpleEventCommandGroup - General Cases", () => {
  testSimpleEventCommandGroup(["xxx  "], "xxx");
  testSimpleEventCommandGroup(["aaa", "bbb", "ccc"], "aaa\nbbb\nccc");
  testSimpleEventCommandGroup([" aaa", "bbb\n", "ccc  "], " aaa\nbbb\nccc");
});
describe("", () => {
  describe("", () => {
    testSimpleEventCommandGroup(["   "], "");
    testSimpleEventCommandGroup(["\n"], "");
  });

  describe("", () => {
    testSimpleEventCommandGroup(["xxx  "], "xxx");
    testSimpleEventCommandGroup(["aaa\nbbb"], "aaa\nbbb");
  });

  describe("", () => {
    testSimpleEventCommandGroup(["aaa", "bbb", "ccc"], "aaa\nbbb\nccc");

    testSimpleEventCommandGroup([" aaa", "bbb\n", "ccc  "], " aaa\nbbb\nccc");
    testSimpleEventCommandGroup([" aaa\nbbb\n", "ccc  "], " aaa\nbbb\nccc");
  });
});

describe("SimpleEventCommandGroup - Edge Cases", () => {
  describe("Empty bodies array", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      [] as Command_ShowMessageBody[]
    );
    test("", () => {
      //　戻り値は常にobject型なので、この場合はやむを得ず空文字列のbodyを作成する
      const body: Command_ShowMessageBody = group.mergedBody();
      expect(body).not.toBeUndefined();
      expect(body).toEqual({
        code: SHOW_MESSAGE_BODY,
        parameters: [""],
        indent: 0,
      } satisfies Command_ShowMessageBody);
    });
    test("", () => {
      expect(group.getBodyText()).toBe(""); // 空のボディの場合、空文字列を返す
    });
    const normalizedCommands: EventCommand[] = group.normalizedCommands();
    test("", () => {
      expect(normalizedCommands).toEqual([header]); // ボディが空の場合、ヘッダーのみを返す
    });
    test("", () => {
      expect(normalizedCommands).not.toContain(group.header);
    });
  });
});
