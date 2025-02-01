import { Data_CommonEvent, Data_Map, Data_Troop } from '@sigureya/rpgtypes';
export declare const normalizedMapData: (map: Data_Map) => Data_Map;
export declare const normalizedCommonEvents: (commonEvents: ReadonlyArray<Data_CommonEvent>) => Data_CommonEvent[];
export declare const normalizedTroops: (troops: ReadonlyArray<Data_Troop>) => Data_Troop[];
