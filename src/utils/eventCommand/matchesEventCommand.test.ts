import { describe, expect, test } from "vitest";
import { isAudioCommand } from "./matchesEventCommand";
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
describe("isAudioCommand", () => {
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
  const changeDefeatME: RpgTypes.Command_ChangeDefeatME =
    createMockAudioCommand(RpgTypes.CHANGE_DEFEAT_ME);
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
    const list = [
      playBGM,
      playBGS,
      playME,
      playSE,
      changeBattleBGM,
      changeVictoryME,
      changeDefeatME,
    ];
    expect(list.filter(isAudioCommand)).toEqual(list);
  });
});
