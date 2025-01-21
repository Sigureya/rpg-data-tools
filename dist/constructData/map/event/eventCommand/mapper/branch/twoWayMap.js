export class TwoWayMap {
    constructor(record, defaultKey) {
        if (!(defaultKey in record)) {
            throw new Error(`Default key '${String(defaultKey)}' does not exist in the provided record.`);
        }
        const { a, b } = createTwoWayMap(record);
        this.keyToValueMap = a;
        this.valueToKeyMap = b;
        this.defaultKey = defaultKey;
        this.defaultValue = record[defaultKey];
    }
    getValue(key) {
        if (key === undefined) {
            return this.defaultValue;
        }
        const value = this.keyToValueMap.get(key);
        return value === undefined ? this.defaultValue : value;
    }
    getKey(value) {
        if (value === undefined) {
            return this.defaultKey;
        }
        const key = this.valueToKeyMap.get(value);
        return key === undefined ? this.defaultKey : key;
    }
}
const createTwoWayMap = (record) => {
    const keyToValueMap = new Map();
    const b = new Map();
    Object.entries(record).forEach(([key, value]) => {
        keyToValueMap.set(key, value);
        b.set(value, key);
    });
    if (keyToValueMap.size !== b.size) {
        throw new Error("invalid map");
    }
    return { a: keyToValueMap, b };
};
//# sourceMappingURL=twoWayMap.js.map