import { Command_ShowChoices, Command_ChoiceWhen, Command_ChangeName, Command_ChangeProfile, Command_ChangeNickName, Command_CommentBody, EventCommand } from '@sigureya/rpgtypes';
import { EventCommandGroup_Message, EventCommandGroup_ScrollingText, EventCommandGroup_Comment, EventCommandGroup_Script } from './commandGroup';
import { CallBackFunc } from './types';
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
