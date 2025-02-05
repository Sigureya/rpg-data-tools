import { describe, expect, test, vi } from "vitest";
import type { MappingObject } from "./allCommandsMapper";
import * as CMD from "@sigureya/rpgtypes";
import { mappingCommand } from "./allMapping";
import {
  createMessageGroup,
  type EventCommandGroup_Message,
} from "./commandGroup";

const createMockMapper = <Key extends string & keyof MappingObject<void>>(
  targetKey: Key
) => {
  return {
    [targetKey]: vi.fn<MappingObject<void>[Key]>(),
    other: vi.fn(),
  };
};
const testMapping = <Command extends CMD.EventCommand>(
  key: keyof MappingObject<void>,
  command: Command
) => {
  test(`${key} should be called with correct arguments`, () => {
    const mapper = createMockMapper(key);
    mappingCommand([command], 0, mapper);
    expect(mapper[key]).toHaveBeenCalledWith(command, 0, [command]);

    // 他の関数が呼ばれていないことを確認
    Object.entries(mapper).forEach(([k, mockFn]) => {
      if (k !== key) {
        expect(mockFn).toHaveBeenCalledTimes(0);
      }
    });
  });
};

describe("mappingCommand", () => {
  const mockAudioFile: CMD.AudioFileParams = {
    name: "name",
    pan: 100,
    pitch: 100,
    volume: 100,
  };
  const mockColor: CMD.ColorRGBA = [0, 0, 0, 0];

  testMapping<CMD.Command_Wait>("wait", {
    code: CMD.WAIT,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_CommonEvent>("commonEvent", {
    code: CMD.COMMON_EVENT,
    indent: 0,
    parameters: [1],
  });
  testMapping<CMD.Command_ChangeBattleBGM>("changeBattleBGM", {
    code: CMD.CHANGE_BATTLE_BGM,
    indent: 0,
    parameters: [mockAudioFile],
  });
  testMapping<CMD.Command_ChangeVictoryME>("changeVictoryME", {
    code: CMD.CHANGE_VICTORY_ME,
    indent: 0,
    parameters: [mockAudioFile],
  });
  testMapping<CMD.Command_ChangeName>("changeName", {
    code: CMD.CHANGE_NAME,
    indent: 0,
    parameters: [1, "name"],
  });
  testMapping<CMD.Command_ChangeProfile>("changeProfile", {
    code: CMD.CHANGE_PROFILE,
    indent: 0,
    parameters: [1, "profile"],
  });
  testMapping<CMD.Command_ChangeNickName>("changeNickname", {
    code: CMD.CHANGE_NICKNAME,
    indent: 0,
    parameters: [1, "nickname"],
  });
  testMapping<CMD.Command_Label>("label", {
    code: CMD.LABEL,
    indent: 0,
    parameters: ["label"],
  });
  testMapping<CMD.Command_LabelJump>("labelJump", {
    code: CMD.LABEL_JUMP,
    indent: 0,
    parameters: ["label"],
  });
  testMapping<CMD.Command_ChangeActorImages>("changeActorImages", {
    code: CMD.CHANGE_ACTOR_IMAGES,
    indent: 0,
    parameters: [0, "", 0, "", 0, ""],
  });
  testMapping<CMD.Command_ChangeWindowColor>("changeWindowColor", {
    code: CMD.CHANGE_WINDOW_COLOR,
    indent: 0,
    parameters: [mockColor],
  });
  testMapping<CMD.Command_ChangeGold>("changeGold", {
    code: CMD.CHANGE_GOLD,
    indent: 0,
    parameters: [0, 0, 0],
  });
  testMapping<CMD.Command_ShowAnimation>("showAnimation", {
    code: CMD.SHOW_ANIMATION,
    indent: 0,
    parameters: [0, 0, 0],
  });

  testMapping<CMD.Command_TransferPlayer>("transferPlayer", {
    code: CMD.TRANSFER_PLAYER,
    indent: 0,
    parameters: [0, 0, 0, 0, 4, 0],
  });
  testMapping<CMD.Command_SetVehicleLocation>("setVehicleLocation", {
    code: CMD.SET_VEHICLE_LOCATION,
    indent: 0,
    parameters: [0, 0, 0, 0],
  });
  testMapping<CMD.Command_SetEventLocation>("setEventLocation", {
    code: CMD.SET_EVENT_LOCATION,
    indent: 0,
    parameters: [0, 0, 0, 0, 6],
  });
  testMapping<CMD.Command_GameOver>("gameover", {
    code: CMD.GAME_OVER,
    indent: 0,
    parameters: [],
  });
  testMapping<CMD.Command_TintScreen>("tintScreen", {
    code: CMD.TINT_SCREEN,
    indent: 0,
    parameters: [mockColor, 0, false],
  });
  testMapping<CMD.Command_FlashScreen>("flashScreen", {
    code: CMD.FLASH_SCREEN,
    indent: 0,
    parameters: [mockColor, 0, false],
  });
  testMapping<CMD.Command_ShakeScreen>("shakeScreen", {
    code: CMD.SHAKE_SCREEN,
    indent: 0,
    parameters: [0, 0, 0, false],
  });
  testMapping<CMD.Command_BattleProcessing>("battleProcessing", {
    code: CMD.BATTLE_PROCESSING,
    indent: 0,
    parameters: [0, 0, false, false],
  });
  testMapping<CMD.Command_ChangeEncounter>("changeEncounter", {
    code: CMD.CHANGE_ENCOUNTER,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_ChangeFormationAccess>("changeFormationAccess", {
    code: CMD.CHANGE_FORMATION_ACCESS,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_ChangeMenuAccess>("changeMenuAccess", {
    code: CMD.CHANGE_MENU_ACCESS,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_ChangeSaveAccess>("changeSaveAccess", {
    code: CMD.CHANGE_SAVE_ACCESS,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_ChangeDefeatME>("changeDefeatME", {
    code: CMD.CHANGE_DEFEAT_ME,
    indent: 0,
    parameters: [mockAudioFile],
  });
  testMapping<CMD.Command_ChangeVehicleImage>("changeVehicleImage", {
    code: CMD.CHANGE_VEHICLE_IMAGE,
    indent: 0,
    parameters: [0, "name", 0],
  });
  testMapping<CMD.Command_ShowPicture>("showPicture", {
    code: CMD.SHOW_PICTURE,
    indent: 0,
    parameters: [0, "pic", 0, 0, 0, 0, 0, 0, 0],
  });
  testMapping<CMD.Command_MovePicture>("movePicture", {
    code: CMD.MOVE_PICTURE,
    indent: 0,
    parameters: [0, 0, 0, 0, 0, 0, 0, 0, false, 0],
  });
  testMapping<CMD.Command_RotatePicture>("rotatePicture", {
    code: CMD.ROTATE_PICTURE,
    indent: 0,
    parameters: [0, 0],
  });
  testMapping<CMD.Command_TintPicture>("tintPicture", {
    code: CMD.TINT_PICTURE,
    indent: 0,
    parameters: [0, mockColor, 0, true],
  });
  testMapping<CMD.Command_ErasePicture>("erasePicture", {
    code: CMD.ERASE_PICTURE,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_SetWeatherEffect>("setWeatherEffects", {
    code: CMD.SET_WEATHER_EFFECT,
    indent: 0,
    parameters: ["", 0, 0, false],
  });
  testMapping<CMD.Command_PlayBGM>("playBGM", {
    code: CMD.PLAY_BGM,
    indent: 0,
    parameters: [mockAudioFile],
  });
  testMapping<CMD.Command_FadeOutBGM>("fadeOutBGM", {
    code: CMD.FADEOUT_BGM,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_PlaySE>("playSE", {
    code: CMD.PLAY_SE,
    indent: 0,
    parameters: [mockAudioFile],
  });
  testMapping<CMD.Command_StopSE>("stopSE", {
    code: CMD.STOP_SE,
    indent: 0,
    parameters: [],
  });
  testMapping<CMD.Command_PlayMovie>("playMovie", {
    code: CMD.PLAY_MOVIE,
    indent: 0,
    parameters: [""],
  });
  // testMapping<CMD.Command_ChangePlayerFollowers>("changePlayerFollowers", {
  //   code: CMD.CHANGE_PLAYER_FOLLOWERS,
  //   indent: 0,
  //   parameters: [0, 0],
  // });

  testMapping<CMD.Command_ChangeTransparency>("changeTransparency", {
    code: CMD.CHANGE_TRANSPARENCY,
    indent: 0,
    parameters: [0],
  });
});
describe("mappingCommand(groop)", () => {
  test("showMessage", () => {
    const command: CMD.Command_ShowMessage = {
      code: CMD.SHOW_MESSAGE,
      indent: 0,
      parameters: ["aaa", 0, 0, 0, ""],
    };

    const mapper = createMockMapper("showMessage");
    mappingCommand([command], 0, mapper);
    expect(mapper.showMessage).toHaveBeenCalledTimes(1);
    expect(mapper.showMessage).toHaveBeenCalledWith<
      [EventCommandGroup_Message]
    >(createMessageGroup(command));
  });
});
