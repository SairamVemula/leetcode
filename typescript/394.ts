function decodeString(s: string): string {
    const stack: string[] = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }
        let sub = '';
        while (stack.length && stack.at(-1)! !== '[') {
            sub = stack.pop() + sub;
        }
        stack.pop();
        let n = '';
        while (!isNaN(parseInt(stack.at(-1)!))) n = stack.pop() + n;
        for (let j = 0; j < parseInt(n); j++)  stack.push(sub);
    }
    return result + stack.join('');
};

/*
*/

// console.log(decodeString("3[a]2[bc]")) // aaabcbc
// console.log(decodeString("3[a2[c]]")) // accaccacc
// console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("100[leetcode]"))