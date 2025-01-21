import { ParameterFactory } from "./template";
export class EventCommandFactory {
    constructor(code, blueprint) {
        this.code = code;
        this._factory = new ParameterFactory(blueprint);
    }
    validate(command) {
        if (command.code === undefined) {
            throw new Error("command.code is undefined");
        }
        if (command.code !== this.code) {
            return;
        }
    }
    fromArray(parameters) {
        return this._factory.fromArray(parameters);
    }
    array(param) {
        return this._factory.array(param);
    }
    constructe(param, indent = 0) {
        return {
            code: this.code,
            parameters: this._factory.array(param),
            indent,
        };
    }
}
//# sourceMappingURL=eventCommandFactory.js.map