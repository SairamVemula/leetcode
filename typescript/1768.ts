function mergeAlternately(word1: string, word2: string): string {
    const length = word1.length > word2.length ? word1.length : word2.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += (word1.at(i) ?? '') + (word2.at(i) ?? '')
    }
    return result;
};