import { ReadNoteOption, ReadResult } from './types';
export declare const createNoteEntity: (key: string, value: string) => string;
export declare const makeRegex: () => RegExp;
export declare const readNote: (note: string, options?: Partial<ReadNoteOption>) => ReadResult[];
export declare const replaceNote: (note: string, transformFunction: (key: string, value: string) => string) => string;
export declare const getNoteValue: (note: string, targetKey: string) => string | undefined;
export declare const setNoteValue: (note: string, targetKey: string, newValue: string) => string;
