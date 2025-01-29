import type {
  EventCommand,
  Command_ScriptHeader,
  Command_ScriptBody,
} from "@sigureya/rpgtypes";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@sigureya/rpgtypes";
import { pickCommands, pickHead } from "./pickCommands";
import type { EventCommandPair } from "./types";

export const pickScripts = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): EventCommandPair<Command_ScriptHeader, Command_ScriptBody> => {
  const head = pickHead(arrya, start, SCRIPT_EVAL);
  return {
    head: head,
    bodys: pickCommands(SCRIPT_EVAL_BODY, arrya, start + 1),
  };
};
