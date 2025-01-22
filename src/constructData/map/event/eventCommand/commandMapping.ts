import type {
  EventCommand,
  EventCommandByCode,
  EventCommandTable,
} from "@sigureya/rpgtypes";
import {
  changeName,
  changeNickname,
  changeProfile,
  commentBody,
  showChoices,
  showChoicesItem,
  showMessage,
  showScrollingText,
} from "./mapper/paramConstants";
import { MessageProxy } from "./commandProxy";

type CallBackFunc<Command extends EventCommand, Reulst = void> = (
  command: Readonly<Command>,
  index: number,
  list: ReadonlyArray<Readonly<EventCommand>>
) => Reulst;

// interface
interface XXX<T> {
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

const xxx = <T>(list: ReadonlyArray<EventCommand>, table: XXX<T>) => {
  return list.map<T>((command, index, array) => {
    switch (command.code) {
      case showMessage.code:
        return table.showMessage(new MessageProxy(command, index, array));
      case showChoices.code:
        return table.showChoices(command, index, array);
      case showChoicesItem.code:
        return table.showChoicesItem(command, index, array);
      case showScrollingText.code:
        return table.showscrollingText(command, index, array);
      case changeName.code:
        return table.changeName(command, index, array);
      case changeProfile.code:
        return table.changeProfile(command, index, array);
      case changeNickname.code:
        return table.changeNickname(command, index, array);
      case commentBody.code:
        return table.commentBody(command, index, array);

      default:
        return table.other(command, index, array);
    }
  });
};
