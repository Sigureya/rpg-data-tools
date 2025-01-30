import { describe, expect, test } from "vitest";
import { SimpleEventCommandGroup } from "./commandGroop";
import type {
  EventCommandGroup_Message,
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./types";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";

import type * as RpgTypes from "@sigureya/rpgtypes";
const createMessageMock = () => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(401, {
    head: {
      code: 101,
      indent: 0,
      parameters: ["face", 0, 0, 2, "speaker"],
    },
    bodys: ["aaa", "bbb"].map<Command_ShowMessageBody>((text) => ({
      code: 401,
      indent: 0,
      parameters: [text],
    })),
  });
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
  >(405, {
    head: {
      code: 105,
      indent: 0,
      parameters: [0, false],
    },
    bodys: ["aaa", "bbb"].map<RpgTypes.Command_ShowScrollingTextBody>(
      (text) => ({
        code: 405,
        indent: 0,
        parameters: [text],
      })
    ),
  });
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
