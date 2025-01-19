import type { AudioFileParams, ChanageActorVariable, ColorRGBA, Designation, Direction8, MoveRouteData, Operation_PlusMinus, PicutureBlendMode, Toggle, ValueOf } from "@sigureya/rpgtypes";
export interface NoOperation {
}
export interface ShowMessage {
    facename: string;
    faceIndex: number;
    background: number;
    positionType: number;
    speakerName: string;
}
export interface ShowMessageBody {
    content: string;
}
export interface ShowChoices {
    choices: string[];
    cancelType: number;
    defaultType: number;
    positionType: number;
    background: number;
}
export interface ShowChoicesItem {
    index: number;
    name: string;
}
export interface InputNumber {
    variableId: number;
    maxDigits: number;
}
export interface SelectItem {
    variableId: number;
    itemType: number;
}
export interface ShowScrollingText {
    speed: number;
    skip: boolean;
}
export interface ShowScrollingTextBody {
    content: string;
}
export interface Comment {
    content: string;
}
export interface CommentBody {
    content: string;
}
export interface Skip {
}
export interface ConditionalBranch {
}
export interface ConditionalBranchElse {
}
export interface Loop {
}
export interface LoopBreak {
}
export interface ExitEventProcessing {
}
export interface CommonEvent {
    id: number;
}
export interface Label {
    name: string;
}
export interface LabelJump {
    name: string;
}
export interface ControlSwitches {
    min: number;
    max: number;
    value: ValueOf<Toggle>;
}
export interface ControlVariables {
}
export interface ControlSelfSwitch {
    key: string;
    value: ValueOf<Toggle>;
}
export interface ControlTimer {
    operation: ValueOf<Operation_PlusMinus>;
    time: number;
}
export interface ChangeGold {
    operation: ValueOf<Operation_PlusMinus>;
    operationType: number;
    value: number;
}
export interface ChangeItems {
    id: number;
    operation: ValueOf<Operation_PlusMinus>;
    operationType: number;
    value: number;
}
export interface ChangeWeapons {
    id: number;
    operation: ValueOf<Operation_PlusMinus>;
    operationType: number;
    value: number;
    isEquip: boolean;
}
export interface ChangeArmors {
    id: number;
    operation: ValueOf<Operation_PlusMinus>;
    operationType: number;
    value: number;
    isEquip: boolean;
}
export interface ChangePartyMember {
    id: number;
    operation: ValueOf<Operation_PlusMinus>;
    isInit: boolean;
}
export interface ChangeBattleBgm {
    value: AudioFileParams;
}
export interface ChangeVehicleMe {
    value: AudioFileParams;
}
export interface ChangeVictoryMe {
    value: AudioFileParams;
}
export interface ChangeTileset {
    tileSetId: number;
}
export interface ChangeBattleBackground {
    battleBack1Name: string;
    battleBack2name: string;
}
export interface BattleProcessing {
    directDesignation: 0;
    troopId: number;
    canEscape: boolean;
    canLose: boolean;
}
export interface ChangeSaveAccess {
    value: ValueOf<Toggle>;
}
export interface ChangeMenuAccess {
    value: ValueOf<Toggle>;
}
export interface ChangeEncounter {
    value: ValueOf<Toggle>;
}
export interface ChangeFormationAccess {
    value: ValueOf<Toggle>;
}
export interface ChangeWindowColor {
    color: ColorRGBA;
}
export interface ChangeDefeatMe {
    me: AudioFileParams;
}
export interface SetWeatherEffect {
    type: string;
    power: number;
    duration: number;
    needsWait: boolean;
}
export interface PlayBgm {
    value: AudioFileParams;
}
export interface FadeoutBgm {
    duration: number;
}
export interface PlayBgs {
    value: AudioFileParams;
}
export interface PlaySe {
    value: AudioFileParams;
}
export interface PlayMe {
    value: AudioFileParams;
}
export interface SaveBgm {
}
export interface ResumeBgm {
}
export interface ShopProcessing {
}
export interface ShopProcessingBody {
}
export interface NameInputProcessing {
    actorId: number;
    name: string;
}
export interface ChangeMp extends ChanageActorVariable {
}
export interface ChangeTp extends ChanageActorVariable {
}
export interface ChangeName {
    actorId: number;
    name: string;
}
export interface ChangeParallax {
    name: string;
    loopX: boolean;
    loopY: boolean;
    sx: number;
    sy: number;
}
export interface ChangeActorImages {
    actorId: number;
    characterImage: string;
    characterIndex: number;
    faceImage: string;
    faceIndex: number;
    battlerImage: string;
}
export interface ChangeVehicleImage {
    actorId: number;
    characterImage: string;
    characterIndex: number;
}
export interface TransferPlayer {
    designation: ValueOf<Designation>;
    mapId: number;
    x: number;
    y: number;
    direction: Direction8;
    fadeType: number;
}
export interface SetVehicleLocation {
}
export interface SetEventLocation {
}
export interface ScrollMap {
}
export interface SetMovementRoute {
    characterId: number;
    movement: MoveRouteData;
}
export interface GetOnoffVehicle {
}
export interface ChangeTransparency {
}
export interface ShowAnimation {
}
export interface ShowBalloonIcon {
}
export interface EraseEvent {
}
export interface ChangePlayerFollowers {
}
export interface GatherFollowers {
}
export interface FadeoutScreen {
}
export interface FadeinScreen {
}
export interface TintScreen {
}
export interface FlashScreen {
}
export interface ShakeScreen {
}
export interface Wait {
    duration: number;
}
export interface ShowPicture {
    pictureId: number;
    filename: string;
    origin: 0 | 1;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    opacity: number;
    blendMode: PicutureBlendMode;
}
export interface MovePicture {
}
export interface TintPicture {
}
export interface RotatePicture {
}
export interface ErasePicture {
    pictureId: number;
}
export interface ChangeNickname {
    actorId: number;
    name: string;
}
export interface ChangeProfile {
    actorId: number;
    name: string;
}
export interface ScriptEval {
    script: string;
}
export interface ScriptEvalBody {
    script: string;
}
export interface PluginCommandMv {
    data: string;
}
export interface PluginCommandMz {
    filename: string;
    commandName: string;
    anything: string;
    args: Record<string, string>;
}
