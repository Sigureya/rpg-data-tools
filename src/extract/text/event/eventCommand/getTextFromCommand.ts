import type { EventCommandGroup_Message, TextCommandMapper } from "src";
import {
  mappingCommandList,
  normalizedCommands,
  pickCommandParamString,
  processEventPages,
} from "src";
import type { EventCommand } from "@sigureya/rpgtypes";
import type { Command_ShowChoices } from "@sigureya/rpgtypes";
import { readScript } from "./scriptEx";
import type { TextCommandParameter } from "./types";
import { pickSpeakerName } from "./speaker";

type CommandParam = TextCommandParameter;
export const extractTextFromEventCommands = (
  list: ReadonlyArray<EventCommand>
): TextCommandParameter[][] => {
  // メッセージの表示など結合し、1つのコマンドにまとめる
  const normalized = normalizedCommands(list).flat();
  return mappingCommandList(normalized, extractTextMapper);
};
export const extractTextFromEventPages = (event: {
  pages: { list: EventCommand[] }[];
}): CommandParam[][][] => {
  return processEventPages(event, (page) =>
    extractTextFromEventCommands(page.list)
  );
};

const extractTextMapper: TextCommandMapper<TextCommandParameter[]> = {
  changeName: (command) => [pickCommandParamString(command, 1)],
  changeNickname: (command) => [pickCommandParamString(command, 1)],
  changeProfile: (command) => [pickCommandParamString(command, 1)],
  showChoices: (command) => commandChoice(command),
  showScrollingText: (groop) => {
    return [pickCommandParamString(groop.mergedBody(), 0)];
  },
  showMessage: (data) => {
    return [xxx(data)];
  },
  choiceWhen() {
    return [];
  },
  comment(groop) {
    const command = groop.mergedBody();
    return [pickCommandParamString(command, 0)];
  },
  script: (groop) => readScript(groop),

  other: () => [],
  commentBody: () => [],
};

const xxx = (
  messageCommand: EventCommandGroup_Message
): Required<TextCommandParameter> => {
  return {
    code: messageCommand.bodyCode,
    paramIndex: 0,
    value: messageCommand.getBodyText(),
    speaker: pickSpeakerName(messageCommand.header),
  };
};

export const commandChoice = (command: Command_ShowChoices): CommandParam[] => {
  return command.parameters[0].map<CommandParam>((msg, index) => ({
    code: command.code,
    paramIndex: index,
    value: msg,
  }));
};
