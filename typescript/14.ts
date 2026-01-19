function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) !== char) return prefix
        }
        prefix += char;
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))