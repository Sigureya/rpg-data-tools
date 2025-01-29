import type {
  EventCommandLike,
  EventCode,
  EventCommand,
} from "@sigureya/rpgtypes";
import type { Command_TextBody } from "./types";
import { codeTest } from "./commandCheck";

export const isBodyParams = (
  param: unknown[]
): param is [string] & { length: 1 } => {
  return typeof param[0] === "string" && param.length === 1;
};

export const isHeadCommand = <Code extends EventCode>(
  code: Code,
  command: EventCommandLike | undefined
): command is {
  code: Code;
  indent: number;
  parameters: [string];
} => {
  if (!command) {
    return false;
  }
  return code === command.code && isBodyParams(command.parameters);
};

export const pickCommands = <Code extends EventCode>(
  code: Code,
  arrya: ReadonlyArray<EventCommand>,
  start: number
) => {
  const result: {
    code: Code;
    indent: number;
    parameters: [string];
  }[] = [];
  for (let i = start; i < arrya.length; i++) {
    const command = arrya[i];
    if (codeTest(code, command) && isBodyParams(command.parameters)) {
      result.push({
        code: code,
        indent: command.indent,
        parameters: [command.parameters[0]],
      });
    } else {
      break;
    }
  }
  return result;
};

export const pickHead = <Code extends EventCode>(
  commands: ReadonlyArray<EventCommand>,
  index: number,
  code: Code
): Command_TextBody<Code> => {
  const head = commands[index];
  if (!head) {
    throw new Error(`msg: ${code} index: ${index}`);
  }
  if (codeTest(code, head) && isBodyParams(head.parameters)) {
    return {
      code: code,
      indent: head.indent,
      parameters: [head.parameters[0]],
    };
  }
  throw new Error(`msg: ${code} index: ${index}`);
};
