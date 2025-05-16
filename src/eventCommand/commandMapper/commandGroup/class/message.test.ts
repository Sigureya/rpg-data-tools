import { describe, test, expect } from "vitest";
import { createMessageGroup, extractMessageGroup } from "./message";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@sigureya/rpgtypes";
import {
  makeCommand2_CommonEvent,
  makeCommandShowMessage,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  type EventCommand,
} from "@sigureya/rpgtypes";
import type { EventCommandGroupBase } from "./types";
import { SimpleEventCommandGroup } from "./types";

const mockCommands: EventCommand[] = [
  makeCommand2_CommonEvent({ eventId: 6 }),
  makeCommandShowMessage({
    facename: "face",
    speakerName: "speaker",
  }),
  { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
  { code: 401, parameters: ["bbb"], indent: 0 },
  { code: 401, parameters: ["ccc"], indent: 0 },
  makeCommand2_CommonEvent({ eventId: 10 }),
];

describe("extractMessageGroup - Validation Tests", () => {
  const expected: EventCommandGroupBase<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  > = {
    header: makeCommandShowMessage({
      facename: "face",
      speakerName: "speaker",
    }),
    bodies: [
      { code: SHOW_MESSAGE_BODY, parameters: ["aaa"], indent: 0 },
      { code: 401, parameters: ["bbb"], indent: 0 },
      { code: 401, parameters: ["ccc"], indent: 0 },
    ] satisfies Command_ShowMessageBody[],
  };

  test("should extract a valid message group", () => {
    expect(extractMessageGroup(mockCommands, 1)).toEqual(expected);
  });

  const result = extractMessageGroup(mockCommands, 1);

  test("should extract the correct header", () => {
    expect(result.header).toEqual(expected.header);
  });

  test("should extract the correct bodies", () => {
    expect(result.bodies).toEqual(expected.bodies);
  });
});

describe("createMessageGroup - SimpleEventCommandGroup Creation", () => {
  const result = createMessageGroup(mockCommands, 1);

  describe("SimpleEventCommandGroup instance validation", () => {
    test("should create an instance of SimpleEventCommandGroup", () => {
      expect(result).toBeInstanceOf(SimpleEventCommandGroup);
    });

    test("should return correct body text", () => {
      expect(result.getBodyText()).toBe("aaa\nbbb\nccc");
    });

    test("should return correct merged body", () => {
      expect(result.mergedBody()).toEqual({
        code: SHOW_MESSAGE_BODY,
        indent: 0,
        parameters: ["aaa\nbbb\nccc"],
      });
    });

    test("should return normalized commands", () => {
      const newCommands: EventCommand[] = result.normalizedCommands();
      const expectedCommands: EventCommand[] = [
        makeCommandShowMessage({
          facename: "face",
          speakerName: "speaker",
        }),
        { code: SHOW_MESSAGE_BODY, parameters: ["aaa\nbbb\nccc"], indent: 0 },
      ];
      expect(newCommands).toEqual(expectedCommands);
    });
  });
});

describe("createMessageGroup", () => {
  test("should create a valid Command_ShowMessage instance", () => {
    const command: Command_ShowMessage = makeCommandShowMessage({});
    const expected: Command_ShowMessage = {
      code: SHOW_MESSAGE,
      parameters: ["", 0, 0, 2, ""],
      indent: 0,
    };
    expect(command).toEqual(expected);
  });
});
