import type {
  Data_System,
  Terms_Messages,
  System_Terms,
  System_Advanced,
  Data_Vehicle,
  Terms_BasicArray,
  Terms_ParamNamesArray,
  Terms_CommandArray,
  System_SoundsArray,
} from "@sigureya/rpgtypes";
import type { SystemSounds } from "./audio";
import { createAudio } from "./audio";
import type { ParamTable } from "./paramArray";
import type { Terms_Commands, BasicTerms } from "./types";

export const createSystemData = (
  system: Partial<Data_System> = {}
): Data_System => ({
  local: system.local ?? "",
  gameTitle: system.gameTitle ?? "",
  currencyUnit: system.currencyUnit ?? "",
  title1Name: system.title1Name ?? "",
  terms: system.terms ?? createTerms(),
  title2Name: system.title2Name ?? "",
  optAutosave: system.optAutosave ?? false,
  attackMotions: system.attackMotions ?? [],
  startMapId: system.startMapId ?? 0,
  startX: system.startX ?? 0,
  startY: system.startY ?? 0,
  switches: system.switches ?? [],
  windowTone: system.windowTone ?? [0, 0, 0, 0],
  editMapId: system.editMapId ?? 0,
  testTroopId: system.testTroopId ?? 0,
  testBattlers: system.testBattlers ?? [],
  versionId: system.versionId ?? 0,
  advanced: system.advanced ?? createAdvanced(),
  armorTypes: system.armorTypes ?? [],
  elements: system.elements ?? [],
  variables: system.variables ?? [],
  equipTypes: system.equipTypes ?? [],
  sounds: system.sounds ?? createSystemSoundsArray(),
  titleBgm: system.titleBgm ?? createAudio(),
  gameoverMe: system.gameoverMe ?? createAudio(),
  battleBgm: system.battleBgm ?? createAudio(),
  defeatMe: system.defeatMe ?? createAudio(),
  victoryMe: system.victoryMe ?? createAudio(),
  battleback1Name: system.battleback1Name ?? "",
  battleback2Name: system.battleback2Name ?? "",
  battlerName: system.battlerName ?? "",
  weaponTypes: system.weaponTypes ?? [],
  skillTypes: system.skillTypes ?? [],
  optDisplayTp: system.optDisplayTp ?? false,
  optDrawTitle: system.optDrawTitle ?? false,
  optExtraExp: system.optExtraExp ?? false,
  optFloorDeath: system.optFloorDeath ?? false,
  optFollowers: system.optFollowers ?? false,
  optKeyItemsNumber: system.optKeyItemsNumber ?? false,
  optSideView: system.optSideView ?? false,
  optSlipDeath: system.optSlipDeath ?? false,
  optTransparent: system.optTransparent ?? false,
  boat: system.boat ?? createVehicle(),
  ship: system.ship ?? createVehicle(),
  airship: system.airship ?? createVehicle(),
  tileSize: system.tileSize ?? 0,
});

export const createTerms = (
  proto: {
    messages?: Partial<Terms_Messages>;
    commands?: Partial<Terms_Commands>;
    params?: Partial<ParamTable<string>>;
    basic?: Partial<BasicTerms>;
  } = {}
): System_Terms => ({
  messages: createMessages(proto.messages ?? {}),
  commands: createCommandsArray(proto.commands ?? {}),
  params: createParamNamesArray(proto.params ?? {}),
  basic: createBasicTerms(proto.basic ?? {}),
});

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

export const createParamNamesArray = (
  names: Partial<ParamTable<string>> = {}
): Terms_ParamNamesArray => [
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
  proto: Partial<Terms_Messages> = {}
): Terms_Messages => ({
  alwaysDash: proto.alwaysDash ?? "",
  commandRemember: proto.commandRemember ?? "",
  touchUI: proto.touchUI ?? "",
  bgmVolume: proto.bgmVolume ?? "",
  bgsVolume: proto.bgsVolume ?? "",
  meVolume: proto.meVolume ?? "",
  seVolume: proto.seVolume ?? "",
  possession: proto.possession ?? "",
  expTotal: proto.expTotal ?? "",
  expNext: proto.expNext ?? "",
  saveMessage: proto.saveMessage ?? "",
  loadMessage: proto.loadMessage ?? "",
  file: proto.file ?? "",
  autosave: proto.autosave ?? "",
  partyName: proto.partyName ?? "",
  emerge: proto.emerge ?? "",
  preemptive: proto.preemptive ?? "",
  surprise: proto.surprise ?? "",
  escapeStart: proto.escapeStart ?? "",
  escapeFailure: proto.escapeFailure ?? "",
  victory: proto.victory ?? "",
  defeat: proto.defeat ?? "",
  obtainExp: proto.obtainExp ?? "",
  obtainGold: proto.obtainGold ?? "",
  obtainItem: proto.obtainItem ?? "",
  levelUp: proto.levelUp ?? "",
  obtainSkill: proto.obtainSkill ?? "",
  useItem: proto.useItem ?? "",
  criticalToEnemy: proto.criticalToEnemy ?? "",
  criticalToActor: proto.criticalToActor ?? "",
  actorDamage: proto.actorDamage ?? "",
  actorRecovery: proto.actorRecovery ?? "",
  actorGain: proto.actorGain ?? "",
  actorLoss: proto.actorLoss ?? "",
  actorDrain: proto.actorDrain ?? "",
  actorNoDamage: proto.actorNoDamage ?? "",
  actorNoHit: proto.actorNoHit ?? "",
  enemyDamage: proto.enemyDamage ?? "",
  enemyRecovery: proto.enemyRecovery ?? "",
  enemyGain: proto.enemyGain ?? "",
  enemyLoss: proto.enemyLoss ?? "",
  enemyDrain: proto.enemyDrain ?? "",
  enemyNoDamage: proto.enemyNoDamage ?? "",
  enemyNoHit: proto.enemyNoHit ?? "",
  evasion: proto.evasion ?? "",
  magicEvasion: proto.magicEvasion ?? "",
  magicReflection: proto.magicReflection ?? "",
  counterAttack: proto.counterAttack ?? "",
  substitute: proto.substitute ?? "",
  buffAdd: proto.buffAdd ?? "",
  debuffAdd: proto.debuffAdd ?? "",
  buffRemove: proto.buffRemove ?? "",
  actionFailure: proto.actionFailure ?? "",
});
export const createAdvanced = (
  proto: Partial<System_Advanced> = {}
): System_Advanced => ({
  gameId: proto.gameId ?? 0,
  screenWidth: proto.screenWidth ?? 0,
  screenHeight: proto.screenHeight ?? 0,
  uiAreaWidth: proto.uiAreaWidth ?? 0,
  uiAreaHeight: proto.uiAreaHeight ?? 0,
  windowOpacity: proto.windowOpacity ?? 0,
  screenScale: proto.screenScale ?? 0,
  numberFontFilename: proto.numberFontFilename ?? "",
  mainFontFilename: proto.mainFontFilename ?? "",
  fallbackFonts: proto.fallbackFonts ?? "",
  fontSize: proto.fontSize ?? 0,
});

export const createVehicle = (
  proto: Partial<Data_Vehicle> = {}
): Data_Vehicle => ({
  bgm: proto.bgm ?? createAudio(),
  characterIndex: proto.characterIndex ?? 0,
  characterName: proto.characterName ?? "",
  startMapId: proto.startMapId ?? 0,
  startX: proto.startX ?? 0,
  startY: proto.startY ?? 0,
});

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
