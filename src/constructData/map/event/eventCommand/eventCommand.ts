import type { EventCode, EventCommandsMapper } from "@sigureya/rpgtypes";

export const constructEventCommand = <Code extends EventCode>(
  code: Code,
  parameters: EventCommandsMapper["parameterByCode"][Code],
  indent = 0
): {
  code: Code;
  parameters: EventCommandsMapper["parameterByCode"][Code];
  indent: number;
} => ({
  code,
  indent,
  parameters,
});
