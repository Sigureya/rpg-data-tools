import type { EventCommand } from "@sigureya/rpgtypes";
import {
  COMMENT_BODY,
  COMMENT_HEAD,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";

const TABLE = {
  [SHOW_MESSAGE]: SHOW_MESSAGE_BODY,
  [COMMENT_HEAD]: COMMENT_BODY,
  [SCRIPT_EVAL]: SCRIPT_EVAL_BODY,
  [SHOW_SCROLLING_TEXT]: SHOW_SCROLLING_TEXT_BODY,
};

export const nextCommandIsBody = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const nextCommand = list[index + 1];
  if (!nextCommand) {
    return false;
  }
  const command = list[index];
  const bodyCode = TABLE[command.code as keyof typeof TABLE];
  if (!bodyCode) {
    return false;
  }

  return bodyCode === nextCommand.code;
};
