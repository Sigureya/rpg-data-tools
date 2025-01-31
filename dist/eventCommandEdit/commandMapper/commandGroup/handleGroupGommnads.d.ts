import { EventCommand } from '@sigureya/rpgtypes';
import { EventCommandGroup_Comment, EventCommandGroup_Message, EventCommandGroup_Script, EventCommandGroup_ScrollingText } from './class';
export declare const handleGroupMessage: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_Message) => Result) => Result;
export declare const handleGroupScrollingText: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_ScrollingText) => Result) => Result;
export declare const handleGroupComment: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (group: EventCommandGroup_Comment) => Result) => Result;
export declare const handleGroupScript: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (group: EventCommandGroup_Script) => Result) => Result;
