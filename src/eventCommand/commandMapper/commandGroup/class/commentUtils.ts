import type * as RpgTypes from "@sigureya/rpgtypes";

/**
 * @description 『MPP_ChoiceEx.js』に対応するための特殊文字列
 */
export const CHOICE_HELP_TEXT = "選択肢ヘルプ" as const;

export const isChoiceHelp = (command: RpgTypes.Command_Comment) => {
  return command.parameters[0] === CHOICE_HELP_TEXT;
};
