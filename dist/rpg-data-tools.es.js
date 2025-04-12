import * as a from "@sigureya/rpgtypes";
import { COMMENT as S, COMMENT_BODY as he, SCRIPT_EVAL as g, SCRIPT_EVAL_BODY as Re, SHOW_MESSAGE as I, SHOW_MESSAGE_BODY as _e, SHOW_SCROLLING_TEXT as l, SHOW_SCROLLING_TEXT_BODY as N, CHANGE_NICKNAME as Ce, CHANGE_PROFILE as Te, CHANGE_NAME as Se, SHOW_CHOICES_ITEM as ge, SHOW_CHOICES as Ie, REGULAR_PARAM_LUK as M, REGULAR_PARAM_AGI as f, REGULAR_PARAM_MDEF as P, REGULAR_PARAM_MATK as L, REGULAR_PARAM_DEF as O, REGULAR_PARAM_ATK as v, REGULAR_PARAM_MAX_MP as G, REGULAR_PARAM_MAX_HP as H, EXTRA_PARAM_TRG as w, EXTRA_PARAM_MRG as B, EXTRA_PARAM_MRF as D, EXTRA_PARAM_MEV as y, EXTRA_PARAM_HRG as k, EXTRA_PARAM_HIT as V, EXTRA_PARAM_CRI as Y, EXTRA_PARAM_CNT as F, EXTRA_PARAM_EVA as W, EXTRA_PARAM_CEV as U, SPECIAL_PARAM_REC as K, SPECIAL_PARAM_PHA as X, SPECIAL_PARAM_MDR as z, SPECIAL_PARAM_PDR as q, SPECIAL_PARAM_TCR as x, SPECIAL_PARAM_MCR as $, SPECIAL_PARAM_GRD as j, SPECIAL_PARAM_FDR as J, SPECIAL_PARAM_TGR as Q, SPECIAL_PARAM_EXR as Z, COLLAPS_NORMAL as Ne, COLLAPS_BOSS as Me, COLLAPS_INSTANT as fe, COLLAPS_NONE as Pe, PARTY_ABILITY_ENCOUNTER_HALF as Le, PARTY_ABILITY_ENCOUNTER_NONE as Oe, PARTY_ABILITY_CANCEL_SURPRISE as ve, PARTY_ABILITY_RAISE_PREEMPTIVE as Ge, PARTY_ABILITY_GOLD_DOUBLE as He, PARTY_ABILITY_DROP_ITEM_DOUBLE as we } from "@sigureya/rpgtypes";
const A = () => [0, 0, 0, 0, 0, 0, 0, 0], rn = (e) => ({
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
}), cn = (e) => ({
  battlerHue: 0,
  id: 0,
  name: "",
  note: "",
  battlerName: "",
  traits: [],
  params: A(),
  exp: 0,
  gold: 0,
  dropItems: [],
  actions: [],
  ...e
}), on = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  params: A(),
  traits: [],
  ...e
}), mn = (e) => ({
  price: 0,
  id: 0,
  name: "",
  note: "",
  iconIndex: 0,
  description: "",
  etypeId: 0,
  wtypeId: 0,
  params: A(),
  traits: [],
  damage: h(),
  ...e
}), un = (e) => ({
  id: 0,
  name: "",
  note: "",
  traits: [],
  learnings: [],
  params: A(),
  expParams: [],
  ...e
}), h = (e) => ({
  type: 0,
  elementId: 0,
  formula: "0",
  variance: 20,
  critical: !1,
  ...e
}), An = (e) => ({
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
}), En = (e) => ({
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
}), dn = (e) => ({
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
}), pn = (e) => ({
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
}), ln = (e) => ({
  id: 0,
  name: "",
  note: "",
  x: 0,
  y: 0,
  pages: [ye()],
  ...e
}), Be = (e) => ({
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
}), De = (e) => ({
  characterIndex: 0,
  characterName: "",
  direction: 6,
  pattern: 0,
  tileId: 0,
  ...e
}), ye = (e) => ({
  conditions: Be(),
  image: De(),
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
}), o = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 90,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), hn = (e, t, n = 0) => ({
  code: e,
  parameters: [o({ name: t })],
  indent: n
}), Rn = (e = {}) => ({
  local: e.local ?? "",
  gameTitle: e.gameTitle ?? "",
  currencyUnit: e.currencyUnit ?? "",
  title1Name: e.title1Name ?? "",
  terms: e.terms ?? ke(),
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
  advanced: e.advanced ?? Ue(),
  armorTypes: e.armorTypes ?? [],
  elements: e.elements ?? [],
  variables: e.variables ?? [],
  equipTypes: e.equipTypes ?? [],
  sounds: e.sounds ?? Ke(),
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
  boat: e.boat ?? p(),
  ship: e.ship ?? p(),
  airship: e.airship ?? p(),
  tileSize: e.tileSize ?? 0
}), ke = (e = {}) => ({
  messages: We(e.messages ?? {}),
  commands: Fe(e.commands ?? {}),
  params: Ye(e.params ?? {}),
  basic: Ve(e.basic ?? {})
}), Ve = (e = {}) => [
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
], Ye = (e = {}) => [
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
], We = (e = {}) => ({
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
}), Ue = (e = {}) => ({
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
}), p = (e = {}) => ({
  bgm: e.bgm ?? o(),
  characterIndex: e.characterIndex ?? 0,
  characterName: e.characterName ?? "",
  startMapId: e.startMapId ?? 0,
  startX: e.startX ?? 0,
  startY: e.startY ?? 0
}), Ke = (e = {}) => [
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
], R = (e, t) => t ? e === t.code : !1, Xe = "MessageHeader invalid command", _n = "Script invalid command", ze = "Invalid Head", _ = (e) => typeof e[0] == "string" && e.length === 1, Cn = (e, t) => t ? e === t.code && _(t.parameters) : !1, E = (e, t, n) => {
  const s = [];
  for (let c = n; c < t.length; c++) {
    const i = t[c];
    if (R(e, i) && _(i.parameters))
      s.push({
        code: e,
        indent: i.indent,
        parameters: [i.parameters[0]]
      });
    else
      break;
  }
  return s;
}, b = (e, t, n) => {
  const s = e[t];
  if (s && R(n, s) && _(s.parameters))
    return {
      code: n,
      indent: s.indent,
      parameters: [s.parameters[0]]
    };
  throw new Error(ze, { cause: s });
}, qe = (e, t) => ({
  head: b(e, t, S),
  bodys: E(he, e, t + 1)
}), xe = (e, t) => ({
  head: b(e, t, g),
  bodys: E(Re, e, t + 1)
}), $e = (e, t) => {
  const n = e[t];
  if (n && je(n))
    return n;
  throw new Error(Xe, { cause: n });
}, je = (e) => !e || e.code !== I || ![4, 5].includes(e.parameters.length) ? !1 : typeof e.parameters[0] == "string" && typeof e.parameters[1] == "number" && typeof e.parameters[2] == "number" && typeof e.parameters[3] == "number", Je = (e, t) => ({
  head: $e(e, t),
  bodys: E(_e, e, t + 1)
}), Qe = "ScrollTextHeader invalid command", Ze = (e, t) => {
  const n = e[t];
  if (R(l, n))
    return n;
  const s = {
    headCode: l,
    bodyCode: N,
    index: t
  };
  throw new Error(Qe, { cause: s });
}, be = (e, t) => ({
  head: Ze(e, t),
  bodys: E(N, e, t + 1)
}), et = (e, t = `
`) => e.map((n) => n.parameters[0]).join(t);
class ee {
  constructor(t, n) {
    this.header = t, this.bodies = n;
  }
  getBodyText(t = `
`) {
    return et(this.getExpandedBodies(), t);
  }
  jopinHedderAndBody() {
    return [this.header, ...this.bodies];
  }
  joinCommandBodies() {
    return this.getExpandedBodies();
  }
}
class C extends ee {
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
class te extends ee {
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
const tt = "選択肢ヘルプ", nt = (e) => e.parameters[0] === tt, st = (e, t = []) => new C(401, e, t), at = (e, t = []) => new C(405, e, t), rt = (e, t = []) => nt(e) ? new C(
  408,
  e,
  t
) : new te(
  e,
  t
), ct = (e, t = []) => new te(e, t), ne = (e, t, n) => {
  const s = Je(e, t), c = st(s.head, s.bodys);
  return n(c);
}, se = (e, t, n) => {
  const s = be(e, t), c = at(s.head, s.bodys);
  return n(c);
}, ae = (e, t, n) => {
  const s = qe(e, t), c = rt(s.head, s.bodys);
  return n(c);
}, re = (e, t, n) => {
  const s = xe(e, t), c = ct(s.head, s.bodys);
  return n(c);
}, ot = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    case I:
      return ne(e, t, n.showMessage);
    case l:
      return se(e, t, n.showScrollingText);
    case S:
      return ae(e, t, n.comment);
    case g:
      return re(e, t, n.script);
    case Ie:
      return n.showChoices(s, t, e);
    case ge:
      return n.choiceWhen(s, t, e);
    case Se:
      return n.changeName(s, t, e);
    case Te:
      return n.changeProfile(s, t, e);
    case Ce:
      return n.changeNickname(s, t, e);
    default:
      return n.other(s, t, e);
  }
}, Tn = (e, t) => e.map(
  (n, s, c) => ot(c, s, t)
), r = (e, t, n, s, c) => s ? s(e, t, n) : c(e, t, n), it = (e, t) => e.map((n, s) => ce(e, s, t)), Sn = (e, t) => e.flatMap((n, s) => ce(e, s, t)), ce = (e, t, n) => {
  const s = e[t];
  switch (s.code) {
    // メッセージ関連
    case a.SHOW_MESSAGE:
      return n.showMessage ? ne(e, t, n.showMessage) : n.other(s, t, e);
    case a.SHOW_MESSAGE_BODY:
      return r(s, t, e, n.showMessageBody, n.other);
    case a.SHOW_SCROLLING_TEXT:
      return n.showScrollingText ? se(e, t, n.showScrollingText) : n.other(s, t, e);
    case a.SHOW_SCROLLING_TEXT_BODY:
      return r(s, t, e, n.showScrollingTextBody, n.other);
    case a.SHOW_CHOICES:
      return r(s, t, e, n.showChoices, n.other);
    case a.SHOW_CHOICES_ITEM:
      return r(s, t, e, n.choiceWhen, n.other);
    // コメント・スクリプト関連
    case a.COMMENT:
      return n.comment ? ae(e, t, n.comment) : n.other(s, t, e);
    case a.COMMENT_BODY:
      return r(s, t, e, n.commentBody, n.other);
    case a.SCRIPT_EVAL:
      return n.script ? re(e, t, n.script) : n.other(s, t, e);
    case a.SCRIPT_EVAL_BODY:
      return r(s, t, e, n.scriptBody, n.other);
    // 条件・制御系
    case a.CONDITIONAL_BRANCH:
      return r(s, t, e, n.conditionalBranch, n.other);
    case a.CONTROL_SWITCHES:
      return r(s, t, e, n.controlSwitch, n.other);
    case a.CONTROL_VARIABLES:
      return r(s, t, e, n.controlVariable, n.other);
    case a.CONTROL_SELF_SWITCH:
      return r(s, t, e, n.controlSelfSwitch, n.other);
    case a.CONTROL_TIMER:
      return r(s, t, e, n.controlTimer, n.other);
    case a.COMMON_EVENT:
      return r(s, t, e, n.commonEvent, n.other);
    // メニュー
    case a.CHANGE_SAVE_ACCESS:
      return r(s, t, e, n.changeSaveAccess, n.other);
    case a.CHANGE_MENU_ACCESS:
      return r(s, t, e, n.changeMenuAccess, n.other);
    case a.CHANGE_ENCOUNTER:
      return r(s, t, e, n.changeEncounter, n.other);
    case a.CHANGE_FORMATION_ACCESS:
      return r(s, t, e, n.changeFormationAccess, n.other);
    // キャラクター情報変更
    case a.CHANGE_NAME:
      return r(s, t, e, n.changeName, n.other);
    case a.CHANGE_PROFILE:
      return r(s, t, e, n.changeProfile, n.other);
    case a.CHANGE_NICKNAME:
      return r(s, t, e, n.changeNickname, n.other);
    case a.CHANGE_ACTOR_IMAGES:
      return r(s, t, e, n.changeActorImages, n.other);
    case a.CHANGE_VEHICLE_IMAGE:
      return r(s, t, e, n.changeVehicleImage, n.other);
    // BGM・音楽関連
    case a.CHANGE_BATTLE_BGM:
      return r(s, t, e, n.changeBattleBGM, n.other);
    case a.CHANGE_VICTORY_ME:
      return r(s, t, e, n.changeVictoryME, n.other);
    case a.CHANGE_DEFEAT_ME:
      return r(s, t, e, n.changeDefeatME, n.other);
    case a.PLAY_BGM:
      return r(s, t, e, n.playBGM, n.other);
    case a.FADEOUT_BGM:
      return r(s, t, e, n.fadeOutBGM, n.other);
    case a.PLAY_SE:
      return r(s, t, e, n.playSE, n.other);
    case a.STOP_SE:
      return r(s, t, e, n.stopSE, n.other);
    case a.PLAY_ME:
      return r(s, t, e, n.playME, n.other);
    // ラベル・ジャンプ
    case a.LABEL:
      return r(s, t, e, n.label, n.other);
    case a.LABEL_JUMP:
      return r(s, t, e, n.labelJump, n.other);
    // 画面演出
    case a.CHANGE_WINDOW_COLOR:
      return r(s, t, e, n.changeWindowColor, n.other);
    case a.TINT_SCREEN:
      return r(s, t, e, n.tintScreen, n.other);
    case a.FLASH_SCREEN:
      return r(s, t, e, n.flashScreen, n.other);
    case a.SHAKE_SCREEN:
      return r(s, t, e, n.shakeScreen, n.other);
    // ピクチャー
    case a.SHOW_PICTURE:
      return r(s, t, e, n.showPicture, n.other);
    case a.MOVE_PICTURE:
      return r(s, t, e, n.movePicture, n.other);
    case a.ROTATE_PICTURE:
      return r(s, t, e, n.rotatePicture, n.other);
    case a.TINT_PICTURE:
      return r(s, t, e, n.tintPicture, n.other);
    case a.ERASE_PICTURE:
      return r(s, t, e, n.erasePicture, n.other);
    // ゲーム進行
    case a.BATTLE_PROCESSING:
      return r(s, t, e, n.battleProcessing, n.other);
    case a.WAIT:
      return r(s, t, e, n.wait, n.other);
    case a.GAME_OVER:
      return r(s, t, e, n.gameover, n.other);
    // 未整理
    case a.CHANGE_PARALLAX:
      return r(s, t, e, n.changeParallax, n.other);
    case a.CHANGE_BATTLE_BACKGROUND:
      return r(s, t, e, n.changeBattleBackground, n.other);
    case a.PLAY_MOVIE:
      return r(s, t, e, n.playMovie, n.other);
    case a.CHANGE_TRANSPARENCY:
      return r(s, t, e, n.changeTransparency, n.other);
    case a.SET_WEATHER_EFFECT:
      return r(s, t, e, n.setWeatherEffects, n.other);
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
    default:
      return n.other(s, t, e);
  }
}, mt = {
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
}, T = (e) => it(e, mt), ut = (e) => !!e, gn = (e, t, n) => ({
  data: e,
  eventId: t,
  pageIndex: n
}), At = (e, t, n) => e.list.map((s) => ({
  data: s,
  eventId: n.id,
  pageIndex: t
})), oe = (e, t) => e.pages.map(
  (n, s) => t(n, s, e)
), ie = (e, t) => e.events.filter(ut).map((n) => oe(n, t)), In = (e, t) => ie(e, t).flat(2), Nn = (e, t) => e.map((n) => oe(n, t)), Mn = (e, t) => e.map((n) => t(n, 0, n)), fn = (e) => ie(
  e,
  At
).flat(2), me = (e, t) => {
  const n = t(e.list);
  return {
    ...e,
    list: n
  };
}, ue = (e, t) => ({
  ...e,
  pages: e.pages.map((n) => me(n, t))
}), Et = (e, t) => ({
  ...e,
  events: e.events.map((n) => n ? ue(n, t) : null)
}), dt = (e, t) => e.map((n) => me(n, t)), pt = (e, t) => e.map((n) => ue(n, t)), Pn = (e) => Et(e, (t) => T(t).flat()), Ln = (e) => dt(
  e,
  (t) => T(t).flat()
), On = (e) => pt(e, (t) => T(t).flat()), Ae = (e, t) => t.includes(e.code), vn = (e) => Ae(e, lt), lt = [
  a.PLAY_BGM,
  a.PLAY_BGS,
  a.PLAY_ME,
  a.PLAY_SE,
  a.CHANGE_BATTLE_BGM,
  a.CHANGE_VICTORY_ME,
  a.CHANGE_DEFEAT_ME,
  a.CHANGE_VEHICLE_BGM
], Gn = (e) => Ae(e, ht), ht = [
  a.SHOW_MESSAGE,
  a.SHOW_PICTURE,
  a.CHANGE_ACTOR_IMAGES,
  a.CHANGE_VEHICLE_IMAGE,
  a.CHANGE_PARALLAX,
  a.CHANGE_BATTLE_BACKGROUND
], Hn = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), wn = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), Bn = (e, t) => ({
  code: e.code,
  paramIndex: t,
  value: e.parameters[t]
}), Dn = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), Ee = (e, t) => `<${e}:${t}>`, d = () => /<([^<>:]+):([^>]*)>/g, yn = (e, t) => de(e.note, (n, s) => t(n, s, e)), kn = (e) => de(e, (t, n) => [t, n]), de = (e, t) => {
  const n = d(), s = [];
  let c;
  for (; (c = n.exec(e)) !== null; )
    s.push(t(c[1], c[2]));
  return s;
}, Vn = (e, t) => e.replace(d(), (n, s, c) => {
  const i = t(s, c);
  return Ee(s, i);
}), Yn = (e, t) => {
  const n = d();
  let s;
  for (; (s = n.exec(e)) !== null; )
    if (s[1] === t)
      return s[2];
}, Fn = (e, t, n) => {
  const s = d();
  return e.replace(s, (c, i) => i === t ? Ee(i, n) : c);
}, Wn = (e) => `code:${e}`, Rt = "N", _t = "V", pe = (e, t) => `\\${e}[${t}]`, Ct = (e) => pe(Rt, e.id), Un = (e) => e.map((t) => ({
  controlChar: Ct(t),
  text: t.name
})), Kn = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: pe(_t, n)
})).filter((t) => t.text !== ""), Tt = /* @__PURE__ */ new Set([
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
]), Xn = (e, t = Tt) => {
  const n = /\\([A-Za-z]+)\[(\d+)]/g, s = [];
  let c;
  for (; (c = n.exec(e)) !== null; ) {
    const i = c[1].toLowerCase(), le = parseInt(c[2], 10);
    t.has(i) && s.push({ char: c[1], id: le });
  }
  return s;
}, St = (e, t, n) => t.map((s) => n(s, e[s], e)), zn = (e, t, n) => St(e, t, n), u = (e, t) => ({
  name: e,
  id: t
}), gt = (e) => e.variables.map(u), It = (e) => e.elements.map(u), Nt = (e) => e.equipTypes.map(u), Mt = (e) => e.skillTypes.map(u), ft = (e) => e.weaponTypes.map(u), Pt = (e) => e.armorTypes.map(u), qn = (e) => e.terms.params.map(u), xn = (e, t) => {
  switch (e) {
    case H:
      return t.maxHp;
    case G:
      return t.maxMp;
    case v:
      return t.atk;
    case O:
      return t.def;
    case L:
      return t.matk;
    case P:
      return t.mdef;
    case f:
      return t.agi;
    case M:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, $n = (e, t) => {
  switch (e) {
    case U:
      return t.criticalEvasionRate;
    case W:
      return t.evasionRate;
    case F:
      return t.counterAttackRate;
    case Y:
      return t.criticalRate;
    case V:
      return t.hitRate;
    case k:
      return t.hpRegenerationRate;
    case y:
      return t.magicEvasionRate;
    case D:
      return t.magicReflectionRate;
    case B:
      return t.mpRegenerationRate;
    case w:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, jn = (e, t) => {
  switch (e) {
    case Z:
      return t.experienceRate;
    case Q:
      return t.targetRate;
    case J:
      return t.floorDamageRate;
    case j:
      return t.guradEffectRate;
    case $:
      return t.mpCostRate;
    case x:
      return t.tpChargeRate;
    case q:
      return t.physicalDamageRate;
    case z:
      return t.magicDamageRate;
    case X:
      return t.pharmacology;
    case K:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, Lt = (e, t) => [
  {
    id: Ne,
    name: t.normal
  },
  {
    id: Me,
    name: e.bossCollaps
  },
  {
    id: fe,
    name: e.instantCollaps
  },
  {
    id: Pe,
    name: e.noneCollaps
  }
], Ot = (e) => [
  {
    id: Le,
    name: e.encounterHalf
  },
  {
    id: Oe,
    name: e.encounterNone
  },
  {
    id: ve,
    name: e.cancelSurprise
  },
  {
    id: Ge,
    name: e.raisePreemptive
  },
  {
    id: He,
    name: e.goldDouble
  },
  {
    id: we,
    name: e.dropItemDouble
  }
], vt = (e) => [
  { id: H, name: e.maxHp },
  { id: G, name: e.maxMp },
  { id: v, name: e.atk },
  { id: O, name: e.def },
  { id: L, name: e.matk },
  { id: P, name: e.mdef },
  { id: f, name: e.agi },
  { id: M, name: e.luk }
], Gt = (e) => [
  {
    id: V,
    name: e.hitRate
  },
  {
    id: W,
    name: e.evasionRate
  },
  {
    id: Y,
    name: e.criticalRate
  },
  {
    id: U,
    name: e.criticalEvasionRate
  },
  {
    id: y,
    name: e.magicEvasionRate
  },
  {
    id: D,
    name: e.magicReflectionRate
  },
  {
    id: F,
    name: e.counterAttackRate
  },
  {
    id: k,
    name: e.hpRegenerationRate
  },
  {
    id: B,
    name: e.mpRegenerationRate
  },
  {
    id: w,
    name: e.tpRegenerationRate
  }
], Ht = (e) => [
  {
    id: Q,
    name: e.targetRate
  },
  {
    id: j,
    name: e.guradEffectRate
  },
  {
    id: K,
    name: e.recoveryEffectRate
  },
  {
    id: X,
    name: e.pharmacology
  },
  {
    id: $,
    name: e.mpCostRate
  },
  {
    id: x,
    name: e.tpChargeRate
  },
  {
    id: q,
    name: e.physicalDamageRate
  },
  {
    id: z,
    name: e.magicDamageRate
  },
  {
    id: J,
    name: e.floorDamageRate
  },
  {
    id: Z,
    name: e.experienceRate
  }
], wt = "params", Bt = "xparams", Dt = "sparams", yt = "collaps", kt = "partyAbiility", Vt = "sflag", Yt = "actors", Ft = "variables", Jn = "map", Wt = "enemy", Ut = "state", Kt = "skill", Xt = "items", zt = "weapon", qt = "armor", xt = "class", $t = "common_event", jt = "troop", Qn = "colors", Jt = "weaponTypes", Qt = "armorTypes", Zt = "equipTypes", Zn = "switches", bt = "skillTypes", en = "elements", tn = (e, t) => ({
  armorTypes: {
    items: Pt(e),
    sourceKey: Qt,
    label: t.armorTypes
  },
  elements: {
    items: It(e),
    sourceKey: en,
    label: t.elements
  },
  equipTypes: {
    items: Nt(e),
    sourceKey: Zt,
    label: t.equipTypes
  },
  skillTypes: {
    items: Mt(e),
    sourceKey: bt,
    label: t.equipTypes
  },
  variables: {
    items: gt(e),
    sourceKey: Ft,
    label: t.variables
  },
  weaponTypes: {
    items: ft(e),
    sourceKey: Jt,
    label: t.weaponTypes
  }
}), m = (e) => e.map((t) => ({ id: t.id, name: t.name })), nn = (e, t) => ({
  actors: {
    items: m(e.actors),
    sourceKey: Yt,
    label: t.actors.domainName
  },
  armors: {
    items: m(e.armors),
    sourceKey: qt,
    label: t.armors.domainName
  },
  classes: {
    items: m(e.classes),
    sourceKey: xt,
    label: t.classes.domainName
  },
  commonEvents: {
    items: m(e.commonEvents),
    sourceKey: $t,
    label: t.commonEvents.domainName
  },
  enemies: {
    items: m(e.enemies),
    sourceKey: Wt,
    label: t.enemies.domainName
  },
  items: {
    items: m(e.items),
    sourceKey: Xt,
    label: t.items.domainName
  },
  skills: {
    items: m(e.skills),
    sourceKey: Kt,
    label: t.items.domainName
  },
  states: {
    items: m(e.states),
    sourceKey: Ut,
    label: t.states.domainName
  },
  troops: {
    items: m(e.troops),
    sourceKey: jt,
    label: t.troops.domainName
  },
  weapons: {
    items: m(e.weapons),
    sourceKey: zt,
    label: t.weapons.domainName
  }
}), sn = (e, t) => ({
  paramRegular: {
    sourceKey: wt,
    label: t.types.regularParam,
    items: vt(t.options.paramRegular)
  },
  paramExtra: {
    sourceKey: Bt,
    label: t.types.extraParam,
    items: Gt(t.options.paramExtra)
  },
  paramSpecial: {
    sourceKey: Dt,
    label: t.types.specialParam,
    items: Ht(t.options.paramSpecial)
  },
  collaps: {
    sourceKey: yt,
    label: t.types.collapseType,
    items: Lt(t.options.collaps, e)
  },
  partyAbility: {
    sourceKey: kt,
    label: t.types.partyAbility,
    items: Ot(t.options.partyAbility)
  },
  specialFlag: {
    sourceKey: Vt,
    label: t.types.specialFlag,
    items: []
  }
}), bn = (e, t, n) => {
  const s = tn(t, e.system), c = sn(e.global, e.trait), i = nn(n, e.domains);
  return [
    s.armorTypes,
    s.elements,
    s.equipTypes,
    s.skillTypes,
    s.variables,
    s.weaponTypes,
    c.collaps,
    c.paramExtra,
    c.paramRegular,
    c.paramSpecial,
    c.partyAbility,
    c.specialFlag,
    i.actors,
    i.armors,
    i.classes,
    i.commonEvents,
    i.enemies,
    i.items,
    i.skills,
    i.states,
    i.troops,
    i.weapons
  ];
};
export {
  ee as BaseEventCommandGroup,
  tt as CHOICE_HELP_TEXT,
  te as CombinedEventCommandGroup,
  Xe as ERROR_COMMAND_MESSAGE,
  _n as ERROR_COMMAND_SCRIPT,
  ze as ERROR_INVALID_HEAD,
  Qe as ERROR_MESSAGE,
  Qt as SRC_ARMOR_TYPES,
  Qn as SRC_COLOR,
  $t as SRC_COMMON_EVNET,
  Yt as SRC_DATA_ACTOR,
  qt as SRC_DATA_ARMOR,
  xt as SRC_DATA_CLASS,
  Wt as SRC_DATA_ENEMY,
  Xt as SRC_DATA_ITEMS,
  Jn as SRC_DATA_MAP,
  Kt as SRC_DATA_SKILL,
  Ut as SRC_DATA_STATE,
  Ft as SRC_DATA_VARIABLE,
  zt as SRC_DATA_WEAPON,
  en as SRC_ELEMENTS,
  Zt as SRC_EQUIP_TYPES,
  Bt as SRC_PARAMS_EXTRA,
  wt as SRC_PARAMS_REGULAR,
  Dt as SRC_PARAMS_SPECIAL,
  bt as SRC_SKILL_TYPES,
  Zn as SRC_SWITCHES,
  yt as SRC_TRAIT_COLLAPS,
  kt as SRC_TRAIT_PARTY_ABILITY,
  Vt as SRC_TRAIT_SPECIAL_FLAG,
  jt as SRC_TROOP,
  Jt as SRC_WEAPON_TYPES,
  C as SimpleEventCommandGroup,
  r as callHandler,
  Wn as codeInfoText,
  R as codeTest,
  In as collectMapEvents,
  rn as constructActor,
  on as constructArmor,
  un as constructClass,
  h as constructDamage,
  cn as constructEnemy,
  An as constructItem,
  A as constructParamArray,
  En as constructSkill,
  dn as constructState,
  mn as constructWeapon,
  Ue as createAdvanced,
  o as createAudio,
  hn as createAudioCommand,
  Ve as createBasicTerms,
  At as createCommandContext,
  Fe as createCommandsArray,
  rt as createCommentGroup,
  Be as createCondtion,
  pe as createControlCharFormat,
  Dn as createEventCommand,
  gn as createEventContext,
  ye as createEventPage,
  pn as createMap,
  ln as createMapEvent,
  De as createMapEventImage,
  st as createMessageGroup,
  We as createMessages,
  Ee as createNoteEntity,
  Ye as createParamNamesArray,
  ct as createScriptGroup,
  at as createScrlloingTextGroup,
  Rn as createSystemData,
  Ke as createSystemSoundsArray,
  ke as createTerms,
  p as createVehicle,
  $n as extraParamName,
  Sn as flatMappingCommandList,
  Lt as foldCollapsOptions,
  Gt as foldExtraParam,
  Ot as foldPartyAbilityOptions,
  vt as foldRegularParam,
  Ht as foldSpecialParams,
  Ct as fromActor,
  Un as fromActors,
  Kn as fromSystem,
  fn as gatherEventCommandContext,
  Pt as getArmorTypes,
  Xn as getControlChars,
  It as getElements,
  Nt as getEquipTypes,
  Yn as getNoteValue,
  qn as getParamNames,
  Mt as getSkillTypes,
  gt as getVariableNames,
  ft as getWeaponTypes,
  ae as handleGroupComment,
  ne as handleGroupMessage,
  re as handleGroupScript,
  se as handleGroupScrollingText,
  ot as handlerDispatch,
  vn as isAudioCommand,
  _ as isBodyParams,
  nt as isChoiceHelp,
  Cn as isHeadCommand,
  Gn as isImageCommand,
  je as isMessageHeader,
  et as joinCommandBodies,
  d as makeRegex,
  Tn as mapTextCommand,
  ce as mappingCommand,
  it as mappingCommandList,
  Ae as matchesEventCommand,
  bn as namedItems,
  T as normalizedCommands,
  Ln as normalizedCommonEvents,
  Pn as normalizedMapData,
  On as normalizedTroops,
  Bn as pickCommandParamAudio,
  wn as pickCommandParamNumber,
  Hn as pickCommandParamString,
  E as pickCommands,
  qe as pickComments,
  b as pickHead,
  $e as pickMessageHeader,
  Je as pickMessageWithHead,
  St as pickPropertys,
  xe as pickScripts,
  be as pickScrollText,
  Ze as pickScrollTextHeader,
  zn as pickString,
  Mn as processCommonEvents,
  oe as processEventPages,
  ie as processMapEvents,
  Nn as processTroopEvents,
  kn as readNote,
  de as readNoteEx,
  yn as readNoteObject,
  xn as regularParamName,
  dt as replaceCommonEvents,
  me as replaceEventCommands,
  Et as replaceMapEvents,
  Vn as replaceNote,
  ue as replacePages,
  pt as replaceTroops,
  Fn as setNoteValue,
  jn as specialParamName
};
//# sourceMappingURL=rpg-data-tools.es.js.map
