import { AudioFileParams, EventCode, EventCommand, ExtractCommandByParam } from '@sigureya/rpgtypes';
import * as RpgTypes from "@sigureya/rpgtypes";
export declare const matchesEventCommand: <Code extends EventCode>(command: EventCommand, codeList: ReadonlyArray<Code>) => command is Extract<EventCommand, {
    code: Code;
}>;
export declare const isAudioCommand: (command: EventCommand) => command is ExtractCommandByParam<[AudioFileParams]>;
export declare const isImageCommand: (command: EventCommand) => command is {
    parameters: [battleBack1Name: string, battleBack2name: string];
    code: 283;
    indent: number;
} | {
    parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
    code: 284;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
    code: 322;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number];
    code: 323;
    indent: number;
} | {
    parameters: RpgTypes.ShowPicture;
    code: 231;
    indent: number;
};
