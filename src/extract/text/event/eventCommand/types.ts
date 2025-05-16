import type { CommandParameter } from "src";

export type TextCommandParameter = CommandParameter<string>;

export interface ExtractedEventText {
  eventId: number;
  pageIndex: number;
  commands: CommandParameter<string>[];
}
