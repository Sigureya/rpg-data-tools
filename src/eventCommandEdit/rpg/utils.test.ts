import { describe, expect, test, vi } from "vitest";
import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  PickCommandByParam,
} from "@sigureya/rpgtypes";
import {
  replaceEventCommands,
  replacePages,
  replaceMapEvents,
  replaceCommonEvents,
  replaceTroops,
} from "./utils";

// Helper function to create a mock EventCommand
const createMockCommand = (
  code: PickCommandByParam<[]>["code"]
): PickCommandByParam<[]> => ({
  code,
  indent: 0,
  parameters: [],
});

// Simple transformation function: increments command code
const mockTransform = (commands: ReadonlyArray<EventCommand>): EventCommand[] =>
  commands.map((cmd) => ({
    ...cmd,
    indent: 8,
  }));

describe("replaceEventCommands", () => {
  test("should replace commands using the provided function", () => {
    const event = { list: [createMockCommand(211), createMockCommand(217)] };
    const result = replaceEventCommands(event, mockTransform);

    expect(result.list).toEqual([
      { code: 211, indent: 8, parameters: [] },
      { code: 217, indent: 8, parameters: [] },
    ]);
  });

  test("should return a new object with modified list", () => {
    const event = { list: [createMockCommand(251)] };
    const result = replaceEventCommands(event, mockTransform);

    expect(result).not.toBe(event);
    expect(result.list).not.toBe(event.list);
  });
});

describe("replacePages", () => {
  test("should replace commands across multiple pages", () => {
    const container = {
      pages: [
        { list: [createMockCommand(113)] },
        { list: [createMockCommand(115)] },
      ],
    };
    const result = replacePages(container, mockTransform);

    expect(result.pages).toEqual([
      { list: [{ code: 113, indent: 8, parameters: [] }] },
      { list: [{ code: 115, indent: 8, parameters: [] }] },
    ]);
  });
});

describe("replaceMapEvents", () => {
  test("should replace commands for all map events", () => {
    const map = {
      events: [
        { pages: [{ list: [createMockCommand(353)] }] },
        null,
        { pages: [{ list: [createMockCommand(109)] }] },
      ],
    };
    const result = replaceMapEvents(map, mockTransform);

    expect(result.events).toEqual([
      { pages: [{ list: [{ code: 353, indent: 8, parameters: [] }] }] },
      null,
      { pages: [{ list: [{ code: 109, indent: 8, parameters: [] }] }] },
    ]);
  });

  test("should preserve null values in event list", () => {
    const map = {
      events: [null, { pages: [{ list: [createMockCommand(213)] }] }],
    };
    const result = replaceMapEvents(map, mockTransform);

    expect(result.events[0]).toBeNull();
    expect(result.events[1]?.pages[0].list[0].code).toBe(213);
  });
});

describe("replaceCommonEvents", () => {
  test("should replace commands in common events", () => {
    const events: Data_CommonEvent[] = [
      { id: 1, list: [createMockCommand(211)], name: "to-kai", trigger: 0 },
      { id: 2, list: [createMockCommand(217)], name: "yokosuka", trigger: 0 },
    ];
    const result = replaceCommonEvents([null, ...events], mockTransform);

    expect(result).toEqual([
      null,
      {
        id: 1,
        list: [{ code: 211, indent: 8, parameters: [] }],
        name: "to-kai",
        trigger: 0,
      } as Data_CommonEvent,
      {
        id: 2,
        list: [
          {
            code: 217,
            indent: 8,
            parameters: [],
          },
        ],
        name: "yokosuka",
        trigger: 0,
      } as Data_CommonEvent,
    ]);
  });
});
// Troopはデータが複雑なので後回しにする
// describe("replaceTroops", () => {
//   test("should replace commands in troop pages", () => {
//     const troops: Data_Troop[] = [
//       {
//         id: 10,
//         members: [],
//         pages: [
//           {
//             list: [createMockCommand(251)],
//             conditions: {
//               actorHp: 0,
//               actorId: 0,
//             },

//             span: 0,
//           },
//         ],
//         name: "to-kai",
//       },
//       { id: 11, pages: [{ list: [createMockCommand(701)] }] },
//     ];
//     const result = replaceTroops([null, ...troops], mockTransform);

//     expect(result).toMatchObject([
//       null,
//       { id: 10, pages: [{ list: [{ code: 701, indent: 8, parameters: [] }] }] },
//       { id: 11, pages: [{ list: [{ code: 702, indent: 8, parameters: [] }] }] },
//     ]);
//   });
// });
