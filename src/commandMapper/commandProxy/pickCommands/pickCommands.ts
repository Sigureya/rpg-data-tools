import type {
  Command_Comment,
  Command_CommentBody,
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
  COMMENT,
  COMMENT_BODY,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import type { Command_TextBody, CommandPair } from "./types";

export const isBodyParams = (param: unknown[]): param is [string] => {
  return typeof param[0] === "string" && param.length === 1;
};

export const codeTest = <Code extends EventCode>(
  code: Code,
  command: EventCommandLike | undefined
): command is EventCommandLike<Code> => {
  if (!command) {
    return false;
  }
  return code === command.code;
};

export const isHeadCoomand = <Code extends EventCode>(
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

export const joinBodys = <Command extends Command_TextBody>(
  array: ReadonlyArray<Command>
) => {
  return array.map((v) => v.parameters[0]).join("\n");
};

export const pickComments = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): CommandPair<Command_Comment, Command_CommentBody> | undefined => {
  const head = arrya[start];
  if (isHeadCoomand(COMMENT, head)) {
    return {
      head: head,
      bodys: pickCommands(COMMENT_BODY, arrya, start + 1),
    };
  }
};

export const pickScripts = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): CommandPair<Command_ScriptHeader, Command_ScriptBody> | undefined => {
  const head = arrya[start];
  if (isHeadCoomand(SCRIPT_EVAL, head)) {
    return {
      head: head,
      bodys: pickCommands(SCRIPT_EVAL_BODY, arrya, start + 1),
    };
  }
};

export const pickMessageWithHead = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): CommandPair<Command_ShowMessage, Command_ShowMessageBody> | undefined => {
  const head = arrya[start];
  if (codeTest(SHOW_MESSAGE, head)) {
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
  | CommandPair<Command_ShowScrollingText, Command_ShowScrollingTextBody>
  | undefined => {
  const head = arrya[start];
  if (codeTest(SHOW_SCROLLING_TEXT, head)) {
    return {
      head: head,
      bodys: pickCommands(SHOW_SCROLLING_TEXT_BODY, arrya, start + 1),
    };
  }
};
