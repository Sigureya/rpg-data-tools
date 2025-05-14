import { BaseEventCommandGroup } from "./base";
import type { TextCommandBody } from "./textCommandBody";

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
