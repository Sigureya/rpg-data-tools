import type { EventCommand } from "@sigureya/rpgtypes";
import * as Code from "@sigureya/rpgtypes";

import { handleGroupMessage, handleGroupScrollingText, handleGroupComment, handleGroupScript } from "./commandGroup";
import type { CallBackFunc } from "./types";
import type { MappingObject } from "./allCommandsMapper";

const callHandler = <T, Command extends EventCommand>(command: Command, index: number, array: ReadonlyArray<EventCommand>, handler: CallBackFunc<Command, T> | undefined, fallback: CallBackFunc<EventCommand, T>) => {
  return handler ? handler(command, index, array) : fallback(command, index, array);
};

export const mappingXX = <T>(array: ReadonlyArray<EventCommand>, index: number, table: MappingObject<T>): T => {
  const command: EventCommand = array[index];
  switch (command.code) {
    case Code.SHOW_MESSAGE:
      return handleGroupMessage(array, index, table.showMessage);
    case Code.SHOW_SCROLLING_TEXT:
      return handleGroupScrollingText(array, index, table.showScrollingText);
    case Code.COMMENT:
      return handleGroupComment(array, index, table.comment);
    case Code.SCRIPT_EVAL:
      return handleGroupScript(array, index, table.script);

    case Code.SHOW_CHOICES:
      return callHandler(command, index, array, table.showChoices, table.other);
    case Code.SHOW_CHOICES_ITEM:
      return callHandler(command, index, array, table.choiceWhen, table.other);
    case Code.CHANGE_NAME:
      return callHandler(command, index, array, table.changeName, table.other);
    case Code.CHANGE_PROFILE:
      return callHandler(command, index, array, table.changeProfile, table.other);
    case Code.CHANGE_NICKNAME:
      return callHandler(command, index, array, table.changeNickname, table.other);
    case Code.COMMENT_BODY:
      return callHandler(command, index, array, table.commentBody, table.other);

    case Code.LABEL:
      return callHandler(command, index, array, table.label, table.other);
    case Code.LABEL_JUMP:
      return callHandler(command, index, array, table.labelJump, table.other);
    case Code.COMMON_EVENT:
      return callHandler(command, index, array, table.commonEvent, table.other);
    case Code.CHANGE_BATTLE_BGM:
      return callHandler(command, index, array, table.changeBattleBGM, table.other);
    case Code.CHANGE_VICTORY_ME:
      return callHandler(command, index, array, table.changeVictoryME, table.other);
    case Code.CHANGE_DEFEAT_ME:
      return callHandler(command, index, array, table.changeDefeatME, table.other);
    case Code.CHANGE_SAVE_ACCESS:
      return callHandler(command, index, array, table.changeSaveAccess, table.other);
  }
  return table.other(command, index, array);
};
