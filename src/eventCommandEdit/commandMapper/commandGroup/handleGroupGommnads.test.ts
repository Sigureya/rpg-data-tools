import type { MockedFunction } from "vitest";
import { describe, it, expect, vi } from "vitest";
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
import type {
  EventCommandPair_Message,
  EventCommandPair_ScrollingText,
  EventCommandPair_Comment,
  EventCommandPair_Script,
} from "./pickCommands/";
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from "./class";
// TODO:このモックは不要っぽい。いずれモック不要の実装へ移行する
vi.mock("./pickCommands", () => ({
  pickMessageWithHead: vi.fn(),
  pickScrollText: vi.fn(),
  pickComments: vi.fn(),
  pickScripts: vi.fn(),
}));

describe("handleGroupMessage", () => {
  it("should call the callback with a SimpleEventCommandGroup", () => {
    const mockPair: EventCommandPair_Message = {
      head: { code: 101, parameters: ["", 0, 0, 2, ""], indent: 0 },
      bodys: [],
    } as const;
    (
      pickMessageWithHead as MockedFunction<typeof pickMessageWithHead>
    ).mockReturnValue(mockPair);
    const callback = vi.fn();
    const result = handleGroupMessage([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new SimpleEventCommandGroup(401, mockPair.head, mockPair.bodys)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickMessageWithHead fails", () => {
    (
      pickMessageWithHead as MockedFunction<typeof pickMessageWithHead>
    ).mockImplementation(() => {
      throw new Error("Invalid message command");
    });
    expect(() => handleGroupMessage([], 0, vi.fn())).toThrow(
      "Invalid message command"
    );
  });
});

describe("handleGroupScrollingText", () => {
  it("should call the callback with a SimpleEventCommandGroup", () => {
    const mockPair: EventCommandPair_ScrollingText = {
      head: { code: 105, parameters: [1, false], indent: 0 },
      bodys: [],
    };
    (pickScrollText as MockedFunction<typeof pickScrollText>).mockReturnValue(
      mockPair
    );
    const callback = vi.fn();
    const result = handleGroupScrollingText([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new SimpleEventCommandGroup(405, mockPair.head, mockPair.bodys)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickScrollText fails", () => {
    (
      pickScrollText as MockedFunction<typeof pickScrollText>
    ).mockImplementation(() => {
      throw new Error("Invalid scrolling text command");
    });
    expect(() => handleGroupScrollingText([], 0, vi.fn())).toThrow(
      "Invalid scrolling text command"
    );
  });
});

describe("handleGroupComment", () => {
  it("should call the callback with a CombinedEventCommandGroup", () => {
    const mockPair: EventCommandPair_Comment = {
      head: { code: 108, parameters: ["Command 1"], indent: 0 },
      bodys: [],
    };
    (pickComments as MockedFunction<typeof pickComments>).mockReturnValue(
      mockPair
    );
    const callback = vi.fn();
    const result = handleGroupComment([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new CombinedEventCommandGroup(mockPair.head, mockPair.bodys)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickComments fails", () => {
    (pickComments as MockedFunction<typeof pickComments>).mockImplementation(
      () => {
        throw new Error("Invalid comment command");
      }
    );
    expect(() => handleGroupComment([], 0, vi.fn())).toThrow();
  });
});

describe("handleGroupScript", () => {
  it("should call the callback with a CombinedEventCommandGroup", () => {
    const mockPair: EventCommandPair_Script = {
      head: { code: 355, parameters: ["console.log('test')"], indent: 0 },
      bodys: [],
    };
    (pickScripts as MockedFunction<typeof pickScripts>).mockReturnValue(
      mockPair
    );
    const callback = vi.fn();
    const result = handleGroupScript([], 0, callback);
    expect(callback).toHaveBeenCalledWith(
      new CombinedEventCommandGroup(mockPair.head, mockPair.bodys)
    );
    expect(result).toBe(callback.mock.results[0].value);
  });

  it("should throw an error when pickScripts fails", () => {
    (pickScripts as MockedFunction<typeof pickScripts>).mockImplementation(
      () => {
        throw new Error("Invalid script command");
      }
    );
    expect(() => handleGroupScript([], 0, vi.fn())).toThrowError();
  });
});
