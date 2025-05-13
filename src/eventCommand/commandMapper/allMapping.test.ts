import { describe, expect, test, vi } from "vitest";
import * as CMD from "@sigureya/rpgtypes";
import * as RmmzMock from "@sigureya/rmmzmock";

import { mappingCommand } from "./allMapping";
import type { GroopMapper } from "./commandGroup";
import {
  createMessageGroup,
  type EventCommandGroup_Message,
} from "./commandGroup";
import type { BasicMappingObject } from "./types";

const createMockMapper = <Key extends string & keyof BasicMappingObject<void>>(
  targetKey: Key
) => {
  return {
    [targetKey]: vi.fn<BasicMappingObject<void>[Key]>(),
    other: vi.fn(),
  };
};
const testMapping = <Command extends CMD.EventCommand>(
  key: keyof BasicMappingObject<void>,
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
  testMapping<CMD.Command_ChangeBattleBGM>(
    "changeBattleBGM",
    RmmzMock.MockChangeBattleBGM
  );
  testMapping<CMD.Command_ChangeVictoryME>(
    "changeVictoryME",
    RmmzMock.MockChangeVictoryME
  );
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
  testMapping<CMD.Command_ChangeActorImages>(
    "changeActorImages",
    RmmzMock.MockChangeActorImages
  );
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
    parameters: [0, 0, 0, 0, 0],
  });
  testMapping<CMD.Command_SetEventLocation>("setEventLocation", {
    code: CMD.SET_EVENT_LOCATION,
    indent: 0,
    parameters: [0, 0, 0, 0, 6],
  });
  testMapping<CMD.Command_GameOver>("gameover", RmmzMock.MockGameOver);
  testMapping<CMD.Command_TintScreen>("tintScreen", RmmzMock.MockTintScreen);
  testMapping<CMD.Command_FlashScreen>("flashScreen", RmmzMock.MockFlashScreen);
  testMapping<CMD.Command_ShakeScreen>("shakeScreen", RmmzMock.MockShakeScreen);
  testMapping<CMD.Command_BattleProcessing>(
    "battleProcessing",
    RmmzMock.MockBattleProcessing
  );
  testMapping<CMD.Command_ChangeEncounter>("changeEncounter", {
    code: CMD.CHANGE_ENCOUNTER,
    indent: 0,
    parameters: [0],
  });
  testMapping<CMD.Command_ChangeFormationAccess>(
    "changeFormationAccess",
    RmmzMock.MockChangeFormationAccess
  );
  testMapping<CMD.Command_ChangeMenuAccess>(
    "changeMenuAccess",
    RmmzMock.MockChangeMenuAccess
  );
  testMapping<CMD.Command_ChangeSaveAccess>(
    "changeSaveAccess",
    RmmzMock.MockChangeSaveAccess
  );
  testMapping<CMD.Command_ChangeDefeatME>(
    "changeDefeatME",
    RmmzMock.MockChangeDefeatME
  );
  testMapping<CMD.Command_ChangeVehicleImage>(
    "changeVehicleImage",
    RmmzMock.MockChangeVehicleImage
  );
  testMapping<CMD.Command_ShowPicture>("showPicture", RmmzMock.MockShowPicture);
  testMapping<CMD.Command_MovePicture>("movePicture", RmmzMock.MockMovePicture);
  testMapping<CMD.Command_RotatePicture>(
    "rotatePicture",
    RmmzMock.MockRotatePicture
  );
  testMapping<CMD.Command_TintPicture>("tintPicture", RmmzMock.MockTintPicture);
  testMapping<CMD.Command_ErasePicture>(
    "erasePicture",
    RmmzMock.MockErasePicture
  );
  testMapping<CMD.Command_SetWeatherEffect>("setWeatherEffects", {
    code: CMD.SET_WEATHER_EFFECT,
    indent: 0,
    parameters: ["", 0, 0, false],
  });
  testMapping<CMD.Command_PlayBGM>("playBGM", RmmzMock.MockPlayBGM);
  testMapping<CMD.Command_FadeOutBGM>("fadeOutBGM", RmmzMock.MockFadeOutBGM);
  testMapping<CMD.Command_PlaySE>("playSE", RmmzMock.MockPlaySE);
  testMapping<CMD.Command_StopSE>("stopSE", RmmzMock.MockStopSE);
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

    const mapper = {
      showMessage: vi.fn(),
      other: vi.fn(),
    };
    mappingCommand([command], 0, mapper);
    expect(mapper.showMessage).toHaveBeenCalledTimes(1);
    expect(mapper.showMessage).toHaveBeenCalledWith<
      [EventCommandGroup_Message]
    >(createMessageGroup(command));
  });
});
