function compress(chars: string[]): number {
    let char = chars[0], start = 0, end = 1;
    while (end < chars.length) {
        if (char !== chars[end]) {
            const len = end - start;
            const arr = (char + (len > 1 ? len : '')).split('');
            chars.splice(start, len, ...arr);
            start = start + arr.length;
            end = start + 1;
            char = chars[start]
            // console.log({char,start,end})
            continue;
        }
        end++;
    }
            const len = end - start;
            const arr = (char + (len > 1 ? len : '')).split('');
            chars.splice(start, len, ...arr);
    // console.log(chars)
    return chars.length
};

console.log(compress(["a","a","a","b","b","a","a"]))