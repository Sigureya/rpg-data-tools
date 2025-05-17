import type { EventCommandGroup_Script } from "src/eventCommand";
import type { TextCommandParameter } from "./types";

export const extractTextParamFromScript = (
  group: EventCommandGroup_Script
): TextCommandParameter => {
  return {
    code: group.header.code,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};
