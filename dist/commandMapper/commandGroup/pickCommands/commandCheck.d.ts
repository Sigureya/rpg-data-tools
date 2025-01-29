import { EventCode, EventCommandLike } from '@sigureya/rpgtypes';
export declare const codeTest: <Code extends EventCode>(code: Code, command: EventCommandLike | undefined) => command is EventCommandLike<Code>;
