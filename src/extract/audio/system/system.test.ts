import { describe, expect, test } from "vitest";
import {
  makeSoundsArray,
  type AudioFileParams,
  type System_AudioFiles,
  type System_SoundsArray,
} from "@sigureya/rpgtypes";
import { systemAudioFiles } from "./system";
import type { SystemSoundPath } from "./types";

const crateAudio = (name: string): AudioFileParams => ({
  name,
  pan: 50,
  pitch: 100,
  volume: 100,
});
// const sounds = makeSoundsArray({});
const mockSystem: System_AudioFiles & {
  sounds: System_SoundsArray;
} = {
  sounds: makeSoundsArray({}),
  battleBgm: { name: "battle", pan: 50, pitch: 100, volume: 100 },
  titleBgm: { name: "title", pan: 50, pitch: 100, volume: 100 },
  defeatMe: { name: "defeat", pan: 50, pitch: 100, volume: 100 },
  gameoverMe: { name: "gameover", pan: 50, pitch: 100, volume: 100 },
  victoryMe: { name: "victory", pan: 50, pitch: 100, volume: 100 },
};

describe("systemAudioFiles", () => {
  const { sounds, bgm, me } = systemAudioFiles(mockSystem);
  test("bgm", () => {
    expect(bgm).toEqual([
      { index: 0, path: "battle" },
      { index: 1, path: "title" },
    ]);
  });
  test("me", () => {
    expect(me).toEqual([
      { index: 0, path: "defeat" },
      { index: 1, path: "gameover" },
      { index: 2, path: "victory" },
    ]);
  });
  test("sounds", () => {
    const expected: SystemSoundPath[] = mockSystem.sounds.map(
      (sound, index) => ({
        path: sound.name,
        index,
      })
    );
    expect(sounds).toEqual(expected);
  });
});
