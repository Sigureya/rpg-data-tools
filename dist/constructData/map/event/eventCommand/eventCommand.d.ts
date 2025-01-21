import { EventCode, EventCommandsMapper } from '@sigureya/rpgtypes';
export declare const constructEventCommand: <Code extends EventCode>(code: Code, parameters: EventCommandsMapper["parameterByCode"][Code], indent?: number) => {
    code: Code;
    parameters: EventCommandsMapper["parameterByCode"][Code];
    indent: number;
};
