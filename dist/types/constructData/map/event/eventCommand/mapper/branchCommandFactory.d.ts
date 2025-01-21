import type { EventCommandTable } from "@sigureya/rpgtypes";
import { ParameterFactory } from "./template";
export declare class BranchCommandFactory<MappedParamObject extends object, ParameterArray extends EventCommandTable["CONDITIONAL_BRANCH"]["parameters"]> extends ParameterFactory<MappedParamObject, ParameterArray> {
    createCommand(arg: Partial<MappedParamObject>): EventCommandTable["CONDITIONAL_BRANCH"];
}
