import type { Command_TextBody, CommandPair } from "./types";

export const joinBodys = <Command extends Command_TextBody>(
  array: ReadonlyArray<Command>
) => {
  return array.map((v) => v.parameters[0]).join("\n");
};

export const joinBodysWithHead = (
  commandX: CommandPair<Command_TextBody, Command_TextBody>,
  sepadrator = "\n"
): string => {
  return `${commandX.head.parameters[0]}${sepadrator}${joinBodys(
    commandX.bodys
  )}`;
};
