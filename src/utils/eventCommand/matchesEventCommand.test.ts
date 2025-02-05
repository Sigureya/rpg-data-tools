import { describe, expect, test } from "vitest";
import { isAudioCommand, isImageCommand } from "./matchesEventCommand";
import * as RpgTypes from "@sigureya/rpgtypes";
import * as RmmzMock from "@sigureya/rmmzmock";
const mockAudio: RpgTypes.AudioFileParams = {
  name: "test",
  pan: 0,
  pitch: 100,
  volume: 100,
};
const createMockAudioCommand = <Code extends RpgTypes.EventCode>(
  code: Code
) => ({
  code,
  parameters: [mockAudio] as [RpgTypes.AudioFileParams],
  indent: 0,
});
const changeDefeatME: RpgTypes.Command_ChangeDefeatME = createMockAudioCommand(
  RpgTypes.CHANGE_DEFEAT_ME
);
const audioCommands = [
  RmmzMock.MockPlayBGM,
  RmmzMock.MockPlayBGS,
  RmmzMock.MockPlayME,
  RmmzMock.MockPlaySE,
  RmmzMock.MockChangeBattleBGM,
  RmmzMock.MockChangeVictoryME,
  changeDefeatME,
];
const changeVehicleImage: RpgTypes.Command_ChangeVehicleImage = {
  code: RpgTypes.CHANGE_VEHICLE_IMAGE,
  parameters: [0, "test", 0],
  indent: 0,
};

const imageCommands = [
  RmmzMock.MockShowPicture,
  RmmzMock.MockChangeActorImages,
  changeVehicleImage,
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
    expect(isAudioCommand(changeDefeatME)).toBe(true);
  });

  test("filter", () => {
    expect(audioCommands.filter(isAudioCommand)).toEqual(audioCommands);
  });
  test("filter2", () => {
    expect(imageCommands.filter(isAudioCommand)).toEqual([]);
  });
});

describe("isImageCommand", () => {
  test("showPicture", () => {
    expect(isImageCommand(RmmzMock.MockShowPicture)).toBe(true);
  });
  test("changeActorImages", () => {
    expect(isImageCommand(RmmzMock.MockChangeActorImages)).toBe(true);
  });
  test("changeVehicleImage", () => {
    expect(isImageCommand(changeVehicleImage)).toBe(true);
  });

  test("fileter", () => {
    expect(imageCommands.filter(isImageCommand)).toEqual(imageCommands);
  });

  test("audio commands are not image commands", () => {
    expect(audioCommands.filter(isImageCommand)).toEqual([]);
  });
});
