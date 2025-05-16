import {
  isCommandScriptBody,
  isCommandScriptHeader,
  type EventCommand,
} from "@sigureya/rpgtypes";
import { pickCommands } from "./pick";
import { CombinedEventCommandGroup } from "./types";

export const extractScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(list, index, isCommandScriptHeader, isCommandScriptBody);
};
export const createScriptGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodies, header } = extractScriptGroup(list, index);
  return new CombinedEventCommandGroup(header, bodies);
};
