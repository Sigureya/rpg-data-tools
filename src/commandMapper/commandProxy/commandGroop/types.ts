import type {
  Command_Comment,
  Command_CommentBody,
  Command_ShowMessage,
  Command_ShowMessageBody,
  EventCommandLike,
} from "@sigureya/rpgtypes";
import type { Command_TextBody } from "./pickCommands";

export interface EventCommandGroup<
  Header extends EventCommandLike,
  Body extends Command_TextBody
> {
  getBodyText(separator?: string): string;
  joinCommandBodies(): Command_TextBody[];
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
