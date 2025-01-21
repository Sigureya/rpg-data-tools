import type {
  BranchCode,
  BranchCodeTable,
  Operation_PlusMinus,
  Toggle,
  ValueOf,
} from "@sigureya/rpgtypes";

export interface BranchBySelfSwitch {
  //  branchCode: BranchCode["SELF_SWITCH"];
  selfSwitchId: string;
  value: keyof Toggle;
}
export interface BranchBySwitch {
  // branchCode: BranchCode["SWITCH"];
  switchId: number;
  switchValue: keyof Toggle;
}
export interface BranchByVariable {
  //  branchCode: BranchCode["VARIABLE"];
  variableId: number;
  operand: number;
  value: number;
}
export interface BranchByActor {
  //  branchCode: BranchCode["ACTOR"];
  actorId: number;
  operand: number;
  value: number;
}
export interface BranchByTimer {
  //  branchCode: BranchCode["TIMER"];
  time: number;
  operation: keyof Operation_PlusMinus;
}

export interface BranchByCharacter {
  // branchCode: BranchCode["CHARACTER"];
  characterId: number;
}
export interface BranchByGold {
  //  branchCode: BranchCodeTable["GOLD"];
  value: number;
  compair: 0 | 1 | 2;
}

export interface BranchByItem {
  // branchCode: BranchCode["ITEM"];
  itemId: number;
}
export interface BranchByWeapon {
  // branchCode: BranchCode["WEAPON"];
  weaponId: number;
}

export interface BranchByArmor {
  // branchCode: BranchCode["ARMOR"];
  armorId: number;
}

export interface BranchByButton {
  // branchCode: BranchCode["BUTTON"];
  buttonId: number;
}
export interface BranchByScript {
  //  branchCode: BranchCodeTable["SCRIPT"];
  script: string;
}

export interface BranchByVehicle {
  // branchCode: BranchCode["VEHICLE"];
  vehicleId: number;
}
