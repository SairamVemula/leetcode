function removeStars(s: string): string {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s.at(i) !== '*') stack.push(s.at(i)!);
        else stack.pop();
    }
    return stack.join('')
};