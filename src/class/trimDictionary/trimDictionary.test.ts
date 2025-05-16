import { describe, expect, test } from "vitest";
import { TrimDictionary } from "./trimDictionary";
const createMockDictionary = () => {
  return new TrimDictionary([
    [" key1", "value1"], // 前に空白あり
    ["key2", "value2"], // 前後に空白なし
    ["key3   ", "value3"], // 後ろに空白あり
  ]);
};

describe("TrimDictionary", () => {
  const mock = createMockDictionary();
  describe("辞書のエントリ数が正しい", () => {
    test("", () => {
      expect(mock.size).toBe(3);
    });
  });
  describe("", () => {
    test("entries() で全エントリを取得できる", () => {
      const entries = Array.from(mock.entries());

      expect(entries).toEqual([
        [" key1", "value1"],
        ["key2", "value2"],
        ["key3", "value3"],
      ]);
    });

    test("values() で全値を取得できる", () => {
      const values = Array.from(mock.values());

      expect(values).toEqual(["value1", "value2", "value3"]);
    });
    test("keys() で全キーを取得できる", () => {
      const mock = createMockDictionary();
      const keys = Array.from(mock.keys());

      expect(keys).toEqual([" key1", "key2", "key3"]);
    });
  });
  describe("登録時に末尾の空白がトリムされる", () => {
    test("", () => {
      // 登録されたキー
      expect(mock.lookup("key3")).toBe("value3");

      // トリムされてもキーと一致
      expect(mock.lookup("key3   ")).toBe("value3");
      expect(mock.lookup("key3      ")).toBe("value3");
    });
  });
  describe("", () => {
    test("登録時に前方の空白は保持される", () => {
      const mock = createMockDictionary();

      // 前方の空白を含めて登録されている
      expect(mock.lookup(" key1")).toBe("value1");

      // 空白なしのキーは一致しない
      expect(mock.lookup("key1")).toBeUndefined();
    });
  });
  describe("", () => {
    test("lookupWithFallback: 存在しないキーはトリム後のキーを返す", () => {
      const mock = createMockDictionary();

      // 存在しないキーの場合
      expect(mock.lookupWithFallback("unknownKey")).toBe("unknownKey");
      expect(mock.lookupWithFallback("unknownKey  ")).toBe("unknownKey");
      expect(mock.lookupWithFallback(" unknownKey  ")).toBe(" unknownKey");

      // 存在するキーの場合
      expect(mock.lookupWithFallback(" key1")).toBe("value1");
      expect(mock.lookupWithFallback("key2")).toBe("value2");
      expect(mock.lookupWithFallback("key3   ")).toBe("value3");
    });
  });
});

describe("破壊的処理", () => {
  test("登録時に空のキーは無視される", () => {
    const mock = new TrimDictionary([
      ["   ", "ignored"],
      ["key", "value"],
    ]);

    // 空のキーは無視される
    expect(mock.size).toBe(1);
    expect(mock.lookup("   ")).toBeUndefined();
    expect(mock.lookup("key")).toBe("value");
  });
});
