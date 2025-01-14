import type { Data_System, Data_Vehicle, System_Advanced, System_Message, System_Terms } from "@sigureya/rpgtypes";
export declare const createSystemData: () => Data_System;
export declare const createAdvanced: () => System_Advanced;
export declare const createVehicle: () => Data_Vehicle;
export declare const createTerms: () => System_Terms;
export declare const createParamNames: () => System_Terms["params"];
export declare const createMessages: () => System_Message;
