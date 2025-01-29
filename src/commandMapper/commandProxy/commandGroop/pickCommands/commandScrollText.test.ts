import type { EventCommand } from "@sigureya/rpgtypes";
import { SHOW_SCROLLING_TEXT } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { pickScrollText } from "./commandScrollText";

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
