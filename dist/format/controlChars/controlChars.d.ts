import { Data_Actor, Data_System } from '@sigureya/rpgtypes';
import { ControlCharInfo, ControlChars } from './types';
export declare const createControlCharFormat: <C extends ControlChars>(char: C, id: number) => `\\${C}[${number}]`;
export declare const fromActor: (actor: Data_Actor) => `\\N[${number}]`;
export declare const fromActors: (actors: ReadonlyArray<Data_Actor>) => ControlCharInfo[];
export declare const fromSystem: (system: Data_System) => ControlCharInfo[];
