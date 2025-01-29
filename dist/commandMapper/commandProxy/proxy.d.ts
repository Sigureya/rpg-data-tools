import { EventCode, EventCommand, EventCommandByCode } from '@sigureya/rpgtypes';
export declare const create: <BodyCode extends EventCode, HeadCode extends EventCode>(array: ReadonlyArray<EventCommand>, index: number, headCode: HeadCode, bodyCode: BodyCode) => (EventCommandByCode[HeadCode] | EventCommandByCode[BodyCode])[];
