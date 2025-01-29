import type { EventCode, EventCommandLike } from "@sigureya/rpgtypes";

export const codeTest = <Code extends EventCode>(
  code: Code,
  command: EventCommandLike | undefined
): command is EventCommandLike<Code> => {
  if (!command) {
    return false;
  }
  return code === command.code;
};
