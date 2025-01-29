import { EventCode, EventCommandLike } from '@sigureya/rpgtypes';
export interface Command_TextBody<Code extends EventCode = EventCode> {
    code: Code;
    parameters: [string];
    indent: number;
}
export interface EventCommandPair<Headder extends EventCommandLike, Body extends Command_TextBody> {
    head: Headder;
    bodys: Body[];
}
export interface CommandReadError {
    headCode: number;
    bodyCode: number;
    index: number;
}
