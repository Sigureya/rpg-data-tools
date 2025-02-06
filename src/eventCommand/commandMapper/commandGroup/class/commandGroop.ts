import type * as RpgTypes from "@sigureya/rpgtypes";
import type { EventCommandGroup } from "./groopTypes";
import { joinCommandBodies } from "./join";

type TextCommandBody = RpgTypes.ExtractCommandByParam<[string]>;
export abstract class BaseEventCommandGroup<
  Header extends RpgTypes.EventCommand,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(public header: Header, public bodies: Body[]) {}
  protected abstract getExpandedBodies(): TextCommandBody[];
  abstract normalizedCommands(): [Header, Body] | [Header];
  abstract mergedBody(): TextCommandBody;

  getBodyText(separator: string = "\n"): string {
    return joinCommandBodies(this.getExpandedBodies(), separator);
  }
  jopinHedderAndBody(): [Header, ...Body[]] {
    return [this.header, ...this.bodies];
  }

  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}

export class SimpleEventCommandGroup<
  Header extends RpgTypes.EventCommand,
  Body extends TextCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(public bodyCode: Body["code"], header: Header, bodies: Body[]) {
    super(header, bodies);
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
    return [headder, this.mergedBody()];
  }
  mergedBody(): Body {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Body;
  }
}

export class CombinedEventCommandGroup<
  Header extends TextCommandBody,
  Body extends TextCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  protected getExpandedBodies(): [Header, ...Body[]] {
    return [this.header, ...this.bodies];
  }
  mergedBody(): Header {
    return {
      code: this.header.code,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Header;
  }

  normalizedCommands(): [Header] {
    return [this.mergedBody()];
  }
}
