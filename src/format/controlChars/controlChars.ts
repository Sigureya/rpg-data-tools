import type { Data_Actor, Data_System } from "@sigureya/rpgtypes";
import { ACTOR, VARIABLE } from "./constants";
import type { ControlCharInfo, ControlChars } from "./types";

export const createControlCharFormat = <C extends ControlChars>(
  char: C,
  id: number
) => {
  return `\\${char}[${id}]` as const;
};

export const fromActor = (actor: Data_Actor) => {
  return createControlCharFormat(ACTOR, actor.id);
};

export const fromActors = (
  actors: ReadonlyArray<Data_Actor>
): ControlCharInfo[] => {
  return actors.map<ControlCharInfo>((actor) => ({
    controlChar: fromActor(actor),
    text: actor.name,
  }));
};
export const fromSystem = (system: Data_System): ControlCharInfo[] => {
  return system.variables
    .map<ControlCharInfo>((name, index) => ({
      text: name || "",
      controlChar: createControlCharFormat(VARIABLE, index),
    }))
    .filter((pair) => pair.text !== "");
};
