import { EventCode, EventCommandLike } from '@sigureya/rpgtypes';
export declare const joinCommandBodies: <Command extends EventCommandLike<EventCode, [string]>>(array: ReadonlyArray<Command>, sepadrator?: string) => string;
