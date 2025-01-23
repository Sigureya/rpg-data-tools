import type { NoteReadResult } from "./types";

export const createNoteEntity = (key: string, value: string): string => {
  return `<${key}:${value}>`;
};

export const makeRegex = () => /<([^<>:]+):([^>]*)>/g;

export const readNoteObject = <Result, T extends { note: string }>(
  data: T,
  fn: (key: string, value: string, data: T) => Result
): Result[] => readNoteEx(data.note, (key, value) => fn(key, value, data));

export const readNote = (note: string): NoteReadResult[] => {
  return readNoteEx(note, (key, value) => [key, value]);
};
/**
 * note文字列を解析し、キーと値のペアを取得します。
 * タグが閉じられていない場合、その要素は無視されます。
 */
export const readNoteEx = <Result>(
  note: string,
  fn: (key: string, value: string) => Result
): Result[] => {
  const regex = makeRegex();
  const result: Result[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(note)) !== null) {
    result.push(fn(match[1], match[2]));
  }
  return result;
};
/**
 *
 * @param note
 * @param transformFunction この関数の戻り値でvalueを置き換える
 * @returns
 */
export const replaceNote = (
  note: string,
  transformFunction: (key: string, value: string) => string
): string => {
  return note.replace(makeRegex(), (_subString, key: string, value: string) => {
    const newText = transformFunction(key, value);
    return createNoteEntity(key, newText);
  });
};

export const getNoteValue = (
  note: string,
  targetKey: string
): string | undefined => {
  const regex = makeRegex();
  let match: RegExpExecArray | null;

  while ((match = regex.exec(note)) !== null) {
    if (match[1] === targetKey) {
      return match[2];
    }
  }
  return undefined;
};

export const setNoteValue = (
  note: string,
  targetKey: string,
  newValue: string
): string => {
  const regex = makeRegex();

  return note.replace(regex, (match, key: string) => {
    if (key === targetKey) {
      return createNoteEntity(key, newValue); // 対象キーの場合のみ値を差し替え
    }
    return match; // 対象外はそのまま
  });
};
