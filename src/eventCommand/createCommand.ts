import type {
  CommandParamaterType,
  EventCode,
  EventCommandLike,
} from "@sigureya/rpgtypes";

export const createEventCommand = <Code extends EventCode>(
  code: Code,
  param: CommandParamaterType<Code>,
  indent: number = 0
): EventCommandLike<Code, CommandParamaterType<Code>> => {
  return {
    code,
    indent,
    parameters: param,
  };
};
