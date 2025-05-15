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
import { pickCommands3 } from "./pick2";
import { SimpleEventCommandGroup } from "./types";

export const createMessageGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodys, head } = pickCommands3(
    list,
    index,
    isCommandShowMessage,
    isCommandShowMessageBody
  );
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(SHOW_MESSAGE_BODY, head, bodys);
};
