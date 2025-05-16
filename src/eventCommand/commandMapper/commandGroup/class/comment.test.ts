import { describe, test, expect } from "vitest";
import {
  createCommentGroup,
  CHOICE_HELP_TEXT,
  CommandEX_ChoiceHelp,
  extractCommentGroup,
  isChoiceHelp,
} from "./comment";
import {
  makeCommand2_CommonEvent,
  makeCommandCommentHeader,
  makeCommandCommentBody,
  COMMENT_BODY,
  COMMENT_HEAD,
  Command_CommentBody,
  Command_CommentHeader,
} from "@sigureya/rpgtypes";
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from "./types";
describe("", () => {
  const commands = [
    makeCommandCommentHeader("aaa"),
    makeCommandCommentBody("bbb"),
  ];
  const group = createCommentGroup(commands, 0);
  describe("", () => {
    test("", () => {
      expect(group).toBeInstanceOf(CombinedEventCommandGroup);
    });
    test("", () => {
      expect(group.getBodyText()).toBe("aaa\nbbb");
    });
  });
});
describe("", () => {
  const commands = [
    makeCommandCommentHeader(CHOICE_HELP_TEXT),
    makeCommandCommentBody("bbb"),
  ];
  const group = createCommentGroup(commands, 0);
  describe("", () => {
    test("", () => {
      expect(group).toBeInstanceOf(SimpleEventCommandGroup);
    });
    test("", () => {
      expect(group.getBodyText()).toBe("bbb");
    });
  });
});
