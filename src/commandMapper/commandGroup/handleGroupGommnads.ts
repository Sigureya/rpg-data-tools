import type { EventCommand } from "@sigureya/rpgtypes";

import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./types";

import {
  pickComments,
  pickMessageWithHead,
  pickScripts,
  pickScrollText,
} from "./pickCommands";
import {
  SimpleEventCommandGroup,
  CombinedEventCommandGroup,
} from "./commandGroop2/commandGroop";

export const handleGroupMessage = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_Message) => Result
): Result => {
  const pair = pickMessageWithHead(array, index);

  const group = new SimpleEventCommandGroup(401, pair);
  return func(group);
};

export const handleGroupScrollingText = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_ScrollingText) => Result
): Result => {
  const pair = pickScrollText(array, index);
  const group = new SimpleEventCommandGroup(405, pair);
  return func(group);
};

export const handleGroupComment = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (group: EventCommandGroup_Comment) => Result
): Result => {
  const pair = pickComments(array, index);
  const group = new CombinedEventCommandGroup(pair);
  return func(group);
};

export const handleGroupScript = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (group: EventCommandGroup_Script) => Result
): Result => {
  const pair = pickScripts(array, index);
  const groop = new CombinedEventCommandGroup(pair);
  return func(groop);
};
