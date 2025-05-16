import type { EventCommandGroup_Message } from "src/eventCommand";
import { pickSpeakerName } from "./speaker";
import type { TextCommandParameter } from "./types";

export const extractTextParamFromMessage = (
  messageCommand: EventCommandGroup_Message
): Required<TextCommandParameter> => {
  return {
    code: messageCommand.bodyCode,
    paramIndex: 0,
    value: messageCommand.getBodyText(),
    speaker: pickSpeakerName(messageCommand.header),
  };
};
