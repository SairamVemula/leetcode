function isSubsequence(s: string, t: string): boolean {
    let i = 0, j = 0;
    if(!s.length) return true
    while (i < t.length && j < s.length){
        if (t.at(i) === s.at(j)) j++;
        i++;
    }
    return j === s.length
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("b", "c"))