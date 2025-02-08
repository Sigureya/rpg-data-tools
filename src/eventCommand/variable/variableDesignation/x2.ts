import type {
  VariableDesignation,
  VariableDesignationCommands,
  VDReulut,
} from "./types";
import type { EventCommand, IndexOfCommandParameter } from "@sigureya/rpgtypes";
import RpgTypes from "@sigureya/rpgtypes";
import { INDEX_TABLE, VARIABLE_DESIGNATION } from "./piravate/";

export const vdResult = (command: VariableDesignationCommands): VDReulut => {
  const index = INDEX_TABLE[command.code];
  return {
    code: command.code,
    index,
    variableId: command.parameters[index],
  };
};

export const isVariableDesignationCommand = (
  command: EventCommand
): command is VariableDesignationCommands => {
  if (command.code === RpgTypes.CONTROL_VARIABLES) {
    return false;
  }
  switch (command.code) {
    case RpgTypes.CHANGE_ENEMY_HP:
      return isVariableDesignation(command, INDEX_TABLE[command.code]);
    case RpgTypes.CHANGE_ENEMY_MP:
      return isVariableDesignation(command, INDEX_TABLE[command.code]);
    case RpgTypes.TRANSFER_PLAYER:
      return isVariableDesignation(command, INDEX_TABLE[command.code]);
    default:
      return false;
  }
};

const isVariableDesignation = <
  Command extends EventCommand,
  Index extends IndexOfCommandParameter<Command, 0 | 1>
>(
  command: Command,
  index: Index
): command is VariableDesignation<Command, Index> => {
  return command.parameters[index] === VARIABLE_DESIGNATION;
};
