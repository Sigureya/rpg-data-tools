import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import {
  isCommandShowMessage,
  isCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
  type EventCommand,
  type ExtractCommandByParam,
} from "@sigureya/rpgtypes";
import type { EventCommandGroup_Message } from "./types";
import { SimpleEventCommandGroup } from "./types";

export const pickCommands3 = <
  Head extends EventCommand,
  Body extends ExtractCommandByParam<[string]>
>(
  array: ReadonlyArray<unknown>,
  index: number,
  headFn: (data: unknown) => data is Head,
  bodyFn: (data: unknown) => data is Body
): {
  head: Head;
  bodys: Body[];
} => {
  const head = array[index];
  if (!headFn(head)) {
    throw new Error("Invalid head", { cause: head });
  }
  const bodys: Body[] = [];
  for (let i = index + 1; i < array.length; i++) {
    const body = array[i];
    if (bodyFn(body)) {
      bodys.push(body);
    } else {
      break;
    }
  }
  return { head, bodys };
};
