import type { MockedFunction } from "vitest";
import { describe, test, expect, vi } from "vitest";
import type { ResultOfPickCommands } from "./pick2";
import { pickCommands } from "./pick2";
import type {
  Command_CommonEvent,
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  isCommandShowMessage,
  isCommandShowMessageBody,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeCommand2_CommonEvent,
} from "@sigureya/rpgtypes";

const pickEx = (
  commands: EventCommand[],
  index: number
): ResultOfPickCommands<Command_ShowMessageHeader, Command_ShowMessageBody> => {
  return pickCommands(
    commands,
    index,
    isCommandShowMessage,
    isCommandShowMessageBody
  );
};
interface MockFunctions {
  head: MockedFunction<typeof isCommandShowMessage>;
  body: MockedFunction<typeof isCommandShowMessageBody>;
}
const makeMockFunctions = (): MockFunctions => ({
  head: vi.fn(isCommandShowMessage),
  body: vi.fn(isCommandShowMessageBody),
});

const testPickCommands = (
  description: string,
  mockFn: MockFunctions,
  commands: EventCommand[],
  index: number,
  expected: ResultOfPickCommands<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  >
) => {
  test(description, () => {
    const result = pickCommands(
      commands,
      index,
      mockFn.head as unknown as typeof isCommandShowMessage,
      mockFn.body as unknown as typeof isCommandShowMessageBody
    );
    expect(result.head).toEqual(expected.head);
    expect(result.bodys).toEqual(expected.bodys);
  });
};

describe("pickCommands  - Normal Cases", () => {
  const commands: EventCommand[] = [
    makeCommandShowMessage({}),
    makeCommandShowMessageBody("bbb"),
  ];
  describe("Invalid cases", () => {
    test("should throw an error when the head is invalid", () => {
      expect(() => pickEx(commands, 1)).toThrow();
    });
    test("should throw an error when index is negative", () => {
      expect(() => pickEx(commands, -1)).toThrow();
    });
    test("should throw an error when index is out of bounds", () => {
      expect(() => pickEx(commands, commands.length)).toThrow();
    });
  });
  describe("Valid cases", () => {
    const mockFn = makeMockFunctions();
    testPickCommands(
      "should pick a valid head with a single body",
      mockFn,
      commands,
      0,
      {
        head: makeCommandShowMessage({}),
        bodys: [makeCommandShowMessageBody("bbb")],
      }
    );
    test("should call head function once with the first command", () => {
      expect(mockFn.head).toHaveBeenCalledTimes(1);
      expect(mockFn.head).toBeCalledWith(commands[0]);
    });
    test("should call body function once with the second command", () => {
      expect(mockFn.body).toHaveBeenCalledTimes(1);
      expect(mockFn.body).toBeCalledWith(commands[1]);
    });
  });

  describe("Valid cases with multiple bodies", () => {
    const mockFn = makeMockFunctions();
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
      makeCommandShowMessageBody("ccc"),
      makeCommand2_CommonEvent({ eventId: 5 }),
      makeCommandShowMessageBody("ddd"),
      makeCommand2_CommonEvent({ eventId: 100 }),
    ];
    testPickCommands(
      "should pick a valid head with multiple bodies",
      mockFn,
      commands,
      0,
      {
        head: makeCommandShowMessage({}),
        bodys: [
          makeCommandShowMessageBody("bbb"),
          makeCommandShowMessageBody("ccc"),
        ],
      }
    );
    describe("Function call validation", () => {
      test("should call head function once with the first command", () => {
        expect(mockFn.head).toHaveBeenCalledTimes(1);
        expect(mockFn.head).toBeCalledWith(commands[0]);
      });

      test("should call body function three times with the correct commands", () => {
        expect(mockFn.body).toHaveBeenCalledTimes(3);
        expect(mockFn.body).toBeCalledWith(commands[1]);
        expect(mockFn.body).toBeCalledWith(commands[2]);
        expect(mockFn.body).toBeCalledWith(commands[3]);
      });
    });

    describe("should throw an error when starting index is not a valid head", () => {
      test("index 1", () => expect(() => pickEx(commands, 1)).toThrow());
      test("index 2", () => expect(() => pickEx(commands, 2)).toThrow());
      test("index 3", () => expect(() => pickEx(commands, 3)).toThrow());
    });
  });
});

describe("pickCommands - Edge cases", () => {
  describe("Empty array handling", () => {
    const mockFn = makeMockFunctions();
    test("should throw an error when the array is empty", () => {
      expect(() =>
        pickCommands(
          [],
          0,
          mockFn.head as unknown as typeof isCommandShowMessage,
          mockFn.body as unknown as typeof isCommandShowMessageBody
        )
      ).toThrow();
    });
    test("should not call body function when the array is empty", () => {
      expect(mockFn.body).toHaveBeenCalledTimes(0);
    });
    test("should call head function once when the array is empty", () => {
      expect(mockFn.head).toHaveBeenCalledTimes(1);
    });
  });
  describe("Empty body handling", () => {
    const mockFn = makeMockFunctions();
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommand2_CommonEvent({ eventId: 5 }),
    ];
    testPickCommands(
      "should pick a valid head with no bodies",
      mockFn,
      commands,
      0,
      {
        head: makeCommandShowMessage({}),
        bodys: [],
      }
    );
  });
});
describe("isCommand** functions", () => {
  test("isCommandShowMessage should correctly identify valid and invalid heads", () => {
    const command: Command_ShowMessageHeader = makeCommandShowMessage({});
    expect(isCommandShowMessage(command)).toBe(true);
    expect(isCommandShowMessage(null)).toBe(false);
    expect(isCommandShowMessage(undefined)).toBe(false);
  });

  test("isCommandShowMessageBody should correctly identify valid and invalid bodies", () => {
    const command: Command_ShowMessageBody = makeCommandShowMessageBody("aaa");
    expect(isCommandShowMessageBody(command)).toBe(true);
    expect(isCommandShowMessageBody(null)).toBe(false);
    expect(isCommandShowMessageBody(undefined)).toBe(false);
  });

  test("isCommandShowMessage and isCommandShowMessageBody should reject unrelated commands", () => {
    const command: Command_CommonEvent = makeCommand2_CommonEvent({
      eventId: 5,
    });
    expect(isCommandShowMessage(command)).toBe(false);
    expect(isCommandShowMessageBody(command)).toBe(false);
  });
});
