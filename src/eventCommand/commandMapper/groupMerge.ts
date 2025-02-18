import type * as RpgTypes from "@sigureya/rpgtypes";
import { mappingCommandList } from "./allMapping";
import type { MappingObject2 } from "./mapperType2";

export interface GroupJoinMapper<T>
  extends Pick<
    MappingObject2<T>,
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

const groupJoinMapper: GroupJoinMapper<RpgTypes.EventCommand[]> = {
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

export const normalizedCommands = <Command extends RpgTypes.EventCommand>(
  command: ReadonlyArray<Command>
): RpgTypes.EventCommand[][] => {
  return mappingCommandList(command, groupJoinMapper);
};
