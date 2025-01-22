export const createNoteEntity = (key: string, value: string): string => {
  return `<${key}:${value}>`;
};

export const makeRegex = () => /<([^<>:]+):([^>]*)>/g;

/**
 * note文字列を解析し、キーと値のペアを取得します。
 * タグが閉じられていない場合、その要素は無視されます。
 */
export const readNote = (note: string): [string, string][] => {
  const regex = makeRegex();
  const result: [string, string][] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(note)) !== null) {
    result.push([match[1], match[2]]);
  }
  return result;
};

// 修正2: 引数名変更 dictionary → transformFunction
export const replaceNote = (
  note: string,
  transformFunction: (key: string, value: string) => string
): string => {
  return note.replace(makeRegex(), (_subString, key: string, value: string) => {
    const newText = transformFunction(key, value);
    return createNoteEntity(key, newText);
  });
};

// 修正4: 特定のキーに対応するデータを取得する関数
export const getNoteValue = (
  note: string,
  targetKey: string
): string | undefined => {
  const regex = makeRegex();
  let match: RegExpExecArray | null;

  while ((match = regex.exec(note)) !== null) {
    if (match[1] === targetKey) {
      return match[2]; // 対応する値を返す
    }
  }
  return undefined; // 見つからなかった場合
};

// 修正4: 特定のキーに対応する値を差し替える関数
export const setNoteValue = (
  note: string,
  targetKey: string,
  newValue: string
): string => {
  const regex = makeRegex();

  return note.replace(regex, (match, key: string, value: string) => {
    if (key === targetKey) {
      return createNoteEntity(key, newValue); // 対象キーの場合のみ値を差し替え
    }
    return match; // 対象外はそのまま
  });
};
