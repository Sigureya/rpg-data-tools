import { COMMENT as f, COMMENT_BODY as k, SCRIPT_EVAL as b, SCRIPT_EVAL_BODY as R, SHOW_MESSAGE as v, SHOW_MESSAGE_BODY as D, SHOW_SCROLLING_TEXT as m, SHOW_SCROLLING_TEXT_BODY as I, CHANGE_NICKNAME as B, CHANGE_PROFILE as H, CHANGE_NAME as G, SHOW_CHOICES_ITEM as O, SHOW_CHOICES as _ } from "@sigureya/rpgtypes";
const i = () => [0, 0, 0, 0, 0, 0, 0, 0], Se = (e) => ({
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
}), Ce = (e) => ({
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
}), Te = (e) => ({
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
}), Ne = (e) => ({
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
}), we = (e) => ({
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
}), Ae = (e) => ({
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
}), ye = (e) => ({
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
}), Me = (e) => ({
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
}), ke = (e) => ({
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
}), Re = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [L()],
  ...e
}), V = (e) => ({
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
}), F = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), L = (e) => ({
  conditions: V(),
  image: F(),
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
}), De = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? W(),
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
  advanced: e.advanced ?? U(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? X(),
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
}), W = (e = {}) => ({
  messages: Y(e.messages ?? {}),
  commands: q(e.commands ?? {}),
  params: z(e.params ?? {}),
  basic: P(e.basic ?? {})
}), P = (e = {}) => [
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
], z = (e = {}) => [
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
], q = (e = {}) => [
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
], Y = (e = {}) => ({
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
}), U = (e = {}) => ({
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
}), X = (e = {}) => [
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
], p = (e, a) => a ? e === a.code : !1, $ = "MessageHeader invalid command", Be = "Script invalid command", j = "Invalid Head", h = (e) => typeof e[0] == "string" && e.length === 1, He = (e, a) => a ? e === a.code && h(a.parameters) : !1, l = (e, a, t) => {
  const n = [];
  for (let r = t; r < a.length; r++) {
    const c = a[r];
    if (p(e, c) && h(c.parameters))
      n.push({
        code: e,
        indent: c.indent,
        parameters: [c.parameters[0]]
      });
    else
      break;
  }
  return n;
}, E = (e, a, t) => {
  const n = e[a];
  if (n && p(t, n) && h(n.parameters))
    return {
      code: t,
      indent: n.indent,
      parameters: [n.parameters[0]]
    };
  throw new Error(j, { cause: n });
}, K = (e, a) => ({
  head: E(e, a, f),
  bodys: l(k, e, a + 1)
}), Z = (e, a) => ({
  head: E(e, a, b),
  bodys: l(R, e, a + 1)
}), J = (e, a) => {
  const t = e[a];
  if (t && Q(t))
    return t;
  throw new Error($, { cause: t });
}, Q = (e) => !e || e.code !== v || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ee = (e, a) => ({
  head: J(e, a),
  bodys: l(D, e, a + 1)
}), ae = "ScrollTextHeader invalid command", te = (e, a) => {
  const t = e[a];
  if (p(m, t))
    return t;
  const n = {
    headCode: m,
    bodyCode: I,
    index: a
  };
  throw new Error(ae, { cause: n });
}, ne = (e, a) => ({
  head: te(e, a),
  bodys: l(I, e, a + 1)
}), se = (e, a = `
`) => e.map((t) => t.parameters[0]).join(a);
class x {
  constructor(a, t) {
    this.header = a, this.bodies = t;
  }
  getBodyText(a = `
`) {
    return se(this.getExpandedBodies(), a);
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class S extends x {
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
class C extends x {
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
const re = (e, a = []) => new S(401, e, a), ce = (e, a = []) => new S(405, e, a), ie = (e, a = []) => new C(
  e,
  a
), le = (e, a = []) => new C(e, a), oe = (e, a, t) => {
  const n = ee(e, a), r = re(n.head, n.bodys);
  return t(r);
}, de = (e, a, t) => {
  const n = ne(e, a), r = ce(n.head, n.bodys);
  return t(r);
}, me = (e, a, t) => {
  const n = K(e, a), r = ie(n.head, n.bodys);
  return t(r);
}, ue = (e, a, t) => {
  const n = Z(e, a), r = le(n.head, n.bodys);
  return t(r);
}, pe = (e, a, t) => {
  const n = e[a];
  switch (n.code) {
    case v:
      return oe(e, a, t.showMessage);
    case m:
      return de(e, a, t.showScrollingText);
    case f:
      return me(e, a, t.comment);
    case b:
      return ue(e, a, t.script);
    case _:
      return t.showChoices(n, a, e);
    case O:
      return t.choiceWhen(n, a, e);
    case G:
      return t.changeName(n, a, e);
    case H:
      return t.changeProfile(n, a, e);
    case B:
      return t.changeNickname(n, a, e);
    default:
      return t.other(n, a, e);
  }
}, Ge = (e, a) => e.map(
  (t, n, r) => pe(r, n, a)
), g = (e) => !!e, he = (e, a, t) => ({
  command: e,
  eventId: a,
  pageIndex: t
}), ge = (e, a) => e.pages.map(
  (t, n) => t.list.map((r) => a(r, e.id, n))
), Oe = (e) => e.events.filter(g).map((t) => ge(t, he)).flat(2), T = (e, a) => {
  const t = a(e.list);
  return {
    ...e,
    list: t
  };
}, N = (e, a) => ({
  ...e,
  pages: e.pages.map((t) => T(t, a))
}), _e = (e, a) => ({
  ...e,
  events: e.events.map((t) => t ? N(t, a) : null)
}), Ve = (e, a) => [null, ...e.filter(g).map((n) => T(n, a))], Fe = (e, a) => [null, ...e.filter(g).map((n) => N(n, a))], w = (e, a) => `<${e}:${a}>`, o = () => /<([^<>:]+):([^>]*)>/g, Le = (e, a) => A(e.note, (t, n) => a(t, n, e)), We = (e) => A(e, (a, t) => [a, t]), A = (e, a) => {
  const t = o(), n = [];
  let r;
  for (; (r = t.exec(e)) !== null; )
    n.push(a(r[1], r[2]));
  return n;
}, Pe = (e, a) => e.replace(o(), (t, n, r) => {
  const c = a(n, r);
  return w(n, c);
}), ze = (e, a) => {
  const t = o();
  let n;
  for (; (n = t.exec(e)) !== null; )
    if (n[1] === a)
      return n[2];
}, qe = (e, a, t) => {
  const n = o();
  return e.replace(n, (r, c) => c === a ? w(c, t) : r);
}, Ye = (e) => `code:${e}`, fe = "N", be = "V", y = (e, a) => `\\${e}[${a}]`, ve = (e) => y(fe, e.id), Ue = (e) => e.map((a) => ({
  controlChar: ve(a),
  text: a.name
})), Xe = (e) => e.variables.map((a, t) => ({
  text: a || "",
  controlChar: y(be, t)
})).filter((a) => a.text !== ""), Ie = /* @__PURE__ */ new Set([
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
]), $e = (e, a = Ie) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, n = [];
  let r;
  for (; (r = t.exec(e)) !== null; ) {
    const c = r[1].toLowerCase(), M = parseInt(r[2], 10);
    a.has(c) && n.push({ char: r[1], id: M });
  }
  return n;
}, Ee = (e, a, t) => a.map((n) => t(n, e[n], e)), je = (e, a, t) => Ee(e, a, t), Ke = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
}), Ze = (e, a) => ({
  code: e.code,
  paramIndex: a,
  value: e.parameters[a]
});
export {
  x as BaseEventCommandGroup,
  C as CombinedEventCommandGroup,
  $ as ERROR_COMMAND_MESSAGE,
  Be as ERROR_COMMAND_SCRIPT,
  j as ERROR_INVALID_HEAD,
  ae as ERROR_MESSAGE,
  S as SimpleEventCommandGroup,
  Ye as codeInfoText,
  p as codeTest,
  Se as constructActor,
  Te as constructArmor,
  we as constructClass,
  u as constructDamage,
  Ce as constructEnemy,
  Ae as constructItem,
  i as constructParamArray,
  ye as constructSkill,
  Me as constructState,
  Ne as constructWeapon,
  U as createAdvanced,
  s as createAudio,
  P as createBasicTerms,
  q as createCommandsArray,
  ie as createCommentGroup,
  V as createCondtion,
  y as createControlCharFormat,
  L as createEventPage,
  ke as createMap,
  Re as createMapEvent,
  he as createMapEventContext,
  F as createMapEventImage,
  re as createMessageGroup,
  Y as createMessages,
  w as createNoteEntity,
  z as createParamNamesArray,
  le as createScriptGroup,
  ce as createScrlloingTextGroup,
  De as createSystemData,
  X as createSystemSoundsArray,
  W as createTerms,
  d as createVehicle,
  ve as fromActor,
  Ue as fromActors,
  Xe as fromSystem,
  Oe as gatherEventCommandLocators,
  $e as getControlChars,
  ze as getNoteValue,
  me as handleGroupComment,
  oe as handleGroupMessage,
  ue as handleGroupScript,
  de as handleGroupScrollingText,
  pe as handlerDispatch,
  h as isBodyParams,
  He as isHeadCommand,
  Q as isMessageHeader,
  g as isValidEvent,
  se as joinCommandBodies,
  ge as locateEventCommands,
  o as makeRegex,
  Ge as mapTextCommand,
  Ze as pickCommandParamNumber,
  Ke as pickCommandParamString,
  l as pickCommands,
  K as pickComments,
  E as pickHead,
  J as pickMessageHeader,
  ee as pickMessageWithHead,
  Ee as pickPropertys,
  Z as pickScripts,
  ne as pickScrollText,
  te as pickScrollTextHeader,
  je as pickString,
  We as readNote,
  A as readNoteEx,
  Le as readNoteObject,
  Ve as replaceCommonEvents,
  T as replaceEventCommands,
  _e as replaceMapEvents,
  Pe as replaceNote,
  N as replacePages,
  Fe as replaceTroops,
  qe as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
