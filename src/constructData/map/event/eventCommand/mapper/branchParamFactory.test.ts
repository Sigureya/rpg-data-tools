import { describe, test, expect } from "vitest";
import * as $ from "./branchParamFactory";
describe("branchParamFactory", () => {
  test("branchBySwitch", () => {
    const obj = { switchId: 1, switchValue: "ON" } as const;
    const arr = $.branchBySwitch.array(obj);
    expect(arr).toEqual([0, 1, 0]);
    const constructed = $.branchBySwitch.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchBySwitch.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchBySelfSwitch", () => {
    const obj = { selfSwitchId: "A", value: "ON" } as const;
    const arr = $.branchBySelfSwitch.array(obj);
    expect(arr).toEqual([2, "A", 0]);
    const constructed = $.branchBySelfSwitch.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchBySelfSwitch.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByVariable", () => {
    const obj = { variableId: 1, operand: 2, value: 3 } as const;
    const arr = $.branchByVariable.array(obj);
    expect(arr).toEqual([1, 1, 2, 3]);
    const constructed = $.branchByVariable.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByVariable.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByGold", () => {
    const obj = { value: 100, compair: 1 } as const;
    const arr = $.branchByGold.array(obj);
    expect(arr).toEqual([7, 100, 1]);
    const constructed = $.branchByGold.construct(obj);
    expect(constructed).toEqual({ branchCode: 7, ...obj });
    const fromArr = $.branchByGold.fromArray(arr);
    expect(fromArr).toEqual({ branchCode: 7, ...obj });
  });

  test("branchByCharacter", () => {
    const obj = { characterId: 1 };
    const arr = $.branchByCharacter.array(obj);
    expect(arr).toEqual([6, 1]);
    const constructed = $.branchByCharacter.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByCharacter.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByItem", () => {
    const obj = { itemId: 1 };
    const arr = $.branchByItem.array(obj);
    expect(arr).toEqual([8, 1]);
    const constructed = $.branchByItem.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByItem.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByWeapon", () => {
    const obj = { weaponId: 1 };
    const arr = $.branchByWeapon.array(obj);
    expect(arr).toEqual([9, 1]);
    const constructed = $.branchByWeapon.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByWeapon.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByArmor", () => {
    const obj = { armorId: 1 };
    const arr = $.branchByArmor.array(obj);
    expect(arr).toEqual([10, 1]);
    const constructed = $.branchByArmor.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByArmor.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByButton", () => {
    const obj = { buttonId: 1 };
    const arr = $.branchByButton.array(obj);
    expect(arr).toEqual([11, 1]);
    const constructed = $.branchByButton.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByButton.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByScript", () => {
    const obj = { script: "console.log('test');" };
    const arr = $.branchByScript.array(obj);
    expect(arr).toEqual([12, "console.log('test');"]);
    const constructed = $.branchByScript.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByScript.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });

  test("branchByVehicle", () => {
    const obj = { vehicleId: 1 };
    const arr = $.branchByVehicle.array(obj);
    expect(arr).toEqual([13, 1]);
    const constructed = $.branchByVehicle.construct(obj);
    expect(constructed).toEqual(obj);
    const fromArr = $.branchByVehicle.fromArray(arr);
    expect(fromArr).toEqual(obj);
  });
});

describe("branchParamFactory for empty object initialization", () => {
  test("branchBySwitch with empty object", () => {
    const arr = $.branchBySwitch.array({});
    expect(arr).toEqual([0, 0, 0]);
  });

  test("branchBySelfSwitch with empty object", () => {
    const arr = $.branchBySelfSwitch.array({});
    expect(arr).toEqual([2, "A", 0]);
  });

  test("branchByVariable with empty object", () => {
    const arr = $.branchByVariable.array({});
    expect(arr).toEqual([1, 0, 0, 0]);
  });

  test("branchByGold with empty object", () => {
    const arr = $.branchByGold.array({});
    expect(arr).toEqual([7, 0, 0]);
  });

  test("branchByCharacter with empty object", () => {
    const arr = $.branchByCharacter.array({});
    expect(arr).toEqual([6, 0]);
  });

  test("branchByItem with empty object", () => {
    const arr = $.branchByItem.array({});
    expect(arr).toEqual([8, 0]);
  });

  test("branchByWeapon with empty object", () => {
    const arr = $.branchByWeapon.array({});
    expect(arr).toEqual([9, 0]);
  });

  test("branchByArmor with empty object", () => {
    const arr = $.branchByArmor.array({});
    expect(arr).toEqual([10, 0]);
  });

  test("branchByButton with empty object", () => {
    const arr = $.branchByButton.array({});
    expect(arr).toEqual([11, 0]);
  });

  test("branchByScript with empty object", () => {
    const arr = $.branchByScript.array({});
    expect(arr).toEqual([12, ""]);
  });

  test("branchByVehicle with empty object", () => {
    const arr = $.branchByVehicle.array({});
    expect(arr).toEqual([13, 0]);
  });
});
