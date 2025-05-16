import type { CommandParameter } from "src";
import type {
  Data_CommonEvent,
  Data_Troop,
  EventCommand,
  MapEvent,
} from "@sigureya/rpgtypes";
import type {
  ExtractedCommonEventText,
  ExtractedMapEventText,
  ExtractedTroopText,
} from "./types";
import { extractNoteText } from "./mainData";
import {
  extractTextFromEventCommands,
  extractTextFromEventPages,
} from "./event";
import type { ExtractedEventText, TextCommandParameter } from "./event/";

export const correctTextCommands = (
  page: { list: EventCommand[] },
  pageIndex: number,
  event: { id: number }
): ExtractedEventText => {
  const list: TextCommandParameter[][] = extractTextFromEventCommands(
    page.list
  );
  return {
    eventId: event.id,
    pageIndex,
    commands: list.flat(),
  };
};

export const correctMapEventText = (
  event: Pick<MapEvent, "note" | "pages" | "id">
): ExtractedMapEventText => {
  const commands: CommandParameter<string>[][][] =
    extractTextFromEventPages(event);
  return {
    note: extractNoteText(event),
    eventId: event.id,
    commands: commands.flat(2),
  };
};

export const extractTextFromTroop = (
  troop: Pick<Data_Troop, "pages" | "id">
): ExtractedTroopText => {
  const commands: CommandParameter<string>[][][] =
    extractTextFromEventPages(troop);
  return {
    troopId: troop.id,
    commands: commands.flat(2),
  };
};

export const extractTextFromCommonEvent = (
  event: Pick<Data_CommonEvent, "list" | "id">
): ExtractedCommonEventText => {
  return {
    eventId: event.id,
    commands: extractTextFromEventCommands(event.list).flat(2),
  };
};
