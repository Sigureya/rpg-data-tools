import { TOGGLE } from "./branch/enumMaps";
import { BranchCommandFactory } from "./branchCommandFactory";
export const branchBySwitch = new BranchCommandFactory({
    array: (obj) => {
        return [0, obj.switchId, TOGGLE.getValue(obj.switchValue)];
    },
    construct: (proto) => {
        return {
            switchId: proto.switchId ?? 0,
            switchValue: proto.switchValue ?? "ON",
        };
    },
    fromArray: (arr) => {
        return {
            switchId: arr[1],
            switchValue: TOGGLE.getKey(arr[2]),
        };
    },
});
export const branchBySelfSwitch = new BranchCommandFactory({
    array: (obj) => {
        return [2, obj.selfSwitchId, TOGGLE.getValue(obj.value)];
    },
    construct: (proto) => {
        return {
            selfSwitchId: proto.selfSwitchId ?? "A",
            value: proto.value ?? TOGGLE.defaultKey,
        };
    },
    fromArray: (arr) => {
        return {
            selfSwitchId: arr[1],
            value: TOGGLE.getKey(arr[2]),
        };
    },
});
export const branchByVariable = new BranchCommandFactory({
    array: (obj) => {
        return [1, obj.variableId, obj.operand, obj.value];
    },
    construct: (proto) => {
        return {
            variableId: proto.variableId ?? 0,
            operand: proto.operand ?? 0,
            value: proto.value ?? 0,
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
export const branchByGold = new BranchCommandFactory({
    array: (obj) => {
        return [7, obj.value, obj.compair];
    },
    construct: (proto) => {
        return {
            branchCode: 7,
            value: proto.value ?? 0,
            compair: proto.compair ?? 0,
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
export const branchByCharacter = new BranchCommandFactory({
    array: (obj) => {
        return [6, obj.characterId];
    },
    construct: (proto) => {
        return {
            characterId: proto.characterId ?? 0,
        };
    },
    fromArray: (arr) => {
        return {
            characterId: arr[1],
        };
    },
});
export const branchByItem = new BranchCommandFactory({
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
export const branchByWeapon = new BranchCommandFactory({
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
export const branchByArmor = new BranchCommandFactory({
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
export const branchByButton = new BranchCommandFactory({
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
export const branchByScript = new BranchCommandFactory({
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
export const branchByVehicle = new BranchCommandFactory({
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
//# sourceMappingURL=branchParamFactory.js.map