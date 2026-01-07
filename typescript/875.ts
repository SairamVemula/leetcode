function minEatingSpeed(piles: number[], h: number): number {
    let min = 1, max = Math.max(...piles)
    let i = 0;
    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const hours = piles
            .map((n) => Math.ceil(n / mid))
            .reduce((acc, cur) => acc + cur, 0);

        if (hours > h) {
            min = mid + 1;
        } else {
            i = mid;
            max = mid - 1;
        }
    }
    return i
};

console.log(minEatingSpeed([3, 6, 7, 11], 8))