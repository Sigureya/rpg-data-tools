import type { EventCommand } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { isMessageHeader, pickMessageWithHead } from "./commandMessage";
import { ERROR_COMMAND_MESSAGE } from "./errorConstants";

describe("isMessageHeader", () => {
  const commands: EventCommand[] = [
    { code: 101, parameters: ["", 0, 0, 2, ""], indent: 0 },
  ];
  test("isMessageHeader", () => {
    const result = isMessageHeader(commands[0]);
    expect(result).toBe(true);
  });
  test("isMessageHeader", () => {
    const result = isMessageHeader(undefined);
    expect(result).toBe(false);
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
    expect(result.head.code).toBe(101);
    expect(result.head.parameters).toEqual(["", 0, 0, 2, ""]);
    expect(result.bodys).toHaveLength(3);
    expect(result.bodys[0].parameters).toEqual(["aaa"]);
    expect(result.bodys[1].parameters).toEqual(["bbb"]);
    expect(result.bodys[2].parameters).toEqual(["ccc"]);
  });
  test("not pick", () => {
    expect(() => pickMessageWithHead(commands, 1)).toThrowError(
      ERROR_COMMAND_MESSAGE
    );
    expect(() => pickMessageWithHead(commands, commands.length)).toThrowError(
      ERROR_COMMAND_MESSAGE
    );
  });
});
