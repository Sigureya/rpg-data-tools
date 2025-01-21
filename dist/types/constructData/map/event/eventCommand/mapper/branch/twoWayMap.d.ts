export declare class TwoWayMap<R extends Record<string, V>, V extends number = R[keyof R]> {
    readonly keyToValueMap: ReadonlyMap<keyof R, V>;
    readonly valueToKeyMap: ReadonlyMap<V, keyof R>;
    readonly defaultKey: keyof R;
    readonly defaultValue: V;
    constructor(record: R, defaultKey: keyof R);
    getValue<K extends string = Extract<keyof R, string>>(key: K | undefined): V;
    getKey<Value extends V | number = R[keyof R]>(value: Value | undefined): keyof R;
}
