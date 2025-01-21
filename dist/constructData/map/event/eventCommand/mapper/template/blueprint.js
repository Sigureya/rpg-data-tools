export const createSample = (blueprint) => {
    const proto = blueprint.construct({});
    const array = blueprint.array(proto);
    return { object: createTypeMap(proto), array: typeMapFromArray(array) };
};
export const typeMapFromArray = (array) => {
    return new Map(array.map((value, index) => [index.toString(), typeof value]));
};
export const createTypeMap = (obj) => {
    const list = Object.entries(obj).map(([key, value]) => [key, typeof value]);
    return new Map(list);
};
//# sourceMappingURL=blueprint.js.map