import type { EventCommand } from "@sigureya/rpgtypes";
import * as Code from "@sigureya/rpgtypes";

import {
  handleGroupMessage,
  handleGroupScrollingText,
  handleGroupComment,
  handleGroupScript,
} from "./commandGroup";
import type { TextCommandMapper } from "./textCommandMapper";

const callHandler = <T>() => {};

export const mappingXX = <T>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  table: TextCommandMapper<T>
): T => {
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
      return table.showChoices(command, index, array);
    case Code.SHOW_CHOICES_ITEM:
      return table.choiceWhen(command, index, array);
    case Code.CHANGE_NAME:
      return table.changeName(command, index, array);
    case Code.CHANGE_PROFILE:
      return table.changeProfile(command, index, array);
    case Code.CHANGE_NICKNAME:
      return table.changeNickname(command, index, array);

    default:
      return table.other(command, index, array);
  }
};
