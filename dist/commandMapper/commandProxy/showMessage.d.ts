import { EventCommand, EventCommandTable } from '@sigureya/rpgtypes';
export declare class MessageProxy {
    readonly command: Readonly<EventCommandTable["SHOW_MESSAGE"]>;
    private index;
    private array;
    constructor(command: Readonly<EventCommandTable["SHOW_MESSAGE"]>, index: number, array: ReadonlyArray<EventCommand>);
    joinBody(sepadrator?: string): string;
    bodyCode(): 401;
    body(): EventCommandTable["SHOW_MESSAGE_BODY"][];
    head(): EventCommandTable["SHOW_MESSAGE"];
    speakerName(): string;
}
