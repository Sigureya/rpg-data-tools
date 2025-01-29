import { EventCommandLike } from '@sigureya/rpgtypes';
import { Command_TextBody as EventCommandBody, EventCommandPair } from './pickCommands';
import { EventCommandGroup } from './types';
export declare abstract class BaseEventCommandGroup<Header extends EventCommandLike, Body extends EventCommandBody> implements EventCommandGroup<Header, Body> {
    protected pair: EventCommandPair<Header, Body>;
    constructor(pair: EventCommandPair<Header, Body>);
    protected abstract getExpandedBodies(): EventCommandBody[];
    getBodyText(separator?: string): string;
    joinCommandBodies(): EventCommandBody<0 | 101 | 401 | 102 | 402 | 103 | 104 | 105 | 405 | 108 | 408 | 109 | 111 | 411 | 112 | 113 | 115 | 117 | 118 | 119 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 132 | 140 | 133 | 282 | 283 | 301 | 134 | 135 | 136 | 137 | 138 | 139 | 236 | 241 | 242 | 245 | 246 | 250 | 251 | 249 | 261 | 243 | 244 | 302 | 605 | 303 | 311 | 312 | 313 | 320 | 321 | 284 | 322 | 323 | 201 | 202 | 203 | 204 | 205 | 206 | 211 | 212 | 213 | 214 | 216 | 217 | 221 | 222 | 223 | 224 | 225 | 230 | 231 | 232 | 234 | 233 | 235 | 324 | 325 | 352 | 353 | 354 | 355 | 655 | 356 | 357>[];
    get header(): Header;
    get bodies(): Body[];
}
export declare class SimpleEventCommandGroup<Header extends EventCommandLike, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    constructor(pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): Body[];
}
export declare class CombinedEventCommandGroup<Header extends EventCommandBody, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    constructor(pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): [Header, ...Body[]];
}
