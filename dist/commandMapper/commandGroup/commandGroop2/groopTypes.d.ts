import { Command_Comment, Command_CommentBody, Command_ScriptBody, Command_ScriptHeader, Command_ShowMessage, Command_ShowMessageBody, Command_ShowScrollingText, Command_ShowScrollingTextBody, EventCommand, PickCommandByParam } from '@sigureya/rpgtypes';
export interface EventCommandGroup<Header extends EventCommand, Body extends PickCommandByParam<[string]>> {
    normalizedCommands(): EventCommand[];
    getBodyText(separator?: string): string;
    joinCommandBodies(): PickCommandByParam<[string]>[];
    header: Header;
    bodies: Body[];
}
export type EventCommandGroup_Message = EventCommandGroup<Command_ShowMessage, Command_ShowMessageBody>;
export type EventCommandGroup_Comment = EventCommandGroup<Command_Comment, Command_CommentBody>;
export type EventCommandGroup_ScrollingText = EventCommandGroup<Command_ShowScrollingText, Command_ShowScrollingTextBody>;
export type EventCommandGroup_Script = EventCommandGroup<Command_ScriptHeader, Command_ScriptBody>;
