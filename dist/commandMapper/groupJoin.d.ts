import { Command_CommentBody, Command_ScriptBody, Command_ShowMessageBody, Command_ShowScrollingTextBody } from '@sigureya/rpgtypes';
import { TextCommandMapper } from './textCommandMapper';
import { CallBackFunc } from './types';
export interface GroupJoinMapper<T> extends Pick<TextCommandMapper<T>, "showMessage" | "comment" | "script" | "showScrollingText" | "other"> {
    commnetBody: CallBackFunc<Command_CommentBody, T>;
    messageBody: CallBackFunc<Command_ShowMessageBody, T>;
    scriptBody: CallBackFunc<Command_ScriptBody, T>;
    scrollingTextBody: CallBackFunc<Command_ShowScrollingTextBody, T>;
}
