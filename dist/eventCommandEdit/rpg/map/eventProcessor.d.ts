import { BattleEventPage, Data_CommonEvent, Data_Troop, MapEventContainer } from '@sigureya/rpgtypes';
import { MapEventContext } from './types';
interface EventContainer<Command> {
    id: number;
    pages: {
        list: Command[];
    }[];
}
export declare const createEventContext: <T>(commands: T, eventId: number, pageIndex: number) => MapEventContext<T>;
export declare const createCommandContext: <Command>(page: {
    list: ReadonlyArray<Command>;
}, pageIndex: number, event: {
    id: number;
}) => MapEventContext<Command>[];
export declare const processEventPages: <Result, PageContainer extends {
    readonly pages: ReadonlyArray<unknown>;
}>(container: PageContainer, func: (page: PageContainer["pages"][number], pageIndex: number, container: PageContainer) => Result) => Result[];
export declare const processMapEvents: <Result, Command, Event extends object>(map: MapEventContainer<Command, Event & EventContainer<Command>>, fn: (page: NonNullable<(typeof map)["events"][number]>["pages"][number], pageIndex: number, container: NonNullable<Event & {
    id: number;
    pages: {
        list: Command[];
    }[];
}>) => Result) => Result[][];
export declare const collectMapEvents: <Result, Command, Event extends {
    id: number;
}>(map: MapEventContainer<Command, Event & EventContainer<Command>>, fn: (page: NonNullable<(typeof map)["events"][number]>["pages"][number], pageIndex: number, container: NonNullable<(typeof map)["events"][number]>) => Result[]) => Result[];
export declare const processTroopEvents: <Result>(list: ReadonlyArray<Data_Troop>, func: (page: BattleEventPage, pageIndex: number, container: Data_Troop) => Result) => Result[][];
export declare const processCommonEvents: <T>(events: ReadonlyArray<Data_CommonEvent>, func: (common: Readonly<Data_CommonEvent>, index: number, common2: Readonly<Data_CommonEvent>) => T) => T[];
export declare const gatherEventCommandContext: <Command, Event extends EventContainer<Command> = EventContainer<Command>>(map: MapEventContainer<Command, Event>) => MapEventContext<Command>[];
export {};
