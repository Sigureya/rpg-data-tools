import type {
  Data_System,
  Data_Vehicle,
  System_Advanced,
  System_Message,
  System_Terms,
} from "@sigureya/rpgtypes";
import { createAudio } from "./audio/createAudio";

export const createSystemData = (
  system?: Partial<Data_System>
): Data_System => {
  return {
    local: "",
    gameTitle: "",
    currencyUnit: "",
    title1Name: "",
    terms: createTerms(),
    title2Name: "",
    optAutosave: false,
    attackMotions: [],
    startMapId: 0,
    startX: 0,
    startY: 0,
    switches: [],
    windowTone: [0, 0, 0, 0],
    editMapId: 0,
    testTroopId: 0,
    testBattlers: [],
    versionId: 0,
    advanced: createAdvanced(),
    armorTypes: [],
    elements: [],
    variables: [],
    equipTypes: [],
    sounds: Array(24)
      .fill(null)
      .map(() => createAudio()) as any,
    titleBgm: createAudio(),
    gameoverMe: createAudio(),
    battleBgm: createAudio(),
    defeatMe: createAudio(),
    victoryMe: createAudio(),
    battleback1Name: "",
    battleback2Name: "",
    battlerName: "",
    weaponTypes: [],
    skillTypes: [],
    optDisplayTp: false,
    optDrawTitle: false,
    optExtraExp: false,
    optFloorDeath: false,
    optFollowers: false,
    optKeyItemsNumber: false,
    optSideView: false,
    optSlipDeath: false,
    optTransparent: false,
    boat: createVehicle(),
    ship: createVehicle(),
    airship: createVehicle(),
    ...system,
  };
};

export const createAdvanced = (
  proto?: Partial<System_Advanced>
): System_Advanced => ({
  gameId: 0,
  screenWidth: 0,
  screenHeight: 0,
  uiAreaWidth: 0,
  uiAreaHeight: 0,
  windowOpacity: 0,
  screenScale: 0,
  numberFontFilename: "",
  mainFontFilename: "",
  fallbackFonts: "",
  fontSize: 0,
  ...proto,
});

export const createVehicle = (proto?: Partial<Data_Vehicle>): Data_Vehicle => {
  return {
    bgm: createAudio(),
    characterIndex: 0,
    characterName: "",
    startMapId: 0,
    startX: 0,
    startY: 0,
    ...proto,
  };
};

export const createTerms = (): System_Terms => {
  return {
    messages: createMessages(),
    commands: [],
    params: createParamNames(),
    basic: [],
  };
};

export const createParamNames = (): System_Terms["params"] => {
  return ["mhp", "mmp", "atk", "def", "mat", "mdf", "agi", "luk", "hit", "eva"];
};

export const createMessages = (
  proto?: Partial<System_Message>
): System_Message => {
  return {
    alwaysDash: "",
    commandRemember: "",
    touchUI: "",
    bgmVolume: "",
    bgsVolume: "",
    meVolume: "",
    seVolume: "",
    possession: "",
    expTotal: "",
    expNext: "",
    saveMessage: "",
    loadMessage: "",
    file: "",
    autosave: "",
    partyName: "",
    emerge: "",
    preemptive: "",
    surprise: "",
    escapeStart: "",
    escapeFailure: "",
    victory: "",
    defeat: "",
    obtainExp: "",
    obtainGold: "",
    obtainItem: "",
    levelUp: "",
    obtainSkill: "",
    useItem: "",
    criticalToEnemy: "",
    criticalToActor: "",
    actorDamage: "",
    actorRecovery: "",
    actorGain: "",
    actorLoss: "",
    actorDrain: "",
    actorNoDamage: "",
    actorNoHit: "",
    enemyDamage: "",
    enemyRecovery: "",
    enemyGain: "",
    enemyLoss: "",
    enemyDrain: "",
    enemyNoDamage: "",
    enemyNoHit: "",
    evasion: "",
    magicEvasion: "",
    magicReflection: "",
    counterAttack: "",
    substitute: "",
    buffAdd: "",
    debuffAdd: "",
    buffRemove: "",
    actionFailure: "",
    ...proto,
  };
};
