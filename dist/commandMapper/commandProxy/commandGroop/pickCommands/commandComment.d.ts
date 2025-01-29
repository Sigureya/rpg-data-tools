import { EventCommand, Command_Comment, Command_CommentBody } from '@sigureya/rpgtypes';
import { EventCommandPair } from './types';
export declare const pickComments: (array: ReadonlyArray<EventCommand>, start: number) => EventCommandPair<Command_Comment, Command_CommentBody>;
