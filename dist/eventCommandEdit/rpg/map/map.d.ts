import { EventCommand } from '@sigureya/rpgtypes';
import { MapEventContext, MapEventLike, MapLike } from './types';
export declare const isValidEvent: <T>(event: T | null | undefined) => event is T;
export declare const createMapEventContext: (command: EventCommand, eventId: number, pageIndex: number) => MapEventContext;
export declare const locateEventCommands: <T>(mapEvent: MapEventLike, func: (command: EventCommand, eventId: number, pageIndex: number) => T) => T[][];
export declare const gatherEventCommandLocators: (map: MapLike) => MapEventContext[];
