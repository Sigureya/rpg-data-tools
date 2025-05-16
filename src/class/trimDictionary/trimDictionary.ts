/**
 * 辞書クラス。
 * 登録・検索の双方で末尾の空白を無視する。
 * 先頭の空白は保持する。
 */
export class TrimDictionary {
  private readonly _map: Map<string, string>;
  constructor(
    list: ReadonlyArray<
      readonly [originText: string, transratedText: string]
    > = []
  ) {
    this._map = new Map();
    list.forEach((pair) => this.set(pair[0], pair[1]));
  }

  set(originText: string, transratedText: string) {
    const trimedKey = this.trimKey(originText);
    if (trimedKey === "") {
      return;
    }

    // 既に登録されている場合、何もしない
    if (!this._map.has(trimedKey)) {
      this._map.set(trimedKey, transratedText.trimEnd());
    }
  }
  private trimKey(key: string): string {
    // 末尾の空白だけ消す。前にある空白は保持する
    return key.trimEnd();
  }
  lookupWithFallback(key: string): string {
    const trimedKey = this.trimKey(key);
    const value = this.lookup(trimedKey);
    return value ?? trimedKey;
  }

  lookup(key: string): string | undefined {
    return this._map.get(this.trimKey(key));
  }
  entries() {
    return this._map.entries();
  }
  values() {
    return this._map.values();
  }
  keys() {
    return this._map.keys();
  }
  get size() {
    return this._map.size;
  }
}
