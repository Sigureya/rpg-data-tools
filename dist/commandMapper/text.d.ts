import { EventCommand } from '@sigureya/rpgtypes';
import { TextCommandMapper } from './textCommandMapper';
export declare const mapTextCommand: <T>(list: ReadonlyArray<EventCommand>, table: TextCommandMapper<T>) => T[];
