import { describe, expect, test } from "vitest";
import { SimpleEventCommandGroup } from "./commandGroop";
import type { EventCommandGroup_Message } from "./types";
import type {
  Command_ShowMessage,
  Command_ShowMessageBody,
} from "@sigureya/rpgtypes";

const createMessageMock = () => {
  return new SimpleEventCommandGroup<
    Command_ShowMessage,
    Command_ShowMessageBody
  >(
    {
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
    },
    401
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
