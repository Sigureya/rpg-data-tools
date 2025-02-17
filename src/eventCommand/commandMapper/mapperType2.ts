import type { EventCommand } from "@sigureya/rpgtypes";
import type { GroopMapper } from "./commandGroup";
import type { CallBackFunc, BasicMappingObject } from "./commandMapper2";

export interface MappingObject2<T>
  extends BasicMappingObject<T>,
    GroopMapper<T> {}

export interface PartialMappingObject<T> extends Partial<MappingObject2<T>> {
  other: CallBackFunc<EventCommand, T>;
}
