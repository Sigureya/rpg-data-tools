import type * as RpgTypes from "@sigureya/rpgtypes";
import type { Command_TextBody as EventCommandBody } from "./types";
import type { EventCommandGroup } from "./groopTypes";
import { joinCommandBodies } from "./join";
import type { EventCommandPair } from "../pickCommands/pairTypes";

export abstract class BaseEventCommandGroup<
  Header extends RpgTypes.EventCommand,
  Body extends EventCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(protected pair: EventCommandPair<Header, Body>) {}
  protected abstract getExpandedBodies(): EventCommandBody[];
  abstract normalizedCommands(): RpgTypes.EventCommand[];

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
  Header extends RpgTypes.EventCommand,
  Body extends EventCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(
    public readonly bodyCode: Body["code"],
    pair: EventCommandPair<Header, Body>
  ) {
    super(pair);
  }
  protected getExpandedBodies(): Body[] {
    return this.bodies;
  }
  normalizedCommands(): [Header, Body] | [Header] {
    const headder: Header = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters],
    };
    if (this.bodies.length === 0) {
      return [headder];
    }
    const body = {
      code: this.bodyCode,
      indent: 0,
      parameters: [this.getBodyText()],
    };
    return [headder, body as Body];
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
