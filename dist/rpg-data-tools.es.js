import { CHANGE_NICKNAME as E, CHANGE_PROFILE as S, CHANGE_NAME as T, SHOW_SCROLLING_TEXT as u, SHOW_CHOICES_ITEM as C, SHOW_CHOICES as A, COMMENT as w, COMMENT_BODY as y, SCRIPT_EVAL as M, SCRIPT_EVAL_BODY as k, SHOW_MESSAGE as D, SHOW_MESSAGE_BODY as R, SHOW_SCROLLING_TEXT_BODY as f } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], te = (e) => ({
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
}), ne = (e) => ({
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
}), se = (e) => ({
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
}), ce = (e) => ({
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
  damage: o(),
  ...e
}), re = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: i(),
  expParams: [],
  ...e
}), o = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), ie = (e) => ({
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
  damage: o(),
  effects: [],
  ...e
}), le = (e) => ({
  animationId: 0,
  damage: o(),
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
}), de = (e) => ({
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
}), me = (e) => ({
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
}), ue = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [O()],
  ...e
}), H = (e) => ({
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
}), B = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), O = (e) => ({
  conditions: H(),
  image: B(),
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
}), oe = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? V(),
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
  advanced: e.advanced ?? W(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? P(),
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
}), V = (e = {}) => ({
  messages: L(e.messages ?? {}),
  commands: G(e.commands ?? {}),
  params: F(e.params ?? {}),
  basic: _(e.basic ?? {})
}), _ = (e = {}) => [
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
], F = (e = {}) => [
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
], G = (e = {}) => [
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
], L = (e = {}) => ({
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
}), W = (e = {}) => ({
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
}), P = (e = {}) => [
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
], he = (e, a) => e.map((t, n, c) => {
  switch (t.code) {
    // case SHOW_MESSAGE:
    //   return table.showMessage(new MessageProxy(command, index, array));
    case A:
      return a.showChoices(t, n, c);
    case C:
      return a.choiceWhen(t, n, c);
    case u:
      return a.showScrollingText(t, n, c);
    case T:
      return a.changeName(t, n, c);
    case S:
      return a.changeProfile(t, n, c);
    case E:
      return a.changeNickname(t, n, c);
    // case COMMENT:
    //   return table.comment2(createComment(index, array));
    default:
      return a.other(t, n, c);
  }
}), h = (e, a) => a ? e === a.code : !1, q = "MessageHeader invalid command", Y = "Invalid Head", p = (e) => typeof e[0] == "string" && e.length === 1, pe = (e, a) => a ? e === a.code && p(a.parameters) : !1, l = (e, a, t) => {
  const n = [];
  for (let c = t; c < a.length; c++) {
    const r = a[c];
    if (h(e, r) && p(r.parameters))
      n.push({
        code: e,
        indent: r.indent,
        parameters: [r.parameters[0]]
      });
    else
      break;
  }
  return n;
}, g = (e, a, t) => {
  const n = e[a];
  if (n && h(t, n) && p(n.parameters))
    return {
      code: t,
      indent: n.indent,
      parameters: [n.parameters[0]]
    };
  throw new Error(Y, { cause: n });
}, z = (e, a = `
`) => e.map((t) => t.parameters[0]).join(a), fe = (e, a) => ({
  head: g(e, a, w),
  bodys: l(y, e, a + 1)
}), ge = (e, a) => ({
  head: g(e, a, M),
  bodys: l(k, e, a + 1)
}), U = (e, a) => {
  const t = e[a];
  if (t && X(t))
    return t;
  throw new Error(q, { cause: t });
}, X = (e) => !e || e.code !== D || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", be = (e, a) => ({
  head: U(e, a),
  bodys: l(R, e, a + 1)
}), $ = "ScrollTextHeader invalid command", j = (e, a) => {
  const t = e[a];
  if (h(u, t))
    return t;
  const n = {
    headCode: u,
    bodyCode: f,
    index: a
  };
  throw new Error($, { cause: n });
}, ve = (e, a) => ({
  head: j(e, a),
  bodys: l(f, e, a + 1)
});
class b {
  constructor(a) {
    this.pair = a;
  }
  getBodyText(a = `
`) {
    return z(this.getExpandedBodies(), a);
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
class Ie extends b {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return this.bodies;
  }
}
class xe extends b {
  constructor(a) {
    super(a);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
}
const v = (e, a) => `<${e}:${a}>`, d = () => /<([^<>:]+):([^>]*)>/g, Ne = (e, a) => I(e.note, (t, n) => a(t, n, e)), Ee = (e) => I(e, (a, t) => [a, t]), I = (e, a) => {
  const t = d(), n = [];
  let c;
  for (; (c = t.exec(e)) !== null; )
    n.push(a(c[1], c[2]));
  return n;
}, Se = (e, a) => e.replace(d(), (t, n, c) => {
  const r = a(n, c);
  return v(n, r);
}), Te = (e, a) => {
  const t = d();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, Ce = (e, a, t) => {
  const n = d();
  return e.replace(n, (c, r) => r === a ? v(r, t) : c);
}, Ae = (e) => `code:${e}`, K = "N", Z = "V", x = (e, a) => `\\${e}[${a}]`, J = (e) => x(K, e.id), we = (e) => e.map((a) => ({
  controlChar: J(a),
  text: a.name
})), ye = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: x(Z, t)
})).filter((a) => a.text !== ""), Q = /* @__PURE__ */ new Set([
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
]), Me = (e, a = Q) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let c;
  for (; (c = t.exec(e)) !== null; ) {
    const r = c[1].toLowerCase(), N = parseInt(c[2], 10);
    a.has(r) && n.push({ char: c[1], id: N });
  }
  return n;
}, ee = (e, a, t) => a.map((n) => t(n, e[n], e)), ke = (e, a, t) => ee(e, a, t), De = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Re = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  b as BaseEventCommandGroup,
  xe as CombinedEventCommandGroup,
  $ as ERROR_MESSAGE,
  Ie as SimpleEventCommandGroup,
  Ae as codeInfoText,
  h as codeTest,
  te as constructActor,
  se as constructArmor,
  re as constructClass,
  o as constructDamage,
  ne as constructEnemy,
  ie as constructItem,
  i as constructParamArray,
  le as constructSkill,
  de as constructState,
  ce as constructWeapon,
  W as createAdvanced,
  s as createAudio,
  _ as createBasicTerms,
  G as createCommandsArray,
  H as createCondtion,
  x as createControlCharFormat,
  O as createEventPage,
  me as createMap,
  ue as createMapEvent,
  B as createMapEventImage,
  L as createMessages,
  v as createNoteEntity,
  F as createParamNamesArray,
  oe as createSystemData,
  P as createSystemSoundsArray,
  V as createTerms,
  m as createVehicle,
  J as fromActor,
  we as fromActors,
  ye as fromSystem,
  Me as getControlChars,
  Te as getNoteValue,
  p as isBodyParams,
  pe as isHeadCommand,
  X as isMessageHeader,
  z as joinCommandBodies,
  d as makeRegex,
  he as mapTextCommand,
  Re as pickCommandParamNumber,
  De as pickCommandParamString,
  l as pickCommands,
  fe as pickComments,
  g as pickHead,
  U as pickMessageHeader,
  be as pickMessageWithHead,
  ee as pickPropertys,
  ge as pickScripts,
  ve as pickScrollText,
  j as pickScrollTextHeader,
  ke as pickString,
  Ee as readNote,
  I as readNoteEx,
  Ne as readNoteObject,
  Se as replaceNote,
  Ce as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
