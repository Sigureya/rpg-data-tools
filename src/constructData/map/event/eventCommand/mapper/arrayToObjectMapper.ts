export type ArrayToObjectMapper<
  Array extends unknown[],
  ParamObject extends object
> = {
  [K in keyof ParamObject]: NumericKeyMap[Extract<
    keyof NumericKeyMap,
    keyof Array
  >];
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
