import type {
  EventCommand,
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";
import { SimpleEventCommandGroup } from "./commandGroop/commandGroop3";
import type { EventCommandGroup } from "./commandGroop/types";
import { pickMessageWithHead } from "./commandGroop";

export const onMessage = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (
    groop: EventCommandGroup<Command_ShowMessage, Command_ShowMessageBody>
  ) => Result
): Result => {
  const pair = pickMessageWithHead(array, index);
  if (!pair) {
    throw new Error("Unexpected Error");
  }
  const groop = new SimpleEventCommandGroup(pair);
  return func(groop);
};
