import type { EventCommand } from "@sigureya/rpgtypes";

export interface MapEventContext {
  eventId: number;
  pageIndex: number;
  command: EventCommand;
}
