import { COMMENT as g, COMMENT_BODY as A, SCRIPT_EVAL as f, SCRIPT_EVAL_BODY as M, SHOW_MESSAGE as b, SHOW_MESSAGE_BODY as y, SHOW_SCROLLING_TEXT as u, SHOW_SCROLLING_TEXT_BODY as v, CHANGE_NICKNAME as k, CHANGE_PROFILE as D, CHANGE_NAME as R, SHOW_CHOICES_ITEM as H, SHOW_CHOICES as B } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], me = (e) => ({
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
}), pe = (e) => ({
  battlerHue: 0,
  id: 0,
  name: "",
  note: "",
  battlerName: "",
  traits: [],
  params: i(),
  exp: 0,
  gold: 0,
  dropItems: [],
  actions: [],
  ...e
}), he = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  params: i(),
  traits: [],
  ...e
}), ge = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  wtypeId: 0,
  params: i(),
  traits: [],
  damage: m(),
  ...e
}), fe = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: i(),
  expParams: [],
  ...e
}), m = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), be = (e) => ({
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
  damage: m(),
  effects: [],
  ...e
}), ve = (e) => ({
  animationId: 0,
  damage: m(),
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
}), Ie = (e) => ({
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
}), xe = (e) => ({
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
}), Se = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [V()],
  ...e
}), G = (e) => ({
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
}), O = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), V = (e) => ({
  conditions: G(),
  image: O(),
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
}), Ne = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? _(),
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
  advanced: e.advanced ?? q(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? Y(),
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
  boat: e.boat ?? d(),
  ship: e.ship ?? d(),
  airship: e.airship ?? d(),
  tileSize: e.tileSize ?? 0
}), _ = (e = {}) => ({
  messages: P(e.messages ?? {}),
  commands: W(e.commands ?? {}),
  params: L(e.params ?? {}),
  basic: F(e.basic ?? {})
}), F = (e = {}) => [
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
], L = (e = {}) => [
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
], W = (e = {}) => [
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
], P = (e = {}) => ({
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
}), q = (e = {}) => ({
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
}), d = (e = {}) => ({
  bgm: e.bgm ?? c(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Y = (e = {}) => [
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
], p = (e, a) => a ? e === a.code : !1, z = "MessageHeader invalid command", U = "Invalid Head", h = (e) => typeof e[0] == "string" && e.length === 1, Ee = (e, a) => a ? e === a.code && h(a.parameters) : !1, l = (e, a, t) => {
  const n = [];
  for (let s = t; s < a.length; s++) {
    const r = a[s];
    if (p(e, r) && h(r.parameters))
      n.push({
        code: e,
        indent: r.indent,
        parameters: [r.parameters[0]]
      });
    else
      break;
  }
  return n;
}, I = (e, a, t) => {
  const n = e[a];
  if (n && p(t, n) && h(n.parameters))
    return {
      code: t,
      indent: n.indent,
      parameters: [n.parameters[0]]
    };
  throw new Error(U, { cause: n });
}, X = (e, a = `
`) => e.map((t) => t.parameters[0]).join(a), $ = (e, a) => ({
  head: I(e, a, g),
  bodys: l(A, e, a + 1)
}), j = (e, a) => ({
  head: I(e, a, f),
  bodys: l(M, e, a + 1)
}), K = (e, a) => {
  const t = e[a];
  if (t && Z(t))
    return t;
  throw new Error(z, { cause: t });
}, Z = (e) => !e || e.code !== b || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", J = (e, a) => ({
  head: K(e, a),
  bodys: l(y, e, a + 1)
}), Q = "ScrollTextHeader invalid command", ee = (e, a) => {
  const t = e[a];
  if (p(u, t))
    return t;
  const n = {
    headCode: u,
    bodyCode: v,
    index: a
  };
  throw new Error(Q, { cause: n });
}, ae = (e, a) => ({
  head: ee(e, a),
  bodys: l(v, e, a + 1)
});
class x {
  constructor(a) {
    this.pair = a;
  }
  getBodyText(a = `
`) {
    return X(this.getExpandedBodies(), a);
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
  get header() {
    return this.pair.head;
  }
  get bodies() {
    return this.pair.bodys;
  }
}
class S extends x {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return this.bodies;
  }
}
class N extends x {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
}
const te = (e, a, t) => {
  const n = J(e, a), s = new S(n);
  return t(s);
}, ne = (e, a, t) => {
  const n = ae(e, a), s = new S(n);
  return t(s);
}, se = (e, a, t) => {
  const n = $(e, a), s = new N(n);
  return t(s);
}, ce = (e, a, t) => {
  const n = j(e, a), s = new N(n);
  return t(s);
}, Te = (e, a) => e.map((t, n, s) => {
  switch (t.code) {
    case b:
      return te(s, n, a.showMessage);
    case u:
      return ne(s, n, a.showScrollingText);
    case g:
      return se(s, n, a.comment);
    case f:
      return ce(s, n, a.script);
    case B:
      return a.showChoices(t, n, s);
    case H:
      return a.choiceWhen(t, n, s);
    case R:
      return a.changeName(t, n, s);
    case D:
      return a.changeProfile(t, n, s);
    case k:
      return a.changeNickname(t, n, s);
    default:
      return a.other(t, n, s);
  }
}), E = (e, a) => `<${e}:${a}>`, o = () => /<([^<>:]+):([^>]*)>/g, we = (e, a) => T(e.note, (t, n) => a(t, n, e)), Ce = (e) => T(e, (a, t) => [a, t]), T = (e, a) => {
  const t = o(), n = [];
  let s;
  for (; (s = t.exec(e)) !== null; )
    n.push(a(s[1], s[2]));
  return n;
}, Ae = (e, a) => e.replace(o(), (t, n, s) => {
  const r = a(n, s);
  return E(n, r);
}), Me = (e, a) => {
  const t = o();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, ye = (e, a, t) => {
  const n = o();
  return e.replace(n, (s, r) => r === a ? E(r, t) : s);
}, ke = (e) => `code:${e}`, re = "N", ie = "V", w = (e, a) => `\\${e}[${a}]`, le = (e) => w(re, e.id), De = (e) => e.map((a) => ({
  controlChar: le(a),
  text: a.name
})), Re = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: w(ie, t)
})).filter((a) => a.text !== ""), oe = /* @__PURE__ */ new Set([
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
]), He = (e, a = oe) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let s;
  for (; (s = t.exec(e)) !== null; ) {
    const r = s[1].toLowerCase(), C = parseInt(s[2], 10);
    a.has(r) && n.push({ char: s[1], id: C });
  }
  return n;
}, de = (e, a, t) => a.map((n) => t(n, e[n], e)), Be = (e, a, t) => de(e, a, t), Ge = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Oe = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  x as BaseEventCommandGroup,
  N as CombinedEventCommandGroup,
  Q as ERROR_MESSAGE,
  S as SimpleEventCommandGroup,
  ke as codeInfoText,
  p as codeTest,
  me as constructActor,
  he as constructArmor,
  fe as constructClass,
  m as constructDamage,
  pe as constructEnemy,
  be as constructItem,
  i as constructParamArray,
  ve as constructSkill,
  Ie as constructState,
  ge as constructWeapon,
  q as createAdvanced,
  c as createAudio,
  F as createBasicTerms,
  W as createCommandsArray,
  G as createCondtion,
  w as createControlCharFormat,
  V as createEventPage,
  xe as createMap,
  Se as createMapEvent,
  O as createMapEventImage,
  P as createMessages,
  E as createNoteEntity,
  L as createParamNamesArray,
  Ne as createSystemData,
  Y as createSystemSoundsArray,
  _ as createTerms,
  d as createVehicle,
  le as fromActor,
  De as fromActors,
  Re as fromSystem,
  He as getControlChars,
  Me as getNoteValue,
  se as handleGroupComment,
  te as handleGroupMessage,
  ce as handleGroupScript,
  ne as handleGroupScrollingText,
  h as isBodyParams,
  Ee as isHeadCommand,
  Z as isMessageHeader,
  X as joinCommandBodies,
  o as makeRegex,
  Te as mapTextCommand,
  Oe as pickCommandParamNumber,
  Ge as pickCommandParamString,
  l as pickCommands,
  $ as pickComments,
  I as pickHead,
  K as pickMessageHeader,
  J as pickMessageWithHead,
  de as pickPropertys,
  j as pickScripts,
  ae as pickScrollText,
  ee as pickScrollTextHeader,
  Be as pickString,
  Ce as readNote,
  T as readNoteEx,
  we as readNoteObject,
  Ae as replaceNote,
  ye as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
