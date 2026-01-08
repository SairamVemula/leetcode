
const numpad: Record<string, string> = {
    '1':'',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}
function letterCombinations(digits: string): string[] {
    const keys = digits.split('').map(k => numpad[k]);
    let cbs: string[] = [''];
    for (const key of keys) {
        const lcbs: string[] = [];
        for (let i = 0; i < key.length; i++) {
            const letter = key[i];
            for (const cb of cbs) {
                lcbs.push(cb + letter);
            }
        }
        cbs = lcbs;
    }
    return cbs;
};

console.log(letterCombinations("23"))