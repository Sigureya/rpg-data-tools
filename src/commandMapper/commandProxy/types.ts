import type { EventCommand, EventCommandLike } from "@sigureya/rpgtypes";

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

export interface commandProxy3 {
  join(sepadrator?: string): string;
}

export type CallBackFunc<
  Command extends {
    code: number;
    parameters: readonly unknown[];
    indent: number;
  },
  Reulst = void
> = (
  command: Readonly<Command>,
  index: number,
  list: ReadonlyArray<Readonly<EventCommand>>
) => Reulst;
