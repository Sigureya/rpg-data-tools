import type {
  Command_ScriptBody,
  Command_ScriptHeader,
  Command_ShowMessage,
  Command_ShowMessageBody,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
  EventCommandLike,
  EventCode,
  EventCommand,
} from "@sigureya/rpgtypes";
import {
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import type { Command_TextBody, EventCommandPair } from "./types";
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

export const pickScripts = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): EventCommandPair<Command_ScriptHeader, Command_ScriptBody> | undefined => {
  const head = arrya[start];
  if (isHeadCommand(SCRIPT_EVAL, head)) {
    return {
      head: head,
      bodys: pickCommands(SCRIPT_EVAL_BODY, arrya, start + 1),
    };
  }
};

export const pickMessageWithHead = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
):
  | EventCommandPair<Command_ShowMessage, Command_ShowMessageBody>
  | undefined => {
  const head = arrya[start];
  if (!head) {
    return;
  }
  if (head.code === SHOW_MESSAGE) {
    return {
      head: head,
      bodys: pickCommands(SHOW_MESSAGE_BODY, arrya, start + 1),
    };
  }
};

export const pickScrollText = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
):
  | EventCommandPair<Command_ShowScrollingText, Command_ShowScrollingTextBody>
  | undefined => {
  const head = arrya[start];
  if (codeTest(SHOW_SCROLLING_TEXT, head)) {
    return {
      head: head,
      bodys: pickCommands(SHOW_SCROLLING_TEXT_BODY, arrya, start + 1),
    };
  }
};
