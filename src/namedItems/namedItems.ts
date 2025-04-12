import type { EditorLabels, System_DataNames } from "@sigureya/rpgtypes";
import type { NamedItemSource } from "./listSource";
import type { SystemLables } from "./namedItemDetatil";
import { mainData, systemData, trait } from "./namedItemDetatil";
import type { MainDataDomains, GlobalGameDataNamedItems } from "./transformers";

export const namedItems = (
  labels: EditorLabels & { system: SystemLables; domains: MainDataDomains },
  system: System_DataNames,
  gameData: GlobalGameDataNamedItems
): NamedItemSource[] => {
  const systemSrc = systemData(system, labels.system);
  const traitSrc = trait(labels.global, labels.trait);
  const main = mainData(gameData, labels.domains);

  return [
    systemSrc.armorTypes,
    systemSrc.elements,
    systemSrc.equipTypes,
    systemSrc.skillTypes,
    systemSrc.variables,
    systemSrc.weaponTypes,
    traitSrc.collaps,
    traitSrc.paramExtra,
    traitSrc.paramRegular,
    traitSrc.paramSpecial,
    traitSrc.partyAbility,
    traitSrc.specialFlag,
    main.actors,
    main.armors,
    main.classes,
    main.commonEvents,
    main.enemies,
    main.items,
    main.skills,
    main.states,
    main.troops,
    main.weapons,
  ];
};
