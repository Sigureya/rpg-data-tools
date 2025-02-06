import type { Command_ControlVariables } from "@sigureya/rpgtypes";
import { range } from "./detail/detail";

export const targetsVariables = (command: Command_ControlVariables) => {
  const param = command.parameters;
  return range(param[0], param[1]);
};

// const operandIsVariable = (command) => {};
const isValiableRead = () => {};
