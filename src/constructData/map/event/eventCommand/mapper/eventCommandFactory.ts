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
  validate(command: Partial<EventCommand>): void {
    if (command.code === undefined) {
      throw new Error("command.code is undefined");
    }
    // 関係のあるコードならチェックする
    if (command.code === this.code) {
      this._factory.validateArrayParam(
        command.parameters as unknown as Command["parameters"]
      );
    }
  }

  fromArray(parameters: Command["parameters"]): ParamObject {
    return this._factory.fromArray(parameters);
  }
  array(param: Partial<ParamObject>): Command["parameters"] {
    return this._factory.toArray(param);
  }
  constructe(
    param: Partial<ParamObject>,
    indent = 0
  ): {
    code: Command["code"];
    parameters: Command["parameters"];
    indent: number;
  } {
    // 補足:戻り値を明示的に書くのは必須。
    // これが抜けるとコンパイル結果の可読性が一気に悪化する
    return {
      code: this.code,
      parameters: this._factory.toArray(param),
      indent,
    };
  }
}
