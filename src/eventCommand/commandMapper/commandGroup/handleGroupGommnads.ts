import type { EventCommand } from "@sigureya/rpgtypes";

import { pickComments, pickScripts, pickScrollText } from "./pickCommands";
import {
  createCommentGroup,
  createScriptGroup,
  createScrlloingTextGroup,
} from "./class";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./class";

export const handleGroupScrollingText = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (groop: EventCommandGroup_ScrollingText) => Result
): Result => {
  const pair = pickScrollText(array, index);
  const group = createScrlloingTextGroup(pair.head, pair.bodys);
  return func(group);
};

export const handleGroupComment = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (group: EventCommandGroup_Comment) => Result
): Result => {
  const pair = pickComments(array, index);
  const group = createCommentGroup(pair.head, pair.bodys);
  return func(group);
};

export const handleGroupScript = <Result>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  func: (group: EventCommandGroup_Script) => Result
): Result => {
  const pair = pickScripts(array, index);
  const groop = createScriptGroup(pair.head, pair.bodys);
  return func(groop);
};
