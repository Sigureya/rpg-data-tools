import * as r from "@sigureya/rpgtypes";
import { COMMENT as S, COMMENT_BODY as W, SCRIPT_EVAL as T, SCRIPT_EVAL_BODY as F, SHOW_MESSAGE as A, SHOW_MESSAGE_BODY as Y, SHOW_SCROLLING_TEXT as l, SHOW_SCROLLING_TEXT_BODY as N, CHANGE_NICKNAME as z, CHANGE_PROFILE as U, CHANGE_NAME as X, SHOW_CHOICES_ITEM as q, SHOW_CHOICES as x } from "@sigureya/rpgtypes";
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
}), Pe = (e) => ({
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
}), Ye = (e) => ({
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
}), Ue = (e) => ({
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
}), Xe = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [K()],
  ...e
}), j = (e) => ({
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
}), y = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), K = (e) => ({
  conditions: j(),
  image: y(),
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
}), a = () => ({
  name: "",
  pan: 0,
  pitch: 100,
  volume: 90
}), qe = (e = {}) => ({
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
  titleBgm: e.titleBgm ?? a(),
  gameoverMe: e.gameoverMe ?? a(),
  battleBgm: e.battleBgm ?? a(),
  defeatMe: e.defeatMe ?? a(),
  victoryMe: e.victoryMe ?? a(),
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
}), d = (e = {}) => ({
  bgm: e.bgm ?? a(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), te = (e = {}) => [
  e.cursor ?? a(),
  e.ok ?? a(),
  e.cancel ?? a(),
  e.buzzer ?? a(),
  e.equip ?? a(),
  e.save ?? a(),
  e.load ?? a(),
  e.battleStart ?? a(),
  e.escape ?? a(),
  e.enemyAttack ?? a(),
  e.enemyDamage ?? a(),
  e.enemyCollapse ?? a(),
  e.bossCollapse1 ?? a(),
  e.bossCollapse2 ?? a(),
  e.actorDamage ?? a(),
  e.actorCollapse ?? a(),
  e.playRecovery ?? a(),
  e.playMiss ?? a(),
  e.playEvasion ?? a(),
  e.playMagicEvasion ?? a(),
  e.playReflection ?? a(),
  e.shop ?? a(),
  e.useItem ?? a(),
  e.useSkill ?? a()
], E = (e, t) => t ? e === t.code : !1, ne = "MessageHeader invalid command", xe = "Script invalid command", se = "Invalid Head", g = (e) => typeof e[0] == "string" && e.length === 1, je = (e, t) => t ? e === t.code && g(t.parameters) : !1, u = (e, t, n) => {
  const s = [];
  for (let o = n; o < t.length; o++) {
    const i = t[o];
    if (E(e, i) && g(i.parameters))
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
  if (s && E(n, s) && g(s.parameters))
    return {
      code: n,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(se, { cause: s });
}, re = (e, t) => ({
  head: I(e, t, S),
  bodys: u(W, e, t + 1)
}), ce = (e, t) => ({
  head: I(e, t, T),
  bodys: u(F, e, t + 1)
}), ae = (e, t) => {
  const n = e[t];
  if (n && oe(n))
    return n;
  throw new Error(ne, { cause: n });
}, oe = (e) => !e || e.code !== A || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ie = (e, t) => ({
  head: ae(e, t),
  bodys: u(Y, e, t + 1)
}), me = "ScrollTextHeader invalid command", ue = (e, t) => {
  const n = e[t];
  if (E(l, n))
    return n;
  const s = {
    headCode: l,
    bodyCode: N,
    index: t
  };
  throw new Error(me, { cause: s });
}, he = (e, t) => ({
  head: ue(e, t),
  bodys: u(N, e, t + 1)
}), de = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class _ {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return de(this.getExpandedBodies(), t);
  }
  jopinHedderAndBody() {
    return [this.header, ...this.bodies];
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class C extends _ {
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
class v extends _ {
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
const le = "選択肢ヘルプ", pe = (e) => e.parameters[0] === le, Ee = (e, t = []) => new C(401, e, t), ge = (e, t = []) => new C(405, e, t), Ce = (e, t = []) => pe(e) ? new C(
  408,
  e,
  t
) : new v(
  e,
  t
), fe = (e, t = []) => new v(e, t), M = (e, t, n) => {
  const s = ie(e, t), o = Ee(s.head, s.bodys);
  return n(o);
}, O = (e, t, n) => {
  const s = he(e, t), o = ge(s.head, s.bodys);
  return n(o);
}, R = (e, t, n) => {
  const s = re(e, t), o = Ce(s.head, s.bodys);
  return n(o);
}, w = (e, t, n) => {
  const s = ce(e, t), o = fe(s.head, s.bodys);
  return n(o);
}, Se = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case A:
      return M(e, t, n.showMessage);
    case l:
      return O(e, t, n.showScrollingText);
    case S:
      return R(e, t, n.comment);
    case T:
      return w(e, t, n.script);
    case x:
      return n.showChoices(s, t, e);
    case q:
      return n.choiceWhen(s, t, e);
    case X:
      return n.changeName(s, t, e);
    case U:
      return n.changeProfile(s, t, e);
    case z:
      return n.changeNickname(s, t, e);
    default:
      return n.other(s, t, e);
  }
}, ye = (e, t) => e.map(
  (n, s, o) => Se(o, s, t)
), c = (e, t, n, s, o) => s ? s(e, t, n) : o(e, t, n), Te = (e, t) => e.map((n, s) => Ae(e, s, t)), Ae = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    // メッセージ関連
    case r.SHOW_MESSAGE:
      return n.showMessage ? M(e, t, n.showMessage) : n.other(s, t, e);
    case r.SHOW_MESSAGE_BODY:
      return c(s, t, e, n.showMessageBody, n.other);
    case r.SHOW_SCROLLING_TEXT:
      return n.showScrollingText ? O(e, t, n.showScrollingText) : n.other(s, t, e);
    case r.SHOW_SCROLLING_TEXT_BODY:
      return c(s, t, e, n.showScrollingTextBody, n.other);
    case r.SHOW_CHOICES:
      return c(s, t, e, n.showChoices, n.other);
    case r.SHOW_CHOICES_ITEM:
      return c(s, t, e, n.choiceWhen, n.other);
    // コメント・スクリプト関連
    case r.COMMENT:
      return n.comment ? R(e, t, n.comment) : n.other(s, t, e);
    case r.COMMENT_BODY:
      return c(s, t, e, n.commentBody, n.other);
    case r.SCRIPT_EVAL:
      return n.script ? w(e, t, n.script) : n.other(s, t, e);
    case r.SCRIPT_EVAL_BODY:
      return c(s, t, e, n.scriptBody, n.other);
    // 条件・制御系
    case r.CONDITIONAL_BRANCH:
      return c(s, t, e, n.conditionalBranch, n.other);
    case r.CONTROL_SWITCHES:
      return c(s, t, e, n.controlSwitch, n.other);
    case r.CONTROL_VARIABLES:
      return c(s, t, e, n.controlVariable, n.other);
    case r.CONTROL_SELF_SWITCH:
      return c(s, t, e, n.controlSelfSwitch, n.other);
    case r.CONTROL_TIMER:
      return c(s, t, e, n.controlTimer, n.other);
    case r.COMMON_EVENT:
      return c(s, t, e, n.commonEvent, n.other);
    // メニュー
    case r.CHANGE_SAVE_ACCESS:
      return c(s, t, e, n.changeSaveAccess, n.other);
    case r.CHANGE_MENU_ACCESS:
      return c(s, t, e, n.changeMenuAccess, n.other);
    case r.CHANGE_ENCOUNTER:
      return c(s, t, e, n.changeEncounter, n.other);
    case r.CHANGE_FORMATION_ACCESS:
      return c(s, t, e, n.changeFormationAccess, n.other);
    // キャラクター情報変更
    case r.CHANGE_NAME:
      return c(s, t, e, n.changeName, n.other);
    case r.CHANGE_PROFILE:
      return c(s, t, e, n.changeProfile, n.other);
    case r.CHANGE_NICKNAME:
      return c(s, t, e, n.changeNickname, n.other);
    case r.CHANGE_ACTOR_IMAGES:
      return c(s, t, e, n.changeActorImages, n.other);
    case r.CHANGE_VEHICLE_IMAGE:
      return c(s, t, e, n.changeVehicleImage, n.other);
    // BGM・音楽関連
    case r.CHANGE_BATTLE_BGM:
      return c(s, t, e, n.changeBattleBGM, n.other);
    case r.CHANGE_VICTORY_ME:
      return c(s, t, e, n.changeVictoryME, n.other);
    case r.CHANGE_DEFEAT_ME:
      return c(s, t, e, n.changeDefeatME, n.other);
    case r.PLAY_BGM:
      return c(s, t, e, n.playBGM, n.other);
    case r.FADEOUT_BGM:
      return c(s, t, e, n.fadeOutBGM, n.other);
    case r.PLAY_SE:
      return c(s, t, e, n.playSE, n.other);
    case r.STOP_SE:
      return c(s, t, e, n.stopSE, n.other);
    case r.PLAY_ME:
      return c(s, t, e, n.playME, n.other);
    // ラベル・ジャンプ
    case r.LABEL:
      return c(s, t, e, n.label, n.other);
    case r.LABEL_JUMP:
      return c(s, t, e, n.labelJump, n.other);
    // 画面演出
    case r.CHANGE_WINDOW_COLOR:
      return c(s, t, e, n.changeWindowColor, n.other);
    case r.TINT_SCREEN:
      return c(s, t, e, n.tintScreen, n.other);
    case r.FLASH_SCREEN:
      return c(s, t, e, n.flashScreen, n.other);
    case r.SHAKE_SCREEN:
      return c(s, t, e, n.shakeScreen, n.other);
    // ピクチャー
    case r.SHOW_PICTURE:
      return c(s, t, e, n.showPicture, n.other);
    case r.MOVE_PICTURE:
      return c(s, t, e, n.movePicture, n.other);
    case r.ROTATE_PICTURE:
      return c(s, t, e, n.rotatePicture, n.other);
    case r.TINT_PICTURE:
      return c(s, t, e, n.tintPicture, n.other);
    case r.ERASE_PICTURE:
      return c(s, t, e, n.erasePicture, n.other);
    // ゲーム進行
    case r.BATTLE_PROCESSING:
      return c(s, t, e, n.battleProcessing, n.other);
    case r.WAIT:
      return c(s, t, e, n.wait, n.other);
    case r.GAME_OVER:
      return c(s, t, e, n.gameover, n.other);
    // 未整理
    case r.PLAY_MOVIE:
      return c(s, t, e, n.playMovie, n.other);
    case r.CHANGE_TRANSPARENCY:
      return c(s, t, e, n.changeTransparency, n.other);
    case r.SET_WEATHER_EFFECT:
      return c(s, t, e, n.setWeatherEffects, n.other);
    case r.CHANGE_GOLD:
      return c(s, t, e, n.changeGold, n.other);
    case r.SHOW_ANIMATION:
      return c(s, t, e, n.showAnimation, n.other);
    case r.TRANSFER_PLAYER:
      return c(s, t, e, n.transferPlayer, n.other);
    case r.SET_VEHICLE_LOCATION:
      return c(s, t, e, n.setVehicleLocation, n.other);
    case r.SET_EVENT_LOCATION:
      return c(s, t, e, n.setEventLocation, n.other);
    default:
      return n.other(s, t, e);
  }
}, Ne = {
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
}, f = (e) => Te(e, Ne), Ie = (e) => !!e, Ke = (e, t, n) => ({
  data: e,
  eventId: t,
  pageIndex: n
}), _e = (e, t, n) => e.list.map((s) => ({
  data: s,
  eventId: n.id,
  pageIndex: t
})), H = (e, t) => e.pages.map(
  (n, s) => t(n, s, e)
), B = (e, t) => e.events.filter(Ie).map((n) => H(n, t)), $e = (e, t) => B(e, t).flat(2), Je = (e, t) => e.map((n) => H(n, t)), Ze = (e, t) => e.map((n, s) => t(n, s, n)), Qe = (e) => B(
  e,
  _e
).flat(2), G = (e, t) => {
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
}), Me = (e, t) => e.map((n) => G(n, t)), Oe = (e, t) => e.map((n) => L(n, t)), be = (e) => ve(e, (t) => f(t).flat()), et = (e) => Me(
  e,
  (t) => f(t).flat()
), tt = (e) => Oe(e, (t) => f(t).flat()), D = (e, t) => `<${e}:${t}>`, h = () => /<([^<>:]+):([^>]*)>/g, nt = (e, t) => k(e.note, (n, s) => t(n, s, e)), st = (e) => k(e, (t, n) => [t, n]), k = (e, t) => {
  const n = h(), s = [];
  let o;
  for (; (o = n.exec(e)) !== null; )
    s.push(t(o[1], o[2]));
  return s;
}, rt = (e, t) => e.replace(h(), (n, s, o) => {
  const i = t(s, o);
  return D(s, i);
}), ct = (e, t) => {
  const n = h();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, at = (e, t, n) => {
  const s = h();
  return e.replace(s, (o, i) => i === t ? D(i, n) : o);
}, ot = (e) => `code:${e}`, Re = "N", we = "V", P = (e, t) => `\\${e}[${t}]`, He = (e) => P(Re, e.id), it = (e) => e.map((t) => ({
  controlChar: He(t),
  text: t.name
})), mt = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: P(we, n)
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
    const i = o[1].toLowerCase(), V = parseInt(o[2], 10);
    t.has(i) && s.push({ char: o[1], id: V });
  }
  return s;
}, Ge = (e, t, n) => t.map((s) => n(s, e[s], e)), ht = (e, t, n) => Ge(e, t, n), dt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), lt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), pt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
});
export {
  _ as BaseEventCommandGroup,
  le as CHOICE_HELP_TEXT,
  v as CombinedEventCommandGroup,
  ne as ERROR_COMMAND_MESSAGE,
  xe as ERROR_COMMAND_SCRIPT,
  se as ERROR_INVALID_HEAD,
  me as ERROR_MESSAGE,
  C as SimpleEventCommandGroup,
  c as callHandler,
  ot as codeInfoText,
  E as codeTest,
  $e as collectMapEvents,
  De as constructActor,
  Pe as constructArmor,
  We as constructClass,
  p as constructDamage,
  ke as constructEnemy,
  Fe as constructItem,
  m as constructParamArray,
  Ye as constructSkill,
  ze as constructState,
  Ve as constructWeapon,
  ee as createAdvanced,
  a as createAudio,
  J as createBasicTerms,
  _e as createCommandContext,
  Q as createCommandsArray,
  Ce as createCommentGroup,
  j as createCondtion,
  P as createControlCharFormat,
  Ke as createEventContext,
  K as createEventPage,
  Ue as createMap,
  Xe as createMapEvent,
  y as createMapEventImage,
  Ee as createMessageGroup,
  b as createMessages,
  D as createNoteEntity,
  Z as createParamNamesArray,
  fe as createScriptGroup,
  ge as createScrlloingTextGroup,
  qe as createSystemData,
  te as createSystemSoundsArray,
  $ as createTerms,
  d as createVehicle,
  He as fromActor,
  it as fromActors,
  mt as fromSystem,
  Qe as gatherEventCommandContext,
  ut as getControlChars,
  ct as getNoteValue,
  R as handleGroupComment,
  M as handleGroupMessage,
  w as handleGroupScript,
  O as handleGroupScrollingText,
  Se as handlerDispatch,
  g as isBodyParams,
  pe as isChoiceHelp,
  je as isHeadCommand,
  oe as isMessageHeader,
  de as joinCommandBodies,
  h as makeRegex,
  ye as mapTextCommand,
  Ae as mappingCommand,
  Te as mappingCommandList,
  f as normalizedCommands,
  et as normalizedCommonEvents,
  be as normalizedMapData,
  tt as normalizedTroops,
  pt as pickCommandParamAudio,
  lt as pickCommandParamNumber,
  dt as pickCommandParamString,
  u as pickCommands,
  re as pickComments,
  I as pickHead,
  ae as pickMessageHeader,
  ie as pickMessageWithHead,
  Ge as pickPropertys,
  ce as pickScripts,
  he as pickScrollText,
  ue as pickScrollTextHeader,
  ht as pickString,
  Ze as processCommonEvents,
  H as processEventPages,
  B as processMapEvents,
  Je as processTroopEvents,
  st as readNote,
  k as readNoteEx,
  nt as readNoteObject,
  Me as replaceCommonEvents,
  G as replaceEventCommands,
  ve as replaceMapEvents,
  rt as replaceNote,
  L as replacePages,
  Oe as replaceTroops,
  at as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
