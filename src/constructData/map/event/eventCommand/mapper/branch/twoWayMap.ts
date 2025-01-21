export class TwoWayMap<
  R extends Record<string, V>,
  V extends number = R[keyof R]
> {
  readonly keyToValueMap: ReadonlyMap<keyof R, V>;
  readonly valueToKeyMap: ReadonlyMap<V, keyof R>;
  public readonly defaultKey: keyof R;
  public readonly defaultValue: V;

  constructor(record: R, defaultKey: keyof R) {
    // バリデーション: デフォルトキーが存在することを確認
    if (!(defaultKey in record)) {
      throw new Error(
        `Default key '${String(
          defaultKey
        )}' does not exist in the provided record.`
      );
    }
    const { a, b } = createTwoWayMap(record);
    this.keyToValueMap = a;
    this.valueToKeyMap = b;
    this.defaultKey = defaultKey;
    this.defaultValue = record[defaultKey];
  }

  /**
   * @param key 検索に使う値。getValue(partial.member)のような記述を許容するために、undefinedを許容している。
   * @returns
   */
  getValue<K extends string = Extract<keyof R, string>>(key: K | undefined): V {
    if (key === undefined) {
      return this.defaultValue;
    }
    const value = this.keyToValueMap.get(key);
    return value === undefined ? this.defaultValue : value;
  }

  /**
   * @param value 逆検索に使う値。getKey(partial.member)のような記述を許容するために、undefinedを許容している。
   * @returns
   */
  getKey<Value extends V | number = R[keyof R]>(
    value: Value | undefined
  ): keyof R {
    if (value === undefined) {
      return this.defaultKey;
    }
    const key = this.valueToKeyMap.get(value as V);
    return key === undefined ? this.defaultKey : key;
  }
}
// コンストラクタを単純化したいので、Mapの初期化を切り分ける
const createTwoWayMap = <K extends string, V extends string | number>(
  record: Record<K, V>
) => {
  const keyToValueMap: Map<K, V> = new Map();
  const b: Map<V, K> = new Map();
  Object.entries<V>(record).forEach(([key, value]) => {
    keyToValueMap.set(key as K, value);
    b.set(value, key as K);
  });
  // 値が重複しているなら、マップのサイズが異なる
  if (keyToValueMap.size !== b.size) {
    throw new Error("invalid map");
  }
  return { a: keyToValueMap, b };
};
