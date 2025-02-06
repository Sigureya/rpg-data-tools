import type { EventCommand } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { pickScripts } from "./commandScript";
import { ERROR_INVALID_HEAD } from "./errors";

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
    expect(() => pickScripts(commands, 1)).toThrowError(ERROR_INVALID_HEAD);
    expect(() => pickScripts(commands, commands.length)).toThrowError(
      ERROR_INVALID_HEAD
    );
  });
});
