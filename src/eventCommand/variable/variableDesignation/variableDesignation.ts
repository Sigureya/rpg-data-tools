import type {
  VariableDesignation,
  VariableDesignationCommands,
  VariableReference,
} from "./types";
import type { EventCommand, IndexOfCommandParameter } from "@sigureya/rpgtypes";
import * as RpgTypes from "@sigureya/rpgtypes";
import {
  DESIGNATION_INDEX_TABLE,
  VARIABLE_DESIGNATION,
  VARIABLEID_INDEX_TABLE,
} from "./piravate";

const x = (list: EventCommand[]) => {
  return list.filter(isVariableDesignationCommand).map((cmd) => {
    return variableReference(cmd);
  });
};

export const variableReference = (
  command: VariableDesignationCommands
): VariableReference => {
  const index = VARIABLEID_INDEX_TABLE[command.code];
  if (index === undefined) {
    throw new Error(`code${command.code} is not supported`);
  }
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
      return isVariableDesignation(
        command,
        DESIGNATION_INDEX_TABLE[command.code]
      );
    case RpgTypes.CHANGE_ENEMY_MP:
      return isVariableDesignation(
        command,
        DESIGNATION_INDEX_TABLE[command.code]
      );
    case RpgTypes.TRANSFER_PLAYER:
      return isVariableDesignation(
        command,
        DESIGNATION_INDEX_TABLE[command.code]
      );
    case RpgTypes.SET_VEHICLE_LOCATION:
      return isVariableDesignation(
        command,
        DESIGNATION_INDEX_TABLE[command.code]
      );
    case RpgTypes.GET_LOCATION_INFO:
      return isVariableDesignation(
        command,
        DESIGNATION_INDEX_TABLE[command.code]
      );
    // case RpgTypes.BATTLE_PROCESSING:
    //   return isVariableDesignation(command, INDEX_TABLE[command.code]);
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
