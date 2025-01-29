import type {
  EventCommand,
  Command_Comment,
  Command_CommentBody,
} from "@sigureya/rpgtypes";
import { COMMENT, COMMENT_BODY } from "@sigureya/rpgtypes";
import { pickHead, pickCommands } from "./pickCommands";
import type { EventCommandPair } from "./types";

export const pickComments = (
  array: ReadonlyArray<EventCommand>,
  start: number
): EventCommandPair<Command_Comment, Command_CommentBody> => {
  const head = pickHead(array, start, COMMENT);

  return {
    head: head,
    bodys: pickCommands(COMMENT_BODY, array, start + 1),
  };
};
