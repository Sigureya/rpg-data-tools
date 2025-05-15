import type {
  EventCommand,
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  isCommandShowMessage,
  isCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import { pickCommands } from "./pick";
import { SimpleEventCommandGroup } from "./types";

export const extractMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    isCommandShowMessage,
    isCommandShowMessageBody
  );
};

export const createMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodys, head } = extractMessageGroup(list, index);
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, head, bodys);
};
