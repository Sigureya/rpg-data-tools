import { EventCommand, Command_ScriptHeader, Command_ScriptBody } from '@sigureya/rpgtypes';
import { EventCommandPair } from './pairTypes';
export declare const pickScripts: (arrya: ReadonlyArray<EventCommand>, start: number) => EventCommandPair<Command_ScriptHeader, Command_ScriptBody>;
