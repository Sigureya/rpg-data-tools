import { EventCommand, EventCommandTable } from '@sigureya/rpgtypes';
import { MessageProxy } from './commandProxy';
type CallBackFunc<Command extends EventCommand, Reulst = void> = (command: Readonly<Command>, index: number, list: ReadonlyArray<Readonly<EventCommand>>) => Reulst;
interface Mapper<T> {
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
export declare const mapTextCommand: <T>(list: ReadonlyArray<EventCommand>, table: Mapper<T>) => T[];
export {};
