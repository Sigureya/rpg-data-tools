import type {
  AudioFileParams,
  ChanageActorVariable,
  ColorRGBA,
  Designation,
  Direction8,
  MoveRouteData,
  Operation_PlusMinus,
  ShopGoods,
  Toggle,
  ValueOf,
} from "@sigureya/rpgtypes";

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
export interface ConditionalBranch {}
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
  id: number;
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

export interface ShowPicture {}
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

export type NO_OPERATION = {};
/**
 * @description Show Text
 */
export type SHOW_MESSAGE = {
  facename: string;
  faceIndex: number;
  background: number;
  positionType: number;
  speakerName: string;
};

/**
 * @description Show Text (body)
 */
export type SHOW_MESSAGE_BODY = { content: string };
/**
 * @description Show Choices
 */
export type SHOW_CHOICES = {
  choices: string[];
  cancelType: number;
  defaultType: number;
  positionType: number;
  background: number;
};

/**
 * @description Show Choices (item)
 */
export type SHOW_CHOICES_ITEM = { index: number; name: string };

/**
 * @description Input Number
 */
export type INPUT_NUMBER = { variableId: number; maxDigits: number };
/**
 * @description Select Item
 */
export type SELECT_ITEM = { variableId: number; itemType: number };

/**
 * @description Show Scrolling Text
 */
export type SHOW_SCROLLING_TEXT = { speed: number; skip: boolean };
/**
 * @description Show Scrolling Text (body)
 */
export type SHOW_SCROLLING_TEXT_BODY = { content: string };

/**
 * @description Comment
 */
export type COMMENT = { content: string };
/**
 * @description note (Comment body)
 */
export type COMMENT_BODY = { content: string };

export type SKIP = {};

/**
 * @description Conditional Branch
 */
export type CONDITIONAL_BRANCH = {};
/**
 * @description Else (Conditional Branch)
 */
export type CONDITIONAL_BRANCH_ELSE = {};

/**
 * @description Loop
 */
export type LOOP = {};

/**
 * @description Break Loop
 */
export type LOOP_BREAK = {};
/**
 * @description Exit Event Processing
 */
export type EXIT_EVENT_PROCESSING = {};
/**
 * @description Common Event
 */
export type COMMON_EVENT = { id: number };
/**
 * @description Label
 */
export type LABEL = { name: string };

/**
 * @description Jump to Label
 */
export type LABEL_JUMP = { name: string };

export type CONTROL_SWITCHES = {
  min: number;
  max: number;
  value: ValueOf<Toggle>;
};

/**
 * @description Control Self Switch
 */
export type CONTROL_SELF_SWITCH = { key: string; value: ValueOf<Toggle> };

/**
 * @description Control Timer
 */
export type CONTROL_TIMER = {
  operation: ValueOf<Operation_PlusMinus>;
  time: number;
};

/**
 * @description Change Gold
 */
export type CHANGE_GOLD = {
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
};

/**
 * @description Change Items
 */
export type CHANGE_ITEMS = {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
};

/**
 * @description Change Weapons
 */
export type CHANGE_WEAPONS = {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
  isEquip: boolean;
};
/**
 * @description Change Armors
 */
export type CHANGE_ARMORS = {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  operationType: number;
  value: number;
  isEquip: boolean;
};
/**
 * @description Change Party Member
 */
export type CHANGE_PARTY_MEMBER = {
  id: number;
  operation: ValueOf<Operation_PlusMinus>;
  isInit: boolean;
};

/**
 * @description Change Battle BGM
 */
export type CHANGE_BATTLE_BGM = { value: AudioFileParams };
/**
 * @description Change Vheicle ME
 */
export type CHANGE_VEHICLE_ME = { value: AudioFileParams };

/**
 * @description Change Victory ME
 */
export type CHANGE_VICTORY_ME = { value: AudioFileParams };

export type CHANGE_TILESET = { tileSetId: number };
export type CHANGE_BATTLE_BACKGROUND = {
  battleBack1Name: string;
  battleBack2name: string;
};

export type BATTLE_PROCESSING = {
  directDesignation: 0;
  troopId: number;
  canEscape: boolean;
  canLose: boolean;
};

