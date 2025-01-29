import { COMMENT as g, COMMENT_BODY as A, SCRIPT_EVAL as f, SCRIPT_EVAL_BODY as M, SHOW_MESSAGE as b, SHOW_MESSAGE_BODY as k, SHOW_SCROLLING_TEXT as d, SHOW_SCROLLING_TEXT_BODY as v, CHANGE_NICKNAME as y, CHANGE_PROFILE as D, CHANGE_NAME as R, SHOW_CHOICES_ITEM as H, SHOW_CHOICES as B } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], pe = (e) => ({
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
}), he = (e) => ({
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
}), ge = (e) => ({
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
}), fe = (e) => ({
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
  damage: u(),
  ...e
}), be = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: i(),
  expParams: [],
  ...e
}), u = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), ve = (e) => ({
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
}), Ie = (e) => ({
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
}), Se = (e) => ({
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
}), Ne = (e) => ({
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
}), s = () => ({
  name: "",
  pan: 0,
  pitch: 100,
  volume: 90
}), Ee = (e = {}) => ({
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
  titleBgm: e.titleBgm ?? s(),
  gameoverMe: e.gameoverMe ?? s(),
  battleBgm: e.battleBgm ?? s(),
  defeatMe: e.defeatMe ?? s(),
  victoryMe: e.victoryMe ?? s(),
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
}), m = (e = {}) => ({
  bgm: e.bgm ?? s(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Y = (e = {}) => [
  e.cursor ?? s(),
  e.ok ?? s(),
  e.cancel ?? s(),
  e.buzzer ?? s(),
  e.equip ?? s(),
  e.save ?? s(),
  e.load ?? s(),
  e.battleStart ?? s(),
  e.escape ?? s(),
  e.enemyAttack ?? s(),
  e.enemyDamage ?? s(),
  e.enemyCollapse ?? s(),
  e.bossCollapse1 ?? s(),
  e.bossCollapse2 ?? s(),
  e.actorDamage ?? s(),
  e.actorCollapse ?? s(),
  e.playRecovery ?? s(),
  e.playMiss ?? s(),
  e.playEvasion ?? s(),
  e.playMagicEvasion ?? s(),
  e.playReflection ?? s(),
  e.shop ?? s(),
  e.useItem ?? s(),
  e.useSkill ?? s()
], p = (e, a) => a ? e === a.code : !1, z = "MessageHeader invalid command", U = "Invalid Head", h = (e) => typeof e[0] == "string" && e.length === 1, Te = (e, a) => a ? e === a.code && h(a.parameters) : !1, l = (e, a, t) => {
  const n = [];
  for (let c = t; c < a.length; c++) {
    const r = a[c];
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
  bodys: l(k, e, a + 1)
}), Q = "ScrollTextHeader invalid command", ee = (e, a) => {
  const t = e[a];
  if (p(d, t))
    return t;
  const n = {
    headCode: d,
    bodyCode: v,
    index: a
  };
  throw new Error(Q, { cause: n });
}, ae = (e, a) => ({
  head: ee(e, a),
  bodys: l(v, e, a + 1)
});
class S {
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
class x extends S {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return this.bodies;
  }
}
class N extends S {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
}
const te = (e, a, t) => {
  const n = J(e, a), c = new x(n);
  return t(c);
}, ne = (e, a, t) => {
  const n = ae(e, a), c = new x(n);
  return t(c);
}, se = (e, a, t) => {
  const n = $(e, a), c = new N(n);
  return t(c);
}, ce = (e, a, t) => {
  const n = j(e, a), c = new N(n);
  return t(c);
}, re = (e, a, t) => {
  const n = e[a];
  switch (n.code) {
    case b:
      return te(e, a, t.showMessage);
    case d:
      return ne(e, a, t.showScrollingText);
    case g:
      return se(e, a, t.comment);
    case f:
      return ce(e, a, t.script);
    case B:
      return t.showChoices(n, a, e);
    case H:
      return t.choiceWhen(n, a, e);
    case R:
      return t.changeName(n, a, e);
    case D:
      return t.changeProfile(n, a, e);
    case y:
      return t.changeNickname(n, a, e);
    default:
      return t.other(n, a, e);
  }
}, we = (e, a) => e.map(
  (t, n, c) => re(c, n, a)
), E = (e, a) => `<${e}:${a}>`, o = () => /<([^<>:]+):([^>]*)>/g, Ce = (e, a) => T(e.note, (t, n) => a(t, n, e)), Ae = (e) => T(e, (a, t) => [a, t]), T = (e, a) => {
  const t = o(), n = [];
  let c;
  for (; (c = t.exec(e)) !== null; )
    n.push(a(c[1], c[2]));
  return n;
}, Me = (e, a) => e.replace(o(), (t, n, c) => {
  const r = a(n, c);
  return E(n, r);
}), ke = (e, a) => {
  const t = o();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, ye = (e, a, t) => {
  const n = o();
  return e.replace(n, (c, r) => r === a ? E(r, t) : c);
}, De = (e) => `code:${e}`, ie = "N", le = "V", w = (e, a) => `\\${e}[${a}]`, oe = (e) => w(ie, e.id), Re = (e) => e.map((a) => ({
  controlChar: oe(a),
  text: a.name
})), He = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: w(le, t)
})).filter((a) => a.text !== ""), me = /* @__PURE__ */ new Set([
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
]), Be = (e, a = me) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let c;
  for (; (c = t.exec(e)) !== null; ) {
    const r = c[1].toLowerCase(), C = parseInt(c[2], 10);
    a.has(r) && n.push({ char: c[1], id: C });
  }
  return n;
}, de = (e, a, t) => a.map((n) => t(n, e[n], e)), Ge = (e, a, t) => de(e, a, t), Oe = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Ve = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  S as BaseEventCommandGroup,
  N as CombinedEventCommandGroup,
  Q as ERROR_MESSAGE,
  x as SimpleEventCommandGroup,
  De as codeInfoText,
  p as codeTest,
  pe as constructActor,
  ge as constructArmor,
  be as constructClass,
  u as constructDamage,
  he as constructEnemy,
  ve as constructItem,
  i as constructParamArray,
  Ie as constructSkill,
  Se as constructState,
  fe as constructWeapon,
  q as createAdvanced,
  s as createAudio,
  F as createBasicTerms,
  W as createCommandsArray,
  G as createCondtion,
  w as createControlCharFormat,
  V as createEventPage,
  xe as createMap,
  Ne as createMapEvent,
  O as createMapEventImage,
  P as createMessages,
  E as createNoteEntity,
  L as createParamNamesArray,
  Ee as createSystemData,
  Y as createSystemSoundsArray,
  _ as createTerms,
  m as createVehicle,
  oe as fromActor,
  Re as fromActors,
  He as fromSystem,
  Be as getControlChars,
  ke as getNoteValue,
  se as handleGroupComment,
  te as handleGroupMessage,
  ce as handleGroupScript,
  ne as handleGroupScrollingText,
  re as handlerDispatch,
  h as isBodyParams,
  Te as isHeadCommand,
  Z as isMessageHeader,
  X as joinCommandBodies,
  o as makeRegex,
  we as mapTextCommand,
  Ve as pickCommandParamNumber,
  Oe as pickCommandParamString,
  l as pickCommands,
  $ as pickComments,
  I as pickHead,
  K as pickMessageHeader,
  J as pickMessageWithHead,
  de as pickPropertys,
  j as pickScripts,
  ae as pickScrollText,
  ee as pickScrollTextHeader,
  Ge as pickString,
  Ae as readNote,
  T as readNoteEx,
  Ce as readNoteObject,
  Me as replaceNote,
  ye as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
