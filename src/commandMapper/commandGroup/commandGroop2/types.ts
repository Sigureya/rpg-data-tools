import type {
  Command_Comment,
  Command_CommentBody,
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  EventCode,
  EventCommand,
  EventCommandLike,
} from "@sigureya/rpgtypes";

export type Command_TextBody<Code extends EventCode = EventCode> = Extract<
  EventCommand,
  {
    code: Code;
    parameters: [string];
    indent: number;
  }
>;

export interface EventCommandPair<
  Headder extends EventCommandLike,
  Body extends Command_TextBody
> {
  head: Headder;
  bodys: Body[];
}

export type EventCommandPair_Message = EventCommandPair<
  Command_ShowMessage,
  Command_ShowMessageBody
>;

export type EventCommandPair_ScrollingText = EventCommandPair<
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody
>;

export type EventCommandPair_Comment = EventCommandPair<
  Command_Comment,
  Command_CommentBody
>;

export type EventCommandPair_Script = EventCommandPair<
  Command_ScriptHeader,
  Command_ScriptBody
>;
