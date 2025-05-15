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

const testPickCommands = (
  description: string,
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
      isCommandShowMessage,
      isCommandShowMessageBody
    );
    expect(result.head).toEqual(expected.head);
    expect(result.bodys).toEqual(expected.bodys);
  });
};

describe("pickCommands", () => {
  describe("", () => {
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
    ];
    testPickCommands("valid head with single body", commands, 0, {
      head: makeCommandShowMessage({}),
      bodys: [makeCommandShowMessageBody("bbb")],
    });
    test("", () => expect(() => pickEx(commands, 1)).toThrow());
  });
  describe("", () => {
    const commands: EventCommand[] = [
      makeCommandShowMessage({}),
      makeCommandShowMessageBody("bbb"),
      makeCommandShowMessageBody("ccc"),
      makeCommand2_CommonEvent({ eventId: 5 }),
    ];
    testPickCommands("valid head with multiple bodies", commands, 0, {
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
const makeMockFunctions = () => ({
  head: vi.fn(isCommandShowMessage),
  body: vi.fn(isCommandShowMessageBody),
});

const xxxx = (
  array: EventCommand[],
  index: number,
  mock: {
    head: MockedFunction<typeof isCommandShowMessage>;
    body: MockedFunction<typeof isCommandShowMessageBody>;
  }
) => {
  return pickCommands(array, index, mock.head as any, mock.body as any);
};

describe("", () => {
  describe("", () => {
    const mockFn = makeMockFunctions();
    test("", () => expect(() => xxxx([], 0, mockFn)).toThrow());
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
