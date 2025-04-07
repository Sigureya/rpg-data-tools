import { CollapsOptionLabels, Data_NamedItem, ExtraParamLabels, PartyAbilityOptionLabels, SpecialParamLabels, GlobalLabel, RegularParamLabels } from '@sigureya/rpgtypes';
export declare const foldCollapsOptions: (options: CollapsOptionLabels, global: Pick<GlobalLabel, "normal">) => Data_NamedItem[];
export declare const foldPartyAbilityOptions: (options: PartyAbilityOptionLabels) => Data_NamedItem[];
export declare const foldRegularParam: (param: RegularParamLabels) => Data_NamedItem[];
export declare const foldXParam: (xparam: ExtraParamLabels) => Data_NamedItem[];
export declare const foldSpecialParams: (specialParams: SpecialParamLabels) => Data_NamedItem[];
