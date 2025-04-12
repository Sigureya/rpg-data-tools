import { GlobalLabel, System_DataNames, TraitLabels } from '@sigureya/rpgtypes';
import { NamedItemRecord, NamedItemSource } from './listSource';
import { GlobalGameDataNamedItems } from './data/main/types';
import { MainDataDomains } from './data/main/domains';
interface NamedItems_System {
    armorTypes: NamedItemSource;
    weaponTypes: NamedItemSource;
    skillTypes: NamedItemSource;
    elements: NamedItemSource;
    variables: NamedItemSource;
    equipTypes: NamedItemSource;
}
export interface SystemLables {
    armorTypes: string;
    weaponTypes: string;
    skillTypes: string;
    elements: string;
    variables: string;
    equipTypes: string;
}
export declare const systemData: (system: System_DataNames, labels: SystemLables) => NamedItems_System;
export declare const mainData: (gameData: GlobalGameDataNamedItems, domains: MainDataDomains) => NamedItemRecord<GlobalGameDataNamedItems>;
export declare const trait: (globalLabel: Pick<GlobalLabel, "normal">, labels: TraitLabels) => NamedItemRecord<TraitLabels["options"]>;
export {};
