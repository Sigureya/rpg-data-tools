import { EventCommand, Command_ShowScrollingText, Command_ShowScrollingTextBody } from '@sigureya/rpgtypes';
import { EventCommandPair } from './types';
export type CommandPair_ScrollingText = EventCommandPair<Command_ShowScrollingText, Command_ShowScrollingTextBody>;
export declare const ERROR_MESSAGE: "ScrollTextHeader invalid command";
export declare const pickScrollTextHeader: (array: ReadonlyArray<EventCommand>, start: number) => Command_ShowScrollingText;
export declare const pickScrollText: (array: ReadonlyArray<EventCommand>, start: number) => CommandPair_ScrollingText;
