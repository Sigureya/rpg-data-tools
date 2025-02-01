import type {
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
} from "@sigureya/rpgtypes";
import { replaceCommonEvents, replaceMapEvents, replaceTroops } from "./rpg";
import { normalizedCommands } from "./commandMapper/";

export const normalizedMapData = (map: Data_Map): Data_Map => {
  return replaceMapEvents(map, (list) => normalizedCommands(list).flat());
};
export const normalizedCommonEvents = (
  commonEvents: ReadonlyArray<Data_CommonEvent>
): Data_CommonEvent[] => {
  return replaceCommonEvents(commonEvents, (list) =>
    normalizedCommands(list).flat()
  );
};

export const normalizedTroops = (
  troops: ReadonlyArray<Data_Troop>
): Data_Troop[] => {
  return replaceTroops(troops, (list) => normalizedCommands(list).flat());
};
