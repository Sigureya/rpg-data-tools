import { Command_ShowMessage, Command_ShowMessageBody, EventCommand } from '@sigureya/rpgtypes';
import { EventCommandPair } from './types';
export declare const pickMessageHeader: (arrya: ReadonlyArray<EventCommand>, start: number) => Command_ShowMessage;
export declare const isMessageHeader: (command: EventCommand | undefined) => command is Command_ShowMessage;
export declare const pickMessageWithHead: (arrya: ReadonlyArray<EventCommand>, start: number) => EventCommandPair<Command_ShowMessage, Command_ShowMessageBody>;
