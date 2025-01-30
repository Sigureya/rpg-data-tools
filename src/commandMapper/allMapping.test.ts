import { describe, expect, test, vi } from "vitest";
import type { MappingObject } from "./allCommandsMapper";
import * as CMD from "@sigureya/rpgtypes";
import { mappingCommand } from "./allMapping";

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
});
