import type {
  AudioFileParams,
  EventCode,
  EventCommand,
  ExtractCommandByParam,
} from "@sigureya/rpgtypes";
import * as RpgTypes from "@sigureya/rpgtypes";

export const matchesEventCommand = <Code extends EventCode>(
  command: EventCommand,
  codeList: ReadonlyArray<Code>
): command is Extract<EventCommand, { code: Code }> => {
  return codeList.includes(command.code as Code);
};
export const isAudioCommand = (
  command: EventCommand
): command is ExtractCommandByParam<[AudioFileParams]> =>
  matchesEventCommand(command, AUDIO_CODE);

const AUDIO_CODE: ReadonlyArray<
  ExtractCommandByParam<[AudioFileParams]>["code"]
> = [
  RpgTypes.PLAY_BGM,
  RpgTypes.PLAY_BGS,
  RpgTypes.PLAY_ME,
  RpgTypes.PLAY_SE,
  RpgTypes.CHANGE_BATTLE_BGM,
  RpgTypes.CHANGE_VICTORY_ME,
  RpgTypes.CHANGE_DEFEAT_ME,
  RpgTypes.CHANGE_VEHICLE_BGM,
];
export const isImageCommand = (command: EventCommand) =>
  matchesEventCommand(command, IMAGE_CODE);

const IMAGE_CODE = [
  RpgTypes.SHOW_PICTURE,
  RpgTypes.CHANGE_ACTOR_IMAGES,
  RpgTypes.CHANGE_VEHICLE_IMAGE,
  RpgTypes.CHANGE_PARALLAX,
  RpgTypes.CHANGE_BATTLE_BACKGROUND,
];
