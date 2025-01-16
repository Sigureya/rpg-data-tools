import type { EventCommandTable } from "@sigureya/rpgtypes";
export declare const createEventCommand: <Code extends keyof EventCommandTable>(code: Code, parameters: EventCommandTable[Code]["parameters"], indent?: number) => {
    code: Code;
    parameters: EventCommandTable[Code]["parameters"];
    indent: number;
};
