import type {
  EventCommand,
  Command_ScriptHeader,
  Command_ScriptBody,
} from "@sigureya/rpgtypes";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@sigureya/rpgtypes";
import { isHeadCommand, pickCommands } from "./pickCommands";
import type { EventCommandPair } from "./types";

export const pickScripts = (
  arrya: ReadonlyArray<EventCommand>,
  start: number
): EventCommandPair<Command_ScriptHeader, Command_ScriptBody> | undefined => {
  const head = arrya[start];
  if (isHeadCommand(SCRIPT_EVAL, head)) {
    return {
      head: head,
      bodys: pickCommands(SCRIPT_EVAL_BODY, arrya, start + 1),
    };
  }
};
