import type { EventCommand } from "@sigureya/rpgtypes";

export type EventCommandContainer = CommandContainer<EventCommand>;
export interface CommandContainer<Command> {
  list: ReadonlyArray<Command>;
}

export interface MapEventLike {
  id: number;
  pages: EventCommandContainer[];
}

export interface MapLike {
  events: (MapEventLike | null)[];
}
/**
 * @deprecated
 */
export interface MapEventContextOld {
  eventId: number;
  pageIndex: number;
  command: EventCommand;
}
export interface MapEventContext<T> {
  eventId: number;
  pageIndex: number;
  data: T;
}
