import { EventCommandGroup } from './groopTypes';
import { EventCommandPair } from '../pickCommands/pairTypes';
import type * as RpgTypes from "@sigureya/rpgtypes";
type TextCommandBody = RpgTypes.PickCommandByParam<[string]>;
export declare abstract class BaseEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends TextCommandBody> implements EventCommandGroup<Header, Body> {
    protected pair: EventCommandPair<Header, Body>;
    constructor(pair: EventCommandPair<Header, Body>);
    protected abstract getExpandedBodies(): TextCommandBody[];
    abstract normalizedCommands(): RpgTypes.EventCommand[];
    getBodyText(separator?: string): string;
    joinCommandBodies(): TextCommandBody[];
    get header(): Header;
    get bodies(): Body[];
}
export declare class SimpleEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends TextCommandBody> extends BaseEventCommandGroup<Header, Body> {
    readonly bodyCode: Body["code"];
    constructor(bodyCode: Body["code"], pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): Body[];
    normalizedCommands(): [Header, Body] | [Header];
}
export declare class CombinedEventCommandGroup<Header extends TextCommandBody, Body extends TextCommandBody> extends BaseEventCommandGroup<Header, Body> {
    constructor(pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): [Header, ...Body[]];
    normalizedCommands(): [Header];
}
export {};
