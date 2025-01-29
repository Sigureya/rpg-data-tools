import type { EventCommand } from "@sigureya/rpgtypes";
import {
  CombinedEventCommandGroup,
  SimpleEventCommandGroup,
} from "./commandGroop/commandGroop3";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./commandGroop/types";
import {
  pickComments,
  pickMessageWithHead,
  pickScripts,
  pickScrollText,
} from "./commandGroop";

export const onMessage = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_Message) => Result
): Result => {
  const pair = pickMessageWithHead(array, index);

  const groop = new SimpleEventCommandGroup(pair);
  return func(groop);
};

export const onScrollingText = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_ScrollingText) => Result
): Result => {
  const pair = pickScrollText(array, index);
  const groop = new SimpleEventCommandGroup(pair);
  return func(groop);
};

export const onComment = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_Comment) => Result
): Result => {
  const pair = pickComments(array, index);
  const groop = new CombinedEventCommandGroup(pair);
  return func(groop);
};

export const onScript = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_Script) => Result
): Result => {
  const pair = pickScripts(array, index);
  const groop = new CombinedEventCommandGroup(pair);
  return func(groop);
};
