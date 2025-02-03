import * as a from "@sigureya/rpgtypes";
import { COMMENT as S, COMMENT_BODY as F, SCRIPT_EVAL as T, SCRIPT_EVAL_BODY as P, SHOW_MESSAGE as N, SHOW_MESSAGE_BODY as x, SHOW_SCROLLING_TEXT as h, SHOW_SCROLLING_TEXT_BODY as A, CHANGE_NICKNAME as z, CHANGE_PROFILE as Y, CHANGE_NAME as y, SHOW_CHOICES_ITEM as U, SHOW_CHOICES as X } from "@sigureya/rpgtypes";
const m = () => [0, 0, 0, 0, 0, 0, 0, 0], De = (e) => ({
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
}), ke = (e) => ({
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
}), Ve = (e) => ({
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
}), We = (e) => ({
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
}), Fe = (e) => ({
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
}), Pe = (e) => ({
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
}), xe = (e) => ({
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
}), ze = (e) => ({
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
}), Ye = (e) => ({
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
}), ye = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [K()],
  ...e
}), q = (e) => ({
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
}), j = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), K = (e) => ({
  conditions: q(),
  image: j(),
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
}), Ue = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? $(),
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
  advanced: e.advanced ?? ee(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? te(),
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
  boat: e.boat ?? l(),
  ship: e.ship ?? l(),
  airship: e.airship ?? l(),
  tileSize: e.tileSize ?? 0
}), $ = (e = {}) => ({
  messages: b(e.messages ?? {}),
  commands: Q(e.commands ?? {}),
  params: Z(e.params ?? {}),
  basic: J(e.basic ?? {})
}), J = (e = {}) => [
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
], Z = (e = {}) => [
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
], Q = (e = {}) => [
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
], b = (e = {}) => ({
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
}), ee = (e = {}) => ({
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
}), l = (e = {}) => ({
  bgm: e.bgm ?? c(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), te = (e = {}) => [
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
], g = (e, t) => t ? e === t.code : !1, ne = "MessageHeader invalid command", Xe = "Script invalid command", se = "Invalid Head", E = (e) => typeof e[0] == "string" && e.length === 1, qe = (e, t) => t ? e === t.code && E(t.parameters) : !1, u = (e, t, n) => {
  const s = [];
  for (let o = n; o < t.length; o++) {
    const i = t[o];
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
  throw new Error(se, { cause: s });
}, ae = (e, t) => ({
  head: I(e, t, S),
  bodys: u(F, e, t + 1)
}), re = (e, t) => ({
  head: I(e, t, T),
  bodys: u(P, e, t + 1)
}), ce = (e, t) => {
  const n = e[t];
  if (n && oe(n))
    return n;
  throw new Error(ne, { cause: n });
}, oe = (e) => !e || e.code !== N || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ie = (e, t) => ({
  head: ce(e, t),
  bodys: u(x, e, t + 1)
}), me = "ScrollTextHeader invalid command", ue = (e, t) => {
  const n = e[t];
  if (g(h, n))
    return n;
  const s = {
    headCode: h,
    bodyCode: A,
    index: t
  };
  throw new Error(me, { cause: s });
}, de = (e, t) => ({
  head: ue(e, t),
  bodys: u(A, e, t + 1)
}), le = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class v {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return le(this.getExpandedBodies(), t);
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
const he = "選択肢ヘルプ", pe = (e) => e.parameters[0] === he, ge = (e, t = []) => new C(401, e, t), Ee = (e, t = []) => new C(405, e, t), Ce = (e, t = []) => pe(e) ? new C(
  408,
  e,
  t
) : new _(
  e,
  t
), fe = (e, t = []) => new _(e, t), M = (e, t, n) => {
  const s = ie(e, t), o = ge(s.head, s.bodys);
  return n(o);
}, O = (e, t, n) => {
  const s = de(e, t), o = Ee(s.head, s.bodys);
  return n(o);
}, w = (e, t, n) => {
  const s = ae(e, t), o = Ce(s.head, s.bodys);
  return n(o);
}, R = (e, t, n) => {
  const s = re(e, t), o = fe(s.head, s.bodys);
  return n(o);
}, Se = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case N:
      return M(e, t, n.showMessage);
    case h:
      return O(e, t, n.showScrollingText);
    case S:
      return w(e, t, n.comment);
    case T:
      return R(e, t, n.script);
    case X:
      return n.showChoices(s, t, e);
    case U:
      return n.choiceWhen(s, t, e);
    case y:
      return n.changeName(s, t, e);
    case Y:
      return n.changeProfile(s, t, e);
    case z:
      return n.changeNickname(s, t, e);
    default:
      return n.other(s, t, e);
  }
}, je = (e, t) => e.map(
  (n, s, o) => Se(o, s, t)
), r = (e, t, n, s, o) => s ? s(e, t, n) : o(e, t, n), Te = (e, t) => e.map((n, s) => Ne(e, s, t)), Ne = (e, t, n) => {
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
}, Ae = {
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
}, f = (e) => Te(e, Ae), Ie = (e) => !!e, Ke = (e, t, n) => ({
  data: e,
  eventId: t,
  pageIndex: n
}), ve = (e, t, n) => e.list.map((s) => ({
  data: s,
  eventId: n.id,
  pageIndex: t
})), H = (e, t) => e.pages.map(
  (n, s) => t(n, s, e)
), B = (e, t) => e.events.filter(Ie).map((n) => H(n, t)), $e = (e, t) => B(e, t).flat(2), Je = (e, t) => e.map((n) => H(n, t)), Ze = (e, t) => e.map(t), Qe = (e) => B(
  e,
  ve
).flat(2), G = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, L = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => G(n, t))
}), _e = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? L(n, t) : null)
}), Me = (e, t) => e.map((n) => G(n, t)), Oe = (e, t) => e.map((n) => L(n, t)), be = (e) => _e(e, (t) => f(t).flat()), et = (e) => Me(
  e,
  (t) => f(t).flat()
), tt = (e) => Oe(e, (t) => f(t).flat()), D = (e, t) => `<${e}:${t}>`, d = () => /<([^<>:]+):([^>]*)>/g, nt = (e, t) => k(e.note, (n, s) => t(n, s, e)), st = (e) => k(e, (t, n) => [t, n]), k = (e, t) => {
  const n = d(), s = [];
  let o;
  for (; (o = n.exec(e)) !== null; )
    s.push(t(o[1], o[2]));
  return s;
}, at = (e, t) => e.replace(d(), (n, s, o) => {
  const i = t(s, o);
  return D(s, i);
}), rt = (e, t) => {
  const n = d();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, ct = (e, t, n) => {
  const s = d();
  return e.replace(s, (o, i) => i === t ? D(i, n) : o);
}, ot = (e) => `code:${e}`, we = "N", Re = "V", V = (e, t) => `\\${e}[${t}]`, He = (e) => V(we, e.id), it = (e) => e.map((t) => ({
  controlChar: He(t),
  text: t.name
})), mt = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: V(Re, n)
})).filter((t) => t.text !== ""), Be = /* @__PURE__ */ new Set([
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
]), ut = (e, t = Be) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let o;
  for (; (o = n.exec(e)) !== null; ) {
    const i = o[1].toLowerCase(), W = parseInt(o[2], 10);
    t.has(i) && s.push({ char: o[1], id: W });
  }
  return s;
}, Ge = (e, t, n) => t.map((s) => n(s, e[s], e)), dt = (e, t, n) => Ge(e, t, n), lt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), ht = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), pt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
});
export {
  v as BaseEventCommandGroup,
  he as CHOICE_HELP_TEXT,
  _ as CombinedEventCommandGroup,
  ne as ERROR_COMMAND_MESSAGE,
  Xe as ERROR_COMMAND_SCRIPT,
  se as ERROR_INVALID_HEAD,
  me as ERROR_MESSAGE,
  C as SimpleEventCommandGroup,
  r as callHandler,
  ot as codeInfoText,
  g as codeTest,
  $e as collectEventCommands,
  De as constructActor,
  Ve as constructArmor,
  Fe as constructClass,
  p as constructDamage,
  ke as constructEnemy,
  Pe as constructItem,
  m as constructParamArray,
  xe as constructSkill,
  ze as constructState,
  We as constructWeapon,
  ee as createAdvanced,
  c as createAudio,
  J as createBasicTerms,
  ve as createCommandContext,
  Q as createCommandsArray,
  Ce as createCommentGroup,
  q as createCondtion,
  V as createControlCharFormat,
  Ke as createEventContext,
  K as createEventPage,
  Ye as createMap,
  ye as createMapEvent,
  j as createMapEventImage,
  ge as createMessageGroup,
  b as createMessages,
  D as createNoteEntity,
  Z as createParamNamesArray,
  fe as createScriptGroup,
  Ee as createScrlloingTextGroup,
  Ue as createSystemData,
  te as createSystemSoundsArray,
  $ as createTerms,
  l as createVehicle,
  He as fromActor,
  it as fromActors,
  mt as fromSystem,
  Qe as gatherEventCommandContext,
  ut as getControlChars,
  rt as getNoteValue,
  w as handleGroupComment,
  M as handleGroupMessage,
  R as handleGroupScript,
  O as handleGroupScrollingText,
  Se as handlerDispatch,
  E as isBodyParams,
  pe as isChoiceHelp,
  qe as isHeadCommand,
  oe as isMessageHeader,
  le as joinCommandBodies,
  d as makeRegex,
  je as mapTextCommand,
  Ne as mappingCommand,
  Te as mappingCommandList,
  f as normalizedCommands,
  et as normalizedCommonEvents,
  be as normalizedMapData,
  tt as normalizedTroops,
  pt as pickCommandParamAudio,
  ht as pickCommandParamNumber,
  lt as pickCommandParamString,
  u as pickCommands,
  ae as pickComments,
  I as pickHead,
  ce as pickMessageHeader,
  ie as pickMessageWithHead,
  Ge as pickPropertys,
  re as pickScripts,
  de as pickScrollText,
  ue as pickScrollTextHeader,
  dt as pickString,
  Ze as processCommonEvents,
  H as processEventPages,
  B as processMapEvents,
  Je as processTroopEvents,
  st as readNote,
  k as readNoteEx,
  nt as readNoteObject,
  Me as replaceCommonEvents,
  G as replaceEventCommands,
  _e as replaceMapEvents,
  at as replaceNote,
  L as replacePages,
  Oe as replaceTroops,
  ct as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
