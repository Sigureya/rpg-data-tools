import type { EventCommand } from "@sigureya/rpgtypes";
import { SHOW_SCROLLING_TEXT } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import type { CommandPair_ScrollingText } from "./commandScrollText";
import { ERROR_MESSAGE, pickScrollText } from "./commandScrollText";

const mockCommands: EventCommand[] = [
  { code: SHOW_SCROLLING_TEXT, parameters: [9, false], indent: 0 },
  { code: 405, parameters: ["Scroll text 2"], indent: 0 },
  { code: 405, parameters: ["Scroll text 3"], indent: 0 },
];

describe("pickScrollText valid case", () => {
  test("pick", () => {
    const result = pickScrollText(mockCommands, 0);
    expect(result).not.toBeUndefined();
    expect(result.head.code).toBe(SHOW_SCROLLING_TEXT);
    expect(result.bodys).toHaveLength(2);
    expect(result.bodys[0].parameters).toEqual(["Scroll text 2"]);
    expect(result.bodys[1].parameters).toEqual(["Scroll text 3"]);
  });

  test("missing body commands", () => {
    const incompleteCommands: EventCommand[] = [
      { code: SHOW_SCROLLING_TEXT, parameters: [9, false], indent: 0 },
    ];
    expect(
      pickScrollText(incompleteCommands, 0)
    ).toEqual<CommandPair_ScrollingText>({
      head: { code: SHOW_SCROLLING_TEXT, parameters: [9, false], indent: 0 },
      bodys: [],
    });
  });
});
describe("pickScrollText invalid case", () => {
  test("error case - invalid command at start", () => {
    const invalidCommands: EventCommand[] = [
      { code: 0, parameters: [], indent: 0 },
      { code: 405, parameters: ["Scroll text 2"], indent: 0 },
      { code: 405, parameters: ["Scroll text 3"], indent: 0 },
    ];
    expect(() => pickScrollText(invalidCommands, 0)).toThrowError(
      ERROR_MESSAGE
    );
  });
});
