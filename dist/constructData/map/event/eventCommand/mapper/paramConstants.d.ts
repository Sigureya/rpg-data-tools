import { EventCommandFactory } from './eventCommandFactory';
import type * as CommandParam from "./paramTypes";
export declare const showMessage: EventCommandFactory<CommandParam.ShowMessage, {
    code: 101;
    parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
    indent: number;
}>;
export declare const showMessageBody: EventCommandFactory<CommandParam.ShowMessageBody, {
    code: 401;
    parameters: [content: string];
    indent: number;
}>;
export declare const showChoices: EventCommandFactory<CommandParam.ShowChoices, {
    code: 102;
    parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
    indent: number;
}>;
export declare const showChoicesItem: EventCommandFactory<CommandParam.ShowChoicesItem, {
    code: 402;
    parameters: [index: number, name: string];
    indent: number;
}>;
export declare const inputNumber: EventCommandFactory<CommandParam.InputNumber, {
    code: 103;
    parameters: [variableId: number, maxDigits: number];
    indent: number;
}>;
export declare const selectItem: EventCommandFactory<CommandParam.SelectItem, {
    code: 104;
    parameters: [variableId: number, itemType: number];
    indent: number;
}>;
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
export declare const comment: EventCommandFactory<CommandParam.Comment, {
    code: 108;
    parameters: [content: string];
    indent: number;
}>;
export declare const commentBody: EventCommandFactory<CommandParam.CommentBody, {
    code: 408;
    parameters: [content: string];
    indent: number;
}>;
export declare const commonEvent: EventCommandFactory<CommandParam.CommonEvent, {
    code: 117;
    parameters: [id: number];
    indent: number;
}>;
export declare const showPicture: EventCommandFactory<CommandParam.ShowPicture, {
    code: 231;
    parameters: import('@sigureya/rpgtypes').ShowPicture;
    indent: number;
}>;
export declare const changeName: EventCommandFactory<CommandParam.ChangeName, {
    code: 320;
    parameters: [actorId: number, name: string];
    indent: number;
}>;
export declare const changeNickname: EventCommandFactory<CommandParam.ChangeNickname, {
    code: 324;
    parameters: [actorId: number, name: string];
    indent: number;
}>;
export declare const changeProfile: EventCommandFactory<CommandParam.ChangeProfile, {
    code: 325;
    parameters: [actorId: number, name: string];
    indent: number;
}>;
