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
import type {
  Command_ChangeName,
  Command_ChangeNickName,
  Command_ChangeProfile,
  Command_ChoiceWhen,
  Command_CommentBody,
  Command_ShowChoices,
  EventCommand,
} from "@sigureya/rpgtypes";
import type { CallBackFunc } from "./types";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./commandGroup";
import {
  handleGroupMessage,
  handleGroupScrollingText,
  handleGroupComment,
  handleGroupScript,
} from "./commandGroup";

export interface TextCommandMapper<T> {
  showMessage(groop: EventCommandGroup_Message): T;
  showScrollingText(groop: EventCommandGroup_ScrollingText): T;
  comment(groop: EventCommandGroup_Comment): T;
  script(groop: EventCommandGroup_Script): T;

  showChoices: CallBackFunc<Command_ShowChoices, T>;
  choiceWhen: CallBackFunc<Command_ChoiceWhen, T>;
  changeName: CallBackFunc<Command_ChangeName, T>;
  changeProfile: CallBackFunc<Command_ChangeProfile, T>;
  changeNickname: CallBackFunc<Command_ChangeNickName, T>;
  commentBody: CallBackFunc<Command_CommentBody, T>;

  other: CallBackFunc<EventCommand, T>;
}

export const mapTextCommand = <T>(
  list: ReadonlyArray<EventCommand>,
  table: TextCommandMapper<T>
) => {
  return list.map<T>((command, index, array) => {
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
  });
};
