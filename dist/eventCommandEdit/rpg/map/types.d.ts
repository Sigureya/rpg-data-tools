import { EventCommand } from '@sigureya/rpgtypes';
export interface EventContainer {
    list: EventCommand[];
}
export interface EventPageContainer {
    pages: EventContainer[];
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
