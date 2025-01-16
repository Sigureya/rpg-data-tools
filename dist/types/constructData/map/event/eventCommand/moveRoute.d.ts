import type { MoveRouteCommand, MoveRouteData } from "@sigureya/rpgtypes";
export declare const constructMoveRoute: (options?: Partial<MoveRouteData>) => MoveRouteData;
export declare const constructMoveRouteCommand: <Code extends MoveRouteCommand["code"]>(code: Code, parameters: MoveRouteCommand["parameters"]) => {
    code: Code;
    parameters: MoveRouteCommand["parameters"];
};
