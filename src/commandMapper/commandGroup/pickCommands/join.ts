import type { Command_TextBody } from "./types";

export const joinCommandBodies = <Command extends Command_TextBody>(
  array: ReadonlyArray<Command>,
  sepadrator = "\n"
) => {
  return array.map((v) => v.parameters[0]).join(sepadrator);
};
