import { describe, expect, test } from "vitest";
import {
  isVariableDesignationCommand,
  variableReference as vdResult,
} from "./variableDesignation";
import * as RpgTypes from "@sigureya/rpgtypes";
import * as RpgMock from "@sigureya/rmmzmock";
import type { EventCommand } from "@sigureya/rpgtypes";
import type {
  VariableReference,
  VariableDesignation_ChangeEnemyHP,
  VariableDesignationCommands,
} from "./types";

type ExpectedReference = Pick<VariableReference, "code" | "variableId">;

const testVariableDesignationCommand = (
  testName: string,
  command: VariableDesignationCommands,
  expected: ExpectedReference
) => {
  describe(`${testName} (code: ${command.code})`, () => {
    test("should identify command as a variable designation", () => {
      expect(isVariableDesignationCommand(command)).toBe(true);
    });
    test("should extract correct variable reference", () => {
      expect(vdResult(command)).toMatchObject(expected);
    });
  });
};

describe("Variable Designation Command Tests", () => {
  describe("Valid cases", () => {
    describe("Change Enemy HP", () => {
      test("should return false for direct value assignment", () => {
        const direct: RpgTypes.Command_ChangeEnemyHP = {
          code: RpgTypes.CHANGE_ENEMY_HP,
          parameters: [0, 0, 0, 0, 0],
          indent: 0,
        };
        expect(isVariableDesignationCommand(direct)).toBe(false);
      });

      const variable: VariableDesignation_ChangeEnemyHP = {
        code: RpgTypes.CHANGE_ENEMY_HP,
        parameters: [0, 0, 1, 0, 233],
        indent: 0,
      };
      testVariableDesignationCommand("ChangeEnemyHP - variable", variable, {
        code: RpgTypes.CHANGE_ENEMY_HP,
        variableId: 233,
      });
    });
  });

  describe("Invalid cases", () => {
    const list: EventCommand[] = [
      RpgMock.MockPlayBGM,
      RpgMock.MockPlayBGS,
      RpgMock.MockPlayME,
      RpgMock.MockPlaySE,
    ];

    test("should return false for non-variable designation commands", () => {
      expect(list.filter(isVariableDesignationCommand)).toEqual([]);
    });

    test.each(list)(`code: $code - should return false`, (command) => {
      expect(isVariableDesignationCommand(command)).toBe(false);
      // 万が一、不正なデータが混入した際に例外を投げることができるか？
      expect(() => vdResult(command as VariableDesignationCommands)).toThrow();
    });
  });
});
