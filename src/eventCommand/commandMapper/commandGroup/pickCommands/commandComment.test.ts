import type { EventCommand } from "@sigureya/rpgtypes";
import { COMMENT_HEAD as COMMENT, COMMENT_BODY } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { pickComments } from "./commandComment";
import { ERROR_INVALID_HEAD } from "./errors";

describe("pickComments", () => {
  const commands: EventCommand[] = [
    { code: COMMENT, parameters: ["Command 1"], indent: 0 },
    { code: COMMENT_BODY, parameters: ["Command 2"], indent: 0 },
    { code: COMMENT_BODY, parameters: ["Command 3"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickComments(commands, 0);
    expect(result).not.toBeUndefined();
    expect(result?.head.code).toBe(COMMENT);
    expect(result?.bodys).toHaveLength(2);
    expect(result?.bodys[0].parameters).toEqual(["Command 2"]);
    expect(result?.bodys[1].parameters).toEqual(["Command 3"]);
  });
  // test("not pick", () => {
  //   expect(pickComments(commands, 1)).toThrowError(
  //     new Error(`msg: ${108} index: 1`)
  //   );
  //   expect(pickComments(commands, commands.length)).toThrowError(
  //     new Error(`msg: ${108} index: 1`)
  //   );
  // });
});
describe("pickComments", () => {
  const commands: EventCommand[] = [
    { code: COMMENT, parameters: ["Command 1"], indent: 0 },
    { code: COMMENT_BODY, parameters: ["Command 2"], indent: 0 },
    { code: COMMENT_BODY, parameters: ["Command 3"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickComments(commands, 0);
    expect(result).not.toBeUndefined();
    expect(result?.head.code).toBe(COMMENT);
    expect(result?.bodys).toHaveLength(2);
    expect(result?.bodys[0].parameters).toEqual(["Command 2"]);
    expect(result?.bodys[1].parameters).toEqual(["Command 3"]);
  });
  test("not pick - invalid start index", () => {
    expect(() => pickComments(commands, 1)).toThrowError(ERROR_INVALID_HEAD);
  });
  test("not pick - out of bounds start index", () => {
    expect(() => pickComments(commands, commands.length)).toThrowError(
      ERROR_INVALID_HEAD
    );
  });
});
