export const createParamArray = () => {
    return [0, 0, 0, 0, 0, 0, 0, 0];
};
export const createActor = (proto) => {
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
export const createEnemy = (proto) => {
    return {
        battlerHue: 0,
        id: 0,
        name: "",
        note: "",
        battlerName: "",
        traits: [],
        params: createParamArray(),
        exp: 0,
        gold: 0,
        dropItems: [],
        actions: [],
        ...proto,
    };
};
export const createArmor = (proto) => {
    return {
        price: 0,
        id: 0,
        name: "",
        note: "",
        iconIndex: 0,
        description: "",
        etypeId: 0,
        params: createParamArray(),
        traits: [],
        ...proto,
    };
};
export const createWeapon = (proto) => {
    return {
        price: 0,
        id: 0,
        name: "",
        note: "",
        iconIndex: 0,
        description: "",
        etypeId: 0,
        wtypeId: 0,
        params: createParamArray(),
        traits: [],
        damage: createDamage(),
        ...proto,
    };
};
export const createClass = (proto) => {
    return {
        id: 0,
        name: "",
        note: "",
        traits: [],
        learnings: [],
        params: createParamArray(),
        expParams: [],
        ...proto,
    };
};
export const createDamage = (proto) => {
    return {
        type: 0,
        elementId: 0,
        formula: "0",
        variance: 20,
        critical: false,
        ...proto,
    };
};
export const createItem = (proto) => {
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
        damage: createDamage(),
        effects: [],
        ...proto,
    };
};
export const createSkill = (proto) => {
    return {
        animationId: 0,
        damage: createDamage(),
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
export const createState = (proto) => {
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
//# sourceMappingURL=mainData.js.map