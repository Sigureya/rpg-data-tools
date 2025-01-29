import { CHANGE_NICKNAME as T, CHANGE_PROFILE as w, CHANGE_NAME as C, SHOW_SCROLLING_TEXT as m, SHOW_CHOICES_ITEM as A, SHOW_CHOICES as y, COMMENT as M, COMMENT_BODY as k, SCRIPT_EVAL as D, SCRIPT_EVAL_BODY as R, SHOW_MESSAGE as H, SHOW_MESSAGE_BODY as B, SHOW_SCROLLING_TEXT_BODY as h } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], le = (e) => ({
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
}), oe = (e) => ({
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
}), de = (e) => ({
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
}), me = (e) => ({
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
}), ue = (e) => ({
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
}), pe = (e) => ({
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
}), ge = (e) => ({
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
}), he = (e) => ({
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
}), fe = (e) => ({
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
}), be = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [_()],
  ...e
}), O = (e) => ({
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
}), V = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), _ = (e) => ({
  conditions: O(),
  image: V(),
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
}), ve = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? F(),
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
}), F = (e = {}) => ({
  messages: P(e.messages ?? {}),
  commands: W(e.commands ?? {}),
  params: L(e.params ?? {}),
  basic: G(e.basic ?? {})
}), G = (e = {}) => [
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
], Ie = (e, a) => e.map((t, n, s) => {
  switch (t.code) {
    // case SHOW_MESSAGE:
    //   return table.showMessage(new MessageProxy(command, index, array));
    case y:
      return a.showChoices(t, n, s);
    case A:
      return a.choiceWhen(t, n, s);
    case m:
      return a.showScrollingText(t, n, s);
    case C:
      return a.changeName(t, n, s);
    case w:
      return a.changeProfile(t, n, s);
    case T:
      return a.changeNickname(t, n, s);
    // case COMMENT:
    //   return table.comment2(createComment(index, array));
    default:
      return a.other(t, n, s);
  }
}), p = (e, a) => a ? e === a.code : !1, z = "MessageHeader invalid command", U = "Invalid Head", g = (e) => typeof e[0] == "string" && e.length === 1, xe = (e, a) => a ? e === a.code && g(a.parameters) : !1, l = (e, a, t) => {
  const n = [];
  for (let s = t; s < a.length; s++) {
    const r = a[s];
    if (p(e, r) && g(r.parameters))
      n.push({
        code: e,
        indent: r.indent,
        parameters: [r.parameters[0]]
      });
    else
      break;
  }
  return n;
}, f = (e, a, t) => {
  const n = e[a];
  if (n && p(t, n) && g(n.parameters))
    return {
      code: t,
      indent: n.indent,
      parameters: [n.parameters[0]]
    };
  throw new Error(U, { cause: n });
}, X = (e, a = `
`) => e.map((t) => t.parameters[0]).join(a), $ = (e, a) => ({
  head: f(e, a, M),
  bodys: l(k, e, a + 1)
}), j = (e, a) => ({
  head: f(e, a, D),
  bodys: l(R, e, a + 1)
}), K = (e, a) => {
  const t = e[a];
  if (t && Z(t))
    return t;
  throw new Error(z, { cause: t });
}, Z = (e) => !e || e.code !== H || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", J = (e, a) => ({
  head: K(e, a),
  bodys: l(B, e, a + 1)
}), Q = "ScrollTextHeader invalid command", ee = (e, a) => {
  const t = e[a];
  if (p(m, t))
    return t;
  const n = {
    headCode: m,
    bodyCode: h,
    index: a
  };
  throw new Error(Q, { cause: n });
}, ae = (e, a) => ({
  head: ee(e, a),
  bodys: l(h, e, a + 1)
});
class b {
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
class v extends b {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return this.bodies;
  }
}
class I extends b {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
}
const Se = (e, a, t) => {
  const n = J(e, a), s = new v(n);
  return t(s);
}, Ne = (e, a, t) => {
  const n = ae(e, a), s = new v(n);
  return t(s);
}, Ee = (e, a, t) => {
  const n = $(e, a), s = new I(n);
  return t(s);
}, Te = (e, a, t) => {
  const n = j(e, a), s = new I(n);
  return t(s);
}, x = (e, a) => `<${e}:${a}>`, o = () => /<([^<>:]+):([^>]*)>/g, we = (e, a) => S(e.note, (t, n) => a(t, n, e)), Ce = (e) => S(e, (a, t) => [a, t]), S = (e, a) => {
  const t = o(), n = [];
  let s;
  for (; (s = t.exec(e)) !== null; )
    n.push(a(s[1], s[2]));
  return n;
}, Ae = (e, a) => e.replace(o(), (t, n, s) => {
  const r = a(n, s);
  return x(n, r);
}), ye = (e, a) => {
  const t = o();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, Me = (e, a, t) => {
  const n = o();
  return e.replace(n, (s, r) => r === a ? x(r, t) : s);
}, ke = (e) => `code:${e}`, te = "N", ne = "V", N = (e, a) => `\\${e}[${a}]`, se = (e) => N(te, e.id), De = (e) => e.map((a) => ({
  controlChar: se(a),
  text: a.name
})), Re = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: N(ne, t)
})).filter((a) => a.text !== ""), ce = /* @__PURE__ */ new Set([
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
]), He = (e, a = ce) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let s;
  for (; (s = t.exec(e)) !== null; ) {
    const r = s[1].toLowerCase(), E = parseInt(s[2], 10);
    a.has(r) && n.push({ char: s[1], id: E });
  }
  return n;
}, re = (e, a, t) => a.map((n) => t(n, e[n], e)), Be = (e, a, t) => re(e, a, t), Oe = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Ve = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  b as BaseEventCommandGroup,
  I as CombinedEventCommandGroup,
  Q as ERROR_MESSAGE,
  v as SimpleEventCommandGroup,
  ke as codeInfoText,
  p as codeTest,
  le as constructActor,
  de as constructArmor,
  ue as constructClass,
  u as constructDamage,
  oe as constructEnemy,
  pe as constructItem,
  i as constructParamArray,
  ge as constructSkill,
  he as constructState,
  me as constructWeapon,
  q as createAdvanced,
  c as createAudio,
  G as createBasicTerms,
  W as createCommandsArray,
  O as createCondtion,
  N as createControlCharFormat,
  _ as createEventPage,
  fe as createMap,
  be as createMapEvent,
  V as createMapEventImage,
  P as createMessages,
  x as createNoteEntity,
  L as createParamNamesArray,
  ve as createSystemData,
  Y as createSystemSoundsArray,
  F as createTerms,
  d as createVehicle,
  se as fromActor,
  De as fromActors,
  Re as fromSystem,
  He as getControlChars,
  ye as getNoteValue,
  g as isBodyParams,
  xe as isHeadCommand,
  Z as isMessageHeader,
  X as joinCommandBodies,
  o as makeRegex,
  Ie as mapTextCommand,
  Ee as onComment,
  Se as onMessage,
  Te as onScript,
  Ne as onScrollingText,
  Ve as pickCommandParamNumber,
  Oe as pickCommandParamString,
  l as pickCommands,
  $ as pickComments,
  f as pickHead,
  K as pickMessageHeader,
  J as pickMessageWithHead,
  re as pickPropertys,
  j as pickScripts,
  ae as pickScrollText,
  ee as pickScrollTextHeader,
  Be as pickString,
  Ce as readNote,
  S as readNoteEx,
  we as readNoteObject,
  Ae as replaceNote,
  Me as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
