import { describe, test, expect } from "vitest";
import { constructEventCommand } from "./eventCommand";
import * as CODE from "./eventCodes";
describe("constructEventCommand", () => {
  test("should create a valid event command object", () => {
    const eventCommand = constructEventCommand(CODE.SHOW_MESSAGE, [
      "",
      0,
      0,
      0,
      "",
    ]);
    expect(eventCommand.code).toBe(CODE.SHOW_MESSAGE);
    expect(eventCommand.parameters[0]).toBe("");
    expect(eventCommand.indent).toBe(0);
  });

  test("should create a valid event command object", () => {
    const eventCommand = constructEventCommand(CODE.SHOW_MESSAGE_BODY, [
      "Hello, World!",
    ]);
    expect(eventCommand.code).toBe(CODE.SHOW_MESSAGE);
    expect(eventCommand.parameters[0]).toBe("Hello, World!");
    expect(eventCommand.indent).toBe(0);
  });
});
