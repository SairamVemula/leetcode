// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.


function canBeTypedWords(text: string, brokenLetters: string): number {
    return text.split(' ').reduce((acc: number, word) => ((acc += brokenLetters.split('').some(l => word.includes(l)) ? 0 : 1), acc), 0)
};

console.log(canBeTypedWords("hello world","ad"))