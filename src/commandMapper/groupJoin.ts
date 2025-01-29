import type {
  Command_CommentBody,
  Command_ScriptBody,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingTextBody,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  COMMENT,
  SCRIPT_EVAL,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT,
} from "@sigureya/rpgtypes";
import type { TextCommandMapper } from "./textCommandMapper";
import {
  handleGroupMessage,
  handleGroupScrollingText,
  handleGroupComment,
  handleGroupScript,
} from "./commandGroup";
import type { CallBackFunc } from "./types";

export interface GroupJoinMapper<T>
  extends Pick<
    TextCommandMapper<T>,
    "showMessage" | "comment" | "script" | "showScrollingText"
  > {
  commnetBody: CallBackFunc<Command_CommentBody, T>;
  messageBody: CallBackFunc<Command_ShowMessageBody, T>;
  scriptBody: CallBackFunc<Command_ScriptBody, T>;
  scrollingTextBody: CallBackFunc<Command_ShowScrollingTextBody, T>;
}

const groupJoinMapper: GroupJoinMapper<EventCommand[]> = {
  commnetBody: () => [],
  messageBody: () => [],
  scriptBody: () => [],
  scrollingTextBody: () => [],
  showMessage: (data): [Command_ShowMessage, Command_ShowMessageBody] => {
    return [
      data.header,
      {
        code: SHOW_MESSAGE_BODY,
        parameters: [data.getBodyText()],
        indent: data.header.indent,
      },
    ];
  },
  showScrollingText: (data) => [],
  comment: () => [],
  script: () => [],
};

const handlerGroupJoin = <T>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  table: GroupJoinMapper<T>
) => {
  const command = array[index];
  switch (command.code) {
    case SHOW_MESSAGE:
      return handleGroupMessage(array, index, table.showMessage);
    case SHOW_SCROLLING_TEXT:
      return handleGroupScrollingText(array, index, table.showScrollingText);
    case COMMENT:
      return handleGroupComment(array, index, table.comment);
    case SCRIPT_EVAL:
      return handleGroupScript(array, index, table.script);
  }
  return [command];
};
