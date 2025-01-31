import * as RpgTypes from "@sigureya/rpgtypes";
import type { MappingObject } from "./allCommandsMapper";
import { mappingCommand } from "./allMapping";
import type { EventCommandGroup_Comment } from "./commandGroup";
import { joinCommandBodies } from "./commandGroup";

export interface GroupJoinMapper<T>
  extends Pick<
    MappingObject<T>,
    | "showMessage"
    | "showMessageBody"
    | "comment"
    | "commentBody"
    | "script"
    | "scriptBody"
    | "showScrollingText"
    | "showScrollingTextBody"
    | "other"
  > {}
/**
 * @description 『MPP_ChoiceEx.js』に対応するための特殊文字列
 */
export const CHOICE_HELP_TEXT = "選択肢ヘルプ" as const;

export const isChoiceHelp = (command: RpgTypes.Command_Comment) => {
  return command.parameters[0] === CHOICE_HELP_TEXT;
};

const mergeComment = (comment: EventCommandGroup_Comment) => {
  if (isChoiceHelp(comment.header)) {
    const text: string = joinCommandBodies(comment.bodies);
    return [
      {
        code: RpgTypes.COMMENT,
        indent: 0,
        parameters: [CHOICE_HELP_TEXT],
      } as RpgTypes.Command_Comment,
      {
        code: RpgTypes.COMMENT_BODY,
        indent: 0,
        parameters: [text],
      } as RpgTypes.Command_CommentBody,
    ];
  }
  return comment.normalizedCommands();
};

const groupJoinMapper: GroupJoinMapper<RpgTypes.EventCommand[]> = {
  // body部分は空の要素で置き換える
  commentBody: () => [],
  showMessageBody: () => [],
  scriptBody: () => [],
  showScrollingTextBody: () => [],
  // ヘッダ側を基準に、Header+Bodyで生成
  showMessage: (data) => data.normalizedCommands(),
  showScrollingText: (data) => data.normalizedCommands(),
  comment: (data) => mergeComment(data),
  script: (data) => data.normalizedCommands(),
  other: (data) => [data],
};

export const normalizedCommands = (
  command: ReadonlyArray<RpgTypes.EventCommand>
) => {
  return command.map((cmd, index, array) => {
    return mappingCommand(array, index, groupJoinMapper);
  });
};
