import type {
  Data_NamedItem,
  GlobalLabel,
  System_DataNames,
  TraitLabels,
} from "@sigureya/rpgtypes";
import type { NamedItemList } from "./listSource";
import {
  INDEX_SOURCE_DATA_ACTOR,
  INDEX_SOURCE_ARMOR,
  INDEX_SOURCE_ARMOR_TYPES,
  INDEX_SOURCE_CLASS,
  INDEX_SOURCE_COMMON_EVNET,
  INDEX_SOURCE_ELEMENTS,
  INDEX_SOURCE_DATA_ENEMY,
  INDEX_SOURCE_EQUIP_TYPES,
  INDEX_SOURCE_ITEMS,
  INDEX_SOURCE_PARAMS,
  INDEX_SOURCE_TRAIT_COLLAPS,
  INDEX_SOURCE_PARAMS_EXTRA,
  INDEX_SOURCE_PARAMS_SPECIAL,
  INDEX_SOURCE_SKILL,
  INDEX_SOURCE_SKILL_TYPES,
  INDEX_SOURCE_DATA_STATE,
  INDEX_SOURCE_TROOP,
  INDEX_SOURCE_DATA_VARIABLE,
  INDEX_SOURCE_WEAPON_TYPES,
  INDEX_SOURCE_TRAIT_PARTY_ABILITY,
  INDEX_SOURCE_TRAIT_SPECIAL_FLAG,
  INDEX_SOURCE_WEAPON,
} from "./listSource";
import {
  getArmorTypes,
  getElements,
  getEquipTypes,
  getSkillTypes,
  getVariableNames,
  getWeaponTypes,
} from "./data";
import type { GlobalGameDataNamedItems } from "./data/main/types";
import type { MainDataDomains } from "./data/main/domains";
import {
  foldCollapsOptions,
  foldExtraParam,
  foldPartyAbilityOptions,
  foldRegularParam,
  foldSpecialParams,
} from "./traits";

interface NamedItems_System {
  armorTypes: NamedItemList;
  weaponTypes: NamedItemList;
  skillTypes: NamedItemList;
  elements: NamedItemList;
  variables: NamedItemList;
  equipTypes: NamedItemList;
}

interface SystemLables {
  armorTypes: string;
  weaponTypes: string;
  skillTypes: string;
  elements: string;
  variables: string;
  equipTypes: string;
}

type XX<T extends {}> = {
  [K in keyof T]: NamedItemList;
};

export const systemData = (
  system: System_DataNames,
  labels: SystemLables
): NamedItems_System => ({
  armorTypes: {
    items: getArmorTypes(system),
    key: INDEX_SOURCE_ARMOR_TYPES,
    label: labels.armorTypes,
  },
  elements: {
    items: getElements(system),
    key: INDEX_SOURCE_ELEMENTS,
    label: labels.elements,
  },
  equipTypes: {
    items: getEquipTypes(system),
    key: INDEX_SOURCE_EQUIP_TYPES,
    label: labels.equipTypes,
  },
  skillTypes: {
    items: getSkillTypes(system),
    key: INDEX_SOURCE_SKILL_TYPES,
    label: labels.equipTypes,
  },
  variables: {
    items: getVariableNames(system),
    key: INDEX_SOURCE_DATA_VARIABLE,
    label: labels.variables,
  },
  weaponTypes: {
    items: getWeaponTypes(system),
    key: INDEX_SOURCE_WEAPON_TYPES,
    label: labels.weaponTypes,
  },
});

const namedItems = (itemList: Data_NamedItem[]): Data_NamedItem[] =>
  itemList.map<Data_NamedItem>((item) => ({ id: item.id, name: item.name }));

export const mainData = (
  gameData: GlobalGameDataNamedItems,
  domains: MainDataDomains
): XX<GlobalGameDataNamedItems> => ({
  actors: {
    items: namedItems(gameData.actors),
    key: INDEX_SOURCE_DATA_ACTOR,
    label: domains.actors.domainName,
  },
  armors: {
    items: namedItems(gameData.armors),
    key: INDEX_SOURCE_ARMOR,
    label: domains.armors.domainName,
  },
  classes: {
    items: namedItems(gameData.items),
    key: INDEX_SOURCE_CLASS,
    label: domains.classes.domainName,
  },
  commonEvents: {
    items: namedItems(gameData.commonEvents),
    key: INDEX_SOURCE_COMMON_EVNET,
    label: domains.commonEvents.domainName,
  },
  enemies: {
    items: namedItems(gameData.enemies),
    key: INDEX_SOURCE_DATA_ENEMY,
    label: domains.enemies.domainName,
  },
  items: {
    items: namedItems(gameData.items),
    key: INDEX_SOURCE_ITEMS,
    label: domains.items.domainName,
  },
  skills: {
    items: namedItems(gameData.skills),
    key: INDEX_SOURCE_SKILL,
    label: domains.items.domainName,
  },
  states: {
    items: namedItems(gameData.states),
    key: INDEX_SOURCE_DATA_STATE,
    label: domains.states.domainName,
  },
  troops: {
    items: namedItems(gameData.troops),
    key: INDEX_SOURCE_TROOP,
    label: domains.troops.domainName,
  },
  weapons: {
    items: namedItems(gameData.weapons),
    key: INDEX_SOURCE_WEAPON,
    label: domains.weapons.domainName,
  },
});

export const trait = (
  globalLabel: Pick<GlobalLabel, "normal">,
  labels: TraitLabels
): XX<TraitLabels["options"]> => ({
  paramRegular: {
    key: INDEX_SOURCE_PARAMS,
    label: labels.types.regularParam,
    items: foldRegularParam(labels.options.paramRegular),
  },
  paramExtra: {
    key: INDEX_SOURCE_PARAMS_EXTRA,
    label: labels.types.extraParam,
    items: foldExtraParam(labels.options.paramExtra),
  },
  paramSpecial: {
    key: INDEX_SOURCE_PARAMS_SPECIAL,
    label: labels.types.specialParam,
    items: foldSpecialParams(labels.options.paramSpecial),
  },
  collaps: {
    key: INDEX_SOURCE_TRAIT_COLLAPS,
    label: labels.types.collapseType,
    items: foldCollapsOptions(labels.options.collaps, globalLabel),
  },
  partyAbility: {
    key: INDEX_SOURCE_TRAIT_PARTY_ABILITY,
    label: labels.types.partyAbility,
    items: foldPartyAbilityOptions(labels.options.partyAbility),
  },
  specialFlag: {
    key: INDEX_SOURCE_TRAIT_SPECIAL_FLAG,
    label: labels.types.specialFlag,
    items: [],
  },
});
