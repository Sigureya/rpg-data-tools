import { EditorLabels, System_DataNames } from '@sigureya/rpgtypes';
import { NamedItemSource } from './listSource';
import { SystemLables } from './namedItemDetatil';
import { GlobalGameDataNamedItems, MainDataDomains } from './data/';
export declare const namedItems: (labels: EditorLabels & {
    system: SystemLables;
    domains: MainDataDomains;
}, system: System_DataNames, gameData: GlobalGameDataNamedItems) => NamedItemSource[];
