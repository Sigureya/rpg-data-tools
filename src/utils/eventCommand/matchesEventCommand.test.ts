import { describe, expect, test } from "vitest";
import { isAudioCommand, isImageCommand } from "./matchesEventCommand";
import * as RpgTypes from "@sigureya/rpgtypes";
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
const playBGM: RpgTypes.Command_PlayBGM = createMockAudioCommand(
  RpgTypes.PLAY_BGM
);
const playBGS: RpgTypes.Command_PlayBGS = createMockAudioCommand(
  RpgTypes.PLAY_BGS
);
const playME: RpgTypes.Command_PlayME = createMockAudioCommand(
  RpgTypes.PLAY_ME
);
const playSE: RpgTypes.Command_PlaySE = createMockAudioCommand(
  RpgTypes.PLAY_SE
);
const changeBattleBGM: RpgTypes.Command_ChangeBattleBGM =
  createMockAudioCommand(RpgTypes.CHANGE_BATTLE_BGM);
const changeVictoryME: RpgTypes.Command_ChangeVictoryME =
  createMockAudioCommand(RpgTypes.CHANGE_VICTORY_ME);
const changeDefeatME: RpgTypes.Command_ChangeDefeatME = createMockAudioCommand(
  RpgTypes.CHANGE_DEFEAT_ME
);
const audioCommands = [
  playBGM,
  playBGS,
  playME,
  playSE,
  changeBattleBGM,
  changeVictoryME,
  changeDefeatME,
];
const showPicture: RpgTypes.Command_ShowPicture = {
  code: RpgTypes.SHOW_PICTURE,
  parameters: [1, "test", 0, 0, 100, 100, 255, 0, 0],
  indent: 0,
};

const changeActorImages: RpgTypes.Command_ChangeActorImages = {
  code: RpgTypes.CHANGE_ACTOR_IMAGES,
  parameters: [1, "character", 0, "face", 100, "sv"],
  indent: 0,
};

const changeVehicleImage: RpgTypes.Command_ChangeVehicleImage = {
  code: RpgTypes.CHANGE_VEHICLE_IMAGE,
  parameters: [0, "test", 0],
  indent: 0,
};

const imageCommands = [showPicture, changeActorImages, changeVehicleImage];

describe("isAudioCommand", () => {
  test("playBGM", () => {
    expect(isAudioCommand(playBGM)).toBe(true);
  });
  test("playBGS", () => {
    expect(isAudioCommand(playBGS)).toBe(true);
  });
  test("playME", () => {
    expect(isAudioCommand(playME)).toBe(true);
  });
  test("playSE", () => {
    expect(isAudioCommand(playSE)).toBe(true);
  });
  test("changeBattleBGM", () => {
    expect(isAudioCommand(changeBattleBGM)).toBe(true);
  });
  test("changeVictoryME", () => {
    expect(isAudioCommand(changeVictoryME)).toBe(true);
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
    expect(isImageCommand(showPicture)).toBe(true);
  });
  test("changeActorImages", () => {
    expect(isImageCommand(changeActorImages)).toBe(true);
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
