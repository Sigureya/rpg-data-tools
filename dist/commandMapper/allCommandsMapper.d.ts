import { Command_ShowChoices, Command_ChoiceWhen, Command_ChangeName, Command_ChangeProfile, Command_ChangeNickName, Command_CommentBody, EventCommand, Command_Label, Command_LabelJump, Command_CommonEvent, Command_ChangeBattleBGM, Command_ChangeVictoryME, Command_ChangeDefeatME, Command_ChangeSaveAccess, Command_ChangeMenuAccess, Command_ChangeEncounter, Command_ChangeFormationAccess, Command_ChangeWindowColor, Command_ChangeGold } from '@sigureya/rpgtypes/';
import { EventCommandGroup_Message, EventCommandGroup_ScrollingText, EventCommandGroup_Comment, EventCommandGroup_Script } from './commandGroup';
import { CallBackFunc } from './types';
export interface MappingObject<T> {
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
    label: CallBackFunc<Command_Label, T>;
    labelJump: CallBackFunc<Command_LabelJump, T>;
    commonEvent: CallBackFunc<Command_CommonEvent, T>;
    changeBattleBGM: CallBackFunc<Command_ChangeBattleBGM, T>;
    changeVictoryME: CallBackFunc<Command_ChangeVictoryME, T>;
    changeDefeatME: CallBackFunc<Command_ChangeDefeatME, T>;
    changeSaveAccess: CallBackFunc<Command_ChangeSaveAccess, T>;
    changeMenuAccess: CallBackFunc<Command_ChangeMenuAccess, T>;
    changeEncounter: CallBackFunc<Command_ChangeEncounter, T>;
    changeFormationAccess: CallBackFunc<Command_ChangeFormationAccess, T>;
    changeWindowColor: CallBackFunc<Command_ChangeWindowColor, T>;
    changeGold: CallBackFunc<Command_ChangeGold, T>;
    other: CallBackFunc<EventCommand, T>;
}
export interface PartialMappingObject<T> extends Partial<MappingObject<T>> {
    other: CallBackFunc<EventCommand, T>;
}
