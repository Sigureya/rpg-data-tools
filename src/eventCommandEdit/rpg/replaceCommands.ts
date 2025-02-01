import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
} from "@sigureya/rpgtypes";
import type { EventContainer, EventPageContainer } from "./map/";

type EventCommandReplaceFunc = (
  list: ReadonlyArray<EventCommand>
) => EventCommand[];

export const replaceEventCommands = <T extends EventContainer>(
  data: T,
  fn: EventCommandReplaceFunc
): T => {
  const newList: EventCommand[] = fn(data.list);
  return {
    ...data,
    list: newList,
  };
};

export const replacePages = <Pages extends EventPageContainer>(
  container: Pages,
  fn: EventCommandReplaceFunc
): Pages => {
  return {
    ...container,
    pages: container.pages.map((page) => replaceEventCommands(page, fn)),
  };
};

export const replaceMapEvents = <
  Map extends { events: Array<EventPageContainer | null> }
>(
  map: Map,
  fn: EventCommandReplaceFunc
): Map => {
  return {
    ...map,
    events: map.events.map((event) => {
      if (!event) {
        return null;
      }
      return replacePages(event, fn);
    }),
  };
};

export const replaceCommonEvents = (
  events: ReadonlyArray<Data_CommonEvent>,
  fn: EventCommandReplaceFunc
): Array<Data_CommonEvent> => {
  return events.map((commonEvent) => replaceEventCommands(commonEvent, fn));
};

export const replaceTroops = (
  list: ReadonlyArray<Data_Troop>,
  fn: EventCommandReplaceFunc
): Array<Data_Troop> => {
  return list.map((troop) => replacePages(troop, fn));
};
