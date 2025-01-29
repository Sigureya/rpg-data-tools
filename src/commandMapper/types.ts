import type { EventCommand } from "@sigureya/rpgtypes";

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
