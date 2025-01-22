export const createNoteEntity = (key: string, value: string) => {
  return `<${key}:${value}>` as const;
};

const reg = /<([^<>:]+):([^>]*)>/g;

export const readNote = (note: string) => {
  reg.exec(note);
};
export function replaceNote(
  note: string,
  dictionary: (key: string, value: string) => string
) {
  return note.replace(
    /<([^<>:]+):([^>]*)>/g,
    (_subString, key: string, value: string) => {
      const newText: string = dictionary(key, value);
      return createNoteEntity(key, newText);
    }
  );
}
