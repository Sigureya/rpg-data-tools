import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  type EventCommand,
} from "@sigureya/rpgtypes";
import { codeTest } from "./commandCheck";
import { pickCommands } from "./pickCommands";
import type { EventCommandPair } from "./types";

export const pickMessageHeader = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
) => {
  const head = arrya[start];
  if (isMessageHeader(head)) {
    return head;
  }
};

export const isMessageHeader = (
  command: EventCommand
): command is Command_ShowMessage => {
  if (codeTest(SHOW_MESSAGE, command)) {
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
