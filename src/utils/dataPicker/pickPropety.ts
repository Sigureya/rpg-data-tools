import type { PickByType } from "@sigureya/rpgtypes";

export const pickPropertys = <
  Result,
  Value,
  T extends Record<KeyType, Value> = Record<string, Value>,
  KeyType extends string & keyof PickByType<T, Value> = string &
    keyof PickByType<T, Value>
>(
  data: T,
  keyList: ReadonlyArray<string & keyof PickByType<T, Value>>,
  fn: (key: string, value: Value, data: T) => Result
): Result[] => {
  return keyList.map((key) => fn(key, data[key], data));
};

export const pickString = <
  Result,
  T extends Record<KeyType, string> = Record<string, string>,
  KeyType extends string & keyof PickByType<T, string> = string &
    keyof PickByType<T, string>
>(
  data: T,
  keyList: ReadonlyArray<KeyType>,
  fn: (key: string, value: string, data: T) => Result
): Result[] => {
  return pickPropertys<Result, string, T>(data, keyList, fn);
};
