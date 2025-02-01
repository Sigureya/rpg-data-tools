import type { EventCommand } from "@sigureya/rpgtypes";
import type { MapEventContext, MapEventLike, MapLike } from "./types";

export const isValidEvent = <T>(event: T | null | undefined): event is T => {
  return !!event;
};

export const createMapEventContext = (
  command: EventCommand,
  eventId: number,
  pageIndex: number
): MapEventContext => ({
  command,
  eventId,
  pageIndex,
});

export const locateEventCommands = <T>(
  mapEvent: MapEventLike,
  func: (command: EventCommand, eventId: number, pageIndex: number) => T
): T[][] => {
  return mapEvent.pages.map((page, pageIndex) =>
    page.list.map<T>((cmd) => func(cmd, mapEvent.id, pageIndex))
  );
};

export const gatherEventCommandLocators = (map: MapLike): MapEventContext[] => {
  const list: MapEventContext[][][] = map.events
    .filter(isValidEvent)
    .map((ev) => locateEventCommands(ev, createMapEventContext));
  return list.flat(2);
};
