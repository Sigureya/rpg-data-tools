import { EventCommand } from '@sigureya/rpgtypes';
import { GroopMapper } from './commandGroup';
import { CallBackFunc, BasicMappingObject } from './commandMapper2';
export interface MappingObject2<T> extends BasicMappingObject<T>, GroopMapper<T> {
}
export interface PartialMappingObject<T> extends Partial<MappingObject2<T>> {
    other: CallBackFunc<EventCommand, T>;
}
