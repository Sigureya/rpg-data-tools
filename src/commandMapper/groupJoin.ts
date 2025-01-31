import type { EventCommand } from "@sigureya/rpgtypes";
import type { MappingObject } from "./allCommandsMapper";
import { mappingCommand } from "./allMapping";

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

const groupJoinMapper: GroupJoinMapper<EventCommand[]> = {
  // body部分は空の要素で置き換える
  commentBody: () => [],
  showMessageBody: () => [],
  scriptBody: () => [],
  showScrollingTextBody: () => [],
  // ヘッダ側を基準に、Header+Bodyで生成
  showMessage: (data) => data.normalizedCommands(),
  showScrollingText: (data) => data.normalizedCommands(),
  comment: (data) => data.normalizedCommands(),
  script: (data) => data.normalizedCommands(),
  other: (data) => [data],
};

export const normalizedCommands = (command: ReadonlyArray<EventCommand>) => {
  return command.flatMap((cmd, index, array) => {
    return mappingCommand(array, index, groupJoinMapper);
  });
};
