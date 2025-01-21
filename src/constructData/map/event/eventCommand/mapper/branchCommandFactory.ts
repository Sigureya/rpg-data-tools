import type { EventCommandTable } from "@sigureya/rpgtypes";
import { ParameterFactory } from "./template";

export class BranchCommandFactory<
  MappedParamObject extends object,
  ParameterArray extends EventCommandTable["CONDITIONAL_BRANCH"]["parameters"]
> extends ParameterFactory<MappedParamObject, ParameterArray> {
  command(
    arg: Partial<MappedParamObject>
  ): EventCommandTable["CONDITIONAL_BRANCH"] {
    return {
      code: 111,
      indent: 0,
      parameters: this.toArray(arg),
    };
  }
}
