import { describe, expect, test, vi } from "vitest";
import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  replaceEventCommands,
  replacePages,
  replaceMapEvents,
  replaceCommonEvents,
  replaceTroops,
} from "./utils";

// Helper function to create a mock EventCommand
const createMockCommand = (code: number, params: any[] = []): EventCommand => ({
  code,
  indent: 0,
  parameters: params,
});

// Simple transformation function: increments command code
const mockTransform = (commands: ReadonlyArray<EventCommand>): EventCommand[] =>
  commands.map((cmd) => ({
    ...cmd,
    code: cmd.code + 1,
  }));

describe("replaceEventCommands", () => {
  test("should replace commands using the provided function", () => {
    const event = { list: [createMockCommand(100), createMockCommand(101)] };
    const result = replaceEventCommands(event, mockTransform);

    expect(result.list).toEqual([
      { code: 101, indent: 0, parameters: [] },
      { code: 102, indent: 0, parameters: [] },
    ]);
  });

  test("should return a new object with modified list", () => {
    const event = { list: [createMockCommand(200)] };
    const result = replaceEventCommands(event, mockTransform);

    expect(result).not.toBe(event);
    expect(result.list).not.toBe(event.list);
  });
});

describe("replacePages", () => {
  test("should replace commands across multiple pages", () => {
    const container = {
      pages: [
        { list: [createMockCommand(300)] },
        { list: [createMockCommand(301)] },
      ],
    };
    const result = replacePages(container, mockTransform);

    expect(result.pages).toEqual([
      { list: [{ code: 301, indent: 0, parameters: [] }] },
      { list: [{ code: 302, indent: 0, parameters: [] }] },
    ]);
  });
});

describe("replaceMapEvents", () => {
  test("should replace commands for all map events", () => {
    const map = {
      events: [
        { pages: [{ list: [createMockCommand(400)] }] },
        null,
        { pages: [{ list: [createMockCommand(401)] }] },
      ],
    };
    const result = replaceMapEvents(map, mockTransform);

    expect(result.events).toEqual([
      { pages: [{ list: [{ code: 401, indent: 0, parameters: [] }] }] },
      null,
      { pages: [{ list: [{ code: 402, indent: 0, parameters: [] }] }] },
    ]);
  });

  test("should preserve null values in event list", () => {
    const map = {
      events: [null, { pages: [{ list: [createMockCommand(500)] }] }],
    };
    const result = replaceMapEvents(map, mockTransform);

    expect(result.events[0]).toBeNull();
    expect(result.events[1]?.pages[0].list[0].code).toBe(501);
  });
});

describe("replaceCommonEvents", () => {
  test("should replace commands in common events", () => {
    const events: Data_CommonEvent[] = [
      { id: 1, list: [createMockCommand(600)] },
      { id: 2, list: [createMockCommand(601)] },
    ];
    const result = replaceCommonEvents([null, ...events], mockTransform);

    expect(result).toEqual([
      null,
      { id: 1, list: [{ code: 601, indent: 0, parameters: [] }] },
      { id: 2, list: [{ code: 602, indent: 0, parameters: [] }] },
    ]);
  });
});

describe("replaceTroops", () => {
  test("should replace commands in troop pages", () => {
    const troops: Data_Troop[] = [
      { id: 10, pages: [{ list: [createMockCommand(700)] }] },
      { id: 11, pages: [{ list: [createMockCommand(701)] }] },
    ];
    const result = replaceTroops([null, ...troops], mockTransform);

    expect(result).toEqual([
      null,
      { id: 10, pages: [{ list: [{ code: 701, indent: 0, parameters: [] }] }] },
      { id: 11, pages: [{ list: [{ code: 702, indent: 0, parameters: [] }] }] },
    ]);
  });
});
