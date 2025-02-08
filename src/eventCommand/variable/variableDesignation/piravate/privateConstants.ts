import RpgTypes from "@sigureya/rpgtypes";
import type { Table_IndexOfDesignation as Table_IndexOfDesignation } from "./privateTypes";

export const VARIABLE_DESIGNATION = 1 as const;

export const INDEX_TABLE: Table_IndexOfDesignation = {
  [RpgTypes.CHANGE_ENEMY_HP]: 2,
  [RpgTypes.CHANGE_ENEMY_MP]: 2,
  [RpgTypes.TRANSFER_PLAYER]: 0,
} as const;
