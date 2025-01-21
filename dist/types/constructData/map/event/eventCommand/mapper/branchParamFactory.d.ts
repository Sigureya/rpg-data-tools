import type { BranchByArmor, BranchByButton, BranchByCharacter, BranchByGold, BranchByItem, BranchBySelfSwitch, BranchBySwitch, BranchByVariable, BranchByWeapon } from "./branch/";
import { BranchCommandFactory } from "./branchCommandFactory";
export declare const branchBySwitch: BranchCommandFactory<BranchBySwitch, [branchCode: 0, switchId: number, switchValue: import("@sigureya/rpgtypes").ValueOf<import("@sigureya/rpgtypes").Toggle>]>;
export declare const branchBySelfSwitch: BranchCommandFactory<BranchBySelfSwitch, [branchCode: 2, selfSwitchId: string, value: import("@sigureya/rpgtypes").ValueOf<import("@sigureya/rpgtypes").Toggle>]>;
export declare const branchByVariable: BranchCommandFactory<BranchByVariable, [branchCode: 1, variableId: number, operand: number, value: number]>;
export declare const branchByGold: BranchCommandFactory<BranchByGold, [branchCode: 7, value: number, compair: 0 | 1 | 2]>;
export declare const branchByCharacter: BranchCommandFactory<BranchByCharacter, [branchCode: 6, characterId: number]>;
export declare const branchByItem: BranchCommandFactory<BranchByItem, [branchCode: 8, itemId: number]>;
export declare const branchByWeapon: BranchCommandFactory<BranchByWeapon, [branchCode: 9, weaponId: number]>;
export declare const branchByArmor: BranchCommandFactory<BranchByArmor, [branchCode: 10, armorId: number]>;
export declare const branchByButton: BranchCommandFactory<BranchByButton, [branchCode: 11, buttonId: number]>;
export declare const branchByScript: BranchCommandFactory<{
    script: string;
}, [branchCode: 12, script: string]>;
export declare const branchByVehicle: BranchCommandFactory<{
    vehicleId: number;
}, [branchCode: 13, vehicleId: number]>;
