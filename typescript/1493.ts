function longestSubarray(nums: number[]): number {
    let k = 1;
    let i = 0, j = 0;
    let max = 0;
    while (j < nums.length) {
        if (k > 0 || nums[j] === 1) {
            if (nums[j] === 0) k--;
            j++;
            continue
        }
        max = Math.max(j - i, max)
        if (nums[i] === 0) k++;
        i++
    }
    max = Math.max(j - i, max)
    return max - 1;
};