/**
 * @description Change Save Access
 */
export type CHANGE_SAVE_ACCESS = { value: ValueOf<Toggle> };

/**
 * @description Change Menu Access
 */
export type CHANGE_MENU_ACCESS = { value: ValueOf<Toggle> };

/**
 * @description Change Encounter
 */
export type CHANGE_ENCOUNTER = { value: ValueOf<Toggle> };

/**
 * @description Change Formation Access
 */
export type CHANGE_FORMATION_ACCESS = { value: ValueOf<Toggle> };

export type CHANGE_WINDOW_COLOR = { color: ColorRGBA };
export type CHANGE_DEFEAT_ME = { me: AudioFileParams };
export type SET_WEATHER_EFFECT = {
  type: string;
  power: number;
  duration: number;
  needsWait: boolean;
};

export type PLAY_BGM = { value: AudioFileParams };
export type FADEOUT_BGM = { duration: number };
export type PLAY_BGS = { value: AudioFileParams };
export type PLAY_SE = { value: AudioFileParams };
export type PLAY_ME = { value: AudioFileParams };

export type SAVE_BGM = {};
export type RESUME_BGM = {};
export type SHOP_PROCESSING = ShopProcessing;
export type SHOP_PROCESSING_BODY = ShopGoods;
export type NAME_INPUT_PROCESSING = { actorId: number; name: string };
// export type CHANGE_HP = {...ChanageActorVariable, allowDetah: boolean};
export type CHANGE_MP = ChanageActorVariable;
export type CHANGE_TP = ChanageActorVariable;

export type CHANGE_NAME = { actorId: number; name: string };

export type CHANGE_PARALLAX = {
  name: string;
  loopX: boolean;
  loopY: boolean;
  sx: number;
  sy: number;
};
export type CHANGE_ACTOR_IMAGES = {
  actorId: number;
  characterImage: string;
  characterIndex: number;
  faceImage: string;
  faceIndex: number;
  battlerImage: string;
};
export type CHANGE_VEHICLE_IMAGE = {
  actorId: number;
  characterImage: string;
  characterIndex: number;
};

export type TRANSFER_PLAYER = {
  designation: ValueOf<Designation>;
  mapId: number;
  x: number;
  y: number;
  direction: Direction8;
  fadeType: number;
};

export type SET_VEHICLE_LOCATION = {};

export type SET_EVENT_LOCATION = {};
export type SCROLL_MAP = {};

export type SET_MOVEMENT_ROUTE = {
  characterId: number;
  movement: MoveRouteData;
};
export type GET_ONOFF_VEHICLE = {};

export type CHANGE_TRANSPARENCY = {};
export type SHOW_ANIMATION = {};

export type SHOW_BALLOON_ICON = {};

export type ERASE_EVENT = {};

export type CHANGE_PLAYER_FOLLOWERS = {};
export type GATHER_FOLLOWERS = {};

export type FADEOUT_SCREEN = {};
export type FADEIN_SCREEN = {};

export type TINT_SCREEN = {};

export type FLASH_SCREEN = {};

export type SHAKE_SCREEN = {};
export type WAIT = { duration: number };

export type SHOW_PICTURE = ShowPicture;
export type MOVE_PICTURE = MovePicture;
export type TINT_PICTURE = {};
export type ROTATE_PICTURE = {};
export type ERASE_PICTURE = { pictureId: number };

/**
 * @description Change Nickname
 */
export type CHANGE_NICKNAME = { actorId: number; name: string };

/**
 * @description Change Profile
 */
export type CHANGE_PROFILE = { actorId: number; name: string };

/**
 * @description  Script Eval
 */
export type SCRIPT_EVAL = { script: string };
/**
 * @description  Script Eval(body)
 */
export type SCRIPT_EVAL_BODY = { script: string };

/**
 * @description  Plugin Command (MZ)
 */
export type PLUGIN_COMMAND_MV = { data: string };

/**
 * @description  Plugin Command (MZ)
 */
export type PLUGIN_COMMAND_MZ = {
  filename: string;
  commandName: string;
  anything: string;
  args: Record<string, string>;
};