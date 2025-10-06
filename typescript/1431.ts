function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);
    return candies.map(c => c + extraCandies >= max);
};

console.log(kidsWithCandies([2,3,5,1,3],3))