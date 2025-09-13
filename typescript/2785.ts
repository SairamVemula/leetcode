// Input: s = "lEetcOde"
// Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.

function isVowel(char?: string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return char && vowels.includes(char.toLowerCase());
}

function sortVowels(s: string) {
    const positions: number[] = [];
    const chars: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.at(i);
        if (char && isVowel(char)) {
            positions.push(i);
            chars.push(char)
        }
    }
    chars.sort();
    const _s = s.split('');
    for (const [i,p] of positions.entries()) {
        _s[p] = chars[i];
    }
    return _s.join('');
};

console.log(sortVowels("lYmpH"))