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

describe("pickCommands", () => {
  describe("", () => {
    const mockFn = makeMockFunctions();
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
    ];
    testPickCommands("valid head with single body", mockFn, commands, 0, {
      head: makeCommandShowMessage({}),
      bodys: [makeCommandShowMessageBody("bbb")],
    });
    test("", () => expect(() => pickEx(commands, 1)).toThrow());
    test("", () => {
      expect(mockFn.head).toHaveBeenCalledTimes(1);
      expect(mockFn.head).toBeCalledWith(commands[0]);
    });
    test("", () => {
      expect(mockFn.body).toHaveBeenCalledTimes(1);
      expect(mockFn.body).toBeCalledWith(commands[1]);
    });
  });
  describe("", () => {
    const mockFn = makeMockFunctions();
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
      makeCommandShowMessageBody("ccc"),
      makeCommand2_CommonEvent({ eventId: 5 }),
    ];
    testPickCommands("valid head with multiple bodies", mockFn, commands, 0, {
      head: makeCommandShowMessage({}),
      bodys: [
        makeCommandShowMessageBody("bbb"),
        makeCommandShowMessageBody("ccc"),
      ],
    });
    test("", () => expect(() => pickEx(commands, 1)).toThrow());
    test("", () => expect(() => pickEx(commands, 2)).toThrow());
    test("", () => expect(() => pickEx(commands, 3)).toThrow());
  });
});

describe("", () => {
  describe("", () => {
    const mockFn = makeMockFunctions();
    test("", () =>
      expect(() =>
        pickCommands<Command_ShowMessageHeader, Command_ShowMessageBody>(
          [],
          0,
          mockFn.head as unknown as typeof isCommandShowMessage,
          mockFn.body as unknown as typeof isCommandShowMessageBody
        )
      ).toThrow());
    test("", () => expect(mockFn.body).toHaveBeenCalledTimes(0));
    test("", () => expect(mockFn.head).toHaveBeenCalledTimes(1));
  });
});

describe("", () => {
  test("", () => {
    const command: Command_ShowMessageHeader = makeCommandShowMessage({});
    expect(isCommandShowMessage(command)).toBe(true);
    expect(isCommandShowMessage(null)).toBe(false);
    expect(isCommandShowMessage(undefined)).toBe(false);
  });
  test("", () => {
    const command: Command_ShowMessageBody = makeCommandShowMessageBody("aaa");
    expect(isCommandShowMessageBody(command)).toBe(true);
    expect(isCommandShowMessageBody(null)).toBe(false);
    expect(isCommandShowMessageBody(undefined)).toBe(false);
  });
  test("", () => {
    const command: Command_CommonEvent = makeCommand2_CommonEvent({
      eventId: 5,
    });
    expect(isCommandShowMessage(command)).toBe(false);
    expect(isCommandShowMessageBody(command)).toBe(false);
  });
});
