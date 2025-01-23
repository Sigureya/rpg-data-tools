import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_BODY,
  SHOW_CHOICES,
  SHOW_CHOICES_ITEM,
  SHOW_MESSAGE,
  SHOW_SCROLLING_TEXT,
} from "@sigureya/rpgtypes";
import type { EventCommand, EventCommandTable } from "@sigureya/rpgtypes";
import { MessageProxy } from "./commandProxy";
import type { CallBackFunc } from "./callbackFunction";

export interface TextCommandMapper<T> {
  showMessage(proxy: MessageProxy): T;
  showChoices: CallBackFunc<EventCommandTable["SHOW_CHOICES"], T>;
  showChoicesItem: CallBackFunc<EventCommandTable["SHOW_CHOICES_ITEM"], T>;
  showScrollingText: CallBackFunc<EventCommandTable["SHOW_SCROLLING_TEXT"], T>;
  changeName: CallBackFunc<EventCommandTable["CHANGE_NAME"], T>;
  changeProfile: CallBackFunc<EventCommandTable["CHANGE_PROFILE"], T>;
  changeNickname: CallBackFunc<EventCommandTable["CHANGE_NICKNAME"], T>;
  commentBody: CallBackFunc<EventCommandTable["COMMENT_BODY"], T>;
  other: CallBackFunc<EventCommand, T>;
}

export const mapTextCommand = <T>(
  list: ReadonlyArray<EventCommand>,
  table: TextCommandMapper<T>
) => {
  return list.map<T>((command, index, array) => {
    switch (command.code) {
      case SHOW_MESSAGE:
        return table.showMessage(new MessageProxy(command, index, array));
      case SHOW_CHOICES:
        return table.showChoices(command, index, array);
      case SHOW_CHOICES_ITEM:
        return table.showChoicesItem(command, index, array);
      case SHOW_SCROLLING_TEXT:
        return table.showScrollingText(command, index, array);
      case CHANGE_NAME:
        return table.changeName(command, index, array);
      case CHANGE_PROFILE:
        return table.changeProfile(command, index, array);
      case CHANGE_NICKNAME:
        return table.changeNickname(command, index, array);
      case COMMENT_BODY:
        return table.commentBody(command, index, array);

      default:
        return table.other(command, index, array);
    }
  });
};
