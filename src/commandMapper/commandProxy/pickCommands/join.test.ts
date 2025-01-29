import type { Command_ShowMessageBody } from "@sigureya/rpgtypes";
import { describe, test, expect } from "vitest";
import { joinBodys } from "./join";

describe("joinBodys", () => {
  test("join", () => {
    const array: Command_ShowMessageBody[] = [
      { code: 401, parameters: ["aaa"], indent: 0 },
      { code: 401, parameters: ["bbb"], indent: 0 },
    ];
    expect(joinBodys(array)).toBe("aaa\nbbb");
  });
});
