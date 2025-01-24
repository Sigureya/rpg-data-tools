import { Command_ChangeName, Command_ChangeNickName, Command_ChangeProfile, Command_ChoiceWhen, Command_CommentBody, Command_ShowChoices, Command_ShowScrollingText, EventCommand } from '@sigureya/rpgtypes';
import { MessageProxy } from './commandProxy';
import { CallBackFunc } from './callbackFunction';
export interface TextCommandMapper<T> {
    showMessage(proxy: MessageProxy): T;
    showChoices: CallBackFunc<Command_ShowChoices, T>;
    choiceWhen: CallBackFunc<Command_ChoiceWhen, T>;
    showScrollingText: CallBackFunc<Command_ShowScrollingText, T>;
    changeName: CallBackFunc<Command_ChangeName, T>;
    changeProfile: CallBackFunc<Command_ChangeProfile, T>;
    changeNickname: CallBackFunc<Command_ChangeNickName, T>;
    commentBody: CallBackFunc<Command_CommentBody, T>;
    other: CallBackFunc<EventCommand, T>;
}
export declare const mapTextCommand: <T>(list: ReadonlyArray<EventCommand>, table: TextCommandMapper<T>) => T[];
