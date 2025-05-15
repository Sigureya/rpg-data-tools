import type {
  Command_Comment,
  Command_CommentBody,
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  EventCommand,
  ExtractCommandByParam,
} from "@sigureya/rpgtypes";

export interface EventCommandGroup<
  Header extends EventCommand,
  Body extends ExtractCommandByParam<[string]>
> {
  /**
   * Merges all body commands into a single command.
   * @returns A merged command containing all body text.
   */
  mergedBody(): ExtractCommandByParam<[string]>;
  /**
   * Normalizes the commands into a standard format.
   * @returns An array containing the header and optionally the merged body.
   */
  normalizedCommands(): [Header] | [Header, Body];
  /**
   * Retrieves the combined text of all body commands.
   * @returns A string containing the combined body text.
   */
  getBodyText(): string;
  /**
   * Joins the header and body commands into a single array.
   * @returns An array containing the header and all body commands.
   */
  joinCommandBodies(): ExtractCommandByParam<[string]>[];
  header: Header;
  bodies: Body[];
}

export type EventCommandGroup_Message = EventCommandGroup<
  Command_ShowMessage,
  Command_ShowMessageBody
>;

export type EventCommandGroup_Comment = EventCommandGroup<
  Command_Comment,
  Command_CommentBody
>;

export type EventCommandGroup_ScrollingText = EventCommandGroup<
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody
>;

export type EventCommandGroup_Script = EventCommandGroup<
  Command_ScriptHeader,
  Command_ScriptBody
>;
