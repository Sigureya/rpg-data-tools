import { Command_TextBody as EventCommandBody, EventCommandPair } from './pickCommands';
import { EventCommandGroup } from './types';
import type * as RpgTypes from "@sigureya/rpgtypes";
export declare abstract class BaseEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends EventCommandBody> implements EventCommandGroup<Header, Body> {
    protected pair: EventCommandPair<Header, Body>;
    constructor(pair: EventCommandPair<Header, Body>);
    protected abstract getExpandedBodies(): EventCommandBody[];
    abstract normalizedCommands(): RpgTypes.EventCommand[];
    getBodyText(separator?: string): string;
    joinCommandBodies(): EventCommandBody[];
    get header(): Header;
    get bodies(): Body[];
}
export declare class SimpleEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    readonly bodyCode: Body["code"];
    constructor(bodyCode: Body["code"], pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): Body[];
    normalizedCommands(): [Header, Body];
}
export declare class CombinedEventCommandGroup<Header extends EventCommandBody, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    constructor(pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): [Header, ...Body[]];
    normalizedCommands(): [Header];
}
