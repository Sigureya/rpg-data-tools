import { describe, it, expect } from "vitest";
import { constructDamage, constructArmor, constructWeapon, constructClass, constructSkill, constructItem, constructState, constructParamArray, } from "./mainData";
describe("constructArmor", () => {
    it("should create a valid armor object", () => {
        const armor = constructArmor({ name: "Leather Armor", price: 100 });
        expect(armor.name).toBe("Leather Armor");
        expect(armor.price).toBe(100);
        expect(armor.params.length).toBe(8);
    });
});
describe("constructWeapon", () => {
    it("should create a valid weapon object", () => {
        const weapon = constructWeapon({ name: "Iron Sword", wtypeId: 1 });
        expect(weapon.name).toBe("Iron Sword");
        expect(weapon.wtypeId).toBe(1);
        expect(weapon.damage.formula).toBe("0");
    });
});
describe("constructClass", () => {
    it("should create a valid class object", () => {
        const classObj = constructClass({
            name: "Warrior",
            expParams: [30, 20, 10, 10],
        });
        expect(classObj.name).toBe("Warrior");
        expect(classObj.expParams).toEqual([30, 20, 10, 10]);
    });
});
describe("constructSkill", () => {
    it("should create a valid skill object", () => {
        const skill = constructSkill({ name: "Fireball", mpCost: 10 });
        expect(skill.name).toBe("Fireball");
        expect(skill.mpCost).toBe(10);
        expect(skill.damage.variance).toBe(20);
    });
});
describe("constructItem", () => {
    it("should create a valid item object", () => {
        const item = constructItem({ name: "Potion", price: 50 });
        expect(item.name).toBe("Potion");
        expect(item.price).toBe(50);
    });
});
describe("constructState", () => {
    it("should create a valid state object", () => {
        const state = constructState({ name: "Poison", removeByDamage: true });
        expect(state.name).toBe("Poison");
        expect(state.removeByDamage).toBe(true);
        expect(state.minTurns).toBe(1);
    });
});
describe("constructParamArray", () => {
    it("should create an array of 8 zeros", () => {
        const params = constructParamArray();
        expect(params).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    });
});
describe("constructDamage", () => {
    it("should return default damage object when no arguments are passed", () => {
        const result = constructDamage();
        expect(result).toEqual({
            type: 0,
            elementId: 0,
            formula: "0",
            variance: 20,
            critical: false,
        });
    });
    it("should override default damage values with provided arguments", () => {
        const customDamage = {
            type: 1,
            elementId: 2,
            formula: "a.atk * 4 - b.def * 2",
            variance: 10,
            critical: true,
        };
        const result = constructDamage(customDamage);
        expect(result).toEqual({
            type: 1,
            elementId: 2,
            formula: "a.atk * 4 - b.def * 2",
            variance: 10,
            critical: true,
        });
    });
    it("should partially override default damage values with provided arguments", () => {
        const customDamage = {
            formula: "a.mat * 2",
        };
        const result = constructDamage(customDamage);
        expect(result.formula).toBe("a.mat * 2");
        expect(result.type).toBe(0);
        expect(result.elementId).toBe(0);
        expect(result.variance).toBe(20);
        expect(result.critical).toBe(false);
    });
    it("createArmor creates a valid armor object", () => {
        const armor = constructArmor({ name: "Leather Armor", price: 100 });
        expect(armor.name).toBe("Leather Armor");
        expect(armor.price).toBe(100);
        expect(armor.params.length).toBe(8);
    });
    it("createWeapon creates a valid weapon object", () => {
        const weapon = constructWeapon({ name: "Iron Sword", wtypeId: 1 });
        expect(weapon.name).toBe("Iron Sword");
        expect(weapon.wtypeId).toBe(1);
        expect(weapon.damage.formula).toBe("0");
    });
    it("createClass creates a valid class object", () => {
        const classObj = constructClass({
            name: "Warrior",
            expParams: [30, 20, 10, 10],
        });
        expect(classObj.name).toBe("Warrior");
        expect(classObj.expParams).toEqual([30, 20, 10, 10]);
    });
    it("createSkill creates a valid skill object", () => {
        const skill = constructSkill({ name: "Fireball", mpCost: 10 });
        expect(skill.name).toBe("Fireball");
        expect(skill.mpCost).toBe(10);
        expect(skill.damage.variance).toBe(20);
    });
    it("createItem creates a valid item object", () => {
        const item = constructItem({ name: "Potion", price: 50 });
        expect(item.name).toBe("Potion");
        expect(item.price).toBe(50);
    });
    it("createState creates a valid state object", () => {
        const state = constructState({ name: "Poison", removeByDamage: true });
        expect(state.name).toBe("Poison");
        expect(state.removeByDamage).toBe(true);
        expect(state.minTurns).toBe(1);
    });
    it("createParamArray creates an array of 8 zeros", () => {
        const params = constructParamArray();
        expect(params).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    });
});
//# sourceMappingURL=maindata.test.js.map