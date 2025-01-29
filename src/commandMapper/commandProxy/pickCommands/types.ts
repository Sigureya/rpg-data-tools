import type { EventCommandLike } from "@sigureya/rpgtypes";

export interface Command_TextBody {
  code: number;
  parameters: [string];
  indent: number;
}

export interface CommandPair<
  Headder extends EventCommandLike,
  Body extends Command_TextBody
> {
  head: Headder;
  bodys: Body[];
}
