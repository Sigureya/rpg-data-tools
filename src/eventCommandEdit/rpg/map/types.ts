import type { EventCommand } from "@sigureya/rpgtypes";

export interface EventContainer {
  list: EventCommand[];
}
export interface EventPageContainer<
  Page extends EventContainer = EventContainer
> {
  pages: Page[];
}

export interface MapEventLike {
  id: number;
  pages: EventContainer[];
}

export interface MapLike {
  events: (MapEventLike | null)[];
}
export interface MapEventContext {
  eventId: number;
  pageIndex: number;
  command: EventCommand;
}
export interface MapEventContext2<T> {
  eventId: number;
  pageIndex: number;
  data: T;
}
