import type RpgTypes from "@sigureya/rpgtypes";

export interface VDReulut {
  code: number;
  index: number;
  variableId: number;
}

export type VariableDesignation<
  T extends { code: number; indent: number; parameters: unknown[] },
  Index extends RpgTypes.IndexOfCommandParameter<T, 0 | 1>
> = T & { parameters: { [K in Index]: 1 } };

export type VariableDesignationCommands =
  | VariableDesignation_ChangeEnemyHP
  | VariableDesignation_ChangeEnemyMP;

export type VariableDesignation_ChangeEnemyHP = VariableDesignation<
  RpgTypes.Command_ChangeEnemyHP,
  2
>;

export type VariableDesignation_ChangeEnemyMP = VariableDesignation<
  RpgTypes.Command_ChangeEnemyMP,
  2
>;
