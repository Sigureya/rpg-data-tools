import type { EventCommandTable } from "@sigureya/rpgtypes";

export const createEventCommand = <Code extends keyof EventCommandTable>(
  code: Code,
  parameters: EventCommandTable[Code]["parameters"],
  indent = 0
): {
  code: Code;
  parameters: EventCommandTable[Code]["parameters"];
  indent: number;
} => ({
  code,
  indent,
  parameters,
});