import type { EventCommandTypes, PickByType } from "@sigureya/rpgtypes";

// const xxx :PickByType< EventCommandTypes["SHOW_CHOICES"]
type MapperConcept<
  CommandParamMZ extends unknown[],
  CommandParamObject extends object
> = {
  [K in keyof CommandParamObject]: Extract<
    keyof PickByType<CommandParamMZ, CommandParamObject[K]>,
    any
  >;
};

export type Mapper<
  CommandParamMZ extends unknown[],
  CommandParamObject extends object,
  ttt extends MapperConcept<CommandParamMZ, CommandParamObject>
> = {};
