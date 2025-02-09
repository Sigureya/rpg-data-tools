import * as r from "@sigureya/rpgtypes";
import { COMMENT as T, COMMENT_BODY as F, SCRIPT_EVAL as S, SCRIPT_EVAL_BODY as Y, SHOW_MESSAGE as f, SHOW_MESSAGE_BODY as U, SHOW_SCROLLING_TEXT as l, SHOW_SCROLLING_TEXT_BODY as _, CHANGE_NICKNAME as z, CHANGE_PROFILE as X, CHANGE_NAME as q, SHOW_CHOICES_ITEM as x, SHOW_CHOICES as K } from "@sigureya/rpgtypes";
const m = () => [0, 0, 0, 0, 0, 0, 0, 0], ke = (e) => ({
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
}), We = (e) => ({
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
}), Fe = (e) => ({
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
}), Ye = (e) => ({
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
  damage: E(),
  ...e
}), Ue = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: m(),
  expParams: [],
  ...e
}), E = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), ze = (e) => ({
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
  damage: E(),
  effects: [],
  ...e
}), Xe = (e) => ({
  animationId: 0,
  damage: E(),
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
}), qe = (e) => ({
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
}), Ke = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [y()],
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
}), $ = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), y = (e) => ({
  conditions: j(),
  image: $(),
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
}), a = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 90,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), je = (e, t, n = 0) => ({
  code: e,
  parameters: [a({ name: t })],
  indent: n
}), $e = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? J(),
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
  advanced: e.advanced ?? te(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? ne(),
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
}), J = (e = {}) => ({
  messages: ee(e.messages ?? {}),
  commands: b(e.commands ?? {}),
  params: Q(e.params ?? {}),
  basic: Z(e.basic ?? {})
}), Z = (e = {}) => [
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
], Q = (e = {}) => [
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
], b = (e = {}) => [
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
], ee = (e = {}) => ({
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
}), te = (e = {}) => ({
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
}), ne = (e = {}) => [
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
], p = (e, t) => t ? e === t.code : !1, se = "MessageHeader invalid command", ye = "Script invalid command", re = "Invalid Head", C = (e) => typeof e[0] == "string" && e.length === 1, Je = (e, t) => t ? e === t.code && C(t.parameters) : !1, u = (e, t, n) => {
  const s = [];
  for (let o = n; o < t.length; o++) {
    const i = t[o];
    if (p(e, i) && C(i.parameters))
      s.push({
        code: e,
        indent: i.indent,
        parameters: [i.parameters[0]]
      });
    else
      break;
  }
  return s;
}, N = (e, t, n) => {
  const s = e[t];
  if (s && p(n, s) && C(s.parameters))
    return {
      code: n,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(re, { cause: s });
}, ce = (e, t) => ({
  head: N(e, t, T),
  bodys: u(F, e, t + 1)
}), ae = (e, t) => ({
  head: N(e, t, S),
  bodys: u(Y, e, t + 1)
}), oe = (e, t) => {
  const n = e[t];
  if (n && ie(n))
    return n;
  throw new Error(se, { cause: n });
}, ie = (e) => !e || e.code !== f || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", me = (e, t) => ({
  head: oe(e, t),
  bodys: u(U, e, t + 1)
}), ue = "ScrollTextHeader invalid command", he = (e, t) => {
  const n = e[t];
  if (p(l, n))
    return n;
  const s = {
    headCode: l,
    bodyCode: _,
    index: t
  };
  throw new Error(ue, { cause: s });
}, de = (e, t) => ({
  head: he(e, t),
  bodys: u(_, e, t + 1)
}), le = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class I {
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
class g extends I {
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
class M extends I {
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
const Ee = "選択肢ヘルプ", pe = (e) => e.parameters[0] === Ee, Ce = (e, t = []) => new g(401, e, t), ge = (e, t = []) => new g(405, e, t), Ae = (e, t = []) => pe(e) ? new g(
  408,
  e,
  t
) : new M(
  e,
  t
), Te = (e, t = []) => new M(e, t), v = (e, t, n) => {
  const s = me(e, t), o = Ce(s.head, s.bodys);
  return n(o);
}, O = (e, t, n) => {
  const s = de(e, t), o = ge(s.head, s.bodys);
  return n(o);
}, H = (e, t, n) => {
  const s = ce(e, t), o = Ae(s.head, s.bodys);
  return n(o);
}, R = (e, t, n) => {
  const s = ae(e, t), o = Te(s.head, s.bodys);
  return n(o);
}, Se = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case f:
      return v(e, t, n.showMessage);
    case l:
      return O(e, t, n.showScrollingText);
    case T:
      return H(e, t, n.comment);
    case S:
      return R(e, t, n.script);
    case K:
      return n.showChoices(s, t, e);
    case x:
      return n.choiceWhen(s, t, e);
    case q:
      return n.changeName(s, t, e);
    case X:
      return n.changeProfile(s, t, e);
    case z:
      return n.changeNickname(s, t, e);
    default:
      return n.other(s, t, e);
  }
}, Ze = (e, t) => e.map(
  (n, s, o) => Se(o, s, t)
), c = (e, t, n, s, o) => s ? s(e, t, n) : o(e, t, n), fe = (e, t) => e.map((n, s) => _e(e, s, t)), _e = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    // メッセージ関連
    case r.SHOW_MESSAGE:
      return n.showMessage ? v(e, t, n.showMessage) : n.other(s, t, e);
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
      return n.comment ? H(e, t, n.comment) : n.other(s, t, e);
    case r.COMMENT_BODY:
      return c(s, t, e, n.commentBody, n.other);
    case r.SCRIPT_EVAL:
      return n.script ? R(e, t, n.script) : n.other(s, t, e);
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
    case r.CHANGE_PARALLAX:
      return c(s, t, e, n.changeParallax, n.other);
    case r.CHANGE_BATTLE_BACKGROUND:
      return c(s, t, e, n.changeBattleBackground, n.other);
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
}, A = (e) => fe(e, Ne), Ie = (e) => !!e, Qe = (e, t, n) => ({
  data: e,
  eventId: t,
  pageIndex: n
}), Me = (e, t, n) => e.list.map((s) => ({
  data: s,
  eventId: n.id,
  pageIndex: t
})), G = (e, t) => e.pages.map(
  (n, s) => t(n, s, e)
), w = (e, t) => e.events.filter(Ie).map((n) => G(n, t)), be = (e, t) => w(e, t).flat(2), et = (e, t) => e.map((n) => G(n, t)), tt = (e, t) => e.map((n) => t(n, 0, n)), nt = (e) => w(
  e,
  Me
).flat(2), B = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, L = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => B(n, t))
}), ve = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? L(n, t) : null)
}), Oe = (e, t) => e.map((n) => B(n, t)), He = (e, t) => e.map((n) => L(n, t)), st = (e) => ve(e, (t) => A(t).flat()), rt = (e) => Oe(
  e,
  (t) => A(t).flat()
), ct = (e) => He(e, (t) => A(t).flat()), D = (e, t) => t.includes(e.code), at = (e) => D(e, Re), Re = [
  r.PLAY_BGM,
  r.PLAY_BGS,
  r.PLAY_ME,
  r.PLAY_SE,
  r.CHANGE_BATTLE_BGM,
  r.CHANGE_VICTORY_ME,
  r.CHANGE_DEFEAT_ME,
  r.CHANGE_VEHICLE_BGM
], ot = (e) => D(e, Ge), Ge = [
  r.SHOW_PICTURE,
  r.CHANGE_ACTOR_IMAGES,
  r.CHANGE_VEHICLE_IMAGE,
  r.CHANGE_PARALLAX,
  r.CHANGE_BATTLE_BACKGROUND
], it = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), mt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), ut = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), P = (e, t) => `<${e}:${t}>`, h = () => /<([^<>:]+):([^>]*)>/g, ht = (e, t) => V(e.note, (n, s) => t(n, s, e)), dt = (e) => V(e, (t, n) => [t, n]), V = (e, t) => {
  const n = h(), s = [];
  let o;
  for (; (o = n.exec(e)) !== null; )
    s.push(t(o[1], o[2]));
  return s;
}, lt = (e, t) => e.replace(h(), (n, s, o) => {
  const i = t(s, o);
  return P(s, i);
}), Et = (e, t) => {
  const n = h();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, pt = (e, t, n) => {
  const s = h();
  return e.replace(s, (o, i) => i === t ? P(i, n) : o);
}, Ct = (e) => `code:${e}`, we = "N", Be = "V", k = (e, t) => `\\${e}[${t}]`, Le = (e) => k(we, e.id), gt = (e) => e.map((t) => ({
  controlChar: Le(t),
  text: t.name
})), At = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: k(Be, n)
})).filter((t) => t.text !== ""), De = /* @__PURE__ */ new Set([
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
]), Tt = (e, t = De) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let o;
  for (; (o = n.exec(e)) !== null; ) {
    const i = o[1].toLowerCase(), W = parseInt(o[2], 10);
    t.has(i) && s.push({ char: o[1], id: W });
  }
  return s;
}, Pe = (e, t, n) => t.map((s) => n(s, e[s], e)), St = (e, t, n) => Pe(e, t, n);
export {
  I as BaseEventCommandGroup,
  Ee as CHOICE_HELP_TEXT,
  M as CombinedEventCommandGroup,
  se as ERROR_COMMAND_MESSAGE,
  ye as ERROR_COMMAND_SCRIPT,
  re as ERROR_INVALID_HEAD,
  ue as ERROR_MESSAGE,
  g as SimpleEventCommandGroup,
  c as callHandler,
  Ct as codeInfoText,
  p as codeTest,
  be as collectMapEvents,
  ke as constructActor,
  Fe as constructArmor,
  Ue as constructClass,
  E as constructDamage,
  We as constructEnemy,
  ze as constructItem,
  m as constructParamArray,
  Xe as constructSkill,
  qe as constructState,
  Ye as constructWeapon,
  te as createAdvanced,
  a as createAudio,
  je as createAudioCommand,
  Z as createBasicTerms,
  Me as createCommandContext,
  b as createCommandsArray,
  Ae as createCommentGroup,
  j as createCondtion,
  k as createControlCharFormat,
  Qe as createEventContext,
  y as createEventPage,
  xe as createMap,
  Ke as createMapEvent,
  $ as createMapEventImage,
  Ce as createMessageGroup,
  ee as createMessages,
  P as createNoteEntity,
  Q as createParamNamesArray,
  Te as createScriptGroup,
  ge as createScrlloingTextGroup,
  $e as createSystemData,
  ne as createSystemSoundsArray,
  J as createTerms,
  d as createVehicle,
  Le as fromActor,
  gt as fromActors,
  At as fromSystem,
  nt as gatherEventCommandContext,
  Tt as getControlChars,
  Et as getNoteValue,
  H as handleGroupComment,
  v as handleGroupMessage,
  R as handleGroupScript,
  O as handleGroupScrollingText,
  Se as handlerDispatch,
  at as isAudioCommand,
  C as isBodyParams,
  pe as isChoiceHelp,
  Je as isHeadCommand,
  ot as isImageCommand,
  ie as isMessageHeader,
  le as joinCommandBodies,
  h as makeRegex,
  Ze as mapTextCommand,
  _e as mappingCommand,
  fe as mappingCommandList,
  D as matchesEventCommand,
  A as normalizedCommands,
  rt as normalizedCommonEvents,
  st as normalizedMapData,
  ct as normalizedTroops,
  ut as pickCommandParamAudio,
  mt as pickCommandParamNumber,
  it as pickCommandParamString,
  u as pickCommands,
  ce as pickComments,
  N as pickHead,
  oe as pickMessageHeader,
  me as pickMessageWithHead,
  Pe as pickPropertys,
  ae as pickScripts,
  de as pickScrollText,
  he as pickScrollTextHeader,
  St as pickString,
  tt as processCommonEvents,
  G as processEventPages,
  w as processMapEvents,
  et as processTroopEvents,
  dt as readNote,
  V as readNoteEx,
  ht as readNoteObject,
  Oe as replaceCommonEvents,
  B as replaceEventCommands,
  ve as replaceMapEvents,
  lt as replaceNote,
  L as replacePages,
  He as replaceTroops,
  pt as setNoteValue
};
//# sourceMappingURL=rpg-data-tools.es.js.map
