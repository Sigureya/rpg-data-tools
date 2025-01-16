import type { MoveRouteCommand, MoveRouteData } from "@sigureya/rpgtypes";

export const constructMoveRoute = (
  options: Partial<MoveRouteData> = {}
): MoveRouteData => {
  return {
    repeat: false,
    skippable: false,
    wait: false,
    list: [],
    ...options,
  };
};

export const constructMoveRouteCommand = <
  Code extends MoveRouteCommand["code"]
>(
  code: Code,
  parameters: MoveRouteCommand["parameters"]
): { code: Code; parameters: MoveRouteCommand["parameters"] } => {
  return {
    code,
    parameters,
  };
};
