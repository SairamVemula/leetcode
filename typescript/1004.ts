function longestOnes(nums: number[], k: number): number {
    let i = 0, j = 0;
    let max = 0;
    while (j < nums.length) {
        if (k > 0 || nums[j] === 1) {
            if(nums[j] === 0) k--;
            j++;
            continue
        }
        max = Math.max(j - i, max)
        if(nums[i] === 0) k++;
        i++
    }
    max = Math.max(j - i, max)
    return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(longestOnes([0, 0, 0, 1], 4))