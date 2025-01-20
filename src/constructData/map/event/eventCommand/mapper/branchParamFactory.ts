import type { BranchParameters, Toggle } from "@sigureya/rpgtypes";
import type {
  BranchByActor,
  BranchByArmor,
  BranchByButton,
  BranchByCharacter,
  BranchByGold,
  BranchByItem,
  BranchBySelfSwitch,
  BranchBySwitch,
  BranchByTimer,
  BranchByVariable,
  BranchByWeapon,
} from "./branch/branchParams";
import { ParameterFactory } from "./template";

const toggle: Readonly<Toggle> = { OFF: 1, ON: 0 };

export const branchBySwitch = new ParameterFactory<
  BranchBySwitch,
  BranchParameters["SWITCH"]
>({
  array: (obj) => {
    return [0, obj.switchId, toggle[obj.switchValue]];
  },
  construct: (proto) => {
    return {
      switchId: proto.switchId ?? 0,
      switchValue: proto.switchValue ?? 0,
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      switchId: arr[1],
      switchValue: arr[2],
      branchCode: arr[0],
    };
  },
});
export const branchByVariable = new ParameterFactory<
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
export const branchBySelfSwitch = new ParameterFactory<
  BranchBySelfSwitch,
  BranchParameters["SELF_SWITCH"]
>({
  array: (obj) => {
    return [2, obj.selfSwitchId, obj.value];
  },
  construct: (proto) => {
    return {
      selfSwitchId: proto.selfSwitchId ?? "",
      value: proto.value ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      selfSwitchId: arr[1],
      value: arr[2],
    };
  },
});

export const branchByTimer = new ParameterFactory<
  BranchByTimer,
  BranchParameters["TIMER"]
>({
  array: (obj) => {
    return [3, obj.time, obj.operation];
  },
  construct: (proto) => {
    return {
      time: proto.time ?? 0,
      operation: proto.operation ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      time: arr[1],
      operation: arr[2],
    };
  },
});

export const branchByActor = new ParameterFactory<
  BranchByActor,
  BranchParameters["ACTOR"]
>({
  array: (obj) => {
    return [4, obj.actorId, obj.operand, obj.value];
  },
  construct: (proto) => {
    return {
      actorId: proto.actorId ?? 0,
      operand: proto.operand ?? 0,
      value: proto.value ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      actorId: arr[1],
      operand: arr[2],
      value: arr[3],
    };
  },
});

export const branchByGold = new ParameterFactory<
  BranchByGold,
  BranchParameters["GOLD"]
>({
  array: (obj) => {
    return [7, obj.value, obj.compair];
  },
  construct: (proto) => {
    return {
      value: proto.value ?? 0,
      compair: proto.compair ?? 0,
      // branchCode: proto.branchCode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      value: arr[1],
      compair: arr[2],
    };
  },
});
export const branchByCharacter = new ParameterFactory<
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
export const branchByItem = new ParameterFactory<
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

export const branchByWeapon = new ParameterFactory<
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

export const branchByArmor = new ParameterFactory<
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

export const branchByButton = new ParameterFactory<
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

export const branchByScript = new ParameterFactory<
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

export const branchByVehicle = new ParameterFactory<
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
