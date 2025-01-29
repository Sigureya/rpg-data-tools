import { describe, test, expect } from "vitest";
import { isBodyParams, isHeadCommand } from "./pickCommands";
import { codeTest } from "./commandCheck";

describe("codeTest", () => {
  test("true", () => {
    expect(codeTest(108, { code: 108, parameters: [], indent: 0 })).toBe(true);
  });
  test("false", () => {
    expect(codeTest(108, { code: 118, parameters: [], indent: 0 })).toBe(false);
  });
});

describe("isBodyParams", () => {
  test("true", () => {
    expect(isBodyParams(["aaa"])).toBe(true);
  });
  test("false", () => {
    expect(isBodyParams(["aaa", "bbb"])).toBe(false);
    expect(isBodyParams([1])).toBe(false);
  });
});
describe("isHeadCoomand", () => {
  test("true", () => {
    expect(
      isHeadCommand(108, { code: 108, parameters: ["aaa"], indent: 0 })
    ).toBe(true);
  });
  test("false", () => {
    expect(
      isHeadCommand(108, { code: 118, parameters: ["aaa"], indent: 0 })
    ).toBe(false);
  });
});

// describe("pickCommands", () => {
//   const commands: EventCommand[] = [
//     { code: 108, parameters: ["Command 1"], indent: 0 },
//     { code: 108, parameters: ["Command 2"], indent: 0 },
//     { code: 108, parameters: ["Command 3"], indent: 0 },
//   ];
//   test("pick", () => {
//     const result = pickCommands(108, commands, 0);
//     expect(result).toHaveLength(3);
//     expect(result[0].parameters).toEqual(["Command 1"]);
//     expect(result[1].parameters).toEqual(["Command 2"]);
//     expect(result[2].parameters).toEqual(["Command 3"]);
//   });
//   test("not pick", () => {
//     expect(pickCommands(109, commands, 0)).toHaveLength(0);
//     expect(pickCommands(108, commands, commands.length)).toHaveLength(0);
//   });
// });
