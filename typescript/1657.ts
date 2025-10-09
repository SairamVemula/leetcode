function closeStrings(word1: string, word2: string): boolean {
    const map1 = new Map();
    const map2 = new Map();
    if(word1.length !== word2.length) return false;
    word1.split('').map(c => map1.set(c, (map1.get(c) ?? 0) + 1));
    word2.split('').map(c => map2.set(c, (map2.get(c) ?? 0) + 1));
    const newWord1 = Array.from(map1.keys()).sort();
    const newWord2 = Array.from(map2.keys()).sort();
    const len1 = Array.from(map1.values()).sort().join('');
    const len2 = Array.from(map2.values()).sort().join('');
    return newWord1.join('') === newWord2.join('') && len1 === len2
};