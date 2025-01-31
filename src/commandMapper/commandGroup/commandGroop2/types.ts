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
