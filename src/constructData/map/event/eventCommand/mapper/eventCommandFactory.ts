import type { EventCommand } from "@sigureya/rpgtypes";
import { ParameterFactory, type Blueprint } from "./template";

export class EventCommandFactory<
  ParamObject extends object,
  Command extends EventCommand
> {
  private readonly _factory: ParameterFactory<
    ParamObject,
    Command["parameters"]
  >;
  constructor(
    public readonly code: Command["code"],
    blueprint: Blueprint<ParamObject, Command["parameters"]>
  ) {
    this._factory = new ParameterFactory(blueprint);
  }
  validate(command: Partial<EventCommand>) {
    if (command.code === undefined) {
      throw new Error("command.code is undefined");
    }
    // 無関係のコードの場合は無視する
    if (command.code !== this.code) {
      return;
    }
  }
}
