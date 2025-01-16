import type { ColorRGBA } from "@sigureya/rpgtypes";

export const createColorRGBA = (
  proto: Partial<{
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }> = {}
): ColorRGBA => {
  return [proto.red ?? 0, proto.green ?? 0, proto.blue ?? 0, proto.alpha ?? 1];
};
