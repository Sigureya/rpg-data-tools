import { EventCode, EventCommand } from '@sigureya/rpgtypes';
export type Command_TextBody<Code extends EventCode = EventCode> = Extract<EventCommand, {
    code: Code;
    parameters: [string];
    indent: number;
}>;
