import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  type EventCommand,
} from "@sigureya/rpgtypes";
import { pickCommands } from "./pickCommands";
import type { EventCommandPair } from "./types";
import { ERROR_COMMAND_MESSAGE } from "./errorConstants";

export const pickMessageHeader = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): Command_ShowMessage => {
  const head = arrya[start];
  if (head) {
    if (isMessageHeader(head)) {
      return head;
    }
  }
  throw new Error(ERROR_COMMAND_MESSAGE, { cause: head });
};

export const isMessageHeader = (
  command: EventCommand | undefined
): command is Command_ShowMessage => {
  if (!command) {
    return false;
  }
  if (command.code !== SHOW_MESSAGE) {
    return false;
  }
  if (![4, 5].includes(command.parameters.length)) {
    return false;
  }

  return (
    typeof command.parameters[0] === "string" &&
    typeof command.parameters[1] === "number" &&
    typeof command.parameters[2] === "number" &&
    typeof command.parameters[3] === "number"
    //    typeof command.parameters[4] === "string"
  );
};
export const pickMessageWithHead = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): EventCommandPair<Command_ShowMessage, Command_ShowMessageBody> => {
  const head = pickMessageHeader(arrya, start);
  return {
    head: head,
    bodys: pickCommands(SHOW_MESSAGE_BODY, arrya, start + 1),
  };
};
