import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  Command_Comment,
  Command_CommentBody,
  Command_ScriptHeader,
  Command_ScriptBody,
} from "@sigureya/rpgtypes";
import {
  CombinedEventCommandGroup,
  SimpleEventCommandGroup,
} from "./commandGroop";

export const createMessageGroup = (
  hedder: Command_ShowMessage,
  bodies: Command_ShowMessageBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(401, hedder, bodies);
};

export const createScrlloingTextGroup = (
  hedder: Command_ShowScrollingText,
  bodies: Command_ShowScrollingTextBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowScrollingText,
    Command_ShowScrollingTextBody
  >(405, hedder, bodies);
};

export const createCommentGroup = (
  hedder: Command_Comment,
  bodies: Command_CommentBody[] = []
) => {
  return new CombinedEventCommandGroup<Command_Comment, Command_CommentBody>(
    hedder,
    bodies
  );
};

export const createScriptGroup = (
  hedder: Command_ScriptHeader,
  bodies: Command_ScriptBody[] = []
) => {
  return new CombinedEventCommandGroup<
    Command_ScriptHeader,
    Command_ScriptBody
  >(hedder, bodies);
};
