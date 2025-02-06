import { Command_ShowMessage, Command_ShowMessageBody, Command_ShowScrollingText, Command_ShowScrollingTextBody, Command_Comment, Command_CommentBody, Command_ScriptHeader, Command_ScriptBody } from '@sigureya/rpgtypes';
import { CombinedEventCommandGroup, SimpleEventCommandGroup } from './commandGroop';
export declare const createMessageGroup: (hedder: Command_ShowMessage, bodies?: Command_ShowMessageBody[]) => SimpleEventCommandGroup<Command_ShowMessage, Command_ShowMessageBody>;
export declare const createScrlloingTextGroup: (hedder: Command_ShowScrollingText, bodies?: Command_ShowScrollingTextBody[]) => SimpleEventCommandGroup<Command_ShowScrollingText, Command_ShowScrollingTextBody>;
export declare const createCommentGroup: (hedder: Command_Comment, bodies?: Command_CommentBody[]) => SimpleEventCommandGroup<Command_Comment, Command_CommentBody> | CombinedEventCommandGroup<Command_Comment, Command_CommentBody>;
export declare const createScriptGroup: (hedder: Command_ScriptHeader, bodies?: Command_ScriptBody[]) => CombinedEventCommandGroup<Command_ScriptHeader, Command_ScriptBody>;
