export type ArrayToObjectMapper<ParameterArray extends unknown[], MappedParamObject extends object> = {
    [Key in keyof MappedParamObject]: {
        [Index in Extract<keyof ParameterArray, keyof IndexToNumericKeyMap>]: ParameterArray[Index] extends MappedParamObject[Key] ? IndexToNumericKeyMap[Index] : never;
    }[Extract<keyof ParameterArray, keyof IndexToNumericKeyMap>];
};
interface IndexToNumericKeyMap {
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
export {};
