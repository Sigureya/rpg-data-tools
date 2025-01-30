import { EventCommand } from '@sigureya/rpgtypes';
import { MappingObject } from './allCommandsMapper';
export declare const mappingXX: <T>(array: ReadonlyArray<EventCommand>, index: number, table: MappingObject<T>) => T;
