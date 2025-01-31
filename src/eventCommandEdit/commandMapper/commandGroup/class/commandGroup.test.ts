import { describe, expect, test } from "vitest";
import {
  CombinedEventCommandGroup,
  SimpleEventCommandGroup,
} from "./commandGroop";

import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";

import type * as RpgTypes from "@sigureya/rpgtypes";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_ScrollingText,
} from "./groopTypes";
const createMessageMock = () => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(
    401,
    {
      code: 101,
      indent: 0,
      parameters: ["face", 0, 0, 2, "speaker"],
    },
    ["aaa", "bbb"].map<Command_ShowMessageBody>((text) => ({
      code: 401,
      indent: 0,
      parameters: [text],
    }))
  );
};
describe("showMessage", () => {
  const message: EventCommandGroup_Message = createMessageMock();
  test("normalizedCommands", () => {
    const result = message.normalizedCommands();
    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
      code: 101,
      indent: 0,
      parameters: ["face", 0, 0, 2, "speaker"],
    });
    expect(result[1]).toMatchObject<Command_ShowMessageBody>({
      code: 401,
      indent: 0,
      parameters: ["aaa\nbbb"],
    });
  });
});

const createScrlloingTextMock = () => {
  return new SimpleEventCommandGroup<
    RpgTypes.Command_ShowScrollingText,
    RpgTypes.Command_ShowScrollingTextBody
  >(
    405,
    {
      code: 105,
      indent: 0,
      parameters: [0, false],
    },
    ["aaa", "bbb"].map<RpgTypes.Command_ShowScrollingTextBody>((text) => ({
      code: 405,
      indent: 0,
      parameters: [text],
    }))
  );
};

describe("ShowScrollingText", () => {
  const scrollingText: EventCommandGroup_ScrollingText =
    createScrlloingTextMock();
  test("normalizedCommands", () => {
    const result = scrollingText.normalizedCommands();
    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
      code: 105,
      indent: 0,
      parameters: [0, false],
    });
    expect(result[1]).toMatchObject<RpgTypes.Command_ShowScrollingTextBody>({
      code: 405,
      indent: 0,
      parameters: ["aaa\nbbb"],
    });
  });
});
describe("Comment", () => {
  test("comment length 0", () => {
    const comment: EventCommandGroup_Comment = new SimpleEventCommandGroup<
      RpgTypes.Command_Comment,
      RpgTypes.Command_CommentBody
    >(
      408,
      {
        code: 108,
        indent: 0,
        parameters: ["test"],
      },
      []
    );
    const result = comment.normalizedCommands();
    expect(result.length).toBe(1);
    expect(result[0]).toMatchObject({
      code: 108,
      indent: 0,
      parameters: ["test"],
    });
  });
  test("comment length 1", () => {
    const comment: EventCommandGroup_Comment = new CombinedEventCommandGroup<
      RpgTypes.Command_Comment,
      RpgTypes.Command_CommentBody
    >(
      {
        code: 108,
        indent: 0,
        parameters: ["test"],
      },
      [
        {
          code: 408,
          indent: 0,
          parameters: ["aaa"],
        },
      ]
    );
    const result = comment.normalizedCommands();
    expect(result).toMatchObject([
      {
        code: 108,
        indent: 0,
        parameters: ["test\naaa"],
      },
    ]);
    expect(result.length).toBe(1);
  });
});
