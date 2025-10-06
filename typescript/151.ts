function reverseWords(s: string): string {
    return s.split(' ').filter(s => s.trim()).reverse().join(' ')
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))