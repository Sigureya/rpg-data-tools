export const constructMoveRoute = (options = {}) => {
    return {
        repeat: false,
        skippable: false,
        wait: false,
        list: [],
        ...options,
    };
};
export const constructMoveRouteCommand = (code, parameters) => {
    return {
        code,
        parameters,
    };
};
//# sourceMappingURL=moveRoute.js.map