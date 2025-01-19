import type * as CommandParam from "./paramTypes";
import { EventCommandFactory } from "./eventCommandFactory";
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
export declare const showPicture: EventCommandFactory<CommandParam.ShowPicture, {
    code: 231;
    parameters: import("@sigureya/rpgtypes").ShowPicture;
    indent: number;
}>;
