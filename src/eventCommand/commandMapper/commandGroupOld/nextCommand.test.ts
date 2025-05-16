import { describe, expect, test } from "vitest";
import { nextCommandIsBody } from "./nextCommand";
import type { EventCommand } from "@sigureya/rpgtypes";
import * as RmmzMock from "@sigureya/rmmzmock";
const testNextCommand = (
  testName: string,
  head: EventCommand,
  body: EventCommand
) => {
  describe(testName, () => {
    test("returns true when body follows head", () => {
      expect(nextCommandIsBody([head, body], 0)).toBe(true);
    });
    test("returns false when index is not head", () => {
      expect(nextCommandIsBody([head, body], 1)).toBe(false);
    });
    test("returns false when body is missing", () => {
      expect(nextCommandIsBody([head], 0)).toBe(false);
    });
    test("returns false when next command is unrelated", () => {
      expect(nextCommandIsBody([body, RmmzMock.MockPlayBGM], 0)).toBe(false);
    });
  });
};

describe("nextCommandIsBody", () => {
  testNextCommand(
    "detects Show Message body",
    RmmzMock.MockShowMessage,
    RmmzMock.MockShowMessageBody
  );
  testNextCommand(
    "detects Comment body",
    RmmzMock.MockComment,
    RmmzMock.MockCommentBody
  );
  testNextCommand(
    "detects Script Eval body",
    RmmzMock.MockScriptEvalHead,
    RmmzMock.MockScriptEvalBody
  );
  testNextCommand(
    "detects Show Scrolling Text body",
    RmmzMock.MockShowScrollText,
    RmmzMock.MockShowScrollTextBody
  );
});
