import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT,
  SCRIPT_EVAL,
  SHOW_CHOICES,
  SHOW_CHOICES_ITEM,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
} from "@sigureya/rpgtypes";
import type { EventCommand } from "@sigureya/rpgtypes";
import {
  handleGroupMessage,
  handleGroupScrollingText,
  handleGroupComment,
  handleGroupScript,
} from "./commandGroup";
import type { TextCommandMapper } from "./textCommandMapper";

export const handlerDispatch = <T>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  table: TextCommandMapper<T>
): T => {
  const command = array[index];
  switch (command.code) {
    case SHOW_MESSAGE:
      return handleGroupMessage(array, index, table.showMessage);
    case SHOW_SCROLLING_TEXT:
      return handleGroupScrollingText(array, index, table.showScrollingText);
    case COMMENT:
      return handleGroupComment(array, index, table.comment);
    case SCRIPT_EVAL:
      return handleGroupScript(array, index, table.script);

    case SHOW_CHOICES:
      return table.showChoices(command, index, array);
    case SHOW_CHOICES_ITEM:
      return table.choiceWhen(command, index, array);
    case CHANGE_NAME:
      return table.changeName(command, index, array);
    case CHANGE_PROFILE:
      return table.changeProfile(command, index, array);
    case CHANGE_NICKNAME:
      return table.changeNickname(command, index, array);

    default:
      return table.other(command, index, array);
  }
};

export const mapTextCommand = <T>(
  list: ReadonlyArray<EventCommand>,
  table: TextCommandMapper<T>
) => {
  return list.map<T>((command, index, array) =>
    handlerDispatch(array, index, table)
  );
};
