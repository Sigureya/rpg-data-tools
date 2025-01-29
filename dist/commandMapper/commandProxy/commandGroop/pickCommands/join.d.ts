import { Command_TextBody } from './types';
export declare const joinCommandBodies: <Command extends Command_TextBody>(array: ReadonlyArray<Command>, sepadrator?: string) => string;
