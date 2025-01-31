import type { MapEventContext } from "./mapEventContext";
import type { MapEventLike, MapLike } from "./mapLike";

const isValidEvent = <T>(event: T | null | undefined): event is T => {
  return !!event;
};
export const locateEventCommands = (
  mapEvent: MapEventLike
): MapEventContext[][] => {
  return mapEvent.pages.map((page, index) =>
    page.list.map<MapEventContext>((cmd) => ({
      command: cmd,
      eventId: mapEvent.id,
      pageIndex: index,
    }))
  );
};

export const gatherEventCommandLocators = (map: MapLike): MapEventContext[] => {
  const list: MapEventContext[][][] = map.events
    .filter(isValidEvent)
    .map(locateEventCommands);
  return list.flat(2);
};
