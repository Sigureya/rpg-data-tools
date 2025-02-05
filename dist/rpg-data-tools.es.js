import * as r from "@sigureya/rpgtypes";
import { COMMENT as f, COMMENT_BODY as W, SCRIPT_EVAL as S, SCRIPT_EVAL_BODY as F, SHOW_MESSAGE as A, SHOW_MESSAGE_BODY as Y, SHOW_SCROLLING_TEXT as l, SHOW_SCROLLING_TEXT_BODY as N, CHANGE_NICKNAME as z, CHANGE_PROFILE as U, CHANGE_NAME as X, SHOW_CHOICES_ITEM as q, SHOW_CHOICES as x } from "@sigureya/rpgtypes";
const u = () => [0, 0, 0, 0, 0, 0, 0, 0], De = (e) => ({
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
  params: u(),
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
  params: u(),
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
  params: u(),
  traits: [],
  damage: p(),
  ...e
}), We = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: u(),
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
  pages: [$()],
  ...e
}), K = (e) => ({
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
}), $ = (e) => ({
  conditions: K(),
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
  terms: e.terms ?? y(),
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
}), y = (e = {}) => ({
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
], E = (e, n) => n ? e === n.code : !1, ne = "MessageHeader invalid command", xe = "Script invalid command", se = "Invalid Head", g = (e) => typeof e[0] == "string" && e.length === 1, Ke = (e, n) => n ? e === n.code && g(n.parameters) : !1, m = (e, n, t) => {
  const s = [];
  for (let o = t; o < n.length; o++) {
    const i = n[o];
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
}, I = (e, n, t) => {
  const s = e[n];
  if (s && E(t, s) && g(s.parameters))
    return {
      code: t,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(se, { cause: s });
}, re = (e, n) => ({
  head: I(e, n, f),
  bodys: m(W, e, n + 1)
}), ce = (e, n) => ({
  head: I(e, n, S),
  bodys: m(F, e, n + 1)
}), ae = (e, n) => {
  const t = e[n];
  if (t && oe(t))
    return t;
  throw new Error(ne, { cause: t });
}, oe = (e) => !e || e.code !== A || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", ie = (e, n) => ({
  head: ae(e, n),
  bodys: m(Y, e, n + 1)
}), ue = "ScrollTextHeader invalid command", me = (e, n) => {
  const t = e[n];
  if (E(l, t))
    return t;
  const s = {
    headCode: l,
    bodyCode: N,
    index: n
  };
  throw new Error(ue, { cause: s });
}, he = (e, n) => ({
  head: me(e, n),
  bodys: m(N, e, n + 1)
}), de = (e, n = `
`) => e.map((t) => t.parameters[0]).join(n);
class _ {
  constructor(n, t) {
    this.header = n, this.bodies = t;
  }
  getBodyText(n = `
`) {
    return de(this.getExpandedBodies(), n);
  }
  jopinHedderAndBody() {
    return [this.header, ...this.bodies];
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class C extends _ {
  constructor(n, t, s) {
    super(t, s), this.bodyCode = n;
  }
  getExpandedBodies() {
    return this.bodies;
  }
  normalizedCommands() {
    const n = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters]
    };
    return this.bodies.length === 0 ? [n] : [n, this.mergedBody()];
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
const le = "選択肢ヘルプ", pe = (e) => e.parameters[0] === le, Ee = (e, n = []) => new C(401, e, n), ge = (e, n = []) => new C(405, e, n), Ce = (e, n = []) => pe(e) ? new C(
  408,
  e,
  n
) : new v(
  e,
  n
), Te = (e, n = []) => new v(e, n), M = (e, n, t) => {
  const s = ie(e, n), o = Ee(s.head, s.bodys);
  return t(o);
}, O = (e, n, t) => {
  const s = he(e, n), o = ge(s.head, s.bodys);
  return t(o);
}, R = (e, n, t) => {
  const s = re(e, n), o = Ce(s.head, s.bodys);
  return t(o);
}, w = (e, n, t) => {
  const s = ce(e, n), o = Te(s.head, s.bodys);
  return t(o);
}, fe = (e, n, t) => {
  const s = e[n];
  switch (s.code) {
    case A:
      return M(e, n, t.showMessage);
    case l:
      return O(e, n, t.showScrollingText);
    case f:
      return R(e, n, t.comment);
    case S:
      return w(e, n, t.script);
    case x:
      return t.showChoices(s, n, e);
    case q:
      return t.choiceWhen(s, n, e);
    case X:
      return t.changeName(s, n, e);
    case U:
      return t.changeProfile(s, n, e);
    case z:
      return t.changeNickname(s, n, e);
    default:
      return t.other(s, n, e);
  }
}, je = (e, n) => e.map(
  (t, s, o) => fe(o, s, n)
), c = (e, n, t, s, o) => s ? s(e, n, t) : o(e, n, t), Se = (e, n) => e.map((t, s) => Ae(e, s, n)), Ae = (e, n, t) => {
  const s = e[n];
  switch (s.code) {
    // メッセージ関連
    case r.SHOW_MESSAGE:
      return t.showMessage ? M(e, n, t.showMessage) : t.other(s, n, e);
    case r.SHOW_MESSAGE_BODY:
      return c(s, n, e, t.showMessageBody, t.other);
    case r.SHOW_SCROLLING_TEXT:
      return t.showScrollingText ? O(e, n, t.showScrollingText) : t.other(s, n, e);
    case r.SHOW_SCROLLING_TEXT_BODY:
      return c(s, n, e, t.showScrollingTextBody, t.other);
    case r.SHOW_CHOICES:
      return c(s, n, e, t.showChoices, t.other);
    case r.SHOW_CHOICES_ITEM:
      return c(s, n, e, t.choiceWhen, t.other);
    // コメント・スクリプト関連
    case r.COMMENT:
      return t.comment ? R(e, n, t.comment) : t.other(s, n, e);
    case r.COMMENT_BODY:
      return c(s, n, e, t.commentBody, t.other);
    case r.SCRIPT_EVAL:
      return t.script ? w(e, n, t.script) : t.other(s, n, e);
    case r.SCRIPT_EVAL_BODY:
      return c(s, n, e, t.scriptBody, t.other);
    // 条件・制御系
    case r.CONDITIONAL_BRANCH:
      return c(s, n, e, t.conditionalBranch, t.other);
    case r.CONTROL_SWITCHES:
      return c(s, n, e, t.controlSwitch, t.other);
    case r.CONTROL_VARIABLES:
      return c(s, n, e, t.controlVariable, t.other);
    case r.CONTROL_SELF_SWITCH:
      return c(s, n, e, t.controlSelfSwitch, t.other);
    case r.CONTROL_TIMER:
      return c(s, n, e, t.controlTimer, t.other);
    case r.COMMON_EVENT:
      return c(s, n, e, t.commonEvent, t.other);
    // メニュー
    case r.CHANGE_SAVE_ACCESS:
      return c(s, n, e, t.changeSaveAccess, t.other);
    case r.CHANGE_MENU_ACCESS:
      return c(s, n, e, t.changeMenuAccess, t.other);
    case r.CHANGE_ENCOUNTER:
      return c(s, n, e, t.changeEncounter, t.other);
    case r.CHANGE_FORMATION_ACCESS:
      return c(s, n, e, t.changeFormationAccess, t.other);
    // キャラクター情報変更
    case r.CHANGE_NAME:
      return c(s, n, e, t.changeName, t.other);
    case r.CHANGE_PROFILE:
      return c(s, n, e, t.changeProfile, t.other);
    case r.CHANGE_NICKNAME:
      return c(s, n, e, t.changeNickname, t.other);
    case r.CHANGE_ACTOR_IMAGES:
      return c(s, n, e, t.changeActorImages, t.other);
    case r.CHANGE_VEHICLE_IMAGE:
      return c(s, n, e, t.changeVehicleImage, t.other);
    // BGM・音楽関連
    case r.CHANGE_BATTLE_BGM:
      return c(s, n, e, t.changeBattleBGM, t.other);
    case r.CHANGE_VICTORY_ME:
      return c(s, n, e, t.changeVictoryME, t.other);
    case r.CHANGE_DEFEAT_ME:
      return c(s, n, e, t.changeDefeatME, t.other);
    case r.PLAY_BGM:
      return c(s, n, e, t.playBGM, t.other);
    case r.FADEOUT_BGM:
      return c(s, n, e, t.fadeOutBGM, t.other);
    case r.PLAY_SE:
      return c(s, n, e, t.playSE, t.other);
    case r.STOP_SE:
      return c(s, n, e, t.stopSE, t.other);
    case r.PLAY_ME:
      return c(s, n, e, t.playME, t.other);
    // ラベル・ジャンプ
    case r.LABEL:
      return c(s, n, e, t.label, t.other);
    case r.LABEL_JUMP:
      return c(s, n, e, t.labelJump, t.other);
    // 画面演出
    case r.CHANGE_WINDOW_COLOR:
      return c(s, n, e, t.changeWindowColor, t.other);
    case r.TINT_SCREEN:
      return c(s, n, e, t.tintScreen, t.other);
    case r.FLASH_SCREEN:
      return c(s, n, e, t.flashScreen, t.other);
    case r.SHAKE_SCREEN:
      return c(s, n, e, t.shakeScreen, t.other);
    // ピクチャー
    case r.SHOW_PICTURE:
      return c(s, n, e, t.showPicture, t.other);
    case r.MOVE_PICTURE:
      return c(s, n, e, t.movePicture, t.other);
    case r.ROTATE_PICTURE:
      return c(s, n, e, t.rotatePicture, t.other);
    case r.TINT_PICTURE:
      return c(s, n, e, t.tintPicture, t.other);
    case r.ERASE_PICTURE:
      return c(s, n, e, t.erasePicture, t.other);
    // ゲーム進行
    case r.BATTLE_PROCESSING:
      return c(s, n, e, t.battleProcessing, t.other);
    case r.WAIT:
      return c(s, n, e, t.wait, t.other);
    case r.GAME_OVER:
      return c(s, n, e, t.gameover, t.other);
    // 未整理
    case r.CHANGE_PARALLAX:
      return c(s, n, e, t.changeParallax, t.other);
    case r.CHANGE_BATTLE_BACKGROUND:
      return c(s, n, e, t.changeBattleBackground, t.other);
    case r.PLAY_MOVIE:
      return c(s, n, e, t.playMovie, t.other);
    case r.CHANGE_TRANSPARENCY:
      return c(s, n, e, t.changeTransparency, t.other);
    case r.SET_WEATHER_EFFECT:
      return c(s, n, e, t.setWeatherEffects, t.other);
    case r.CHANGE_GOLD:
      return c(s, n, e, t.changeGold, t.other);
    case r.SHOW_ANIMATION:
      return c(s, n, e, t.showAnimation, t.other);
    case r.TRANSFER_PLAYER:
      return c(s, n, e, t.transferPlayer, t.other);
    case r.SET_VEHICLE_LOCATION:
      return c(s, n, e, t.setVehicleLocation, t.other);
    case r.SET_EVENT_LOCATION:
      return c(s, n, e, t.setEventLocation, t.other);
    default:
      return t.other(s, n, e);
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
}, T = (e) => Se(e, Ne), Ie = (e) => !!e, $e = (e, n, t) => ({
  data: e,
  eventId: n,
  pageIndex: t
}), _e = (e, n, t) => e.list.map((s) => ({
  data: s,
  eventId: t.id,
  pageIndex: n
})), H = (e, n) => e.pages.map(
  (t, s) => n(t, s, e)
), B = (e, n) => e.events.filter(Ie).map((t) => H(t, n)), ye = (e, n) => B(e, n).flat(2), Je = (e, n) => e.map((t) => H(t, n)), Ze = (e, n) => e.map((t, s) => n(t, s, t)), Qe = (e) => B(
  e,
  _e
).flat(2), G = (e, n) => {
  const t = n(e.list);
  return {
    ...e,
    list: t
  };
}, L = (e, n) => ({
  ...e,
  pages: e.pages.map((t) => G(t, n))
}), ve = (e, n) => ({
  ...e,
  events: e.events.map((t) => t ? L(t, n) : null)
}), Me = (e, n) => e.map((t) => G(t, n)), Oe = (e, n) => e.map((t) => L(t, n)), be = (e) => ve(e, (n) => T(n).flat()), et = (e) => Me(
  e,
  (n) => T(n).flat()
), tt = (e) => Oe(e, (n) => T(n).flat()), D = (e, n) => `<${e}:${n}>`, h = () => /<([^<>:]+):([^>]*)>/g, nt = (e, n) => k(e.note, (t, s) => n(t, s, e)), st = (e) => k(e, (n, t) => [n, t]), k = (e, n) => {
  const t = h(), s = [];
  let o;
  for (; (o = t.exec(e)) !== null; )
    s.push(n(o[1], o[2]));
  return s;
}, rt = (e, n) => e.replace(h(), (t, s, o) => {
  const i = n(s, o);
  return D(s, i);
}), ct = (e, n) => {
  const t = h();
  let s;
  for (; (s = t.exec(e)) !== null; )
    if (s[1] === n)
      return s[2];
}, at = (e, n, t) => {
  const s = h();
  return e.replace(s, (o, i) => i === n ? D(i, t) : o);
}, ot = (e) => `code:${e}`, Re = "N", we = "V", P = (e, n) => `\\${e}[${n}]`, He = (e) => P(Re, e.id), it = (e) => e.map((n) => ({
  controlChar: He(n),
  text: n.name
})), ut = (e) => e.variables.map((n, t) => ({
  text: n || "",
  controlChar: P(we, t)
})).filter((n) => n.text !== ""), Be = /* @__PURE__ */ new Set([
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
]), mt = (e, n = Be) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let o;
  for (; (o = t.exec(e)) !== null; ) {
    const i = o[1].toLowerCase(), V = parseInt(o[2], 10);
    n.has(i) && s.push({ char: o[1], id: V });
  }
  return s;
}, Ge = (e, n, t) => n.map((s) => t(s, e[s], e)), ht = (e, n, t) => Ge(e, n, t), dt = (e, n) => ({
  code: e.code,
  paramIndex: n,
  value: e.parameters[n]
}), lt = (e, n) => ({
  code: e.code,
  paramIndex: n,
  value: e.parameters[n]
}), pt = (e, n) => ({
  code: e.code,
  paramIndex: n,
  value: e.parameters[n]
});
export {
  _ as BaseEventCommandGroup,
  le as CHOICE_HELP_TEXT,
  v as CombinedEventCommandGroup,
  ne as ERROR_COMMAND_MESSAGE,
  xe as ERROR_COMMAND_SCRIPT,
  se as ERROR_INVALID_HEAD,
  ue as ERROR_MESSAGE,
  C as SimpleEventCommandGroup,
  c as callHandler,
  ot as codeInfoText,
  E as codeTest,
  ye as collectMapEvents,
  De as constructActor,
  Pe as constructArmor,
  We as constructClass,
  p as constructDamage,
  ke as constructEnemy,
  Fe as constructItem,
  u as constructParamArray,
  Ye as constructSkill,
  ze as constructState,
  Ve as constructWeapon,
  ee as createAdvanced,
  a as createAudio,
  J as createBasicTerms,
  _e as createCommandContext,
  Q as createCommandsArray,
  Ce as createCommentGroup,
  K as createCondtion,
  P as createControlCharFormat,
  $e as createEventContext,
  $ as createEventPage,
  Ue as createMap,
  Xe as createMapEvent,
  j as createMapEventImage,
  Ee as createMessageGroup,
  b as createMessages,
  D as createNoteEntity,
  Z as createParamNamesArray,
  Te as createScriptGroup,
  ge as createScrlloingTextGroup,
  qe as createSystemData,
  te as createSystemSoundsArray,
  y as createTerms,
  d as createVehicle,
  He as fromActor,
  it as fromActors,
  ut as fromSystem,
  Qe as gatherEventCommandContext,
  mt as getControlChars,
  ct as getNoteValue,
  R as handleGroupComment,
  M as handleGroupMessage,
  w as handleGroupScript,
  O as handleGroupScrollingText,
  fe as handlerDispatch,
  g as isBodyParams,
  pe as isChoiceHelp,
  Ke as isHeadCommand,
  oe as isMessageHeader,
  de as joinCommandBodies,
  h as makeRegex,
  je as mapTextCommand,
  Ae as mappingCommand,
  Se as mappingCommandList,
  T as normalizedCommands,
  et as normalizedCommonEvents,
  be as normalizedMapData,
  tt as normalizedTroops,
  pt as pickCommandParamAudio,
  lt as pickCommandParamNumber,
  dt as pickCommandParamString,
  m as pickCommands,
  re as pickComments,
  I as pickHead,
  ae as pickMessageHeader,
  ie as pickMessageWithHead,
  Ge as pickPropertys,
  ce as pickScripts,
  he as pickScrollText,
  me as pickScrollTextHeader,
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
