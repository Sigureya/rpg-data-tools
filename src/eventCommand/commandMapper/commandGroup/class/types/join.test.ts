import { describe, test, expect } from "vitest";
import { textFromJoinedBodies } from "./join";
import type { TextCommandBody } from "./textCommandBody";
type PickedTextCommandBody = Pick<TextCommandBody, "parameters">;

describe("textFromJoinedBodies", () => {
  test("empty", () => {
    const result = textFromJoinedBodies([]);
    expect(result).toBe("");
  });

  test("single", () => {
    const result: string = textFromJoinedBodies([
      { parameters: ["aaa"] },
    ] satisfies PickedTextCommandBody[]);
    expect(result).toBe("aaa");
  });

  test("multiple", () => {
    const result: string = textFromJoinedBodies([
      { parameters: ["aaa"] },
      { parameters: ["bbb"] },
    ]);
    expect(result).toBe("aaa\nbbb");
  });
  test("multiple2", () => {
    const result: string = textFromJoinedBodies([
      { parameters: ["aaa\n"] },
      { parameters: ["bbb"] },
    ]);
    expect(result).toBe("aaa\nbbb");
  });

  test("empty string in parameters", () => {
    const result = textFromJoinedBodies([
      { parameters: [""] },
      { parameters: ["aaa"] },
    ]);
    expect(result).toBe("\naaa");
  });

  test("parameters with whitespace only", () => {
    const result = textFromJoinedBodies([
      { parameters: ["   "] },
      { parameters: ["aaa"] },
    ]);
    expect(result).toBe("\naaa");
  });

  test("parameters with special characters", () => {
    const result = textFromJoinedBodies([
      { parameters: ["aaa\nbbb"] },
      { parameters: ["ccc"] },
    ] as PickedTextCommandBody[]);
    expect(result).toBe("aaa\nbbb\nccc");
  });

  test("long strings", () => {
    const longString = "a".repeat(1000);
    const result = textFromJoinedBodies([
      { parameters: [longString] },
      { parameters: ["bbb"] },
    ] as PickedTextCommandBody[]);
    expect(result).toBe(`${longString}\nbbb`);
  });
});
