import type { EventCommand } from "@sigureya/rpgtypes";
import type { MapEventContext2, MapEventLike, MapLike } from "./types";

export const isValidEvent = <T>(event: T | null | undefined): event is T => {
  return !!event;
};

export const createMapEventContext = <T>(
  commands: T,
  eventId: number,
  pageIndex: number
): MapEventContext2<T> => ({
  data: commands,
  eventId,
  pageIndex,
});

export const locateEventCommands = <T, MapEvent extends MapEventLike>(
  mapEvent: MapEvent,
  func: (
    commands: ReadonlyArray<EventCommand>,
    eventId: number,
    pageIndex: number
  ) => T
): T[] => {
  return mapEvent.pages.map((page, pageIndex) =>
    func(page.list, mapEvent.id, pageIndex)
  );
};

export const locateMapEvents = <T, Map extends MapLike>(
  map: Map,
  func: (
    commands: ReadonlyArray<EventCommand>,
    eventId: number,
    pageIndex: number
  ) => T
): T[][] => {
  return map.events
    .filter(isValidEvent)
    .map((ev) => locateEventCommands(ev, func));
};

export const gatherEventCommandLocators = (
  map: MapLike
): MapEventContext2<ReadonlyArray<EventCommand>>[] => {
  return locateMapEvents(map, createMapEventContext).flat(2);
};
