import type { Operation_PlusMinus, Toggle } from "@sigureya/rpgtypes";
export interface BranchBySelfSwitch {
    selfSwitchId: string;
    value: keyof Toggle;
}
export interface BranchBySwitch {
    switchId: number;
    switchValue: keyof Toggle;
}
export interface BranchByVariable {
    variableId: number;
    operand: number;
    value: number;
}
export interface BranchByActor {
    actorId: number;
    operand: number;
    value: number;
}
export interface BranchByTimer {
    time: number;
    operation: keyof Operation_PlusMinus;
}
export interface BranchByCharacter {
    characterId: number;
}
export interface BranchByGold {
    value: number;
    compair: 0 | 1 | 2;
}
export interface BranchByItem {
    itemId: number;
}
export interface BranchByWeapon {
    weaponId: number;
}
export interface BranchByArmor {
    armorId: number;
}
export interface BranchByButton {
    buttonId: number;
}
export interface BranchByScript {
    script: string;
}
export interface BranchByVehicle {
    vehicleId: number;
}
