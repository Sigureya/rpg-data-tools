import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  Command_Comment,
  Command_CommentBody,
  Command_ScriptHeader,
  Command_ScriptBody,
  EventCode,
  EventCommandLike,
} from "@sigureya/rpgtypes";
export interface CommandReadError {
  headCode: number;
  bodyCode: number;
  index: number;
}

export interface Command_TextBody<Code extends EventCode = EventCode> {
  code: Code;
  parameters: [string];
  indent: number;
}

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
