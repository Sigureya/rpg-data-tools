import type {
  EventCommand,
  EventCommandByCode,
  EventCommandTable,
} from "@sigureya/rpgtypes";

type CallBackFunc<Command extends EventCommand, Reulst = void> = (
  command: Command,
  index: number,
  list: ReadonlyArray<EventCommand>
) => Reulst;

type Table = {
  [Code in keyof EventCommandByCode]?: CallBackFunc<EventCommandByCode[Code]>;
};

// interface
interface XXX<T> {
  showMessage: CallBackFunc<EventCommandTable["SHOW_MESSAGE"], T>;
  showChoices: CallBackFunc<EventCommandTable["SHOW_CHOICES"], T>;
  showChoicesItem: CallBackFunc<EventCommandTable["SHOW_CHOICES_ITEM"], T>;
  showscrollingText: CallBackFunc<EventCommandTable["SHOW_SCROLLING_TEXT"], T>;
  changeName: CallBackFunc<EventCommandTable["CHANGE_NAME"], T>;
  changeProfile: CallBackFunc<EventCommandTable["CHANGE_PROFILE"], T>;
  changeNickname: CallBackFunc<EventCommandTable["CHANGE_NICKNAME"], T>;
  other(command: EventCommand): T;
}

const textEvent = () => {};

const xxx = (list: ReadonlyArray<EventCommand>, table: Table) => {
  list.forEach((command, index, array) => {
    const code = command.code;
    if (code === undefined) {
      return;
    }
    const func = table[code];
    if (func === undefined) {
      return;
    }
    func(command as any, index, array);
  });
};
