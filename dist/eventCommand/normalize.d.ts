import { Data_CommonEvent, Data_Troop, EventCommand, MapEventContainer } from '@sigureya/rpgtypes';
export declare const normalizedMapData: <Map extends MapEventContainer<EventCommand>>(map: Map) => Map;
export declare const normalizedCommonEvents: (commonEvents: ReadonlyArray<Data_CommonEvent>) => Data_CommonEvent[];
export declare const normalizedTroops: (troops: ReadonlyArray<Data_Troop>) => Data_Troop[];
