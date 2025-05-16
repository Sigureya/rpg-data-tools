import { describe, test, expect } from "vitest";
import { createScrollTextGroup, extractScrollTextGroup } from "./scrollText";
import type {
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  makeCommandScrollingTextHeader,
  makeCommandScrollingTextBody,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import { SimpleEventCommandGroup } from "./types";
import type { EventCommandGroupBase } from "./types";

const mockCommands: EventCommand[] = [
  makeCommandScrollingTextHeader({
    speed: 2,
  }),
  makeCommandScrollingTextBody("Line 1"),
  makeCommandScrollingTextBody("Line 2"),
  makeCommandScrollingTextBody("Line 3"),
];

describe("extractScrollTextGroup - Validation Tests", () => {
  const expected: EventCommandGroupBase<
    Command_ShowScrollingText,
    Command_ShowScrollingTextBody
  > = {
    header: makeCommandScrollingTextHeader({
      speed: 2,
    }),
    bodies: [
      makeCommandScrollingTextBody("Line 1"),
      makeCommandScrollingTextBody("Line 2"),
      makeCommandScrollingTextBody("Line 3"),
    ] satisfies Command_ShowScrollingTextBody[],
  };

  test("should extract a valid scrolling text group", () => {
    expect(extractScrollTextGroup(mockCommands, 0)).toEqual(expected);
  });

  const result = extractScrollTextGroup(mockCommands, 0);

  test("should extract the correct header", () => {
    expect(result.header).toEqual(expected.header);
  });

  test("should extract the correct bodies", () => {
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createScrollTextGroup - SimpleEventCommandGroup Creation", () => {
  const result = createScrollTextGroup(mockCommands, 0);
  const expectedBodyText = "Line 1\nLine 2\nLine 3" as const;

  describe("SimpleEventCommandGroup instance validation", () => {
    test("should create an instance of SimpleEventCommandGroup", () => {
      expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    });

    test("should return correct body text", () => {
      expect(result.getBodyText()).toBe(expectedBodyText);
    });

    test("should return correct merged body", () => {
      const mergedBody: Command_ShowScrollingTextBody = result.mergedBody();
      expect(mergedBody).toEqual({
        code: SHOW_SCROLLING_TEXT_BODY,
        indent: 0,
        parameters: [expectedBodyText],
      } satisfies Command_ShowScrollingTextBody);
    });

    test("should return normalized commands", () => {
      const newCommands: EventCommand[] = result.normalizedCommands();
      const expectedCommands: EventCommand[] = [
        makeCommandScrollingTextHeader({
          speed: 2,
        }),
        {
          code: SHOW_SCROLLING_TEXT_BODY,
          indent: 0,
          parameters: [expectedBodyText],
        },
      ];
      expect(newCommands).toEqual(expectedCommands);
    });
  });
});
