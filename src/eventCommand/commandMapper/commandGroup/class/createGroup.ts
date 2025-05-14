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
import { isChoiceHelp } from "./commentUtils";

export const createMessageGroup = (
  header: Command_ShowMessage,
  bodies: Command_ShowMessageBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(401, header, bodies);
};

export const createScrlloingTextGroup = (
  header: Command_ShowScrollingText,
  bodies: Command_ShowScrollingTextBody[] = []
) => {
  return new SimpleEventCommandGroup<
    Command_ShowScrollingText,
    Command_ShowScrollingTextBody
  >(405, header, bodies);
};

export const createCommentGroup = (
  header: Command_Comment,
  bodies: Command_CommentBody[] = []
) => {
  if (isChoiceHelp(header)) {
    return new SimpleEventCommandGroup<Command_Comment, Command_CommentBody>(
      408,
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
