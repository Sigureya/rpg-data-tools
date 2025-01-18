import type {
  BranchByActor,
  BranchBySelfSwitch,
  BranchBySwitch,
  BranchByVariable,
  BranchCode,
  CommandTemplate,
  ValueOf,
} from "@sigureya/rpgtypes";

export type BranchParams = CommandTemplate<
  Record<keyof BranchCode, BranchCode[keyof BranchCode]>,
  { branchBy: ValueOf<BranchCode>; params: unknown[] },
  "branchBy",
  "params",
  {
    ACTOR: BranchByActor;
    VARIABLE: BranchByVariable;
    ARMOR: [armorId: number];
    BUTTON: [buttonId: number];
    SWITCH: BranchBySwitch;
    SELF_SWITCH: [selfSwitchId: string, value: boolean];
    TIMER: BranchBySelfSwitch;
    ENEMY: [enemyId: number];
    CHARACTER: [characterId: number];
    GOLD: [];
    ITEM: [itemId: number];
    WEAPON: [weaponId: number];
    SCRIPT: [script: string];
    VEHICLE: [vehicleId: number];
  }
>;
