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
