export const mmmm2 = <V extends PropertyKey>(record: Record<string, V>) => {
  const a: Map<string, V> = new Map();
  const b: Map<V, string> = new Map();
  Object.entries<V>(record).forEach(([key, value]) => {
    a.set(key, value);
    b.set(value, key);
  });

  return { a, b };
};

export const createBiDirectionalMap = <
  R extends Record<string, string | number>
>(
  record: R
) => {
  return new BiDirectionalMap(record);
};

export class BiDirectionalMap<
  K extends PropertyKey,
  V extends string | number = string | number
> {
  private keyToValueMap: ReadonlyMap<string, V>;
  private valueToKeyMap: ReadonlyMap<V, string>;

  constructor(record: Record<K, V>) {
    const { a, b } = mmmm2(record);
    this.keyToValueMap = a;
    this.valueToKeyMap = b;
  }

  getValueFromKey(key: string): V | undefined {
    return this.keyToValueMap.get(key);
  }

  getKeyFromValue(value: V): string | undefined {
    return this.valueToKeyMap.get(value);
  }
}
