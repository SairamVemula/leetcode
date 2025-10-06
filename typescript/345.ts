function isVowel(char?: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return char && vowels.includes(char.toLowerCase());
}

function reverseVowels(s: string): string {
    const letters = s.split('');
    let j = letters.length - 1
    for (let i = 0; i < j; i++) {
        if (isVowel(letters[i])) {
            while (j > i) {
                if (isVowel(letters[j])) {
                    const temp = letters[i];
                    letters[i] = letters[j];
                    letters[j] = temp;
                    j--;
                    break;
                }
                j--;
            }
        }
    }
    return letters.join('');
};


console.log(reverseVowels("IceCreAm"))