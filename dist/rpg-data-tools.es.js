import { COMMENT_BODY as g, CHANGE_NICKNAME as h, CHANGE_PROFILE as p, CHANGE_NAME as b, SHOW_SCROLLING_TEXT as v, SHOW_CHOICES_ITEM as I, SHOW_CHOICES as x, SHOW_MESSAGE as N } from "@sigureya/rpgtypes";
const r = () => [0, 0, 0, 0, 0, 0, 0, 0], W = (e) => ({
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
  ...e
}), _ = (e) => ({
  battlerHue: 0,
  id: 0,
  name: "",
  note: "",
  battlerName: "",
  traits: [],
  params: r(),
  exp: 0,
  gold: 0,
  dropItems: [],
  actions: [],
  ...e
}), q = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  params: r(),
  traits: [],
  ...e
}), z = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  wtypeId: 0,
  params: r(),
  traits: [],
  damage: u(),
  ...e
}), P = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: r(),
  expParams: [],
  ...e
}), u = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), U = (e) => ({
  id: 0,
  name: "",
  iconIndex: 0,
  description: "",
  note: "",
  price: 0,
  consumable: !1,
  scope: 0,
  occasion: 0,
  speed: 0,
  successRate: 100,
  repeats: 1,
  tpGain: 0,
  hitType: 0,
  animationId: 0,
  damage: u(),
  effects: [],
  ...e
}), $ = (e) => ({
  animationId: 0,
  damage: u(),
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
  ...e
}), X = (e) => ({
  id: 0,
  name: "",
  iconIndex: 0,
  restriction: 0,
  priority: 50,
  motion: 0,
  overlay: 0,
  removeAtBattleEnd: !1,
  removeByRestriction: !1,
  autoRemovalTiming: 0,
  minTurns: 1,
  maxTurns: 1,
  removeByDamage: !1,
  chanceByDamage: 100,
  removeByWalking: !1,
  stepsToRemove: 100,
  message1: "",
  message2: "",
  message3: "",
  message4: "",
  traits: [],
  note: "",
  ...e
}), Y = (e) => ({
  autoplayBgm: !0,
  autoplayBgs: !1,
  battleback1Name: "",
  battleback2Name: "",
  data: [],
  disableDashing: !1,
  displayName: "",
  encounterList: [],
  events: [],
  height: 0,
  note: "",
  width: 0,
  x: 0,
  y: 0,
  parallaxName: "",
  parallaxLoopX: !1,
  parallaxLoopY: !1,
  parallaxShow: !1,
  parallaxSx: 0,
  parallaxSy: 0,
  ...e
}), j = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [y()],
  ...e
}), T = (e) => ({
  actorId: 0,
  actorValid: !1,
  itemId: 0,
  itemValid: !1,
  selfSwitchCh: "",
  selfSwitchValid: !1,
  switch1Id: 0,
  switch1Valid: !1,
  switch2Id: 0,
  switch2Valid: !1,
  variableId: 0,
  variableValid: !1,
  variableValue: 0,
  ...e
}), w = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), y = (e) => ({
  conditions: T(),
  image: w(),
  moveRoute: {
    list: [],
    repeat: !1,
    wait: !1,
    skippable: !1
  },
  directionFix: !1,
  moveFrequency: 0,
  list: [],
  ...e
}), c = () => ({
  name: "",
  pan: 0,
  pitch: 100,
  volume: 90
}), K = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? S(),
  title2Name: e.title2Name ?? "",
  optAutosave: e.optAutosave ?? !1,
  attackMotions: e.attackMotions ?? [],
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0,
  switches: e.switches ?? [],
  windowTone: e.windowTone ?? [0, 0, 0, 0],
  editMapId: e.editMapId ?? 0,
  testTroopId: e.testTroopId ?? 0,
  testBattlers: e.testBattlers ?? [],
  versionId: e.versionId ?? 0,
  advanced: e.advanced ?? k(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? D(),
  titleBgm: e.titleBgm ?? c(),
  gameoverMe: e.gameoverMe ?? c(),
  battleBgm: e.battleBgm ?? c(),
  defeatMe: e.defeatMe ?? c(),
  victoryMe: e.victoryMe ?? c(),
  battleback1Name: e.battleback1Name ?? "",
  battleback2Name: e.battleback2Name ?? "",
  battlerName: e.battlerName ?? "",
  weaponTypes: e.weaponTypes ?? [],
  skillTypes: e.skillTypes ?? [],
  optDisplayTp: e.optDisplayTp ?? !1,
  optDrawTitle: e.optDrawTitle ?? !1,
  optExtraExp: e.optExtraExp ?? !1,
  optFloorDeath: e.optFloorDeath ?? !1,
  optFollowers: e.optFollowers ?? !1,
  optKeyItemsNumber: e.optKeyItemsNumber ?? !1,
  optSideView: e.optSideView ?? !1,
  optSlipDeath: e.optSlipDeath ?? !1,
  optTransparent: e.optTransparent ?? !1,
  boat: e.boat ?? m(),
  ship: e.ship ?? m(),
  airship: e.airship ?? m(),
  tileSize: e.tileSize ?? 0
}), S = (e = {}) => ({
  messages: M(e.messages ?? {}),
  commands: C(e.commands ?? {}),
  params: E(e.params ?? {}),
  basic: A(e.basic ?? {})
}), A = (e = {}) => [
  e.level ?? "",
  e.levelA ?? "",
  e.hp ?? "",
  e.hpA ?? "",
  e.mp ?? "",
  e.mpA ?? "",
  e.tp ?? "",
  e.tpA ?? "",
  e.experience ?? "",
  e.exp ?? ""
], E = (e = {}) => [
  e.mhp ?? "",
  e.mmp ?? "",
  e.atk ?? "",
  e.def ?? "",
  e.mat ?? "",
  e.mdf ?? "",
  e.agi ?? "",
  e.luk ?? "",
  e.hit ?? "",
  e.eva ?? ""
], C = (e = {}) => [
  e.fight ?? "",
  e.escape ?? "",
  e.attack ?? "",
  e.guard ?? "",
  e.item ?? "",
  e.skill ?? "",
  e.equip ?? "",
  e.status ?? "",
  e.formation ?? "",
  e.save ?? "",
  e.gameEnd ?? "",
  e.options ?? "",
  e.weapon ?? "",
  e.armor ?? "",
  e.keyItem ?? "",
  e.equip2 ?? "",
  e.optimize ?? "",
  e.clear ?? "",
  e.newGame ?? "",
  e.continue_ ?? "",
  e.notUsed20 ?? "",
  e.toTitle ?? "",
  e.cancel ?? "",
  e.notUsed23 ?? "",
  e.buy ?? "",
  e.sell ?? ""
], M = (e = {}) => ({
  alwaysDash: e.alwaysDash ?? "",
  commandRemember: e.commandRemember ?? "",
  touchUI: e.touchUI ?? "",
  bgmVolume: e.bgmVolume ?? "",
  bgsVolume: e.bgsVolume ?? "",
  meVolume: e.meVolume ?? "",
  seVolume: e.seVolume ?? "",
  possession: e.possession ?? "",
  expTotal: e.expTotal ?? "",
  expNext: e.expNext ?? "",
  saveMessage: e.saveMessage ?? "",
  loadMessage: e.loadMessage ?? "",
  file: e.file ?? "",
  autosave: e.autosave ?? "",
  partyName: e.partyName ?? "",
  emerge: e.emerge ?? "",
  preemptive: e.preemptive ?? "",
  surprise: e.surprise ?? "",
  escapeStart: e.escapeStart ?? "",
  escapeFailure: e.escapeFailure ?? "",
  victory: e.victory ?? "",
  defeat: e.defeat ?? "",
  obtainExp: e.obtainExp ?? "",
  obtainGold: e.obtainGold ?? "",
  obtainItem: e.obtainItem ?? "",
  levelUp: e.levelUp ?? "",
  obtainSkill: e.obtainSkill ?? "",
  useItem: e.useItem ?? "",
  criticalToEnemy: e.criticalToEnemy ?? "",
  criticalToActor: e.criticalToActor ?? "",
  actorDamage: e.actorDamage ?? "",
  actorRecovery: e.actorRecovery ?? "",
  actorGain: e.actorGain ?? "",
  actorLoss: e.actorLoss ?? "",
  actorDrain: e.actorDrain ?? "",
  actorNoDamage: e.actorNoDamage ?? "",
  actorNoHit: e.actorNoHit ?? "",
  enemyDamage: e.enemyDamage ?? "",
  enemyRecovery: e.enemyRecovery ?? "",
  enemyGain: e.enemyGain ?? "",
  enemyLoss: e.enemyLoss ?? "",
  enemyDrain: e.enemyDrain ?? "",
  enemyNoDamage: e.enemyNoDamage ?? "",
  enemyNoHit: e.enemyNoHit ?? "",
  evasion: e.evasion ?? "",
  magicEvasion: e.magicEvasion ?? "",
  magicReflection: e.magicReflection ?? "",
  counterAttack: e.counterAttack ?? "",
  substitute: e.substitute ?? "",
  buffAdd: e.buffAdd ?? "",
  debuffAdd: e.debuffAdd ?? "",
  buffRemove: e.buffRemove ?? "",
  actionFailure: e.actionFailure ?? ""
}), k = (e = {}) => ({
  gameId: e.gameId ?? 0,
  screenWidth: e.screenWidth ?? 0,
  screenHeight: e.screenHeight ?? 0,
  uiAreaWidth: e.uiAreaWidth ?? 0,
  uiAreaHeight: e.uiAreaHeight ?? 0,
  windowOpacity: e.windowOpacity ?? 0,
  screenScale: e.screenScale ?? 0,
  numberFontFilename: e.numberFontFilename ?? "",
  mainFontFilename: e.mainFontFilename ?? "",
  fallbackFonts: e.fallbackFonts ?? "",
  fontSize: e.fontSize ?? 0
}), m = (e = {}) => ({
  bgm: e.bgm ?? c(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), D = (e = {}) => [
  e.cursor ?? c(),
  e.ok ?? c(),
  e.cancel ?? c(),
  e.buzzer ?? c(),
  e.equip ?? c(),
  e.save ?? c(),
  e.load ?? c(),
  e.battleStart ?? c(),
  e.escape ?? c(),
  e.enemyAttack ?? c(),
  e.enemyDamage ?? c(),
  e.enemyCollapse ?? c(),
  e.bossCollapse1 ?? c(),
  e.bossCollapse2 ?? c(),
  e.actorDamage ?? c(),
  e.actorCollapse ?? c(),
  e.playRecovery ?? c(),
  e.playMiss ?? c(),
  e.playEvasion ?? c(),
  e.playMagicEvasion ?? c(),
  e.playReflection ?? c(),
  e.shop ?? c(),
  e.useItem ?? c(),
  e.useSkill ?? c()
];
class R {
  constructor(a, t, n) {
    this.command = a, this.index = t, this.array = n;
  }
  joinBody(a = `
`) {
    return this.body().map((t) => t.parameters[0]).join(a);
  }
  body() {
    const a = [];
    for (let t = this.index + 1; t < this.array.length; t++) {
      const n = this.array[t];
      if (n.code === 401)
        a.push(n);
      else
        break;
    }
    return a;
  }
  head() {
    return this.command;
  }
  speakerName() {
    return this.command.parameters[4];
  }
}
const Z = (e, a) => e.map((t, n, s) => {
  switch (t.code) {
    case N:
      return a.showMessage(new R(t, n, s));
    case x:
      return a.showChoices(t, n, s);
    case I:
      return a.showChoicesItem(t, n, s);
    case v:
      return a.showScrollingText(t, n, s);
    case b:
      return a.changeName(t, n, s);
    case p:
      return a.changeProfile(t, n, s);
    case h:
      return a.changeNickname(t, n, s);
    case g:
      return a.commentBody(t, n, s);
    default:
      return a.other(t, n, s);
  }
}), o = (e, a) => `<${e}:${a}>`, l = () => /<([^<>:]+):([^>]*)>/g, J = (e, a = {}) => F(e.note, a), F = (e, a = {}) => {
  const t = {
    prefix: "",
    suffix: "",
    ...a
  }, n = l(), s = [];
  let i;
  for (; (i = n.exec(e)) !== null; )
    s.push([`${t.prefix}${i[1]}${t.suffix}`, i[2]]);
  return s;
}, Q = (e, a) => e.replace(l(), (t, n, s) => {
  const i = a(n, s);
  return o(n, i);
}), ee = (e, a) => {
  const t = l();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, ae = (e, a, t) => {
  const n = l();
  return e.replace(n, (s, i, d) => i === a ? o(i, t) : s);
}, te = (e) => `code:${e}`, V = "N", B = "V", f = (e, a) => `\\${e}[${a}]`, H = (e) => f(V, e.id), ne = (e) => e.map((a) => ({
  controlChar: H(a),
  text: a.name
})), ce = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: f(B, t)
})).filter((a) => a.text !== ""), G = /* @__PURE__ */ new Set([
  "px",
  "py",
  "x",
  "y",
  "v",
  "n",
  "p",
  "g",
  "c",
  "i",
  "fs"
]), se = (e, a = G) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let s;
  for (; (s = t.exec(e)) !== null; ) {
    const i = s[1].toLowerCase(), d = parseInt(s[2], 10);
    a.has(i) && n.push({ char: s[1], id: d });
  }
  return n;
}, L = (e, a, t) => a.map((n) => t(n, e[n], e)), ie = (e, a, t) => L(e, a, t);
export {
  R as MessageProxy,
  te as codeInfoText,
  W as constructActor,
  q as constructArmor,
  P as constructClass,
  u as constructDamage,
  _ as constructEnemy,
  U as constructItem,
  r as constructParamArray,
  $ as constructSkill,
  X as constructState,
  z as constructWeapon,
  k as createAdvanced,
  c as createAudio,
  A as createBasicTerms,
  C as createCommandsArray,
  T as createCondtion,
  f as createControlCharFormat,
  y as createEventPage,
  Y as createMap,
  j as createMapEvent,
  w as createMapEventImage,
  M as createMessages,
  o as createNoteEntity,
  E as createParamNamesArray,
  K as createSystemData,
  D as createSystemSoundsArray,
  S as createTerms,
  m as createVehicle,
  H as fromActor,
  ne as fromActors,
  ce as fromSystem,
  se as getControlChars,
  ee as getNoteValue,
  l as makeRegex,
  Z as mapTextCommand,
  L as pickPropertys,
  ie as pickString,
  F as readNote,
  J as readNoteObject,
  Q as replaceNote,
  ae as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
