import { describe, test, expect } from "vitest";
import { SimpleEventCommandGroup } from "./simple";
import {
  createEventCommand,
  makeCommandShowMessage,
  SHOW_MESSAGE_BODY,
} from "@sigureya/rpgtypes";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";

describe("SimpleEventCommandGroup - Edge Cases", () => {
  test("Empty bodies array", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      [] as Command_ShowMessageBody[]
    );
    expect(group.getBodyText()).toBe(""); // 空のボディの場合、空文字列を返す
    expect(group.normalizedCommands()).toEqual([header]); // ボディが空の場合、ヘッダーのみを返す
  });

  test("Single body with special characters", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const body: Command_ShowMessageBody = createEventCommand(
      SHOW_MESSAGE_BODY,
      ["Line1\nLine2"]
    );
    const group = new SimpleEventCommandGroup(SHOW_MESSAGE_BODY, header, [
      body,
    ]);
    expect(group.getBodyText()).toBe("Line1\nLine2"); // 改行を含む文字列が正しく結合される
    expect(group.normalizedCommands()).toEqual([header, body]); // 正しい形式で返される
  });

  test("Multiple bodies with special characters", () => {
    const header: Command_ShowMessage = makeCommandShowMessage({
      speakerName: "Header",
    });
    const bodies: Command_ShowMessageBody[] = [
      createEventCommand(SHOW_MESSAGE_BODY, ["Line1"]),
      createEventCommand(SHOW_MESSAGE_BODY, ["Line2"]),
    ];
    const group = new SimpleEventCommandGroup(
      SHOW_MESSAGE_BODY,
      header,
      bodies
    );
    expect(group.getBodyText()).toBe("Line1\nLine2"); // ボディが正しく結合される
    expect(group.normalizedCommands()).toEqual([
      header,
      createEventCommand(SHOW_MESSAGE_BODY, ["Line1\nLine2"]),
    ]);
  });
});
