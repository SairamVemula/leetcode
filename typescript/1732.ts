function largestAltitude(gain: number[]): number {
    const start = 0;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        max = Math.max(max, sum);
    }
    return max
};