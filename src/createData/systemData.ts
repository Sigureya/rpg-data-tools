import type {
  Data_System,
  Data_Vehicle,
  System_Advanced,
  System_SoundsArray,
  System_Terms,
  Terms_BasicArray,
  Terms_CommandArray,
  Terms_MessageArray,
  Terms_ParamNamesArray,
} from "@sigureya/rpgtypes";
import { createAudio } from "./audio/createAudio";
import type { BasicTerms, Terms_Commands } from "./types";
import type { SystemSounds } from "./audio";
import type { ParamArray2 } from "./paramArray";

export const createSystemData = (
  system: Partial<Data_System> = {}
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
    sounds: createSystemSoundsArray(),
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
    tileSize: 0,
    ...system, // この方法で値を埋めると遅い？ null合体演算子に変えた方がいい？ 効率的な方で統一してください。人間の手で作業するには面倒が多すぎるので
  };
};

export const createAdvanced = (
  proto: Partial<System_Advanced> = {}
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

export const createVehicle = (
  proto: Partial<Data_Vehicle> = {}
): Data_Vehicle => {
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
export const createBasicTerms = (
  proto: Partial<BasicTerms> = {}
): Terms_BasicArray => [
  proto.level ?? "",
  proto.levelA ?? "",
  proto.hp ?? "",
  proto.hpA ?? "",
  proto.mp ?? "",
  proto.mpA ?? "",
  proto.tp ?? "",
  proto.tpA ?? "",
  proto.experience ?? "",
  proto.exp ?? "",
];

export const createTerms =
  (): // TODo:ここにPartialな引数を用意して、下の４つの関数に渡したい
  System_Terms => {
    return {
      // これらの各配列は要素数が固定なので注意。
      // 質問。配列というよりタプル？
      messages: createMessages({}),
      commands: createCommandsArray({}),
      params: createParamNamesArray({}),
      basic: createBasicTerms({}),
    };
  };

export const createParamNamesArray = (
  names: Partial<ParamArray2<string>> = {}
): Terms_ParamNamesArray => {
  return [
    names.mhp ?? "",
    names.mmp ?? "",
    names.atk ?? "",
    names.def ?? "",
    names.mat ?? "",
    names.mdf ?? "",
    names.agi ?? "",
    names.luk ?? "",
    names.hit ?? "",
    names.eva ?? "",
  ];
};

export const createCommandsArray = (
  proto: Partial<Terms_Commands> = {}
): Terms_CommandArray => [
  proto.fight ?? "",
  proto.escape ?? "",
  proto.attack ?? "",
  proto.guard ?? "",
  proto.item ?? "",
  proto.skill ?? "",
  proto.equip ?? "",
  proto.status ?? "",
  proto.formation ?? "",
  proto.save ?? "",
  proto.gameEnd ?? "",
  proto.options ?? "",
  proto.weapon ?? "",
  proto.armor ?? "",
  proto.keyItem ?? "",
  proto.equip2 ?? "",
  proto.optimize ?? "",
  proto.clear ?? "",
  proto.newGame ?? "",
  proto.continue_ ?? "",
  proto.notUsed20 ?? "",
  proto.toTitle ?? "",
  proto.cancel ?? "",
  proto.notUsed23 ?? "",
  proto.buy ?? "",
  proto.sell ?? "",
];

export const createMessages = (
  proto: Partial<Terms_MessageArray> = {}
): Terms_MessageArray => {
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

export const createSystemSoundsArray = (
  proto: Partial<SystemSounds> = {}
): System_SoundsArray => [
  proto.cursor ?? createAudio(),
  proto.ok ?? createAudio(),
  proto.cancel ?? createAudio(),
  proto.buzzer ?? createAudio(),
  proto.equip ?? createAudio(),
  proto.save ?? createAudio(),
  proto.load ?? createAudio(),
  proto.battleStart ?? createAudio(),
  proto.escape ?? createAudio(),
  proto.enemyAttack ?? createAudio(),
  proto.enemyDamage ?? createAudio(),
  proto.enemyCollapse ?? createAudio(),
  proto.bossCollapse1 ?? createAudio(),
  proto.bossCollapse2 ?? createAudio(),
  proto.actorDamage ?? createAudio(),
  proto.actorCollapse ?? createAudio(),
  proto.playRecovery ?? createAudio(),
  proto.playMiss ?? createAudio(),
  proto.playEvasion ?? createAudio(),
  proto.playMagicEvasion ?? createAudio(),
  proto.playReflection ?? createAudio(),
  proto.shop ?? createAudio(),
  proto.useItem ?? createAudio(),
  proto.useSkill ?? createAudio(),
];
