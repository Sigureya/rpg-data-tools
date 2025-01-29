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
import type { CommandReadError, EventCommandPair } from "./types";

export type CommandPair_ScrollingText = EventCommandPair<
  Command_ShowScrollingText,
  Command_ShowScrollingTextBody
>;
export const ERROR_MESSAGE = "ScrollTextHeader invalid command" as const;

export const pickScrollTextHeader = (
  array: ReadonlyArray<EventCommand>,
  start: number
): Command_ShowScrollingText => {
  const cmd = array[start];
  if (codeTest(SHOW_SCROLLING_TEXT, cmd)) {
    return cmd;
  }
  const error: CommandReadError = {
    headCode: SHOW_SCROLLING_TEXT,
    bodyCode: SHOW_SCROLLING_TEXT_BODY,
    index: start,
  };
  throw new Error(ERROR_MESSAGE, { cause: error });
};

export const pickScrollText = (
  array: ReadonlyArray<EventCommand>,
  start: number
): CommandPair_ScrollingText => {
  const head = pickScrollTextHeader(array, start);
  return {
    head: head,
    bodys: pickCommands(SHOW_SCROLLING_TEXT_BODY, array, start + 1),
  };
};
