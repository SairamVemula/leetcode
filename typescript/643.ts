function findMaxAverage(nums: number[], k: number): number {
    let i = 0, j = k - 1;
    let maxAverage = -Infinity;
    while(j < nums.length){
        let sum = 0;
        for (let index = i; index <= j; index++) {
            sum+= nums[index]
        }
        maxAverage = Math.max(maxAverage, sum / ((j - i) + 1))
        i++;
        j++;
    }
    return maxAverage
};


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([-1], 1))