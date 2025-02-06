import { EventCommandGroup } from './groopTypes';
import type * as RpgTypes from "@sigureya/rpgtypes";
type TextCommandBody = RpgTypes.ExtractCommandByParam<[string]>;
export declare abstract class BaseEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends TextCommandBody> implements EventCommandGroup<Header, Body> {
    header: Header;
    bodies: Body[];
    constructor(header: Header, bodies: Body[]);
    protected abstract getExpandedBodies(): TextCommandBody[];
    abstract normalizedCommands(): [Header, Body] | [Header];
    abstract mergedBody(): TextCommandBody;
    getBodyText(separator?: string): string;
    jopinHedderAndBody(): [Header, ...Body[]];
    joinCommandBodies(): TextCommandBody[];
}
export declare class SimpleEventCommandGroup<Header extends RpgTypes.EventCommand, Body extends TextCommandBody> extends BaseEventCommandGroup<Header, Body> {
    bodyCode: Body["code"];
    constructor(bodyCode: Body["code"], header: Header, bodies: Body[]);
    protected getExpandedBodies(): Body[];
    normalizedCommands(): [Header, Body] | [Header];
    mergedBody(): Body;
}
export declare class CombinedEventCommandGroup<Header extends TextCommandBody, Body extends TextCommandBody> extends BaseEventCommandGroup<Header, Body> {
    protected getExpandedBodies(): [Header, ...Body[]];
    mergedBody(): Header;
    normalizedCommands(): [Header];
}
export {};
