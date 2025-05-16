import type { EventCommand } from "@sigureya/rpgtypes";
import type { CallBackFunc, BasicMappingObject } from "./types";
import type { GroopMapper } from "./commandGroup";

export interface MappingObject<T>
  extends BasicMappingObject<T>,
    GroopMapper<T> {}

export interface PartialMappingObject<T> extends Partial<MappingObject<T>> {
  other: CallBackFunc<EventCommand, T>;
}
