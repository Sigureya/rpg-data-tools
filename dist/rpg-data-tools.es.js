import * as a from "@sigureya/rpgtypes";
import { COMMENT as S, COMMENT_BODY as V, SCRIPT_EVAL as N, SCRIPT_EVAL_BODY as W, SHOW_MESSAGE as T, SHOW_MESSAGE_BODY as F, SHOW_SCROLLING_TEXT as h, SHOW_SCROLLING_TEXT_BODY as A, CHANGE_NICKNAME as P, CHANGE_PROFILE as x, CHANGE_NAME as z, SHOW_CHOICES_ITEM as y, SHOW_CHOICES as Y } from "@sigureya/rpgtypes";
const m = () => [0, 0, 0, 0, 0, 0, 0, 0], Ge = (e) => ({
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
}), Le = (e) => ({
  battlerHue: 0,
  id: 0,
  name: "",
  note: "",
  battlerName: "",
  traits: [],
  params: m(),
  exp: 0,
  gold: 0,
  dropItems: [],
  actions: [],
  ...e
}), De = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  params: m(),
  traits: [],
  ...e
}), ke = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  wtypeId: 0,
  params: m(),
  traits: [],
  damage: p(),
  ...e
}), Ve = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: m(),
  expParams: [],
  ...e
}), p = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), We = (e) => ({
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
  damage: p(),
  effects: [],
  ...e
}), Fe = (e) => ({
  animationId: 0,
  damage: p(),
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
}), Pe = (e) => ({
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
}), ze = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [q()],
  ...e
}), U = (e) => ({
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
}), X = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), q = (e) => ({
  conditions: U(),
  image: X(),
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
}), o = () => ({
  name: "",
  pan: 0,
  pitch: 100,
  volume: 90
}), ye = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? j(),
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
  advanced: e.advanced ?? Q(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? b(),
  titleBgm: e.titleBgm ?? o(),
  gameoverMe: e.gameoverMe ?? o(),
  battleBgm: e.battleBgm ?? o(),
  defeatMe: e.defeatMe ?? o(),
  victoryMe: e.victoryMe ?? o(),
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
}), j = (e = {}) => ({
  messages: Z(e.messages ?? {}),
  commands: J(e.commands ?? {}),
  params: $(e.params ?? {}),
  basic: K(e.basic ?? {})
}), K = (e = {}) => [
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
], $ = (e = {}) => [
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
], J = (e = {}) => [
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
], Z = (e = {}) => ({
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
}), Q = (e = {}) => ({
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
  bgm: e.bgm ?? o(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), b = (e = {}) => [
  e.cursor ?? o(),
  e.ok ?? o(),
  e.cancel ?? o(),
  e.buzzer ?? o(),
  e.equip ?? o(),
  e.save ?? o(),
  e.load ?? o(),
  e.battleStart ?? o(),
  e.escape ?? o(),
  e.enemyAttack ?? o(),
  e.enemyDamage ?? o(),
  e.enemyCollapse ?? o(),
  e.bossCollapse1 ?? o(),
  e.bossCollapse2 ?? o(),
  e.actorDamage ?? o(),
  e.actorCollapse ?? o(),
  e.playRecovery ?? o(),
  e.playMiss ?? o(),
  e.playEvasion ?? o(),
  e.playMagicEvasion ?? o(),
  e.playReflection ?? o(),
  e.shop ?? o(),
  e.useItem ?? o(),
  e.useSkill ?? o()
], g = (e, t) => t ? e === t.code : !1, ee = "MessageHeader invalid command", Ye = "Script invalid command", te = "Invalid Head", E = (e) => typeof e[0] == "string" && e.length === 1, Ue = (e, t) => t ? e === t.code && E(t.parameters) : !1, u = (e, t, n) => {
  const s = [];
  for (let c = n; c < t.length; c++) {
    const i = t[c];
    if (g(e, i) && E(i.parameters))
      s.push({
        code: e,
        indent: i.indent,
        parameters: [i.parameters[0]]
      });
    else
      break;
  }
  return s;
}, I = (e, t, n) => {
  const s = e[t];
  if (s && g(n, s) && E(s.parameters))
    return {
      code: n,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(te, { cause: s });
}, ne = (e, t) => ({
  head: I(e, t, S),
  bodys: u(V, e, t + 1)
}), se = (e, t) => ({
  head: I(e, t, N),
  bodys: u(W, e, t + 1)
}), ae = (e, t) => {
  const n = e[t];
  if (n && re(n))
    return n;
  throw new Error(ee, { cause: n });
}, re = (e) => !e || e.code !== T || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ce = (e, t) => ({
  head: ae(e, t),
  bodys: u(F, e, t + 1)
}), oe = "ScrollTextHeader invalid command", ie = (e, t) => {
  const n = e[t];
  if (g(h, n))
    return n;
  const s = {
    headCode: h,
    bodyCode: A,
    index: t
  };
  throw new Error(oe, { cause: s });
}, me = (e, t) => ({
  head: ie(e, t),
  bodys: u(A, e, t + 1)
}), ue = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class v {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return ue(this.getExpandedBodies(), t);
  }
  jopinHedderAndBody() {
    return [this.header, ...this.bodies];
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class C extends v {
  constructor(t, n, s) {
    super(n, s), this.bodyCode = t;
  }
  getExpandedBodies() {
    return this.bodies;
  }
  normalizedCommands() {
    const t = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters]
    };
    return this.bodies.length === 0 ? [t] : [t, this.mergedBody()];
  }
  mergedBody() {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()]
    };
  }
}
class _ extends v {
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
  mergedBody() {
    return {
      code: this.header.code,
      indent: this.header.indent,
      parameters: [this.getBodyText()]
    };
  }
  normalizedCommands() {
    return [this.mergedBody()];
  }
}
const le = "選択肢ヘルプ", de = (e) => e.parameters[0] === le, he = (e, t = []) => new C(401, e, t), pe = (e, t = []) => new C(405, e, t), ge = (e, t = []) => de(e) ? new C(
  408,
  e,
  t
) : new _(
  e,
  t
), Ee = (e, t = []) => new _(e, t), M = (e, t, n) => {
  const s = ce(e, t), c = he(s.head, s.bodys);
  return n(c);
}, O = (e, t, n) => {
  const s = me(e, t), c = pe(s.head, s.bodys);
  return n(c);
}, w = (e, t, n) => {
  const s = ne(e, t), c = ge(s.head, s.bodys);
  return n(c);
}, R = (e, t, n) => {
  const s = se(e, t), c = Ee(s.head, s.bodys);
  return n(c);
}, Ce = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case T:
      return M(e, t, n.showMessage);
    case h:
      return O(e, t, n.showScrollingText);
    case S:
      return w(e, t, n.comment);
    case N:
      return R(e, t, n.script);
    case Y:
      return n.showChoices(s, t, e);
    case y:
      return n.choiceWhen(s, t, e);
    case z:
      return n.changeName(s, t, e);
    case x:
      return n.changeProfile(s, t, e);
    case P:
      return n.changeNickname(s, t, e);
    default:
      return n.other(s, t, e);
  }
}, Xe = (e, t) => e.map(
  (n, s, c) => Ce(c, s, t)
), r = (e, t, n, s, c) => s ? s(e, t, n) : c(e, t, n), fe = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case a.SHOW_MESSAGE:
      return n.showMessage ? M(e, t, n.showMessage) : n.other(s, t, e);
    case a.SHOW_MESSAGE_BODY:
      return r(s, t, e, n.showMessageBody, n.other);
    case a.SHOW_SCROLLING_TEXT:
      return n.showScrollingText ? O(e, t, n.showScrollingText) : n.other(s, t, e);
    case a.SHOW_SCROLLING_TEXT_BODY:
      return r(s, t, e, n.showScrollingTextBody, n.other);
    case a.COMMENT:
      return n.comment ? w(e, t, n.comment) : n.other(s, t, e);
    case a.COMMENT_BODY:
      return r(s, t, e, n.commentBody, n.other);
    case a.SCRIPT_EVAL:
      return n.script ? R(e, t, n.script) : n.other(s, t, e);
    case a.SCRIPT_EVAL_BODY:
      return r(s, t, e, n.scriptBody, n.other);
    case a.CONTROL_SWITCHES:
      return r(s, t, e, n.controlSwitch, n.other);
    case a.CONTROL_VARIABLES:
      return r(s, t, e, n.controlVariable, n.other);
    case a.CONTROL_SELF_SWITCH:
      return r(s, t, e, n.controlSelfSwitch, n.other);
    case a.CONTROL_TIMER:
      return r(s, t, e, n.controlTimer, n.other);
    case a.CONDITIONAL_BRANCH:
      return r(s, t, e, n.conditionalBranch, n.other);
    case a.SHOW_CHOICES:
      return r(s, t, e, n.showChoices, n.other);
    case a.SHOW_CHOICES_ITEM:
      return r(s, t, e, n.choiceWhen, n.other);
    case a.CHANGE_NAME:
      return r(s, t, e, n.changeName, n.other);
    case a.CHANGE_PROFILE:
      return r(s, t, e, n.changeProfile, n.other);
    case a.CHANGE_NICKNAME:
      return r(s, t, e, n.changeNickname, n.other);
    case a.COMMON_EVENT:
      return r(s, t, e, n.commonEvent, n.other);
    case a.LABEL:
      return r(s, t, e, n.label, n.other);
    case a.LABEL_JUMP:
      return r(s, t, e, n.labelJump, n.other);
    case a.CHANGE_BATTLE_BGM:
      return r(s, t, e, n.changeBattleBGM, n.other);
    case a.CHANGE_VICTORY_ME:
      return r(s, t, e, n.changeVictoryME, n.other);
    case a.CHANGE_DEFEAT_ME:
      return r(s, t, e, n.changeDefeatME, n.other);
    case a.CHANGE_SAVE_ACCESS:
      return r(s, t, e, n.changeSaveAccess, n.other);
    case a.CHANGE_MENU_ACCESS:
      return r(s, t, e, n.changeMenuAccess, n.other);
    case a.CHANGE_ENCOUNTER:
      return r(s, t, e, n.changeEncounter, n.other);
    case a.CHANGE_FORMATION_ACCESS:
      return r(s, t, e, n.changeFormationAccess, n.other);
    case a.CHANGE_WINDOW_COLOR:
      return r(s, t, e, n.changeWindowColor, n.other);
    case a.TINT_SCREEN:
      return r(s, t, e, n.tintScreen, n.other);
    case a.FLASH_SCREEN:
      return r(s, t, e, n.flashScreen, n.other);
    case a.SHAKE_SCREEN:
      return r(s, t, e, n.shakeScreen, n.other);
    case a.BATTLE_PROCESSING:
      return r(s, t, e, n.battleProcessing, n.other);
    case a.WAIT:
      return r(s, t, e, n.wait, n.other);
    case a.CHANGE_ACTOR_IMAGES:
      return r(s, t, e, n.changeActorImages, n.other);
    case a.CHANGE_GOLD:
      return r(s, t, e, n.changeGold, n.other);
    case a.SHOW_ANIMATION:
      return r(s, t, e, n.showAnimation, n.other);
    case a.TRANSFER_PLAYER:
      return r(s, t, e, n.transferPlayer, n.other);
    case a.SET_VEHICLE_LOCATION:
      return r(s, t, e, n.setVehicleLocation, n.other);
    case a.SET_EVENT_LOCATION:
      return r(s, t, e, n.setEventLocation, n.other);
    case a.GAME_OVER:
      return r(s, t, e, n.gameover, n.other);
  }
  return n.other(s, t, e);
}, Se = {
  // body部分は空の要素で置き換える
  commentBody: () => [],
  showMessageBody: () => [],
  scriptBody: () => [],
  showScrollingTextBody: () => [],
  // ヘッダ側を基準に、Header+Bodyで生成
  showMessage: (e) => e.normalizedCommands(),
  showScrollingText: (e) => e.normalizedCommands(),
  comment: (e) => e.normalizedCommands(),
  script: (e) => e.normalizedCommands(),
  other: (e) => [e]
}, f = (e) => e.map((t, n, s) => fe(s, n, Se)), Ne = (e) => !!e, Te = (e, t, n) => ({
  command: e,
  eventId: t,
  pageIndex: n
}), Ae = (e, t) => e.pages.map(
  (n, s) => n.list.map((c) => t(c, e.id, s))
), qe = (e) => e.events.filter(Ne).map((n) => Ae(n, Te)).flat(2), H = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, B = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => H(n, t))
}), Ie = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? B(n, t) : null)
}), ve = (e, t) => e.map((n) => H(n, t)), _e = (e, t) => e.map((n) => B(n, t)), je = (e) => Ie(e, (t) => f(t).flat()), Ke = (e) => ve(
  e,
  (t) => f(t).flat()
), $e = (e) => _e(e, (t) => f(t).flat()), G = (e, t) => `<${e}:${t}>`, l = () => /<([^<>:]+):([^>]*)>/g, Je = (e, t) => L(e.note, (n, s) => t(n, s, e)), Ze = (e) => L(e, (t, n) => [t, n]), L = (e, t) => {
  const n = l(), s = [];
  let c;
  for (; (c = n.exec(e)) !== null; )
    s.push(t(c[1], c[2]));
  return s;
}, Qe = (e, t) => e.replace(l(), (n, s, c) => {
  const i = t(s, c);
  return G(s, i);
}), be = (e, t) => {
  const n = l();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, et = (e, t, n) => {
  const s = l();
  return e.replace(s, (c, i) => i === t ? G(i, n) : c);
}, tt = (e) => `code:${e}`, Me = "N", Oe = "V", D = (e, t) => `\\${e}[${t}]`, we = (e) => D(Me, e.id), nt = (e) => e.map((t) => ({
  controlChar: we(t),
  text: t.name
})), st = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: D(Oe, n)
})).filter((t) => t.text !== ""), Re = /* @__PURE__ */ new Set([
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
]), at = (e, t = Re) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let c;
  for (; (c = n.exec(e)) !== null; ) {
    const i = c[1].toLowerCase(), k = parseInt(c[2], 10);
    t.has(i) && s.push({ char: c[1], id: k });
  }
  return s;
}, He = (e, t, n) => t.map((s) => n(s, e[s], e)), rt = (e, t, n) => He(e, t, n), ct = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), ot = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
});
export {
  v as BaseEventCommandGroup,
  le as CHOICE_HELP_TEXT,
  _ as CombinedEventCommandGroup,
  ee as ERROR_COMMAND_MESSAGE,
  Ye as ERROR_COMMAND_SCRIPT,
  te as ERROR_INVALID_HEAD,
  oe as ERROR_MESSAGE,
  C as SimpleEventCommandGroup,
  tt as codeInfoText,
  g as codeTest,
  Ge as constructActor,
  De as constructArmor,
  Ve as constructClass,
  p as constructDamage,
  Le as constructEnemy,
  We as constructItem,
  m as constructParamArray,
  Fe as constructSkill,
  Pe as constructState,
  ke as constructWeapon,
  Q as createAdvanced,
  o as createAudio,
  K as createBasicTerms,
  J as createCommandsArray,
  ge as createCommentGroup,
  U as createCondtion,
  D as createControlCharFormat,
  q as createEventPage,
  xe as createMap,
  ze as createMapEvent,
  Te as createMapEventContext,
  X as createMapEventImage,
  he as createMessageGroup,
  Z as createMessages,
  G as createNoteEntity,
  $ as createParamNamesArray,
  Ee as createScriptGroup,
  pe as createScrlloingTextGroup,
  ye as createSystemData,
  b as createSystemSoundsArray,
  j as createTerms,
  d as createVehicle,
  we as fromActor,
  nt as fromActors,
  st as fromSystem,
  qe as gatherEventCommandLocators,
  at as getControlChars,
  be as getNoteValue,
  w as handleGroupComment,
  M as handleGroupMessage,
  R as handleGroupScript,
  O as handleGroupScrollingText,
  Ce as handlerDispatch,
  E as isBodyParams,
  de as isChoiceHelp,
  Ue as isHeadCommand,
  re as isMessageHeader,
  Ne as isValidEvent,
  ue as joinCommandBodies,
  Ae as locateEventCommands,
  l as makeRegex,
  Xe as mapTextCommand,
  f as normalizedCommands,
  Ke as normalizedCommonEvents,
  je as normalizedMapData,
  $e as normalizedTroops,
  ot as pickCommandParamNumber,
  ct as pickCommandParamString,
  u as pickCommands,
  ne as pickComments,
  I as pickHead,
  ae as pickMessageHeader,
  ce as pickMessageWithHead,
  He as pickPropertys,
  se as pickScripts,
  me as pickScrollText,
  ie as pickScrollTextHeader,
  rt as pickString,
  Ze as readNote,
  L as readNoteEx,
  Je as readNoteObject,
  ve as replaceCommonEvents,
  H as replaceEventCommands,
  Ie as replaceMapEvents,
  Qe as replaceNote,
  B as replacePages,
  _e as replaceTroops,
  et as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
