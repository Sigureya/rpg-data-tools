import { EventCommandFactory } from './eventCommandFactory';
import type * as CMD from "@sigureya/rpgtypes/";
import type * as CommandParam from "./paramTypes";
export declare const showMessage: EventCommandFactory<CommandParam.ShowMessage, CMD.Command_ShowMessage>;
export declare const showMessageBody: EventCommandFactory<CommandParam.ShowMessageBody, CMD.Command_ShowMessageBody>;
export declare const showChoices: EventCommandFactory<CommandParam.ShowChoices, CMD.Command_ShowChoices>;
export declare const showChoicesItem: EventCommandFactory<CommandParam.ShowChoicesItem, {
    code: 402;
    parameters: [index: number, name: string];
    indent: number;
}>;
export declare const inputNumber: EventCommandFactory<CommandParam.InputNumber, CMD.Command_InputNumber>;
export declare const selectItem: EventCommandFactory<CommandParam.SelectItem, CMD.Command_SelectItem>;
export declare const showScrollingText: EventCommandFactory<CommandParam.ShowScrollingText, {
    code: 105;
    parameters: [speed: number, skip: boolean];
    indent: number;
}>;
export declare const showScrollingTextBody: EventCommandFactory<CommandParam.ShowScrollingTextBody, {
    code: 405;
    parameters: [content: string];
    indent: number;
}>;
export declare const comment: EventCommandFactory<CommandParam.Comment, CMD.Command_Comment>;
export declare const commentBody: EventCommandFactory<CommandParam.CommentBody, CMD.Command_CommentBody>;
export declare const commonEvent: EventCommandFactory<CommandParam.CommonEvent, CMD.Command_CommonEvent>;
export declare const showPicture: EventCommandFactory<CommandParam.ShowPicture, {
    code: 231;
    parameters: CMD.ShowPicture;
    indent: number;
}>;
export declare const changeName: EventCommandFactory<CommandParam.ChangeName, {
    code: 320;
    parameters: [actorId: number, name: string];
    indent: number;
}>;
export declare const changeNickname: EventCommandFactory<CommandParam.ChangeNickname, CMD.Command_ChangeNickName>;
export declare const changeProfile: EventCommandFactory<CommandParam.ChangeProfile, CMD.Command_ChangeProfile>;
