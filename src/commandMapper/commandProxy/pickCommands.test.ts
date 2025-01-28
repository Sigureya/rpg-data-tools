import { describe, test, expect } from "vitest";
import {
  codeTest,
  isBodyParams,
  isHeadCoomand,
  joinBodys,
  pickComments,
  pickMessageWithHead,
  pickScripts,
  pickScrollText,
  pickCommands,
} from "./pickCommands";
import type { Command_ShowMessageBody, EventCommand } from "@sigureya/rpgtypes";

describe("codeTest", () => {
  test("true", () => {
    expect(codeTest(108, { code: 108, parameters: [], indent: 0 })).toBe(true);
  });
  test("false", () => {
    expect(codeTest(108, { code: 118, parameters: [], indent: 0 })).toBe(false);
  });
});

describe("isHeadCoomand", () => {
  test("true", () => {
    expect(
      isHeadCoomand(108, { code: 108, parameters: ["aaa"], indent: 0 })
    ).toBe(true);
  });
  test("false", () => {
    expect(
      isHeadCoomand(108, { code: 118, parameters: ["aaa"], indent: 0 })
    ).toBe(false);
  });
});

describe("joinBodys", () => {
  test("join", () => {
    const array: Command_ShowMessageBody[] = [
      { code: 401, parameters: ["aaa"], indent: 0 },
      { code: 401, parameters: ["bbb"], indent: 0 },
    ];
    expect(joinBodys(array)).toBe("aaa\nbbb");
  });
});

describe("pickMessageWithHead", () => {
  const commands: EventCommand[] = [
    { code: 101, parameters: ["", 0, 0, 2, ""], indent: 0 },
    { code: 401, parameters: ["aaa"], indent: 0 },
    { code: 401, parameters: ["bbb"], indent: 0 },
    { code: 401, parameters: ["ccc"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickMessageWithHead(commands, 0);
    expect(result).not.toBeUndefined();
    expect(result?.head.code).toBe(101);
    expect(result?.head.parameters).toEqual(["", 0, 0, 2, ""]);
    expect(result?.bodys).toHaveLength(3);
    expect(result?.bodys[0].parameters).toEqual(["aaa"]);
    expect(result?.bodys[1].parameters).toEqual(["bbb"]);
    expect(result?.bodys[2].parameters).toEqual(["ccc"]);
  });
  test("not pick", () => {
    expect(pickMessageWithHead(commands, 1)).toBeUndefined();
    expect(pickMessageWithHead(commands, commands.length)).toBeUndefined();
  });
});
