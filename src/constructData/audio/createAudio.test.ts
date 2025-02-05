import { describe, it, expect } from "vitest";
import { createAudio, createAudioCommand } from "./createAudio";
import * as RpgTypes from "@sigureya/rpgtypes";
describe("createAudio", () => {
  it("should return default audio settings when no arguments are passed", () => {
    const result = createAudio({ name: "BGM", volume: 90, pitch: 100, pan: 0 });
    expect(result).toEqual({
      name: "BGM",
      volume: 90,
      pitch: 100,
      pan: 0,
    });
  });

  it("should override default audio settings with provided arguments", () => {
    const customAudio = { name: "BGM" };
    const result = createAudio(customAudio);
    expect(result.name).toBe("BGM");
    expect(result.volume).toBe(90); // Default value
  });
});
describe("createAudioCommand", () => {
  it("playBgm", () => {
    const result: RpgTypes.Command_PlayBGM = createAudioCommand(
      RpgTypes.PLAY_BGM,
      "BGM"
    );
    const expected: RpgTypes.Command_PlayBGM = {
      code: RpgTypes.PLAY_BGM,
      parameters: [{ name: "BGM", volume: 90, pitch: 100, pan: 0 }],
      indent: 0,
    };
    expect(result).toEqual(expected);
  });
  it("playBgs", () => {
    const result: RpgTypes.Command_PlayBGS = createAudioCommand(
      RpgTypes.PLAY_BGS,
      "BGS"
    );
    const expected: RpgTypes.Command_PlayBGS = {
      code: RpgTypes.PLAY_BGS,
      parameters: [{ name: "BGS", volume: 90, pitch: 100, pan: 0 }],
      indent: 0,
    };
    expect(result).toEqual(expected);
  });
});
