import { EventCommand } from '@sigureya/rpgtypes';
import { CallBackFunc } from './types';
import { PartialMappingObject } from './allCommandsMapper';
export declare const callHandler: <T, Command extends EventCommand>(command: Command, index: number, array: ReadonlyArray<EventCommand>, handler: CallBackFunc<Command, T> | undefined, fallback: CallBackFunc<EventCommand, T>) => T;
export declare const mappingCommandList: <T>(array: ReadonlyArray<EventCommand>, table: PartialMappingObject<T>) => T[];
export declare const mappingCommand: <T>(array: ReadonlyArray<EventCommand>, index: number, table: PartialMappingObject<T>) => T;
