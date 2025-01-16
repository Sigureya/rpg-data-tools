import type { Data_System, Terms_Messages, System_Terms, System_Advanced, Data_Vehicle, Terms_BasicArray, Terms_ParamNamesArray, Terms_CommandArray, System_SoundsArray } from "@sigureya/rpgtypes";
import type { SystemSounds } from "./audio";
import type { ParamTable } from "./paramArray";
import type { Terms_Commands, BasicTerms } from "./types";
export declare const createSystemData: (system?: Partial<Data_System>) => Data_System;
export declare const createTerms: (proto?: {
    messages?: Partial<Terms_Messages>;
    commands?: Partial<Terms_Commands>;
    params?: Partial<ParamTable<string>>;
    basic?: Partial<BasicTerms>;
}) => System_Terms;
export declare const createBasicTerms: (proto?: Partial<BasicTerms>) => Terms_BasicArray;
export declare const createParamNamesArray: (names?: Partial<ParamTable<string>>) => Terms_ParamNamesArray;
export declare const createCommandsArray: (proto?: Partial<Terms_Commands>) => Terms_CommandArray;
export declare const createMessages: (proto?: Partial<Terms_Messages>) => Terms_Messages;
export declare const createAdvanced: (proto?: Partial<System_Advanced>) => System_Advanced;
export declare const createVehicle: (proto?: Partial<Data_Vehicle>) => Data_Vehicle;
export declare const createSystemSoundsArray: (proto?: Partial<SystemSounds>) => System_SoundsArray;
