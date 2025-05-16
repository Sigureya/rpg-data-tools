import type {
  Command_ChangeName,
  Command_ChangeNickName,
  Command_ChangeActorProfile,
} from "@sigureya/rpgtypes";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
} from "@sigureya/rpgtypes";
import type { CommandParameter } from "src/eventCommand";
import { describe, test, expect } from "vitest";
import { extractTextFromActorCommand } from "./actor";

describe("extractTextFromActorCommand", () => {
  describe("changeName", () => {
    const command: Command_ChangeName = {
      code: CHANGE_NAME,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_NAME,
      value: "name",
      paramIndex: 1,
    };
    test("", () => {
      const result = extractTextFromActorCommand(command);
      expect(result).toEqual(expected satisfies typeof result);
    });
  });
  describe("changeNickname", () => {
    const command: Command_ChangeNickName = {
      code: CHANGE_NICKNAME,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_NICKNAME,
      value: "name",
      paramIndex: 1,
    };
    test("", () => {
      const result = extractTextFromActorCommand(command);
      expect(result).toEqual(expected satisfies typeof result);
    });
  });
  describe("changeProfile", () => {
    const command: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_PROFILE,
      value: "name",
      paramIndex: 1,
    };
    test("", () => {
      const result = extractTextFromActorCommand(command);
      expect(result).toEqual(expected satisfies typeof result);
    });
  });
});
