import { CommandParamaterType, EventCode, EventCommandLike } from '@sigureya/rpgtypes';
export declare const createEventCommand: <Code extends EventCode>(code: Code, param: CommandParamaterType<Code>, indent?: number) => EventCommandLike<Code, CommandParamaterType<Code>>;
