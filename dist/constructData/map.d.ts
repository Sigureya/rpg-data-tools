import { Data_Map, MapEvent, MapEventPage } from '@sigureya/rpgtypes';
export declare const createMap: (proto: {
    bgm: Data_Map["bgm"];
    bgs: Data_Map["bgs"];
} & Partial<Data_Map>) => Data_Map;
export declare const createMapEvent: (arg?: Partial<MapEvent>) => MapEvent;
export declare const createCondtion: (arg?: Partial<MapEventPage["conditions"]>) => MapEventPage["conditions"];
export declare const createMapEventImage: (arg?: Partial<MapEventPage["image"]>) => MapEventPage["image"];
export declare const createEventPage: (arg?: Partial<MapEventPage>) => MapEventPage;
