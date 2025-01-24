import { COMMENT_BODY as f, CHANGE_NICKNAME as p, CHANGE_PROFILE as b, CHANGE_NAME as v, SHOW_SCROLLING_TEXT as I, SHOW_CHOICES_ITEM as N, SHOW_CHOICES as x, SHOW_MESSAGE as T } from "@sigureya/rpgtypes";
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
}), P = (e) => ({
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
}), q = (e) => ({
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
}), z = (e) => ({
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
}), X = (e) => ({
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
}), Y = (e) => ({
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
}), $ = (e) => ({
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
  pages: [S()],
  ...e
}), y = (e) => ({
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
}), S = (e) => ({
  conditions: y(),
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
  terms: e.terms ?? A(),
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
  advanced: e.advanced ?? D(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? R(),
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
}), A = (e = {}) => ({
  messages: M(e.messages ?? {}),
  commands: k(e.commands ?? {}),
  params: E(e.params ?? {}),
  basic: C(e.basic ?? {})
}), C = (e = {}) => [
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
], k = (e = {}) => [
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
}), D = (e = {}) => ({
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
}), R = (e = {}) => [
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
class F {
  constructor(a, t, n) {
    this.command = a, this.index = t, this.array = n;
  }
  joinBody(a = `
`) {
    return this.body().map((t) => t.parameters[0]).join(a);
  }
  bodyCode() {
    return 401;
  }
  body() {
    const a = [];
    for (let t = this.index + 1; t < this.array.length; t++) {
      const n = this.array[t];
      if (n.code === this.bodyCode())
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
    case T:
      return a.showMessage(new F(t, n, s));
    case x:
      return a.showChoices(t, n, s);
    case N:
      return a.choiceWhen(t, n, s);
    case I:
      return a.showScrollingText(t, n, s);
    case v:
      return a.changeName(t, n, s);
    case b:
      return a.changeProfile(t, n, s);
    case p:
      return a.changeNickname(t, n, s);
    case f:
      return a.commentBody(t, n, s);
    default:
      return a.other(t, n, s);
  }
}), d = (e, a) => `<${e}:${a}>`, l = () => /<([^<>:]+):([^>]*)>/g, J = (e, a) => o(e.note, (t, n) => a(t, n, e)), Q = (e) => o(e, (a, t) => [a, t]), o = (e, a) => {
  const t = l(), n = [];
  let s;
  for (; (s = t.exec(e)) !== null; )
    n.push(a(s[1], s[2]));
  return n;
}, ee = (e, a) => e.replace(l(), (t, n, s) => {
  const i = a(n, s);
  return d(n, i);
}), ae = (e, a) => {
  const t = l();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, te = (e, a, t) => {
  const n = l();
  return e.replace(n, (s, i) => i === a ? d(i, t) : s);
}, ne = (e) => `code:${e}`, V = "N", B = "V", g = (e, a) => `\\${e}[${a}]`, H = (e) => g(V, e.id), ce = (e) => e.map((a) => ({
  controlChar: H(a),
  text: a.name
})), se = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: g(B, t)
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
]), ie = (e, a = G) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let s;
  for (; (s = t.exec(e)) !== null; ) {
    const i = s[1].toLowerCase(), h = parseInt(s[2], 10);
    a.has(i) && n.push({ char: s[1], id: h });
  }
  return n;
}, L = (e, a, t) => a.map((n) => t(n, e[n], e)), re = (e, a, t) => L(e, a, t), le = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), me = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  F as MessageProxy,
  ne as codeInfoText,
  W as constructActor,
  P as constructArmor,
  z as constructClass,
  u as constructDamage,
  _ as constructEnemy,
  U as constructItem,
  r as constructParamArray,
  X as constructSkill,
  Y as constructState,
  q as constructWeapon,
  D as createAdvanced,
  c as createAudio,
  C as createBasicTerms,
  k as createCommandsArray,
  y as createCondtion,
  g as createControlCharFormat,
  S as createEventPage,
  $ as createMap,
  j as createMapEvent,
  w as createMapEventImage,
  M as createMessages,
  d as createNoteEntity,
  E as createParamNamesArray,
  K as createSystemData,
  R as createSystemSoundsArray,
  A as createTerms,
  m as createVehicle,
  H as fromActor,
  ce as fromActors,
  se as fromSystem,
  ie as getControlChars,
  ae as getNoteValue,
  l as makeRegex,
  Z as mapTextCommand,
  me as pickCommandParamNumber,
  le as pickCommandParamString,
  L as pickPropertys,
  re as pickString,
  Q as readNote,
  o as readNoteEx,
  J as readNoteObject,
  ee as replaceNote,
  te as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
