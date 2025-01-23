import { NoteReadResult } from './types';
export declare const createNoteEntity: (key: string, value: string) => string;
export declare const makeRegex: () => RegExp;
export declare const readNoteObject: <Result, T extends {
    note: string;
}>(data: T, fn: (key: string, value: string, data: T) => Result) => Result[];
export declare const readNote: (note: string) => NoteReadResult[];
export declare const readNoteEx: <Result>(note: string, fn: (key: string, value: string) => Result) => Result[];
export declare const replaceNote: (note: string, transformFunction: (key: string, value: string) => string) => string;
export declare const getNoteValue: (note: string, targetKey: string) => string | undefined;
export declare const setNoteValue: (note: string, targetKey: string, newValue: string) => string;
