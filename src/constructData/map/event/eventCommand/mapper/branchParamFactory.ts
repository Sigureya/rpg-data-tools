import type { BranchParameters } from "@sigureya/rpgtypes";
import type {
  BranchByArmor,
  BranchByButton,
  BranchByCharacter,
  BranchByGold,
  BranchByItem,
  BranchBySelfSwitch,
  BranchBySwitch,
  BranchByVariable,
  BranchByWeapon,
} from "./branch/";
import { TOGGLE } from "./branch/enumMaps";
import { BranchCommandFactory } from "./branchCommandFactory";

export const branchBySwitch = new BranchCommandFactory<
  BranchBySwitch,
  BranchParameters["SWITCH"]
>({
  array: (obj) => {
    return [0, obj.switchId, TOGGLE.getValue(obj.switchValue)];
  },
  construct: (proto) => {
    return {
      switchId: proto.switchId ?? 0,
      switchValue: proto.switchValue ?? "ON",
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      switchId: arr[1],
      switchValue: TOGGLE.getKey(arr[2]),
    };
  },
});

export const branchBySelfSwitch = new BranchCommandFactory<
  BranchBySelfSwitch,
  BranchParameters["SELF_SWITCH"]
>({
  array: (obj) => {
    return [2, obj.selfSwitchId, TOGGLE.getValue(obj.value)];
  },
  construct: (proto) => {
    return {
      selfSwitchId: proto.selfSwitchId ?? "A",
      value: proto.value ?? TOGGLE.defaultKey,
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      selfSwitchId: arr[1],
      value: TOGGLE.getKey(arr[2]),
      //      branchCode: ,
    };
  },
});
export const branchByVariable = new BranchCommandFactory<
  BranchByVariable,
  BranchParameters["VARIABLE"]
>({
  array: (obj) => {
    return [1, obj.variableId, obj.operand, obj.value];
  },
  construct: (proto) => {
    return {
      variableId: proto.variableId ?? 0,
      operand: proto.operand ?? 0,
      value: proto.value ?? 0,

      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      variableId: arr[1],
      operand: arr[2],
      value: arr[3],
    };
  },
});

export const branchByGold = new BranchCommandFactory<
  BranchByGold,
  BranchParameters["GOLD"]
>({
  array: (obj) => {
    return [7, obj.value, obj.compair];
  },
  construct: (proto) => {
    return {
      branchCode: 7,
      value: proto.value ?? 0,
      compair: proto.compair ?? 0,
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      branchCode: 7,
      value: arr[1],
      compair: arr[2],
    };
  },
});
export const branchByCharacter = new BranchCommandFactory<
  BranchByCharacter,
  BranchParameters["CHARACTER"]
>({
  array: (obj) => {
    return [6, obj.characterId];
  },
  construct: (proto) => {
    return {
      characterId: proto.characterId ?? 0,
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      characterId: arr[1],
    };
  },
});
export const branchByItem = new BranchCommandFactory<
  BranchByItem,
  BranchParameters["ITEM"]
>({
  array: (obj) => {
    return [8, obj.itemId];
  },
  construct: (proto) => {
    return {
      itemId: proto.itemId ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      itemId: arr[1],
    };
  },
});

export const branchByWeapon = new BranchCommandFactory<
  BranchByWeapon,
  BranchParameters["WEAPON"]
>({
  array: (obj) => {
    return [9, obj.weaponId];
  },
  construct: (proto) => {
    return {
      weaponId: proto.weaponId ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      weaponId: arr[1],
    };
  },
});

export const branchByArmor = new BranchCommandFactory<
  BranchByArmor,
  BranchParameters["ARMOR"]
>({
  array: (obj) => {
    return [10, obj.armorId];
  },
  construct: (proto) => {
    return {
      armorId: proto.armorId ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      armorId: arr[1],
    };
  },
});

export const branchByButton = new BranchCommandFactory<
  BranchByButton,
  BranchParameters["BUTTON"]
>({
  array: (obj) => {
    return [11, obj.buttonId];
  },
  construct: (proto) => {
    return {
      buttonId: proto.buttonId ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      buttonId: arr[1],
    };
  },
});

export const branchByScript = new BranchCommandFactory<
  { script: string },
  BranchParameters["SCRIPT"]
>({
  array: (obj) => {
    return [12, obj.script];
  },
  construct: (proto) => {
    return {
      script: proto.script ?? "",
    };
  },
  fromArray: (arr) => {
    return {
      script: arr[1],
    };
  },
});

export const branchByVehicle = new BranchCommandFactory<
  { vehicleId: number },
  BranchParameters["VEHICLE"]
>({
  array: (obj) => {
    return [13, obj.vehicleId];
  },
  construct: (proto) => {
    return {
      vehicleId: proto.vehicleId ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      vehicleId: arr[1],
    };
  },
});
