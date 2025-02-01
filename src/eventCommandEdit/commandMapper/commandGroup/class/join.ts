import type { EventCode, EventCommandLike } from "@sigureya/rpgtypes";

export const joinCommandBodies = <
  Command extends EventCommandLike<EventCode, [string]>
>(
  array: ReadonlyArray<Command>,
  sepadrator = "\n"
): string => {
  return array.map((v) => v.parameters[0]).join(sepadrator);
};
