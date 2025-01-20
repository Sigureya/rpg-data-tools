export class TwoWayMap<
  R extends Record<string, V>,
  V extends string | number = number
> {
  keyToValueMap: Map<keyof R, V>;
  valueToKeyMap: Map<string | number, string>;
  constructor(record: R) {
    const { a, b } = createMap(record);
    this.keyToValueMap = a;
    this.valueToKeyMap = b;
  }

  getValueFromKey<K extends string = string & keyof R>(key: K): V | undefined {
    return this.keyToValueMap.get(key);
  }

  getKeyFromValue<Value extends V = R[keyof R]>(
    value: Value
  ): string | undefined {
    return this.valueToKeyMap.get(value);
  }
}

const createMap = <K extends PropertyKey, V extends PropertyKey>(
  record: Record<K, V>
) => {
  const a: Map<K, V> = new Map();
  const b: Map<V, string> = new Map();
  Object.entries<V>(record).forEach(([key, value]) => {
    a.set(key as K, value);
    b.set(value, key);
  });

  return { a, b };
};
