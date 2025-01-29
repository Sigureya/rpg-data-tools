import { describe, test, expect } from "vitest";
import {
  codeTest,
  isBodyParams,
  isHeadCoomand,
  pickComments,
  pickMessageWithHead,
  pickScripts,
  pickScrollText,
  pickCommands,
} from "./pickCommands";
import { COMMENT, COMMENT_BODY, SHOW_SCROLLING_TEXT } from "@sigureya/rpgtypes";

import type { Command_ShowMessageBody, EventCommand } from "@sigureya/rpgtypes";

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
      isHeadCoomand(108, { code: 108, parameters: ["aaa"], indent: 0 })
    ).toBe(true);
  });
  test("false", () => {
    expect(
      isHeadCoomand(108, { code: 118, parameters: ["aaa"], indent: 0 })
    ).toBe(false);
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
describe("pickScripts", () => {
  const commands: EventCommand[] = [
    { code: 355, parameters: ["console.log('test')"], indent: 0 },
    { code: 655, parameters: ["console.log('test2')"], indent: 0 },
    { code: 655, parameters: ["console.log('test3')"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickScripts(commands, 0);
    expect(result).not.toBeUndefined();
    expect(result?.head.code).toBe(355);
    expect(result?.head.parameters).toEqual(["console.log('test')"]);
    expect(result?.bodys).toHaveLength(2);
    expect(result?.bodys[0].parameters).toEqual(["console.log('test2')"]);
    expect(result?.bodys[1].parameters).toEqual(["console.log('test3')"]);
  });
  test("not pick", () => {
    expect(pickScripts(commands, 1)).toBeUndefined();
    expect(pickScripts(commands, commands.length)).toBeUndefined();
  });
});

describe("pickScrollText", () => {
  const commands: EventCommand[] = [
    { code: SHOW_SCROLLING_TEXT, parameters: [9, false], indent: 0 },
    { code: 405, parameters: ["Scroll text 2"], indent: 0 },
    { code: 405, parameters: ["Scroll text 3"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickScrollText(commands, 0);
    expect(result).not.toBeUndefined();
    expect(result?.head.code).toBe(SHOW_SCROLLING_TEXT);
    expect(result?.bodys).toHaveLength(2);
    expect(result?.bodys[0].parameters).toEqual(["Scroll text 2"]);
    expect(result?.bodys[1].parameters).toEqual(["Scroll text 3"]);
  });
  test("not pick", () => {
    expect(pickScrollText(commands, 1)).toBeUndefined();
    expect(pickScrollText(commands, commands.length)).toBeUndefined();
  });
});

describe("pickCommands", () => {
  const commands: EventCommand[] = [
    { code: 108, parameters: ["Command 1"], indent: 0 },
    { code: 108, parameters: ["Command 2"], indent: 0 },
    { code: 108, parameters: ["Command 3"], indent: 0 },
  ];
  test("pick", () => {
    const result = pickCommands(108, commands, 0);
    expect(result).toHaveLength(3);
    expect(result[0].parameters).toEqual(["Command 1"]);
    expect(result[1].parameters).toEqual(["Command 2"]);
    expect(result[2].parameters).toEqual(["Command 3"]);
  });
  test("not pick", () => {
    expect(pickCommands(109, commands, 0)).toHaveLength(0);
    expect(pickCommands(108, commands, commands.length)).toHaveLength(0);
  });
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
  test("not pick", () => {
    expect(pickComments(commands, 1)).toBeUndefined();
    expect(pickComments(commands, commands.length)).toBeUndefined();
  });
});
