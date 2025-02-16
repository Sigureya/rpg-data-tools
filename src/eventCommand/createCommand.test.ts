import { describe, expect, test } from "vitest";
import { createEventCommand } from "./createCommand";
import type { Command_PlayBGM } from "@sigureya/rpgtypes";

describe("createCommand", () => {
  test("playBgm", () => {
    const command: Command_PlayBGM = createEventCommand(241, [
      {
        name: "Battle1",
        volume: 90,
        pitch: 100,
        pan: 0,
      },
    ]);
    const expected: Command_PlayBGM = {
      code: 241,
      indent: 0,
      parameters: [
        {
          name: "Battle1",
          volume: 90,
          pitch: 100,
          pan: 0,
        },
      ],
    };
    expect(command).toEqual(expected);
  });
});
