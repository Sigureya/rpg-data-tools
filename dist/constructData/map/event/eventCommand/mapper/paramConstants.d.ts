import { EventCommandFactory } from './eventCommandFactory';
import type * as CMD from "@sigureya/rpgtypes/";
import type * as CommandParam from "./paramTypes";
export declare const showMessage: EventCommandFactory<CommandParam.ShowMessage, CMD.Command_ShowMessage>;
export declare const showMessageBody: EventCommandFactory<CommandParam.ShowMessageBody, CMD.Command_ShowMessageBody>;
export declare const showChoices: EventCommandFactory<CommandParam.ShowChoices, CMD.Command_ShowChoices>;
export declare const showChoicesItem: EventCommandFactory<CommandParam.ShowChoicesItem, {
    parameters: [index: number, name: string];
    code: 402;
    indent: number;
}>;
export declare const inputNumber: EventCommandFactory<CommandParam.InputNumber, CMD.Command_InputNumber>;
export declare const selectItem: EventCommandFactory<CommandParam.SelectItem, CMD.Command_SelectItem>;
export declare const showScrollingText: EventCommandFactory<CommandParam.ShowScrollingText, {
    parameters: [speed: number, skip: boolean];
    code: 105;
    indent: number;
}>;
export declare const showScrollingTextBody: EventCommandFactory<CommandParam.ShowScrollingTextBody, {
    parameters: [content: string];
    code: 405;
    indent: number;
}>;
export declare const comment: EventCommandFactory<CommandParam.Comment, CMD.Command_Comment>;
export declare const commentBody: EventCommandFactory<CommandParam.CommentBody, CMD.Command_CommentBody>;
export declare const commonEvent: EventCommandFactory<CommandParam.CommonEvent, CMD.Command_CommonEvent>;
export declare const showPicture: EventCommandFactory<CommandParam.ShowPicture, {
    parameters: CMD.ShowPicture;
    code: 231;
    indent: number;
}>;
export declare const changeName: EventCommandFactory<CommandParam.ChangeName, {
    parameters: [actorId: number, name: string];
    code: 320;
    indent: number;
}>;
export declare const changeNickname: EventCommandFactory<CommandParam.ChangeNickname, CMD.Command_ChangeNickName>;
export declare const changeProfile: EventCommandFactory<CommandParam.ChangeProfile, CMD.Command_ChangeProfile>;
