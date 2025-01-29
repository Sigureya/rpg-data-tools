import type { EventCommandLike } from "@sigureya/rpgtypes";
import type {
  Command_TextBody as EventCommandBody,
  EventCommandPair,
} from "./pickCommands";
import { joinCommandBodies } from "./pickCommands";
import type { EventCommandGroup } from "./types";

export abstract class BaseEventCommandGroup<
  Header extends EventCommandLike,
  Body extends EventCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(protected pair: EventCommandPair<Header, Body>) {}
  protected abstract getExpandedBodies(): EventCommandBody[];

  getBodyText(separator: string = "\n"): string {
    return joinCommandBodies(this.getExpandedBodies(), separator);
  }

  joinCommandBodies() {
    return this.getExpandedBodies();
  }

  get header(): Header {
    return this.pair.head;
  }
  get bodies(): Body[] {
    return this.pair.bodys;
  }
}

export class SimpleEventCommandGroup<
  Header extends EventCommandLike,
  Body extends EventCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(pair: EventCommandPair<Header, Body>) {
    super(pair);
  }
  protected getExpandedBodies(): Body[] {
    return this.bodies;
  }
}

export class CombinedEventCommandGroup<
  Header extends EventCommandBody,
  Body extends EventCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(pair: EventCommandPair<Header, Body>) {
    super(pair);
  }
  protected getExpandedBodies(): [Header, ...Body[]] {
    return [this.header, ...this.bodies];
  }
}
