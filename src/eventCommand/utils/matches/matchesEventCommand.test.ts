import { describe, expect, test } from "vitest";
import { isAudioCommand, isImageCommand } from "./matchesEventCommand";
import * as RmmzMock from "@sigureya/rmmzmock";
const audioCommands = [
  RmmzMock.MockPlayBGM,
  RmmzMock.MockPlayBGS,
  RmmzMock.MockPlayME,
  RmmzMock.MockPlaySE,
  RmmzMock.MockChangeBattleBGM,
  RmmzMock.MockChangeVictoryME,
  RmmzMock.MockChangeDefeatME,
];

const imageCommands = [
  RmmzMock.MockShowPicture,
  RmmzMock.MockChangeActorImages,

  RmmzMock.MockChangeVehicleImage,
];

describe("isAudioCommand", () => {
  test("playBGM", () => {
    expect(isAudioCommand(RmmzMock.MockPlayBGM)).toBe(true);
  });
  test("playBGS", () => {
    expect(isAudioCommand(RmmzMock.MockPlayBGS)).toBe(true);
  });
  test("playME", () => {
    expect(isAudioCommand(RmmzMock.MockPlayME)).toBe(true);
  });
  test("playSE", () => {
    expect(isAudioCommand(RmmzMock.MockPlaySE)).toBe(true);
  });
  test("changeBattleBGM", () => {
    expect(isAudioCommand(RmmzMock.MockChangeBattleBGM)).toBe(true);
  });
  test("changeVictoryME", () => {
    expect(isAudioCommand(RmmzMock.MockChangeVictoryME)).toBe(true);
  });
  test("changeDefeatME", () => {
    expect(isAudioCommand(RmmzMock.MockChangeDefeatME)).toBe(true);
  });

  test("filter", () => {
    expect(audioCommands.filter(isAudioCommand)).toEqual(audioCommands);
  });
  test("filter2", () => {
    expect(imageCommands.filter(isAudioCommand)).toEqual([]);
  });
});

describe("isImageCommand", () => {
  test("showMessage", () => {
    expect(isImageCommand(RmmzMock.MockShowMessage)).toBe(true);
  });
  test("showPicture", () => {
    expect(isImageCommand(RmmzMock.MockShowPicture)).toBe(true);
  });
  test("changeActorImages", () => {
    expect(isImageCommand(RmmzMock.MockChangeActorImages)).toBe(true);
  });
  test("changeVehicleImage", () => {
    expect(isImageCommand(RmmzMock.MockChangeVehicleImage)).toBe(true);
  });

  test("fileter", () => {
    expect(imageCommands.filter(isImageCommand)).toEqual(imageCommands);
  });

  test("audio commands are not image commands", () => {
    expect(audioCommands.filter(isImageCommand)).toEqual([]);
  });
});
