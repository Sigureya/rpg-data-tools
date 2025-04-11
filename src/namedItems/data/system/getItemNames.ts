import type {
  Data_NamedItem,
  Data_System,
  System_ParamNames,
} from "@sigureya/rpgtypes";

export const getVariableNames = (
  system: Pick<Data_System, "variables">
): Data_NamedItem[] => {
  return system.variables.map((variable, index) => ({
    id: index,
    name: variable,
  }));
};

export const getElements = (
  system: Pick<Data_System, "elements">
): Data_NamedItem[] => {
  return system.elements.map((element, index) => ({
    id: index,
    name: element,
  }));
};

export const getEquipTypes = (
  system: Pick<Data_System, "equipTypes">
): Data_NamedItem[] => {
  return system.equipTypes.map((equipType, index) => ({
    id: index,
    name: equipType,
  }));
};

export const getSkillTypes = (
  system: Pick<Data_System, "skillTypes">
): Data_NamedItem[] => {
  return system.skillTypes.map((skillType, index) => ({
    id: index,
    name: skillType,
  }));
};

export const getWeaponTypes = (
  system: Pick<Data_System, "weaponTypes">
): Data_NamedItem[] => {
  return system.weaponTypes.map((weaponType, index) => ({
    id: index,
    name: weaponType,
  }));
};

export const getArmorTypes = (
  system: Pick<Data_System, "armorTypes">
): Data_NamedItem[] => {
  return system.armorTypes.map((armorType, index) => ({
    id: index,
    name: armorType,
  }));
};

export const getParamNames = (system: System_ParamNames) => {
  return system.terms.params.map((param, index) => ({
    id: index,
    name: param,
  }));
};
