import type * as Types from "@sigureya/rpgtypes";
import { describe, expect, test } from "vitest";
import { normalizedCommands } from "./groupMerge";

describe("groupJoin", () => {
  describe("body単体は消せるか？", () => {
    test("commentBody", () => {
      const mockComment: Types.Command_CommentBody = {
        code: 408,
        indent: 0,
        parameters: ["test"],
      };
      const result = normalizedCommands([mockComment]);
      expect(result).toEqual([]);
    });
    test("scrollingTextBody", () => {
      const mockScrollingText: Types.Command_ShowScrollingTextBody = {
        code: 405,
        indent: 0,
        parameters: ["abcd"],
      };
      const result = normalizedCommands([mockScrollingText]);
      expect(result).toEqual([]);
    });
  });

  describe("case showMessage", () => {
    test("showMessage", () => {
      const command: Types.Command_ShowMessage = {
        code: 101,
        indent: 0,
        parameters: ["test", 0, 0, 0, "speaker"],
      };
      const result = normalizedCommands([command]);
      expect(result).toEqual([command]);
    });
  });
});
