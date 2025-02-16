import type {
  CommandParamaterType,
  EventCode,
  EventCommandLike,
} from "@sigureya/rpgtypes";

export const createEventCommand = <
  Code extends EventCode,
  Param extends CommandParamaterType<Code>
>(
  code: Code,
  param: Param,
  indent: number = 0
): EventCommandLike<Code, Param> => {
  return {
    code,
    indent,
    parameters: param,
  };
};
