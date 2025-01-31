import type * as Types from "@sigureya/rpgtypes";
import { describe, expect, test, vi } from "vitest";
import { normalizedCommands } from "./groupJoin";

describe("groupJoin", () => {
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

  test("commentBody", () => {
    const command: Types.Command_CommentBody = {
      code: 408,
      indent: 0,
      parameters: ["test"],
    };
    const result = normalizedCommands([command]);
    expect(result).toEqual([]);
  });
});
