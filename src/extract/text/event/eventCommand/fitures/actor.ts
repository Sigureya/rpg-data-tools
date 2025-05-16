import type { ExtractCommandByParam } from "@sigureya/rpgtypes";
import { pickCommandParamString } from "src/eventCommand";
import type { TextCommandParameter } from "./types";

export const extractTextFromActorCommand = (
  command: ExtractCommandByParam<[number, string]>
): TextCommandParameter => {
  return pickCommandParamString(command, 1);
};
