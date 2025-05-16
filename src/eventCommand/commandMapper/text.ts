import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_HEAD as COMMENT,
  SCRIPT_EVAL,
  SHOW_CHOICES,
  SHOW_CHOICES_ITEM,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
} from "@sigureya/rpgtypes";
import type { EventCommand } from "@sigureya/rpgtypes";
import type { TextCommandMapper } from "./textCommandMapper";
import {
  createMessageGroup,
  createScrollTextGroup,
  createCommentGroup,
  createScriptGroup,
} from "./commandGroup";

export const handlerDispatch = <T>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  table: TextCommandMapper<T>
): T => {
  const command = array[index];
  switch (command.code) {
    case SHOW_MESSAGE:
      return table.showMessage(createMessageGroup(array, index));
    case SHOW_SCROLLING_TEXT:
      return table.showScrollingText(createScrollTextGroup(array, index));
    case COMMENT:
      return table.comment(createCommentGroup(array, index));
    case SCRIPT_EVAL:
      return table.script(createScriptGroup(array, index));

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
): T[] => {
  return list.map<T>((command, index, array) =>
    handlerDispatch(array, index, table)
  );
};
