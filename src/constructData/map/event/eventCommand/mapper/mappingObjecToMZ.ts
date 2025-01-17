import type { EventCommand } from "@sigureya/rpgtypes";
import type { ArrayToObjectMapper } from "./template/arrayToObjectMapper";
import type { ParameterFactory } from "./template/parameterFactory";
export type MappingEventParameter<
  MappedParamObject extends object,
  EventCommandType extends EventCommand
> = ArrayToObjectMapper<EventCommandType["parameters"], MappedParamObject>;

export type EventParameterFactory<
  MappedParamObject extends object,
  EventCommandType extends EventCommand
> = ParameterFactory<EventCommandType["parameters"], MappedParamObject>;
