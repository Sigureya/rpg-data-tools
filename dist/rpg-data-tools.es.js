import * as a from "@sigureya/rpgtypes";
import { COMMENT as g, COMMENT_BODY as he, SCRIPT_EVAL as C, SCRIPT_EVAL_BODY as le, SHOW_MESSAGE as T, SHOW_MESSAGE_BODY as Re, SHOW_SCROLLING_TEXT as A, SHOW_SCROLLING_TEXT_BODY as S, CHANGE_NICKNAME as pe, CHANGE_PROFILE as _e, CHANGE_NAME as ge, SHOW_CHOICES_ITEM as Ce, SHOW_CHOICES as Te, REGULAR_PARAM_LUK as f, REGULAR_PARAM_AGI as I, REGULAR_PARAM_MDEF as M, REGULAR_PARAM_MATK as N, REGULAR_PARAM_DEF as L, REGULAR_PARAM_ATK as v, REGULAR_PARAM_MAX_MP as O, REGULAR_PARAM_MAX_HP as P, EXTRA_PARAM_TRG as G, EXTRA_PARAM_MRG as H, EXTRA_PARAM_MRF as B, EXTRA_PARAM_MEV as w, EXTRA_PARAM_HRG as D, EXTRA_PARAM_HIT as k, EXTRA_PARAM_CRI as V, EXTRA_PARAM_CNT as F, EXTRA_PARAM_EVA as Y, EXTRA_PARAM_CEV as W, SPECIAL_PARAM_REC as U, SPECIAL_PARAM_PHA as X, SPECIAL_PARAM_MDR as y, SPECIAL_PARAM_PDR as z, SPECIAL_PARAM_TCR as q, SPECIAL_PARAM_MCR as K, SPECIAL_PARAM_GRD as $, SPECIAL_PARAM_FDR as j, SPECIAL_PARAM_TGR as x, SPECIAL_PARAM_EXR as J, COLLAPS_NORMAL as Se, COLLAPS_BOSS as fe, COLLAPS_INSTANT as Ie, COLLAPS_NONE as Me, PARTY_ABILITY_ENCOUNTER_HALF as Ne, PARTY_ABILITY_ENCOUNTER_NONE as Le, PARTY_ABILITY_CANCEL_SURPRISE as ve, PARTY_ABILITY_RAISE_PREEMPTIVE as Oe, PARTY_ABILITY_GOLD_DOUBLE as Pe, PARTY_ABILITY_DROP_ITEM_DOUBLE as Ge } from "@sigureya/rpgtypes";
const m = () => [0, 0, 0, 0, 0, 0, 0, 0], Tt = (e) => ({
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
}), St = (e) => ({
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
}), ft = (e) => ({
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
}), It = (e) => ({
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
  damage: h(),
  ...e
}), Mt = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: m(),
  expParams: [],
  ...e
}), h = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), Nt = (e) => ({
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
  damage: h(),
  effects: [],
  ...e
}), Lt = (e) => ({
  animationId: 0,
  damage: h(),
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
}), vt = (e) => ({
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
}), Ot = (e) => ({
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
}), Pt = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [we()],
  ...e
}), He = (e) => ({
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
}), Be = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), we = (e) => ({
  conditions: He(),
  image: Be(),
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
}), c = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 90,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), Gt = (e, t, n = 0) => ({
  code: e,
  parameters: [c({ name: t })],
  indent: n
}), Ht = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? De(),
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
  advanced: e.advanced ?? We(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? Ue(),
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
  boat: e.boat ?? E(),
  ship: e.ship ?? E(),
  airship: e.airship ?? E(),
  tileSize: e.tileSize ?? 0
}), De = (e = {}) => ({
  messages: Ye(e.messages ?? {}),
  commands: Fe(e.commands ?? {}),
  params: Ve(e.params ?? {}),
  basic: ke(e.basic ?? {})
}), ke = (e = {}) => [
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
], Ve = (e = {}) => [
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
], Fe = (e = {}) => [
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
], Ye = (e = {}) => ({
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
}), We = (e = {}) => ({
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
}), E = (e = {}) => ({
  bgm: e.bgm ?? c(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Ue = (e = {}) => [
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
], l = (e, t) => t ? e === t.code : !1, Xe = "MessageHeader invalid command", Bt = "Script invalid command", ye = "Invalid Head", R = (e) => typeof e[0] == "string" && e.length === 1, wt = (e, t) => t ? e === t.code && R(t.parameters) : !1, u = (e, t, n) => {
  const r = [];
  for (let o = n; o < t.length; o++) {
    const i = t[o];
    if (l(e, i) && R(i.parameters))
      r.push({
        code: e,
        indent: i.indent,
        parameters: [i.parameters[0]]
      });
    else
      break;
  }
  return r;
}, Z = (e, t, n) => {
  const r = e[t];
  if (r && l(n, r) && R(r.parameters))
    return {
      code: n,
      indent: r.indent,
      parameters: [r.parameters[0]]
    };
  throw new Error(ye, { cause: r });
}, ze = (e, t) => ({
  head: Z(e, t, g),
  bodys: u(he, e, t + 1)
}), qe = (e, t) => ({
  head: Z(e, t, C),
  bodys: u(le, e, t + 1)
}), Ke = (e, t) => {
  const n = e[t];
  if (n && $e(n))
    return n;
  throw new Error(Xe, { cause: n });
}, $e = (e) => !e || e.code !== T || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", je = (e, t) => ({
  head: Ke(e, t),
  bodys: u(Re, e, t + 1)
}), xe = "ScrollTextHeader invalid command", Je = (e, t) => {
  const n = e[t];
  if (l(A, n))
    return n;
  const r = {
    headCode: A,
    bodyCode: S,
    index: t
  };
  throw new Error(xe, { cause: r });
}, Ze = (e, t) => ({
  head: Je(e, t),
  bodys: u(S, e, t + 1)
}), Qe = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class Q {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return Qe(this.getExpandedBodies(), t);
  }
  jopinHedderAndBody() {
    return [this.header, ...this.bodies];
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class p extends Q {
  constructor(t, n, r) {
    super(n, r), this.bodyCode = t;
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
class b extends Q {
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
const be = "選択肢ヘルプ", et = (e) => e.parameters[0] === be, tt = (e, t = []) => new p(401, e, t), nt = (e, t = []) => new p(405, e, t), rt = (e, t = []) => et(e) ? new p(
  408,
  e,
  t
) : new b(
  e,
  t
), at = (e, t = []) => new b(e, t), ee = (e, t, n) => {
  const r = je(e, t), o = tt(r.head, r.bodys);
  return n(o);
}, te = (e, t, n) => {
  const r = Ze(e, t), o = nt(r.head, r.bodys);
  return n(o);
}, ne = (e, t, n) => {
  const r = ze(e, t), o = rt(r.head, r.bodys);
  return n(o);
}, re = (e, t, n) => {
  const r = qe(e, t), o = at(r.head, r.bodys);
  return n(o);
}, st = (e, t, n) => {
  const r = e[t];
  switch (r.code) {
    case T:
      return ee(e, t, n.showMessage);
    case A:
      return te(e, t, n.showScrollingText);
    case g:
      return ne(e, t, n.comment);
    case C:
      return re(e, t, n.script);
    case Te:
      return n.showChoices(r, t, e);
    case Ce:
      return n.choiceWhen(r, t, e);
    case ge:
      return n.changeName(r, t, e);
    case _e:
      return n.changeProfile(r, t, e);
    case pe:
      return n.changeNickname(r, t, e);
    default:
      return n.other(r, t, e);
  }
}, Dt = (e, t) => e.map(
  (n, r, o) => st(o, r, t)
), s = (e, t, n, r, o) => r ? r(e, t, n) : o(e, t, n), ct = (e, t) => e.map((n, r) => ae(e, r, t)), kt = (e, t) => e.flatMap((n, r) => ae(e, r, t)), ae = (e, t, n) => {
  const r = e[t];
  switch (r.code) {
    // メッセージ関連
    case a.SHOW_MESSAGE:
      return n.showMessage ? ee(e, t, n.showMessage) : n.other(r, t, e);
    case a.SHOW_MESSAGE_BODY:
      return s(r, t, e, n.showMessageBody, n.other);
    case a.SHOW_SCROLLING_TEXT:
      return n.showScrollingText ? te(e, t, n.showScrollingText) : n.other(r, t, e);
    case a.SHOW_SCROLLING_TEXT_BODY:
      return s(r, t, e, n.showScrollingTextBody, n.other);
    case a.SHOW_CHOICES:
      return s(r, t, e, n.showChoices, n.other);
    case a.SHOW_CHOICES_ITEM:
      return s(r, t, e, n.choiceWhen, n.other);
    // コメント・スクリプト関連
    case a.COMMENT:
      return n.comment ? ne(e, t, n.comment) : n.other(r, t, e);
    case a.COMMENT_BODY:
      return s(r, t, e, n.commentBody, n.other);
    case a.SCRIPT_EVAL:
      return n.script ? re(e, t, n.script) : n.other(r, t, e);
    case a.SCRIPT_EVAL_BODY:
      return s(r, t, e, n.scriptBody, n.other);
    // 条件・制御系
    case a.CONDITIONAL_BRANCH:
      return s(r, t, e, n.conditionalBranch, n.other);
    case a.CONTROL_SWITCHES:
      return s(r, t, e, n.controlSwitch, n.other);
    case a.CONTROL_VARIABLES:
      return s(r, t, e, n.controlVariable, n.other);
    case a.CONTROL_SELF_SWITCH:
      return s(r, t, e, n.controlSelfSwitch, n.other);
    case a.CONTROL_TIMER:
      return s(r, t, e, n.controlTimer, n.other);
    case a.COMMON_EVENT:
      return s(r, t, e, n.commonEvent, n.other);
    // メニュー
    case a.CHANGE_SAVE_ACCESS:
      return s(r, t, e, n.changeSaveAccess, n.other);
    case a.CHANGE_MENU_ACCESS:
      return s(r, t, e, n.changeMenuAccess, n.other);
    case a.CHANGE_ENCOUNTER:
      return s(r, t, e, n.changeEncounter, n.other);
    case a.CHANGE_FORMATION_ACCESS:
      return s(r, t, e, n.changeFormationAccess, n.other);
    // キャラクター情報変更
    case a.CHANGE_NAME:
      return s(r, t, e, n.changeName, n.other);
    case a.CHANGE_PROFILE:
      return s(r, t, e, n.changeProfile, n.other);
    case a.CHANGE_NICKNAME:
      return s(r, t, e, n.changeNickname, n.other);
    case a.CHANGE_ACTOR_IMAGES:
      return s(r, t, e, n.changeActorImages, n.other);
    case a.CHANGE_VEHICLE_IMAGE:
      return s(r, t, e, n.changeVehicleImage, n.other);
    // BGM・音楽関連
    case a.CHANGE_BATTLE_BGM:
      return s(r, t, e, n.changeBattleBGM, n.other);
    case a.CHANGE_VICTORY_ME:
      return s(r, t, e, n.changeVictoryME, n.other);
    case a.CHANGE_DEFEAT_ME:
      return s(r, t, e, n.changeDefeatME, n.other);
    case a.PLAY_BGM:
      return s(r, t, e, n.playBGM, n.other);
    case a.FADEOUT_BGM:
      return s(r, t, e, n.fadeOutBGM, n.other);
    case a.PLAY_SE:
      return s(r, t, e, n.playSE, n.other);
    case a.STOP_SE:
      return s(r, t, e, n.stopSE, n.other);
    case a.PLAY_ME:
      return s(r, t, e, n.playME, n.other);
    // ラベル・ジャンプ
    case a.LABEL:
      return s(r, t, e, n.label, n.other);
    case a.LABEL_JUMP:
      return s(r, t, e, n.labelJump, n.other);
    // 画面演出
    case a.CHANGE_WINDOW_COLOR:
      return s(r, t, e, n.changeWindowColor, n.other);
    case a.TINT_SCREEN:
      return s(r, t, e, n.tintScreen, n.other);
    case a.FLASH_SCREEN:
      return s(r, t, e, n.flashScreen, n.other);
    case a.SHAKE_SCREEN:
      return s(r, t, e, n.shakeScreen, n.other);
    // ピクチャー
    case a.SHOW_PICTURE:
      return s(r, t, e, n.showPicture, n.other);
    case a.MOVE_PICTURE:
      return s(r, t, e, n.movePicture, n.other);
    case a.ROTATE_PICTURE:
      return s(r, t, e, n.rotatePicture, n.other);
    case a.TINT_PICTURE:
      return s(r, t, e, n.tintPicture, n.other);
    case a.ERASE_PICTURE:
      return s(r, t, e, n.erasePicture, n.other);
    // ゲーム進行
    case a.BATTLE_PROCESSING:
      return s(r, t, e, n.battleProcessing, n.other);
    case a.WAIT:
      return s(r, t, e, n.wait, n.other);
    case a.GAME_OVER:
      return s(r, t, e, n.gameover, n.other);
    // 未整理
    case a.CHANGE_PARALLAX:
      return s(r, t, e, n.changeParallax, n.other);
    case a.CHANGE_BATTLE_BACKGROUND:
      return s(r, t, e, n.changeBattleBackground, n.other);
    case a.PLAY_MOVIE:
      return s(r, t, e, n.playMovie, n.other);
    case a.CHANGE_TRANSPARENCY:
      return s(r, t, e, n.changeTransparency, n.other);
    case a.SET_WEATHER_EFFECT:
      return s(r, t, e, n.setWeatherEffects, n.other);
    case a.CHANGE_GOLD:
      return s(r, t, e, n.changeGold, n.other);
    case a.SHOW_ANIMATION:
      return s(r, t, e, n.showAnimation, n.other);
    case a.TRANSFER_PLAYER:
      return s(r, t, e, n.transferPlayer, n.other);
    case a.SET_VEHICLE_LOCATION:
      return s(r, t, e, n.setVehicleLocation, n.other);
    case a.SET_EVENT_LOCATION:
      return s(r, t, e, n.setEventLocation, n.other);
    default:
      return n.other(r, t, e);
  }
}, ot = {
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
}, _ = (e) => ct(e, ot), it = (e) => !!e, Vt = (e, t, n) => ({
  data: e,
  eventId: t,
  pageIndex: n
}), mt = (e, t, n) => e.list.map((r) => ({
  data: r,
  eventId: n.id,
  pageIndex: t
})), se = (e, t) => e.pages.map(
  (n, r) => t(n, r, e)
), ce = (e, t) => e.events.filter(it).map((n) => se(n, t)), Ft = (e, t) => ce(e, t).flat(2), Yt = (e, t) => e.map((n) => se(n, t)), Wt = (e, t) => e.map((n) => t(n, 0, n)), Ut = (e) => ce(
  e,
  mt
).flat(2), oe = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, ie = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => oe(n, t))
}), ut = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? ie(n, t) : null)
}), dt = (e, t) => e.map((n) => oe(n, t)), Et = (e, t) => e.map((n) => ie(n, t)), Xt = (e) => ut(e, (t) => _(t).flat()), yt = (e) => dt(
  e,
  (t) => _(t).flat()
), zt = (e) => Et(e, (t) => _(t).flat()), me = (e, t) => t.includes(e.code), qt = (e) => me(e, At), At = [
  a.PLAY_BGM,
  a.PLAY_BGS,
  a.PLAY_ME,
  a.PLAY_SE,
  a.CHANGE_BATTLE_BGM,
  a.CHANGE_VICTORY_ME,
  a.CHANGE_DEFEAT_ME,
  a.CHANGE_VEHICLE_BGM
], Kt = (e) => me(e, ht), ht = [
  a.SHOW_MESSAGE,
  a.SHOW_PICTURE,
  a.CHANGE_ACTOR_IMAGES,
  a.CHANGE_VEHICLE_IMAGE,
  a.CHANGE_PARALLAX,
  a.CHANGE_BATTLE_BACKGROUND
], $t = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), jt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), xt = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), Jt = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), ue = (e, t) => `<${e}:${t}>`, d = () => /<([^<>:]+):([^>]*)>/g, Zt = (e, t) => de(e.note, (n, r) => t(n, r, e)), Qt = (e) => de(e, (t, n) => [t, n]), de = (e, t) => {
  const n = d(), r = [];
  let o;
  for (; (o = n.exec(e)) !== null; )
    r.push(t(o[1], o[2]));
  return r;
}, bt = (e, t) => e.replace(d(), (n, r, o) => {
  const i = t(r, o);
  return ue(r, i);
}), en = (e, t) => {
  const n = d();
  let r;
  for (; (r = n.exec(e)) !== null; )
    if (r[1] === t)
      return r[2];
}, tn = (e, t, n) => {
  const r = d();
  return e.replace(r, (o, i) => i === t ? ue(i, n) : o);
}, nn = (e) => `code:${e}`, lt = "N", Rt = "V", Ee = (e, t) => `\\${e}[${t}]`, pt = (e) => Ee(lt, e.id), rn = (e) => e.map((t) => ({
  controlChar: pt(t),
  text: t.name
})), an = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: Ee(Rt, n)
})).filter((t) => t.text !== ""), _t = /* @__PURE__ */ new Set([
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
]), sn = (e, t = _t) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, r = [];
  let o;
  for (; (o = n.exec(e)) !== null; ) {
    const i = o[1].toLowerCase(), Ae = parseInt(o[2], 10);
    t.has(i) && r.push({ char: o[1], id: Ae });
  }
  return r;
}, gt = (e, t, n) => t.map((r) => n(r, e[r], e)), cn = (e, t, n) => gt(e, t, n), on = (e) => e.variables.map((t, n) => ({
  id: n,
  name: t
})), mn = (e) => e.elements.map((t, n) => ({
  id: n,
  name: t
})), un = (e) => e.equipTypes.map((t, n) => ({
  id: n,
  name: t
})), dn = (e) => e.skillTypes.map((t, n) => ({
  id: n,
  name: t
})), En = (e) => e.weaponTypes.map((t, n) => ({
  id: n,
  name: t
})), An = (e) => e.armorTypes.map((t, n) => ({
  id: n,
  name: t
})), hn = (e) => e.terms.params.map((t, n) => ({
  id: n,
  name: t
})), ln = (e, t) => {
  switch (e) {
    case P:
      return t.maxHp;
    case O:
      return t.maxMp;
    case v:
      return t.atk;
    case L:
      return t.def;
    case N:
      return t.matk;
    case M:
      return t.mdef;
    case I:
      return t.agi;
    case f:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, Rn = (e, t) => {
  switch (e) {
    case W:
      return t.criticalEvasionRate;
    case Y:
      return t.evasionRate;
    case F:
      return t.counterAttackRate;
    case V:
      return t.criticalRate;
    case k:
      return t.hitRate;
    case D:
      return t.hpRegenerationRate;
    case w:
      return t.magicEvasionRate;
    case B:
      return t.magicReflectionRate;
    case H:
      return t.mpRegenerationRate;
    case G:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, pn = (e, t) => {
  switch (e) {
    case J:
      return t.experienceRate;
    case x:
      return t.targetRate;
    case j:
      return t.floorDamageRate;
    case $:
      return t.guradEffectRate;
    case K:
      return t.mpCostRate;
    case q:
      return t.tpChargeRate;
    case z:
      return t.physicalDamageRate;
    case y:
      return t.magicDamageRate;
    case X:
      return t.pharmacology;
    case U:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, _n = (e, t) => [
  {
    id: Se,
    name: t.normal
  },
  {
    id: fe,
    name: e.bossCollaps
  },
  {
    id: Ie,
    name: e.instantCollaps
  },
  {
    id: Me,
    name: e.noneCollaps
  }
], gn = (e) => [
  {
    id: Ne,
    name: e.encounterHalf
  },
  {
    id: Le,
    name: e.encounterNone
  },
  {
    id: ve,
    name: e.cancelSurprise
  },
  {
    id: Oe,
    name: e.raisePreemptive
  },
  {
    id: Pe,
    name: e.goldDouble
  },
  {
    id: Ge,
    name: e.dropItemDouble
  }
], Cn = (e) => [
  { id: P, name: e.maxHp },
  { id: O, name: e.maxMp },
  { id: v, name: e.atk },
  { id: L, name: e.def },
  { id: N, name: e.matk },
  { id: M, name: e.mdef },
  { id: I, name: e.agi },
  { id: f, name: e.luk }
], Tn = (e) => [
  {
    id: k,
    name: e.hitRate
  },
  {
    id: Y,
    name: e.evasionRate
  },
  {
    id: V,
    name: e.criticalRate
  },
  {
    id: W,
    name: e.criticalEvasionRate
  },
  {
    id: w,
    name: e.magicEvasionRate
  },
  {
    id: B,
    name: e.magicReflectionRate
  },
  {
    id: F,
    name: e.counterAttackRate
  },
  {
    id: D,
    name: e.hpRegenerationRate
  },
  {
    id: H,
    name: e.mpRegenerationRate
  },
  {
    id: G,
    name: e.tpRegenerationRate
  }
], Sn = (e) => [
  {
    id: x,
    name: e.targetRate
  },
  {
    id: $,
    name: e.guradEffectRate
  },
  {
    id: U,
    name: e.recoveryEffectRate
  },
  {
    id: X,
    name: e.pharmacology
  },
  {
    id: K,
    name: e.mpCostRate
  },
  {
    id: q,
    name: e.tpChargeRate
  },
  {
    id: z,
    name: e.physicalDamageRate
  },
  {
    id: y,
    name: e.magicDamageRate
  },
  {
    id: j,
    name: e.floorDamageRate
  },
  {
    id: J,
    name: e.experienceRate
  }
];
export {
  Q as BaseEventCommandGroup,
  be as CHOICE_HELP_TEXT,
  b as CombinedEventCommandGroup,
  Xe as ERROR_COMMAND_MESSAGE,
  Bt as ERROR_COMMAND_SCRIPT,
  ye as ERROR_INVALID_HEAD,
  xe as ERROR_MESSAGE,
  p as SimpleEventCommandGroup,
  s as callHandler,
  nn as codeInfoText,
  l as codeTest,
  Ft as collectMapEvents,
  Tt as constructActor,
  ft as constructArmor,
  Mt as constructClass,
  h as constructDamage,
  St as constructEnemy,
  Nt as constructItem,
  m as constructParamArray,
  Lt as constructSkill,
  vt as constructState,
  It as constructWeapon,
  We as createAdvanced,
  c as createAudio,
  Gt as createAudioCommand,
  ke as createBasicTerms,
  mt as createCommandContext,
  Fe as createCommandsArray,
  rt as createCommentGroup,
  He as createCondtion,
  Ee as createControlCharFormat,
  Jt as createEventCommand,
  Vt as createEventContext,
  we as createEventPage,
  Ot as createMap,
  Pt as createMapEvent,
  Be as createMapEventImage,
  tt as createMessageGroup,
  Ye as createMessages,
  ue as createNoteEntity,
  Ve as createParamNamesArray,
  at as createScriptGroup,
  nt as createScrlloingTextGroup,
  Ht as createSystemData,
  Ue as createSystemSoundsArray,
  De as createTerms,
  E as createVehicle,
  Rn as extraParamName,
  kt as flatMappingCommandList,
  _n as foldCollapsOptions,
  Tn as foldExtraParam,
  gn as foldPartyAbilityOptions,
  Cn as foldRegularParam,
  Sn as foldSpecialParams,
  pt as fromActor,
  rn as fromActors,
  an as fromSystem,
  Ut as gatherEventCommandContext,
  An as getArmorTypes,
  sn as getControlChars,
  mn as getElements,
  un as getEquipTypes,
  en as getNoteValue,
  hn as getParamNames,
  dn as getSkillTypes,
  on as getVariableNames,
  En as getWeaponTypes,
  ne as handleGroupComment,
  ee as handleGroupMessage,
  re as handleGroupScript,
  te as handleGroupScrollingText,
  st as handlerDispatch,
  qt as isAudioCommand,
  R as isBodyParams,
  et as isChoiceHelp,
  wt as isHeadCommand,
  Kt as isImageCommand,
  $e as isMessageHeader,
  Qe as joinCommandBodies,
  d as makeRegex,
  Dt as mapTextCommand,
  ae as mappingCommand,
  ct as mappingCommandList,
  me as matchesEventCommand,
  _ as normalizedCommands,
  yt as normalizedCommonEvents,
  Xt as normalizedMapData,
  zt as normalizedTroops,
  xt as pickCommandParamAudio,
  jt as pickCommandParamNumber,
  $t as pickCommandParamString,
  u as pickCommands,
  ze as pickComments,
  Z as pickHead,
  Ke as pickMessageHeader,
  je as pickMessageWithHead,
  gt as pickPropertys,
  qe as pickScripts,
  Ze as pickScrollText,
  Je as pickScrollTextHeader,
  cn as pickString,
  Wt as processCommonEvents,
  se as processEventPages,
  ce as processMapEvents,
  Yt as processTroopEvents,
  Qt as readNote,
  de as readNoteEx,
  Zt as readNoteObject,
  ln as regularParamName,
  dt as replaceCommonEvents,
  oe as replaceEventCommands,
  ut as replaceMapEvents,
  bt as replaceNote,
  ie as replacePages,
  Et as replaceTroops,
  tn as setNoteValue,
  pn as specialParamName
};
//# sourceMappingURL=rpg-data-tools.es.js.map
