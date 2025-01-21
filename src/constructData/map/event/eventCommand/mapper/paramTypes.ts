import type {
  AudioFileParams,
  BranchCode,
  ChanageActorVariable,
  ColorRGBA,
  Designation,
  Direction8,
  MoveRouteData,
  Operation_PlusMinus,
  PicutureBlendMode,
  Toggle,
  ValueOf,
} from "@sigureya/rpgtypes";
import type {
  BranchBySwitch,
  BranchByVariable,
  BranchByActor,
  BranchByTimer,
  BranchByCharacter,
  BranchByGold,
  BranchByItem,
  BranchByWeapon,
  BranchByArmor,
  BranchByButton,
  BranchByScript,
} from "./branch/branchParams";

export interface NoOperation {}
/**
 * @description Show Text
 */
export interface ShowMessage {
  facename: string;
  faceIndex: number;
  background: number;
  positionType: number;
  speakerName: string;
}

/**
 * @description Show Text (body)
 */
export interface ShowMessageBody {
  content: string;
}
/**
 * @description Show Choices
 */
export interface ShowChoices {
  choices: string[];
  cancelType: number;
  defaultType: number;
  positionType: number;
  background: number;
}

/**
 * @description Show Choices (item)
 */
export interface ShowChoicesItem {
  index: number;
  name: string;
}

/**
 * @description Input Number
 */
export interface InputNumber {
  variableId: number;
  maxDigits: number;
}
/**
 * @description Select Item
 */
export interface SelectItem {
  variableId: number;
  itemType: number;
}

/**
 * @description Show Scrolling Text
 */
export interface ShowScrollingText {
  speed: number;
  skip: boolean;
}
/**
 * @description Show Scrolling Text (body)
 */
export interface ShowScrollingTextBody {
  content: string;
}

/**
 * @description Comment
 */
export interface Comment {
  content: string;
}
/**
 * @description note (Comment body)
 */
export interface CommentBody {
  content: string;
}

export interface Skip {}

/**
 * @description Conditional Branch
 */
export interface ConditionalBranch {
  branchCode: BranchCode;
  parameters:
    | BranchBySwitch
    | BranchByVariable
    | BranchByActor
    | BranchByTimer
    | BranchByCharacter
    | BranchByGold
    | BranchByItem
    | BranchByWeapon
    | BranchByArmor
    | BranchByButton
    | BranchByScript;
}
/**
 * @description Else (Conditional Branch)
 */
export interface ConditionalBranchElse {}

/**
 * @description Loop
 */
export interface Loop {}

/**
 * @description Break Loop
 */
export interface LoopBreak {}
/**
 * @description Exit Event Processing
 */
export interface ExitEventProcessing {}
/**
 * @description Common Event
 */
export interface CommonEvent {
  commonEventId: number;
}
/**
 * @description Label
 */
export interface Label {
  name: string;
}

/**
 * @description Jump to Label
 */
export interface LabelJump {
  name: string;
}

export interface ControlSwitches {
  min: number;
  max: number;
  value: ValueOf<Toggle>;
}
/**
 * @description Control Variables
 * @todo 複雑なので後回し
 */
export interface ControlVariables {}

/**
 * @description Control Self Switch
 */
export interface ControlSelfSwitch {
  key: string;
  value: ValueOf<Toggle>;
}

/**
 * @description Control Timer
 */
export interface ControlTimer {
  operation: ValueOf<Operation_PlusMinus>;
  time: number;
}

/**
 * @description Change Gold
 */
export interface ChangeGold {
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
}

/**
 * @description Change Items
 */
export interface ChangeItems {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
}

/**
 * @description Change Weapons
 */
export interface ChangeWeapons {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
  isEquip: boolean;
}
/**
 * @description Change Armors
 */
export interface ChangeArmors {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
  isEquip: boolean;
}
/**
 * @description Change Party Member
 */
export interface ChangePartyMember {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  isInit: boolean;
}

/**
 * @description Change Battle BGM
 */
export interface ChangeBattleBgm {
  value: AudioFileParams;
}
/**
 * @description Change Vheicle ME
 */
export interface ChangeVehicleMe {
  value: AudioFileParams;
}

/**
 * @description Change Victory ME
 */
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

/**
 * @description Change Save Access
 */
export interface ChangeSaveAccess {
  value: ValueOf<Toggle>;
}

/**
 * @description Change Menu Access
 */
export interface ChangeMenuAccess {
  value: ValueOf<Toggle>;
}

/**
 * @description Change Encounter
 */
export interface ChangeEncounter {
  value: ValueOf<Toggle>;
}

/**
 * @description Change Formation Access
 */
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

export interface SaveBgm {}
export interface ResumeBgm {}
export interface ShopProcessing {}
export interface ShopProcessingBody {}

export interface NameInputProcessing {
  actorId: number;
  name: string;
}
// export interface ChangeHp extends ChanageActorVariable { allowDetah: boolean; }
export interface ChangeMp extends ChanageActorVariable {}
export interface ChangeTp extends ChanageActorVariable {}

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

export interface SetVehicleLocation {}

export interface SetEventLocation {}
export interface ScrollMap {}

export interface SetMovementRoute {
  characterId: number;
  movement: MoveRouteData;
}
export interface GetOnoffVehicle {}

export interface ChangeTransparency {}
export interface ShowAnimation {}

export interface ShowBalloonIcon {}

export interface EraseEvent {}

export interface ChangePlayerFollowers {}
export interface GatherFollowers {}

export interface FadeoutScreen {}
export interface FadeinScreen {}

export interface TintScreen {}

export interface FlashScreen {}

export interface ShakeScreen {}
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
export interface MovePicture {}
export interface TintPicture {}
export interface RotatePicture {}
export interface ErasePicture {
  pictureId: number;
}

/**
 * @description Change Nickname
 */
export interface ChangeNickname {
  actorId: number;
  name: string;
}

/**
 * @description Change Profile
 */
export interface ChangeProfile {
  actorId: number;
  name: string;
}

/**
 * @description  Script Eval
 */
export interface ScriptEval {
  script: string;
}
/**
 * @description  Script Eval(body)
 */
export interface ScriptEvalBody {
  script: string;
}

/**
 * @description  Plugin Command (MV)
 */
export interface PluginCommandMv {
  data: string;
}

/**
 * @description  Plugin Command (MZ)
 */
export interface PluginCommandMz {
  filename: string;
  commandName: string;
  anything: string;
  args: Record<string, string>;
}
