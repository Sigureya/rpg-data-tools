import type { EventCommand } from "@sigureya/rpgtypes";
import {
  isCommandShowScrollingTextBody,
  isCommandScrollTextHead,
  SHOW_SCROLLING_TEXT_BODY,
} from "@sigureya/rpgtypes";
import { pickCommands } from "./pick";
import { SimpleEventCommandGroup } from "./types";

export const extractScrollTextGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  return pickCommands(
    list,
    index,
    isCommandScrollTextHead,
    isCommandShowScrollingTextBody
  );
};

export const createScrollTextGroup = (
  list: ReadonlyArray<EventCommand>,
  index: number
) => {
  const { bodies, header } = extractScrollTextGroup(list, index);
  return new SimpleEventCommandGroup(SHOW_SCROLLING_TEXT_BODY, header, bodies);
};
