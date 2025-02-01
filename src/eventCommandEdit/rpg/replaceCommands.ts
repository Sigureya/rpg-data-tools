import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  IdentifiedItems,
} from "@sigureya/rpgtypes";
import type { EventContainer, EventPageContainer } from "./map/";
import { isValidEvent } from "./map/";

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
/**
 * コモンイベントのコマンドを変換する
 * @note 旧システムの仕様により `null` を先頭に維持
 */
export const replaceCommonEvents = (
  events: IdentifiedItems<Data_CommonEvent>,
  fn: EventCommandReplaceFunc
): IdentifiedItems<Data_CommonEvent> => {
  const list: Data_CommonEvent[] = events.filter(isValidEvent);
  return [null, ...list.map((event) => replaceEventCommands(event, fn))];
};

/**
 * バトルイベント (Troop) のコマンドを変換する
 * @note 旧システムの仕様により `null` を先頭に維持
 */
export const replaceTroops = (
  troops: IdentifiedItems<Data_Troop>,
  fn: EventCommandReplaceFunc
): IdentifiedItems<Data_Troop> => {
  const list: Data_Troop[] = troops.filter(isValidEvent);
  return [null, ...list.map((troop) => replacePages(troop, fn))];
};
