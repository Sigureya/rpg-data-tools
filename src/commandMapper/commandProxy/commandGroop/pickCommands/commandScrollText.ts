import type {
  EventCommand,
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody,
} from "@sigureya/rpgtypes";
import {
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import { codeTest } from "./commandCheck";
import { pickCommands } from "./pickCommands";
import type { EventCommandPair } from "./types";

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
