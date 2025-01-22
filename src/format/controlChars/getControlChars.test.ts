import { describe, it, expect } from "vitest";
import type { ControlChar } from "./geyContolChars";
import { getControlChars } from "./geyContolChars";

describe("getControlChars", () => {
  describe("正常系", () => {
    it("基本的な制御文字の抽出", () => {
      const input = "\\PX[1]\\py[20]\\X[300]\\Y[400]";
      const result = getControlChars(input);
      const expected: ControlChar[] = [
        { char: "PX", id: 1 },
        { char: "py", id: 20 },
        { char: "X", id: 300 },
        { char: "Y", id: 400 },
      ];

      expect(result).toEqual(expected);
    });

    it("ネストされた制御文字の抽出", () => {
      const input = "\\c[\\v[10]]";
      const result = getControlChars(input);
      const expected: ControlChar[] = [{ char: "v", id: 10 }];

      expect(result).toEqual(expected);
    });

    it("無効な制御文字は無視される", () => {
      const input = "\\invalid[1]\\PX[2]\\unknown[3]";
      const result = getControlChars(input);
      const expected: ControlChar[] = [{ char: "PX", id: 2 }];

      expect(result).toEqual(expected);
    });

    it("カスタム制御文字セットを使用", () => {
      const customSet = new Set(["custom", "another"] as const);
      const input = "\\custom[1]\\another[2]\\PX[3]";
      const result = getControlChars(input, customSet);
      const expected: ControlChar[] = [
        { char: "custom", id: 1 },
        { char: "another", id: 2 },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("異常系", () => {
    it("数字がない場合は無視される", () => {
      const input = "\\PX[]\\py";
      const result = getControlChars(input);
      expect(result).toEqual([]);
    });

    it("制御文字が閉じられていない場合は無視される", () => {
      const input = "\\PX[1\\py[2";
      const result = getControlChars(input);
      expect(result).toEqual([]);
    });

    it("空文字列を処理", () => {
      const result = getControlChars("");
      expect(result).toEqual([]);
    });
  });
});
