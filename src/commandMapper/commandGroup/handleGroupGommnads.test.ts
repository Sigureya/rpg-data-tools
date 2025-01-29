import type { MockedFunction } from "vitest";
import { describe, it, expect, vi } from "vitest";
import {
  SimpleEventCommandGroup,
  CombinedEventCommandGroup,
} from "./commandGroop";
import {
  handleGroupMessage,
  handleGroupScrollingText,
  handleGroupComment,
  handleGroupScript,
} from "./handleGroupGommnads";
import {
  pickMessageWithHead,
  pickScrollText,
  pickComments,
  pickScripts,
} from "./pickCommands";
import type { EventCommandGroup_Message } from "./types";

vi.mock("./pickCommands", () => ({
  pickMessageWithHead: vi.fn(),
  pickScrollText: vi.fn(),
  pickComments: vi.fn(),
  pickScripts: vi.fn(),
}));

describe("handleGroupMessage", () => {
  it("should call the callback with a SimpleEventCommandGroup", () => {
    const mockPair = {
      head: { code: 101, parameters: ["", 0, 0, 2, ""], indent: 0 },
      bodys: [],
    } as const;
    (
      pickMessageWithHead as MockedFunction<typeof pickMessageWithHead>
    ).mockReturnValue(mockPair);
    const callback = vi.fn();
    const result = handleGroupMessage([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new SimpleEventCommandGroup(mockPair)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickMessageWithHead fails", () => {
    (pickMessageWithHead as any).mockImplementation(() => {
      throw new Error("Invalid message command");
    });
    expect(() => handleGroupMessage([], 0, vi.fn())).toThrow(
      "Invalid message command"
    );
  });
});

describe("handleGroupScrollingText", () => {
  it("should call the callback with a SimpleEventCommandGroup", () => {
    const mockPair = { head: { code: 105 }, bodys: [] } as const;
    (pickScrollText as any).mockReturnValue(mockPair);
    const callback = vi.fn();
    const result = handleGroupScrollingText([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new SimpleEventCommandGroup(mockPair)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickScrollText fails", () => {
    (pickScrollText as any).mockImplementation(() => {
      throw new Error("Invalid scrolling text command");
    });
    expect(() => handleGroupScrollingText([], 0, vi.fn())).toThrow(
      "Invalid scrolling text command"
    );
  });
});

describe("handleGroupComment", () => {
  it("should call the callback with a CombinedEventCommandGroup", () => {
    const mockPair = { head: { code: 108 }, bodys: [] };
    (pickComments as any).mockReturnValue(mockPair);
    const callback = vi.fn();
    const result = handleGroupComment([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new CombinedEventCommandGroup(mockPair)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickComments fails", () => {
    (pickComments as any).mockImplementation(() => {
      throw new Error("Invalid comment command");
    });
    expect(() => handleGroupComment([], 0, vi.fn())).toThrow(
      "Invalid comment command"
    );
  });
});

describe("handleGroupScript", () => {
  it("should call the callback with a CombinedEventCommandGroup", () => {
    const mockPair = { head: { code: 355 }, bodys: [] };
    (pickScripts as any).mockReturnValue(mockPair);
    const callback = vi.fn();
    const result = handleGroupScript([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new CombinedEventCommandGroup(mockPair)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickScripts fails", () => {
    (pickScripts as any).mockImplementation(() => {
      throw new Error("Invalid script command");
    });
    expect(() => handleGroupScript([], 0, vi.fn())).toThrow(
      "Invalid script command"
    );
  });
});
