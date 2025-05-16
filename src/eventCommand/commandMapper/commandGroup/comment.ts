import type {
  Command_Comment,
  Command_CommentBody,
  EventCommand,
  EventCommandLike,
} from "@sigureya/rpgtypes";
import {
  isCommandCommentHeader,
  isCommandCommentBody,
  COMMENT_BODY,
} from "@sigureya/rpgtypes";

import type { EventCommandGroup_Comment } from "./core";
import {
  SimpleEventCommandGroup,
  CombinedEventCommandGroup,
  pickCommands,
} from "./core";

export const extractCommentGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    isCommandCommentHeader,
    isCommandCommentBody
  );
};

export const createCommentGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
): EventCommandGroup_Comment => {
  const { bodies, header } = extractCommentGroup(list, index);
  if (isChoiceHelp(header)) {
    return new SimpleEventCommandGroup<Command_Comment, Command_CommentBody>(
      COMMENT_BODY,
      header,
      bodies
    );
  }
  return new CombinedEventCommandGroup(header, bodies);
};

/**
 * @description 『MPP_ChoiceEx.js』に対応するための特殊文字列
 */
export const CHOICE_HELP_TEXT = "選択肢ヘルプ" as const;

export interface CommandEX_ChoiceHelp extends EventCommandLike<108> {
  parameters: [typeof CHOICE_HELP_TEXT];
}

export const isChoiceHelp = (
  command: Command_Comment
): command is Command_Comment & CommandEX_ChoiceHelp => {
  return command.parameters[0] === CHOICE_HELP_TEXT;
};
