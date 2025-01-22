export interface ControlChar {
  char: string; // 制御文字
  id: number; // 数字部分
}

const defaultSet: ReadonlySet<Lowercase<string>> = new Set([
  "px",
  "py",
  "x",
  "y",
  "v",
  "n",
  "p",
  "g",
  "c",
  "i",
  "fs",
]);

/**
 * 指定されたテキストから制御文字を抽出し、ControlChar配列として返します。
 * 制御文字の形式: \(文字)[数字]
 * 文字の大文字小文字を区別しない。
 */
export const getControlChars = (
  text: string,
  validChars: ReadonlySet<Lowercase<string>> = defaultSet
): ControlChar[] => {
  // 正規表現: \(制御文字)[数字]
  const regex = /\\([A-Za-z]+)\[(\d+)]/g;

  const controlChars: ControlChar[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const char = match[1].toLowerCase() as Lowercase<string>;
    const id = parseInt(match[2], 10);

    if (validChars.has(char)) {
      controlChars.push({ char: match[1], id }); // 大文字小文字区別しないが元の文字を保持
    }
  }

  return controlChars;
};
