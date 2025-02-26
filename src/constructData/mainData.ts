import type {
  Data_Actor,
  Data_Enemy,
  Data_Weapon,
  Data_Armor,
  Data_Class,
  Data_Skill,
  Data_Item,
  Data_State,
  ParamArray,
} from "@sigureya/rpgtypes";

export const constructParamArray = (): ParamArray => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

export const constructActor = (proto?: Partial<Data_Actor>): Data_Actor => {
  return {
    id: 0,
    name: "",
    nickname: "",
    profile: "",
    note: "",
    classId: 0,
    initialLevel: 1,
    maxLevel: 99,
    characterIndex: 0,
    characterName: "",
    faceIndex: 0,
    faceName: "",
    battlerName: "",
    traits: [],
    equips: [],
    ...proto,
  };
};

export const constructEnemy = (proto?: Partial<Data_Enemy>): Data_Enemy => {
  return {
    battlerHue: 0,
    id: 0,
    name: "",
    note: "",
    battlerName: "",
    traits: [],
    params: constructParamArray(),
    exp: 0,
    gold: 0,
    dropItems: [],
    actions: [],

    ...proto,
  };
};

export const constructArmor = (proto?: Partial<Data_Armor>): Data_Armor => {
  return {
    price: 0,
    id: 0,
    name: "",
    note: "",
    iconIndex: 0,
    description: "",
    etypeId: 0,
    params: constructParamArray(),
    traits: [],

    ...proto,
  };
};
export const constructWeapon = (proto?: Partial<Data_Weapon>): Data_Weapon => {
  return {
    price: 0,
    id: 0,
    name: "",
    note: "",
    iconIndex: 0,
    description: "",
    etypeId: 0,
    wtypeId: 0,
    params: constructParamArray(),
    traits: [],
    damage: constructDamage(),

    ...proto,
  };
};

export const constructClass = (proto?: Partial<Data_Class>): Data_Class => {
  return {
    id: 0,
    name: "",
    note: "",
    traits: [],
    learnings: [],
    params: constructParamArray(),
    expParams: [],
    ...proto,
  };
};

export const constructDamage = (
  proto?: Partial<Data_Skill["damage"]>
): Data_Skill["damage"] => {
  return {
    type: 0,
    elementId: 0,
    formula: "0",
    variance: 20,
    critical: false,
    ...proto,
  };
};

export const constructItem = (proto?: Partial<Data_Item>): Data_Item => {
  return {
    id: 0,
    name: "",
    iconIndex: 0,
    description: "",
    note: "",
    price: 0,
    consumable: false,
    scope: 0,
    occasion: 0,
    speed: 0,
    successRate: 100,
    repeats: 1,
    tpGain: 0,
    hitType: 0,
    animationId: 0,
    damage: constructDamage(),
    effects: [],
    ...proto,
  };
};

export const constructSkill = (proto?: Partial<Data_Skill>): Data_Skill => {
  return {
    animationId: 0,
    damage: constructDamage(),
    description: "",
    hitType: 0,
    iconIndex: 0,
    id: 0,
    message1: "",
    message2: "",
    mpCost: 0,
    name: "",
    note: "",
    occasion: 0,
    repeats: 1,
    requiredWtypeId1: 0,
    requiredWtypeId2: 0,
    scope: 0,
    speed: 0,
    stypeId: 0,
    successRate: 100,
    tpCost: 0,
    tpGain: 0,
    effects: [],
    messageType: 0,

    ...proto,
  };
};

export const constructState = (proto?: Partial<Data_State>): Data_State => {
  return {
    id: 0,
    name: "",
    iconIndex: 0,
    restriction: 0,
    priority: 50,
    motion: 0,
    overlay: 0,
    removeAtBattleEnd: false,
    removeByRestriction: false,
    autoRemovalTiming: 0,
    minTurns: 1,
    maxTurns: 1,
    removeByDamage: false,
    chanceByDamage: 100,
    removeByWalking: false,
    stepsToRemove: 100,
    message1: "",
    message2: "",
    message3: "",
    message4: "",
    traits: [],
    note: "",
    ...proto,
  };
};
