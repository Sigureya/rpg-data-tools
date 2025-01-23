import { Command_ChangeName, Command_ChangeNickname, Command_ChangeProfile, Command_CommentBody, Command_ShowChoices, Command_ShowChoicesItem, Command_ShowScrollingText, EventCommand } from '@sigureya/rpgtypes';
import { MessageProxy } from './commandProxy';
import { CallBackFunc } from './callbackFunction';
export interface TextCommandMapper<T> {
    showMessage(proxy: MessageProxy): T;
    showChoices: CallBackFunc<Command_ShowChoices, T>;
    showChoicesItem: CallBackFunc<Command_ShowChoicesItem, T>;
    showScrollingText: CallBackFunc<Command_ShowScrollingText, T>;
    changeName: CallBackFunc<Command_ChangeName, T>;
    changeProfile: CallBackFunc<Command_ChangeProfile, T>;
    changeNickname: CallBackFunc<Command_ChangeNickname, T>;
    commentBody: CallBackFunc<Command_CommentBody, T>;
    other: CallBackFunc<EventCommand, T>;
}
export declare const mapTextCommand: <T>(list: ReadonlyArray<EventCommand>, table: TextCommandMapper<T>) => T[];
