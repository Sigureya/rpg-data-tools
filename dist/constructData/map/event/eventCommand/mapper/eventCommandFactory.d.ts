import { EventCommand } from '@sigureya/rpgtypes';
import { Blueprint } from './template';
export declare class EventCommandFactory<ParamObject extends object, Command extends EventCommand> {
    readonly code: Command["code"];
    private readonly _factory;
    constructor(code: Command["code"], blueprint: Blueprint<ParamObject, Command["parameters"]>);
    validate(command: Partial<EventCommand>): void;
    fromArray(parameters: Command["parameters"]): ParamObject;
    array(param: Partial<ParamObject>): Command["parameters"];
    constructe(param: Partial<ParamObject>, indent?: number): {
        code: Command["code"];
        parameters: Command["parameters"];
        indent: number;
    };
}
