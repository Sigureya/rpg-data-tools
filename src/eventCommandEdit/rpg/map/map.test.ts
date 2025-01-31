import { describe, expect, test } from "vitest";
import { locateEventCommands, gatherEventCommandLocators } from "./map";
import type { MapEventLike, MapLike } from "./mapLike";
import type { MapEventContext } from "./mapEventContext";
import type { Command_CommonEvent } from "@sigureya/rpgtypes";
const mockEvnet: MapEventLike = {
  id: 1,
  pages: [
    {
      list: [
        {
          code: 117,
          indent: 0,
          parameters: [8],
        } as Command_CommonEvent,
        {
          code: 117,
          indent: 0,
          parameters: [86],
        } as Command_CommonEvent,
      ],
    },
  ],
};

const mockMap: MapLike = {
  events: [null, mockEvnet, null],
};
describe("locateEventCommands", () => {
  test("should locate commands for a given map event", () => {
    const result = locateEventCommands(mockEvnet);
    const expected: MapEventContext[][] = [
      [
        {
          command: { code: 117, indent: 0, parameters: [8] },
          eventId: 1,
          pageIndex: 0,
        },
        {
          command: { code: 117, indent: 0, parameters: [86] },
          eventId: 1,
          pageIndex: 0,
        },
      ],
    ];

    expect(result).toMatchObject(expected);
  });
});

describe("gatherEventCommandLocators", () => {
  test("should gather command locators for all events in the map", () => {
    const result = gatherEventCommandLocators(mockMap);
    const expected: MapEventContext[] = [
      {
        command: { code: 117, indent: 0, parameters: [8] },
        eventId: 1,
        pageIndex: 0,
      },
      {
        command: { code: 117, indent: 0, parameters: [86] },
        eventId: 1,
        pageIndex: 0,
      },
    ];

    expect(result).toEqual(expected);
  });

  test("should handle maps with no events", () => {
    const map: MapLike = {
      events: [],
    };

    const result = gatherEventCommandLocators(map);
    expect(result).toEqual([]);
  });

  test("should handle events with no pages", () => {
    const map: MapLike = {
      events: [
        {
          id: 1,
          pages: [],
        },
      ],
    };

    const result = gatherEventCommandLocators(map);
    expect(result).toEqual([]);
  });

  test("should handle null or undefined events", () => {
    const map: MapLike = {
      events: [null],
    };

    const result = gatherEventCommandLocators(map);
    expect(result).toEqual([]);
  });
});
