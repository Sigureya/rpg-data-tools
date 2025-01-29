import type { EventCommand, EventCommandLike } from "@sigureya/rpgtypes";
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
  abstract normalizedCommands(): EventCommand[];

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
  Header extends EventCommand,
  Body extends EventCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(
    pair: EventCommandPair<Header, Body>,
    public readonly bodyCode: Body["code"]
  ) {
    super(pair);
  }
  protected getExpandedBodies(): Body[] {
    return this.bodies;
  }
  normalizedCommands() {
    const headder: Header = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters],
    };
    const body = {
      code: this.bodyCode,
      indent: 0,
      parameters: [this.getBodyText()],
    };
    return [headder, body as EventCommand];
  }
}

export class CombinedEventCommandGroup<
  Header extends Extract<EventCommand, EventCommandBody>,
  Body extends EventCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(pair: EventCommandPair<Header, Body>) {
    super(pair);
  }
  protected getExpandedBodies(): [Header, ...Body[]] {
    return [this.header, ...this.bodies];
  }
  normalizedCommands(): [Header] {
    const text: string = this.getBodyText();
    return [
      {
        code: this.header.code,
        parameters: [text],
        indent: this.header.indent,
      } as Header,
    ];
  }
}
