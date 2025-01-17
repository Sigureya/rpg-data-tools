export type ArrayToObjectMapper<
  Array extends unknown[],
  ParamObject extends object
> = {
  [K in keyof ParamObject]: {
    [K2 in Extract<
      keyof Array,
      keyof NumericKeyMap
    >]: Array[K2] extends ParamObject[K] ? NumericKeyMap[K2] : never;
  }[Extract<keyof Array, keyof NumericKeyMap>];
};

interface NumericKeyMap {
  "0": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
}
