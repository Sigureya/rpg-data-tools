import type {
  Command_Comment,
  Command_CommentBody,
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ShowScrollingText,
} from "@sigureya/rpgtypes";
import { type EventCommand } from "@sigureya/rpgtypes";
import { MeesaCommandProxy2 } from "./commandProxy2";

export const createCommentProxy = (
  array: ReadonlyArray<EventCommand>,
  index: number
) => {
  return new MeesaCommandProxy2<Command_Comment, Command_CommentBody>(
    array,
    index,
    108,
    408
  );
};

export const createScriptProxy = (
  array: ReadonlyArray<EventCommand>,
  index: number
) => {
  return new MeesaCommandProxy2<Command_ScriptHeader, Command_ScriptBody>(
    array,
    index,
    355,
    655
  );
};
