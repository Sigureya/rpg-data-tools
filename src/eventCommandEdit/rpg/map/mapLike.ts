import type { EventCommand } from "@sigureya/rpgtypes";

export interface MapEventLike {
  id: number;
  pages: { list: EventCommand[] }[];
}

export interface MapLike {
  events: (MapEventLike | null)[];
}
