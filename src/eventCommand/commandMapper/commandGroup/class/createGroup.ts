import type {
  Command_Comment,
  Command_CommentBody,
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
} from "@sigureya/rpgtypes";
import {
  COMMENT_BODY,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import { isChoiceHelp } from "./commentUtils";
import { SimpleEventCommandGroup, CombinedEventCommandGroup } from "./types";

// 下記の関数群は用途を限定するために型を固定しており
// 意図してテンプレート無しの実装にしている
/**
 * Creates a group for message commands.
 * @param header - The header command for the message group.
 * @param bodies - The body commands for the message group.
 * @returns A SimpleEventCommandGroup instance for message commands.
 */
export const createMessageGroup = (
  header: Command_ShowMessage,
  bodies: Command_ShowMessageBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, header, bodies);
};

export const createScrlloingTextGroup = (
  header: Command_ShowScrollingText,
  bodies: Command_ShowScrollingTextBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowScrollingText,
    Command_ShowScrollingTextBody
  >(SHOW_SCROLLING_TEXT_BODY, header, bodies);
};

export const createCommentGroup = (
  header: Command_Comment,
  bodies: Command_CommentBody[] = []
) => {
  if (isChoiceHelp(header)) {
    return new SimpleEventCommandGroup<Command_Comment, Command_CommentBody>(
      COMMENT_BODY,
      header,
      bodies
    );
  }
  return new CombinedEventCommandGroup<Command_Comment, Command_CommentBody>(
    header,
    bodies
  );
};

export const createScriptGroup = (
  header: Command_ScriptHeader,
  bodies: Command_ScriptBody[] = []
) => {
  return new CombinedEventCommandGroup<
    Command_ScriptHeader,
    Command_ScriptBody
  >(header, bodies);
};
