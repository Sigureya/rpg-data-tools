import type { EventCommand } from "@sigureya/rpgtypes";
import type { TextCommandBody } from "./textCommandBody";
import { BaseEventCommandGroup } from "./base";

export class SimpleEventCommandGroup<
  Header extends EventCommand,
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
