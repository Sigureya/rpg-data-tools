import type {
  Data_CommonEvent,
  Data_Map,
  IdentifiedItems,
} from "@sigureya/rpgtypes";
import { replaceMapEvents } from "./rpg";
import { normalizedCommands } from "./commandMapper/groupMerge";
import { commonEvent } from "../constructData";

const x = (map: Data_Map) => {
  return replaceMapEvents(map, (list) => normalizedCommands(list).flat());
};
const y = (commonEvents: IdentifiedItems<Data_CommonEvent>) => {};
