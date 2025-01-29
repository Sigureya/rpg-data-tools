import { EventCommand } from '@sigureya/rpgtypes';
import { EventCommandGroup_Comment, EventCommandGroup_Message, EventCommandGroup_Script, EventCommandGroup_ScrollingText } from './commandGroop/';
export declare const onMessage: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_Message) => Result) => Result;
export declare const onScrollingText: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_ScrollingText) => Result) => Result;
export declare const onComment: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_Comment) => Result) => Result;
export declare const onScript: <Result>(array: ReadonlyArray<EventCommand>, index: number, func: (groop: EventCommandGroup_Script) => Result) => Result;
