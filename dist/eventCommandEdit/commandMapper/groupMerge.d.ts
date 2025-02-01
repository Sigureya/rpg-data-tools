import { MappingObject } from './allCommandsMapper';
import * as RpgTypes from "@sigureya/rpgtypes";
export interface GroupJoinMapper<T> extends Pick<MappingObject<T>, "showMessage" | "showMessageBody" | "comment" | "commentBody" | "script" | "scriptBody" | "showScrollingText" | "showScrollingTextBody" | "other"> {
}
export declare const CHOICE_HELP_TEXT: "\u9078\u629E\u80A2\u30D8\u30EB\u30D7";
export declare const isChoiceHelp: (command: RpgTypes.Command_Comment) => boolean;
export declare const normalizedCommands: <Command extends RpgTypes.EventCommand>(command: ReadonlyArray<Command>) => RpgTypes.EventCommand[][];
