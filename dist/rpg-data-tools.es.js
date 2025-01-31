import { COMMENT as g, COMMENT_BODY as A, SCRIPT_EVAL as f, SCRIPT_EVAL_BODY as y, SHOW_MESSAGE as b, SHOW_MESSAGE_BODY as M, SHOW_SCROLLING_TEXT as m, SHOW_SCROLLING_TEXT_BODY as v, CHANGE_NICKNAME as k, CHANGE_PROFILE as R, CHANGE_NAME as D, SHOW_CHOICES_ITEM as B, SHOW_CHOICES as H } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], be = (e) => ({
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
}), ve = (e) => ({
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
}), Ie = (e) => ({
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
}), Se = (e) => ({
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
}), xe = (e) => ({
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
}), Ne = (e) => ({
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
}), Te = (e) => ({
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
}), Ee = (e) => ({
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
}), Ce = (e) => ({
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
}), we = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [_()],
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
}), _ = (e) => ({
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
}), Ae = (e = {}) => ({
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
  advanced: e.advanced ?? z(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? q(),
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
  boat: e.boat ?? d(),
  ship: e.ship ?? d(),
  airship: e.airship ?? d(),
  tileSize: e.tileSize ?? 0
}), V = (e = {}) => ({
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
}), z = (e = {}) => ({
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
  bgm: e.bgm ?? s(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), q = (e = {}) => [
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
], h = (e, a) => a ? e === a.code : !1, Y = "MessageHeader invalid command", ye = "Script invalid command", U = "Invalid Head", p = (e) => typeof e[0] == "string" && e.length === 1, Me = (e, a) => a ? e === a.code && p(a.parameters) : !1, l = (e, a, t) => {
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
}, I = (e, a, t) => {
  const n = e[a];
  if (n && h(t, n) && p(n.parameters))
    return {
      code: t,
      indent: n.indent,
      parameters: [n.parameters[0]]
    };
  throw new Error(U, { cause: n });
}, X = (e, a) => ({
  head: I(e, a, g),
  bodys: l(A, e, a + 1)
}), $ = (e, a) => ({
  head: I(e, a, f),
  bodys: l(y, e, a + 1)
}), j = (e, a) => {
  const t = e[a];
  if (t && K(t))
    return t;
  throw new Error(Y, { cause: t });
}, K = (e) => !e || e.code !== b || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", Z = (e, a) => ({
  head: j(e, a),
  bodys: l(M, e, a + 1)
}), J = "ScrollTextHeader invalid command", Q = (e, a) => {
  const t = e[a];
  if (h(m, t))
    return t;
  const n = {
    headCode: m,
    bodyCode: v,
    index: a
  };
  throw new Error(J, { cause: n });
}, ee = (e, a) => ({
  head: Q(e, a),
  bodys: l(v, e, a + 1)
}), ae = (e, a = `
`) => e.map((t) => t.parameters[0]).join(a);
class S {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText(a = `
`) {
    return ae(this.getExpandedBodies(), a);
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class x extends S {
  constructor(a, t, n) {
    super(t, n), this.bodyCode = a;
  }
  getExpandedBodies() {
    return this.bodies;
  }
  normalizedCommands() {
    const a = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters]
    };
    if (this.bodies.length === 0)
      return [a];
    const t = {
      code: this.bodyCode,
      indent: 0,
      parameters: [this.getBodyText()]
    };
    return [a, t];
  }
}
class N extends S {
  constructor(a, t) {
    super(a, t);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
  normalizedCommands() {
    const a = this.getBodyText();
    return [
      {
        code: this.header.code,
        parameters: [a],
        indent: this.header.indent
      }
    ];
  }
}
const te = (e, a = []) => new x(401, e, a), ne = (e, a = []) => new x(405, e, a), se = (e, a = []) => new N(
  e,
  a
), ce = (e, a = []) => new N(e, a), re = (e, a, t) => {
  const n = Z(e, a), c = te(n.head, n.bodys);
  return t(c);
}, ie = (e, a, t) => {
  const n = ee(e, a), c = ne(n.head, n.bodys);
  return t(c);
}, le = (e, a, t) => {
  const n = X(e, a), c = se(n.head, n.bodys);
  return t(c);
}, oe = (e, a, t) => {
  const n = $(e, a), c = ce(n.head, n.bodys);
  return t(c);
}, de = (e, a, t) => {
  const n = e[a];
  switch (n.code) {
    case b:
      return re(e, a, t.showMessage);
    case m:
      return ie(e, a, t.showScrollingText);
    case g:
      return le(e, a, t.comment);
    case f:
      return oe(e, a, t.script);
    case H:
      return t.showChoices(n, a, e);
    case B:
      return t.choiceWhen(n, a, e);
    case D:
      return t.changeName(n, a, e);
    case R:
      return t.changeProfile(n, a, e);
    case k:
      return t.changeNickname(n, a, e);
    default:
      return t.other(n, a, e);
  }
}, ke = (e, a) => e.map(
  (t, n, c) => de(c, n, a)
), T = (e, a) => `<${e}:${a}>`, o = () => /<([^<>:]+):([^>]*)>/g, Re = (e, a) => E(e.note, (t, n) => a(t, n, e)), De = (e) => E(e, (a, t) => [a, t]), E = (e, a) => {
  const t = o(), n = [];
  let c;
  for (; (c = t.exec(e)) !== null; )
    n.push(a(c[1], c[2]));
  return n;
}, Be = (e, a) => e.replace(o(), (t, n, c) => {
  const r = a(n, c);
  return T(n, r);
}), He = (e, a) => {
  const t = o();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, Ge = (e, a, t) => {
  const n = o();
  return e.replace(n, (c, r) => r === a ? T(r, t) : c);
}, Oe = (e) => `code:${e}`, me = "N", ue = "V", C = (e, a) => `\\${e}[${a}]`, he = (e) => C(me, e.id), _e = (e) => e.map((a) => ({
  controlChar: he(a),
  text: a.name
})), Ve = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: C(ue, t)
})).filter((a) => a.text !== ""), pe = /* @__PURE__ */ new Set([
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
]), Fe = (e, a = pe) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let c;
  for (; (c = t.exec(e)) !== null; ) {
    const r = c[1].toLowerCase(), w = parseInt(c[2], 10);
    a.has(r) && n.push({ char: c[1], id: w });
  }
  return n;
}, ge = (e, a, t) => a.map((n) => t(n, e[n], e)), Le = (e, a, t) => ge(e, a, t), We = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Pe = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  S as BaseEventCommandGroup,
  N as CombinedEventCommandGroup,
  Y as ERROR_COMMAND_MESSAGE,
  ye as ERROR_COMMAND_SCRIPT,
  U as ERROR_INVALID_HEAD,
  J as ERROR_MESSAGE,
  x as SimpleEventCommandGroup,
  Oe as codeInfoText,
  h as codeTest,
  be as constructActor,
  Ie as constructArmor,
  xe as constructClass,
  u as constructDamage,
  ve as constructEnemy,
  Ne as constructItem,
  i as constructParamArray,
  Te as constructSkill,
  Ee as constructState,
  Se as constructWeapon,
  z as createAdvanced,
  s as createAudio,
  F as createBasicTerms,
  W as createCommandsArray,
  se as createCommentGroup,
  G as createCondtion,
  C as createControlCharFormat,
  _ as createEventPage,
  Ce as createMap,
  we as createMapEvent,
  O as createMapEventImage,
  te as createMessageGroup,
  P as createMessages,
  T as createNoteEntity,
  L as createParamNamesArray,
  ce as createScriptGroup,
  ne as createScrlloingTextGroup,
  Ae as createSystemData,
  q as createSystemSoundsArray,
  V as createTerms,
  d as createVehicle,
  he as fromActor,
  _e as fromActors,
  Ve as fromSystem,
  Fe as getControlChars,
  He as getNoteValue,
  le as handleGroupComment,
  re as handleGroupMessage,
  oe as handleGroupScript,
  ie as handleGroupScrollingText,
  de as handlerDispatch,
  p as isBodyParams,
  Me as isHeadCommand,
  K as isMessageHeader,
  ae as joinCommandBodies,
  o as makeRegex,
  ke as mapTextCommand,
  Pe as pickCommandParamNumber,
  We as pickCommandParamString,
  l as pickCommands,
  X as pickComments,
  I as pickHead,
  j as pickMessageHeader,
  Z as pickMessageWithHead,
  ge as pickPropertys,
  $ as pickScripts,
  ee as pickScrollText,
  Q as pickScrollTextHeader,
  Le as pickString,
  De as readNote,
  E as readNoteEx,
  Re as readNoteObject,
  Be as replaceNote,
  Ge as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
