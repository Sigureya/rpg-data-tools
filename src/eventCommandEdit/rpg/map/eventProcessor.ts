import type {
  BattleEventPage,
  Data_CommonEvent,
  Data_Troop,
  MapEventContainer,
  ReadonlyMapEventContainer,
} from "@sigureya/rpgtypes";
import type { MapEventContext } from "./types";

/**
 * Checks whether an event is valid (not null or undefined).
 * @param event The event to check.
 * @returns `true` if the event is valid, otherwise `false`.
 */
const isValidEvent = <T>(event: T | null | undefined): event is T => {
  return !!event;
};

/**
 * Creates a MapEventContext for an event command.
 * @param commands The event commands.
 * @param eventId The ID of the event.
 * @param pageIndex The index of the page containing the command.
 * @returns A MapEventContext object.
 */
export const createEventContext = <T>(
  commands: T,
  eventId: number,
  pageIndex: number
): MapEventContext<T> => ({
  data: commands,
  eventId,
  pageIndex,
});

/**
 * Maps each event command to a MapEventContext.
 * @param page The page containing the event commands.
 * @param pageIndex The index of the page.
 * @param event The event metadata (contains ID).
 * @returns An array of MapEventContext objects.
 */
export const createCommandContext = <Command>(
  page: { list: ReadonlyArray<Command> },
  pageIndex: number,
  event: { id: number }
) => {
  return page.list.map<MapEventContext<Command>>((command) => ({
    data: command,
    eventId: event.id,
    pageIndex,
  }));
};

/**
 * Processes all pages within a container and applies a function to each page.
 * @param container The container holding multiple event pages.
 * @param func The function to apply to each page.
 * @returns An array of results obtained by applying the function to each page.
 */
export const processEventPages = <
  Result,
  PageContainer extends { readonly pages: ReadonlyArray<unknown> }
>(
  container: PageContainer,
  func: (
    page: PageContainer["pages"][number],
    pageIndex: number,
    container: PageContainer
  ) => Result
): Result[] => {
  return container.pages.map((page, pageIndex) =>
    func(page, pageIndex, container)
  );
};

/**
 * Processes all events in a map and applies a function to their pages.
 * @param map The map containing multiple events.
 * @param fn The function to apply to each event page.
 * @returns A 2D array where each element represents the processed result of an event's pages.
 */
export const processMapEvents = <Result, Command>(
  map: ReadonlyMapEventContainer<Command>,
  fn: (
    page: NonNullable<(typeof map)["events"][number]>["pages"][number],
    pageIndex: number,
    container: NonNullable<(typeof map)["events"][number]>
  ) => Result
): Result[][] => {
  return map.events
    .filter(isValidEvent)
    .map((event) => processEventPages(event, fn));
};

/**
 * Processes all troop event pages.
 * @param list The list of troop events.
 * @param func The function to apply to each event page.
 * @returns A 2D array where each element represents the processed result of a troop's pages.
 */
export const processTroopEvents = <Result>(
  list: ReadonlyArray<Data_Troop>,
  func: (
    page: BattleEventPage,
    pageIndex: number,
    container: Data_Troop
  ) => Result
): Result[][] => {
  return list.map((troop) => processEventPages(troop, func));
};

/**
 * Processes all common events.
 * @param events The list of common events.
 * @param func The function to apply to each common event.
 * @returns An array of processed common events.
 */
export const processCommonEvents = <T>(
  events: ReadonlyArray<Data_CommonEvent>,
  func: (common: Readonly<Data_CommonEvent>, index: number) => T
): T[] => {
  return events.map(func);
};

/**
 * Gathers all event command contexts from a map.
 * @param map The map containing events.
 * @returns A flattened array of MapEventContext objects representing all event commands in the map.
 */
export const gatherEventCommandContext = <Command>(
  map: ReadonlyMapEventContainer<Command>
): MapEventContext<Command>[] => {
  const list: MapEventContext<Command>[][][] = processMapEvents(
    map,
    createCommandContext
  );
  return list.flat(2);
};
