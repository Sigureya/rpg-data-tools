import { EventCommandLike, EventCode, EventCommand, PickCommandByParam } from '@sigureya/rpgtypes';
export declare const isBodyParams: (param: unknown[]) => param is [string] & {
    length: 1;
};
export declare const isHeadCommand: <Code extends EventCode>(code: Code, command: EventCommandLike | undefined) => command is {
    code: Code;
    indent: number;
    parameters: [string];
};
export declare const pickCommands: <Code extends EventCode>(code: Code, arrya: ReadonlyArray<EventCommand>, start: number) => {
    code: Code;
    indent: number;
    parameters: [string];
}[];
export declare const pickHead: <Code extends PickCommandByParam<[string]>["code"]>(commands: ReadonlyArray<EventCommand>, index: number, code: Code) => {
    code: Code;
    indent: number;
    parameters: [string];
};
