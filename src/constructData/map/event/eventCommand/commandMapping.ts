import type { EventCommand, EventCommandTable } from "@sigureya/rpgtypes";
import { MessageProxy } from "./commandProxy";
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

type CallBackFunc<Command extends EventCommand, Reulst = void> = (
  command: Readonly<Command>,
  index: number,
  list: ReadonlyArray<Readonly<EventCommand>>
) => Reulst;

// interface
interface Mapper<T> {
  showMessage(proxy: MessageProxy): T;
  showChoices: CallBackFunc<EventCommandTable["SHOW_CHOICES"], T>;
  showChoicesItem: CallBackFunc<EventCommandTable["SHOW_CHOICES_ITEM"], T>;
  showscrollingText: CallBackFunc<EventCommandTable["SHOW_SCROLLING_TEXT"], T>;
  changeName: CallBackFunc<EventCommandTable["CHANGE_NAME"], T>;
  changeProfile: CallBackFunc<EventCommandTable["CHANGE_PROFILE"], T>;
  changeNickname: CallBackFunc<EventCommandTable["CHANGE_NICKNAME"], T>;
  commentBody: CallBackFunc<EventCommandTable["COMMENT_BODY"], T>;
  other: CallBackFunc<EventCommand, T>;
}

export const mapTextCommand = <T>(
  list: ReadonlyArray<EventCommand>,
  table: Mapper<T>
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
        return table.showscrollingText(command, index, array);
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
