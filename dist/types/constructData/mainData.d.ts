import type { Data_Actor, Data_Enemy, Data_Weapon, Data_Armor, Data_Class, Data_Skill, Data_Item, Data_State, ParamArray } from "@sigureya/rpgtypes";
export declare const createParamArray: () => ParamArray;
export declare const createActor: (proto?: Partial<Data_Actor>) => Data_Actor;
export declare const createEnemy: (proto?: Partial<Data_Enemy>) => Data_Enemy;
export declare const createArmor: (proto?: Partial<Data_Armor>) => Data_Armor;
export declare const createWeapon: (proto?: Partial<Data_Weapon>) => Data_Weapon;
export declare const createClass: (proto?: Partial<Data_Class>) => Data_Class;
export declare const createDamage: (proto?: Partial<Data_Skill["damage"]>) => Data_Skill["damage"];
export declare const createItem: (proto?: Partial<Data_Item>) => Data_Item;
export declare const createSkill: (proto?: Partial<Data_Skill>) => Data_Skill;
export declare const createState: (proto?: Partial<Data_State>) => Data_State;
