function romanToInt(s: string): number {
  const map: Record<string,number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const c = map[s[i]];
    const n = i + 1 < s.length ? map[s[i + 1]] : 0;
    if (c < n) {
      result -= c;
    } else {
      result += c;
    }
  }
  return result;
}
