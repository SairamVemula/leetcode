// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.

function isVowel(char?: string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return char && vowels.includes(char.toLowerCase());
}

function maxFreqSum(s: string): number {
    const consonants = new Map<string,number>();
    const vowels = new Map<string,number>();
    for (let i = 0; i < s.length; i++) {
        const char = s.at(i)!;
        const v = (isVowel(char) ? vowels : consonants);
        v.set(char, ((v.get(char) ?? 0) + 1));
    }
    return (vowels.size ? Math.max(...vowels.values()) : 0) + (consonants.size ? Math.max(...consonants.values()) : 0)
};

// console.log(maxFreqSum("successes"))
console.log(maxFreqSum("aeiaeia"))