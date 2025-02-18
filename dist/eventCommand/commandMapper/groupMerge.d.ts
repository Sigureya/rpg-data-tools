import { MappingObject2 } from './mapperType2';
import type * as RpgTypes from "@sigureya/rpgtypes";
export interface GroupJoinMapper<T> extends Pick<MappingObject2<T>, "showMessage" | "showMessageBody" | "comment" | "commentBody" | "script" | "scriptBody" | "showScrollingText" | "showScrollingTextBody" | "other"> {
}
export declare const normalizedCommands: <Command extends RpgTypes.EventCommand>(command: ReadonlyArray<Command>) => RpgTypes.EventCommand[][];
