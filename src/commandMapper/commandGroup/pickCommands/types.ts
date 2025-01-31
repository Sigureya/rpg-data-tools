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
  EventCommand,
} from "@sigureya/rpgtypes";
export interface CommandReadError {
  headCode: number;
  bodyCode: number;
  index: number;
}
