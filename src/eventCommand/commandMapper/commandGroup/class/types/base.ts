import type { EventCommand } from "@sigureya/rpgtypes";
import { joinCommandBodies } from "./join";
import type { EventCommandGroup } from "./groopTypes";
import type { TextCommandBody } from "./textCommandBody";

export abstract class BaseEventCommandGroup<
  Header extends EventCommand,
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
