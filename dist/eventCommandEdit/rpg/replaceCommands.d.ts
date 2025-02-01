import { Data_CommonEvent, Data_Troop, EventCommand } from '@sigureya/rpgtypes';
import { EventContainer, EventPageContainer } from './map/';
type EventCommandReplaceFunc = (list: ReadonlyArray<EventCommand>) => EventCommand[];
export declare const replaceEventCommands: <T extends EventContainer>(data: T, fn: EventCommandReplaceFunc) => T;
export declare const replacePages: <Pages extends EventPageContainer>(container: Pages, fn: EventCommandReplaceFunc) => Pages;
export declare const replaceMapEvents: <Map extends {
    events: Array<EventPageContainer | null>;
}>(map: Map, fn: EventCommandReplaceFunc) => Map;
export declare const replaceCommonEvents: (events: ReadonlyArray<Data_CommonEvent>, fn: EventCommandReplaceFunc) => Array<Data_CommonEvent>;
export declare const replaceTroops: (list: ReadonlyArray<Data_Troop>, fn: EventCommandReplaceFunc) => Array<Data_Troop>;
export {};
