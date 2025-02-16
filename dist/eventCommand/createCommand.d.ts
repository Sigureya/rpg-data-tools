import { CommandParamaterType, EventCode, EventCommandLike } from '@sigureya/rpgtypes';
export declare const createEventCommand: <Code extends EventCode, Param extends CommandParamaterType<Code>>(code: Code, param: Param, indent?: number) => EventCommandLike<Code, Param>;
