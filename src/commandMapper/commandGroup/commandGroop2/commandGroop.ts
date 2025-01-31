import type * as RpgTypes from "@sigureya/rpgtypes";
import type { EventCommandGroup } from "./groopTypes";
import { joinCommandBodies } from "./join";

type TextCommandBody = RpgTypes.PickCommandByParam<[string]>;
export abstract class BaseEventCommandGroup<
  Header extends RpgTypes.EventCommand,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(public header: Header, public bodies: Body[]) {}
  protected abstract getExpandedBodies(): TextCommandBody[];
  abstract normalizedCommands(): RpgTypes.EventCommand[];

  getBodyText(separator: string = "\n"): string {
    return joinCommandBodies(this.getExpandedBodies(), separator);
  }

  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}

export class SimpleEventCommandGroup<
  Header extends RpgTypes.EventCommand,
  Body extends TextCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(
    public readonly bodyCode: Body["code"],
    header: Header,
    bodies: Body[]
  ) {
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
    const body = {
      code: this.bodyCode,
      indent: 0,
      parameters: [this.getBodyText()],
    };
    return [headder, body as Body];
  }
}

export class CombinedEventCommandGroup<
  Header extends TextCommandBody,
  Body extends TextCommandBody
> extends BaseEventCommandGroup<Header, Body> {
  constructor(header: Header, bodies: Body[]) {
    super(header, bodies);
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
