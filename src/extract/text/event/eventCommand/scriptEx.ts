import { SCRIPT_EVAL } from "@sigureya/rpgtypes";
import type { CommandParameter } from "src/eventCommand";
import type { EventCommandGroup_Script } from "src/eventCommand/commandMapper/commandGroup";
type CommandParam = CommandParameter<string>;

export function literalsFromScript(text: string): string[] {
  // 万が一undefinedが来た場合でも落ちないようにする
  const matchResult = (text || "").matchAll(/`(.+?)`|"(.+?)"|'(.+?)'/g);

  return Array.from(matchResult).flatMap((matchArray) =>
    matchArray.filter(
      (value, index) =>
        index !== 0 && // 文字列全体を示す先頭は無視する
        !!value // undefinedは無視する
    )
  );
}

export const readScript = (
  script: EventCommandGroup_Script
): CommandParam[] => {
  return literalsFromScript(script.getBodyText()).map((msg, index) => ({
    code: SCRIPT_EVAL,
    paramIndex: index,
    value: msg,
  }));
};
