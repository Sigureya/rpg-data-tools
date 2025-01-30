import { BranchParam_Armor, BranchParam_Button, BranchParam_Character, BranchParam_Gold, BranchParam_Item, BranchParam_Script, BranchParam_SelfSwitch, BranchParam_Switch, BranchParam_Variable, BranchParam_Vehicle, BranchParam_Weapon } from '@sigureya/rpgtypes';
import { BranchByArmor, BranchByButton, BranchByCharacter, BranchByGold, BranchByItem, BranchBySelfSwitch, BranchBySwitch, BranchByVariable, BranchByWeapon } from './branch/';
import { BranchCommandFactory } from './branchCommandFactory';
export declare const branchBySwitch: BranchCommandFactory<BranchBySwitch, BranchParam_Switch>;
export declare const branchBySelfSwitch: BranchCommandFactory<BranchBySelfSwitch, BranchParam_SelfSwitch>;
export declare const branchByVariable: BranchCommandFactory<BranchByVariable, BranchParam_Variable>;
export declare const branchByGold: BranchCommandFactory<BranchByGold, BranchParam_Gold>;
export declare const branchByCharacter: BranchCommandFactory<BranchByCharacter, BranchParam_Character>;
export declare const branchByItem: BranchCommandFactory<BranchByItem, BranchParam_Item>;
export declare const branchByWeapon: BranchCommandFactory<BranchByWeapon, BranchParam_Weapon>;
export declare const branchByArmor: BranchCommandFactory<BranchByArmor, BranchParam_Armor>;
export declare const branchByButton: BranchCommandFactory<BranchByButton, BranchParam_Button>;
export declare const branchByScript: BranchCommandFactory<{
    script: string;
}, BranchParam_Script>;
export declare const branchByVehicle: BranchCommandFactory<{
    vehicleId: number;
}, BranchParam_Vehicle>;
