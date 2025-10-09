import { withExecutionTime } from "./perfomance";


function isVowel(char?: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return char && vowels.includes(char.toLowerCase());
}

function maxVowels(s: string, k: number): number {
    let i = 0, j = k - 1;
    let max = -Infinity;
    while(j < s.length){
        let sum = 0;
        for (let index = i; index <= j; index++) {
            sum += isVowel(s.at(index)) ? 1 : 0
        }
        max = Math.max(max, sum)
        i++;
        j++;
    }
    return max
};

function maxVowelsOptimized(s: string, k: number): number {
    let max = 0;
    for (let i = 0; i < k; i++) {
        max += isVowel(s.at(i)) ? 1 : 0;
    }
    let max2 = max;
    for (let i = k; i < s.length; i++) {
        let sum = 0;
        sum += isVowel(s.at(i - k)) ? -1 : 0;
        sum += isVowel(s.at(i)) ? 1 : 0;
        max2 = max2 + sum
        max = Math.max(max, max2)
    }
    return max
};

// console.log(withExecutionTime('maxVowels',maxVowels)("abciiidef", 3))
// console.log(withExecutionTime('maxVowelsOptimized',maxVowelsOptimized)("abciiidef", 3))

// console.log(withExecutionTime('maxVowels',maxVowels)("leetcode", 2))
console.log(withExecutionTime('maxVowelsOptimized',maxVowelsOptimized)("leetcode", 2))