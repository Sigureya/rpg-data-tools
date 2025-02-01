import * as a from "@sigureya/rpgtypes";
import { COMMENT as f, COMMENT_BODY as F, SCRIPT_EVAL as S, SCRIPT_EVAL_BODY as P, SHOW_MESSAGE as N, SHOW_MESSAGE_BODY as x, SHOW_SCROLLING_TEXT as h, SHOW_SCROLLING_TEXT_BODY as T, CHANGE_NICKNAME as z, CHANGE_PROFILE as Y, CHANGE_NAME as y, SHOW_CHOICES_ITEM as U, SHOW_CHOICES as X } from "@sigureya/rpgtypes";
const m = () => [0, 0, 0, 0, 0, 0, 0, 0], Le = (e) => ({
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
}), De = (e) => ({
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
}), ke = (e) => ({
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
}), Ve = (e) => ({
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
}), We = (e) => ({
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
}), Fe = (e) => ({
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
}), Pe = (e) => ({
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
}), xe = (e) => ({
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
}), ze = (e) => ({
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
}), Ye = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [$()],
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
}), K = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), $ = (e) => ({
  conditions: q(),
  image: K(),
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
  advanced: e.advanced ?? ee(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? te(),
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
  messages: Q(e.messages ?? {}),
  commands: Z(e.commands ?? {}),
  params: b(e.params ?? {}),
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
], b = (e = {}) => [
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
], Z = (e = {}) => [
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
], Q = (e = {}) => ({
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
}), d = (e = {}) => ({
  bgm: e.bgm ?? o(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), te = (e = {}) => [
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
], g = (e, t) => t ? e === t.code : !1, ne = "MessageHeader invalid command", Ue = "Script invalid command", se = "Invalid Head", E = (e) => typeof e[0] == "string" && e.length === 1, Xe = (e, t) => t ? e === t.code && E(t.parameters) : !1, u = (e, t, n) => {
  const s = [];
  for (let r = n; r < t.length; r++) {
    const i = t[r];
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
}, A = (e, t, n) => {
  const s = e[t];
  if (s && g(n, s) && E(s.parameters))
    return {
      code: n,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(se, { cause: s });
}, ae = (e, t) => ({
  head: A(e, t, f),
  bodys: u(F, e, t + 1)
}), ce = (e, t) => ({
  head: A(e, t, S),
  bodys: u(P, e, t + 1)
}), re = (e, t) => {
  const n = e[t];
  if (n && oe(n))
    return n;
  throw new Error(ne, { cause: n });
}, oe = (e) => !e || e.code !== N || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ie = (e, t) => ({
  head: re(e, t),
  bodys: u(x, e, t + 1)
}), me = "ScrollTextHeader invalid command", ue = (e, t) => {
  const n = e[t];
  if (g(h, n))
    return n;
  const s = {
    headCode: h,
    bodyCode: T,
    index: t
  };
  throw new Error(me, { cause: s });
}, le = (e, t) => ({
  head: ue(e, t),
  bodys: u(T, e, t + 1)
}), I = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class v {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return I(this.getExpandedBodies(), t);
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class _ extends v {
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
    if (this.bodies.length === 0)
      return [t];
    const n = {
      code: this.bodyCode,
      indent: 0,
      parameters: [this.getBodyText()]
    };
    return [t, n];
  }
}
class M extends v {
  constructor(t, n) {
    super(t, n);
  }
  getExpandedBodies() {
    return [this.header, ...this.bodies];
  }
  normalizedCommands() {
    const t = this.getBodyText();
    return [
      {
        code: this.header.code,
        parameters: [t],
        indent: this.header.indent
      }
    ];
  }
}
const de = (e, t = []) => new _(401, e, t), he = (e, t = []) => new _(405, e, t), pe = (e, t = []) => new M(
  e,
  t
), ge = (e, t = []) => new M(e, t), O = (e, t, n) => {
  const s = ie(e, t), r = de(s.head, s.bodys);
  return n(r);
}, w = (e, t, n) => {
  const s = le(e, t), r = he(s.head, s.bodys);
  return n(r);
}, R = (e, t, n) => {
  const s = ae(e, t), r = pe(s.head, s.bodys);
  return n(r);
}, H = (e, t, n) => {
  const s = ce(e, t), r = ge(s.head, s.bodys);
  return n(r);
}, Ee = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case N:
      return O(e, t, n.showMessage);
    case h:
      return w(e, t, n.showScrollingText);
    case f:
      return R(e, t, n.comment);
    case S:
      return H(e, t, n.script);
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
}, qe = (e, t) => e.map(
  (n, s, r) => Ee(r, s, t)
), c = (e, t, n, s, r) => s ? s(e, t, n) : r(e, t, n), Ce = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case a.SHOW_MESSAGE:
      return n.showMessage ? O(e, t, n.showMessage) : n.other(s, t, e);
    case a.SHOW_MESSAGE_BODY:
      return c(s, t, e, n.showMessageBody, n.other);
    case a.SHOW_SCROLLING_TEXT:
      return n.showScrollingText ? w(e, t, n.showScrollingText) : n.other(s, t, e);
    case a.SHOW_SCROLLING_TEXT_BODY:
      return c(s, t, e, n.showScrollingTextBody, n.other);
    case a.COMMENT:
      return n.comment ? R(e, t, n.comment) : n.other(s, t, e);
    case a.COMMENT_BODY:
      return c(s, t, e, n.commentBody, n.other);
    case a.SCRIPT_EVAL:
      return n.script ? H(e, t, n.script) : n.other(s, t, e);
    case a.SCRIPT_EVAL_BODY:
      return c(s, t, e, n.scriptBody, n.other);
    case a.CONTROL_SWITCHES:
      return c(s, t, e, n.controlSwitch, n.other);
    case a.CONTROL_VARIABLES:
      return c(s, t, e, n.controlVariable, n.other);
    case a.CONTROL_SELF_SWITCH:
      return c(s, t, e, n.controlSelfSwitch, n.other);
    case a.CONTROL_TIMER:
      return c(s, t, e, n.controlTimer, n.other);
    case a.CONDITIONAL_BRANCH:
      return c(s, t, e, n.conditionalBranch, n.other);
    case a.SHOW_CHOICES:
      return c(s, t, e, n.showChoices, n.other);
    case a.SHOW_CHOICES_ITEM:
      return c(s, t, e, n.choiceWhen, n.other);
    case a.CHANGE_NAME:
      return c(s, t, e, n.changeName, n.other);
    case a.CHANGE_PROFILE:
      return c(s, t, e, n.changeProfile, n.other);
    case a.CHANGE_NICKNAME:
      return c(s, t, e, n.changeNickname, n.other);
    case a.COMMON_EVENT:
      return c(s, t, e, n.commonEvent, n.other);
    case a.LABEL:
      return c(s, t, e, n.label, n.other);
    case a.LABEL_JUMP:
      return c(s, t, e, n.labelJump, n.other);
    case a.CHANGE_BATTLE_BGM:
      return c(s, t, e, n.changeBattleBGM, n.other);
    case a.CHANGE_VICTORY_ME:
      return c(s, t, e, n.changeVictoryME, n.other);
    case a.CHANGE_DEFEAT_ME:
      return c(s, t, e, n.changeDefeatME, n.other);
    case a.CHANGE_SAVE_ACCESS:
      return c(s, t, e, n.changeSaveAccess, n.other);
    case a.CHANGE_MENU_ACCESS:
      return c(s, t, e, n.changeMenuAccess, n.other);
    case a.CHANGE_ENCOUNTER:
      return c(s, t, e, n.changeEncounter, n.other);
    case a.CHANGE_FORMATION_ACCESS:
      return c(s, t, e, n.changeFormationAccess, n.other);
    case a.CHANGE_WINDOW_COLOR:
      return c(s, t, e, n.changeWindowColor, n.other);
    case a.TINT_SCREEN:
      return c(s, t, e, n.tintScreen, n.other);
    case a.FLASH_SCREEN:
      return c(s, t, e, n.flashScreen, n.other);
    case a.SHAKE_SCREEN:
      return c(s, t, e, n.shakeScreen, n.other);
    case a.BATTLE_PROCESSING:
      return c(s, t, e, n.battleProcessing, n.other);
    case a.WAIT:
      return c(s, t, e, n.wait, n.other);
    case a.CHANGE_ACTOR_IMAGES:
      return c(s, t, e, n.changeActorImages, n.other);
    case a.CHANGE_GOLD:
      return c(s, t, e, n.changeGold, n.other);
    case a.SHOW_ANIMATION:
      return c(s, t, e, n.showAnimation, n.other);
    case a.TRANSFER_PLAYER:
      return c(s, t, e, n.transferPlayer, n.other);
    case a.SET_VEHICLE_LOCATION:
      return c(s, t, e, n.setVehicleLocation, n.other);
    case a.SET_EVENT_LOCATION:
      return c(s, t, e, n.setEventLocation, n.other);
    case a.GAME_OVER:
      return c(s, t, e, n.gameover, n.other);
  }
  return n.other(s, t, e);
}, B = "選択肢ヘルプ", fe = (e) => e.parameters[0] === B, Se = (e) => {
  if (fe(e.header)) {
    const t = I(e.bodies);
    return [
      {
        code: a.COMMENT,
        indent: 0,
        parameters: [B]
      },
      {
        code: a.COMMENT_BODY,
        indent: 0,
        parameters: [t]
      }
    ];
  }
  return e.normalizedCommands();
}, Ne = {
  // body部分は空の要素で置き換える
  commentBody: () => [],
  showMessageBody: () => [],
  scriptBody: () => [],
  showScrollingTextBody: () => [],
  // ヘッダ側を基準に、Header+Bodyで生成
  showMessage: (e) => e.normalizedCommands(),
  showScrollingText: (e) => e.normalizedCommands(),
  comment: (e) => Se(e),
  script: (e) => e.normalizedCommands(),
  other: (e) => [e]
}, C = (e) => e.map((t, n, s) => Ce(s, n, Ne)), Te = (e) => !!e, Ae = (e, t, n) => ({
  command: e,
  eventId: t,
  pageIndex: n
}), Ie = (e, t) => e.pages.map(
  (n, s) => n.list.map((r) => t(r, e.id, s))
), Ke = (e) => e.events.filter(Te).map((n) => Ie(n, Ae)).flat(2), G = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, L = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => G(n, t))
}), ve = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? L(n, t) : null)
}), _e = (e, t) => e.map((n) => G(n, t)), Me = (e, t) => e.map((n) => L(n, t)), $e = (e) => ve(e, (t) => C(t).flat()), je = (e) => _e(
  e,
  (t) => C(t).flat()
), Je = (e) => Me(e, (t) => C(t).flat()), D = (e, t) => `<${e}:${t}>`, l = () => /<([^<>:]+):([^>]*)>/g, be = (e, t) => k(e.note, (n, s) => t(n, s, e)), Ze = (e) => k(e, (t, n) => [t, n]), k = (e, t) => {
  const n = l(), s = [];
  let r;
  for (; (r = n.exec(e)) !== null; )
    s.push(t(r[1], r[2]));
  return s;
}, Qe = (e, t) => e.replace(l(), (n, s, r) => {
  const i = t(s, r);
  return D(s, i);
}), et = (e, t) => {
  const n = l();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, tt = (e, t, n) => {
  const s = l();
  return e.replace(s, (r, i) => i === t ? D(i, n) : r);
}, nt = (e) => `code:${e}`, Oe = "N", we = "V", V = (e, t) => `\\${e}[${t}]`, Re = (e) => V(Oe, e.id), st = (e) => e.map((t) => ({
  controlChar: Re(t),
  text: t.name
})), at = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: V(we, n)
})).filter((t) => t.text !== ""), He = /* @__PURE__ */ new Set([
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
]), ct = (e, t = He) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let r;
  for (; (r = n.exec(e)) !== null; ) {
    const i = r[1].toLowerCase(), W = parseInt(r[2], 10);
    t.has(i) && s.push({ char: r[1], id: W });
  }
  return s;
}, Be = (e, t, n) => t.map((s) => n(s, e[s], e)), rt = (e, t, n) => Be(e, t, n), ot = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), it = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
});
export {
  v as BaseEventCommandGroup,
  B as CHOICE_HELP_TEXT,
  M as CombinedEventCommandGroup,
  ne as ERROR_COMMAND_MESSAGE,
  Ue as ERROR_COMMAND_SCRIPT,
  se as ERROR_INVALID_HEAD,
  me as ERROR_MESSAGE,
  _ as SimpleEventCommandGroup,
  nt as codeInfoText,
  g as codeTest,
  Le as constructActor,
  ke as constructArmor,
  We as constructClass,
  p as constructDamage,
  De as constructEnemy,
  Fe as constructItem,
  m as constructParamArray,
  Pe as constructSkill,
  xe as constructState,
  Ve as constructWeapon,
  ee as createAdvanced,
  o as createAudio,
  J as createBasicTerms,
  Z as createCommandsArray,
  pe as createCommentGroup,
  q as createCondtion,
  V as createControlCharFormat,
  $ as createEventPage,
  ze as createMap,
  Ye as createMapEvent,
  Ae as createMapEventContext,
  K as createMapEventImage,
  de as createMessageGroup,
  Q as createMessages,
  D as createNoteEntity,
  b as createParamNamesArray,
  ge as createScriptGroup,
  he as createScrlloingTextGroup,
  ye as createSystemData,
  te as createSystemSoundsArray,
  j as createTerms,
  d as createVehicle,
  Re as fromActor,
  st as fromActors,
  at as fromSystem,
  Ke as gatherEventCommandLocators,
  ct as getControlChars,
  et as getNoteValue,
  R as handleGroupComment,
  O as handleGroupMessage,
  H as handleGroupScript,
  w as handleGroupScrollingText,
  Ee as handlerDispatch,
  E as isBodyParams,
  fe as isChoiceHelp,
  Xe as isHeadCommand,
  oe as isMessageHeader,
  Te as isValidEvent,
  I as joinCommandBodies,
  Ie as locateEventCommands,
  l as makeRegex,
  qe as mapTextCommand,
  C as normalizedCommands,
  je as normalizedCommonEvents,
  $e as normalizedMapData,
  Je as normalizedTroops,
  it as pickCommandParamNumber,
  ot as pickCommandParamString,
  u as pickCommands,
  ae as pickComments,
  A as pickHead,
  re as pickMessageHeader,
  ie as pickMessageWithHead,
  Be as pickPropertys,
  ce as pickScripts,
  le as pickScrollText,
  ue as pickScrollTextHeader,
  rt as pickString,
  Ze as readNote,
  k as readNoteEx,
  be as readNoteObject,
  _e as replaceCommonEvents,
  G as replaceEventCommands,
  ve as replaceMapEvents,
  Qe as replaceNote,
  L as replacePages,
  Me as replaceTroops,
  tt as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
