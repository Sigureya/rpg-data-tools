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
    "showMessage" | "comment" | "script" | "showScrollingText" | "other"
  > {
  commnetBody: CallBackFunc<Command_CommentBody, T>;
  messageBody: CallBackFunc<Command_ShowMessageBody, T>;
  scriptBody: CallBackFunc<Command_ScriptBody, T>;
  scrollingTextBody: CallBackFunc<Command_ShowScrollingTextBody, T>;
}

const groupJoinMapper: GroupJoinMapper<EventCommand[]> = {
  // body部分は空の要素で置き換える
  commnetBody: () => [],
  messageBody: () => [],
  scriptBody: () => [],
  scrollingTextBody: () => [],
  // ヘッダ側を基準に、Header+Bodyで生成
  showMessage: (data) => data.normalizedCommands(),
  showScrollingText: (data) => data.normalizedCommands(),
  comment: (data) => data.normalizedCommands(),
  script: (data) => data.normalizedCommands(),
  other: (data) => [data],
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
