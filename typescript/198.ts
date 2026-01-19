function rob(nums: number[]): number {
    const memo: number[] = [];
    function robDfs(i: number = 0) {
        if (i >= nums.length) return 0;
        if (memo[i] !== undefined) return memo[i];
        
        const rob = nums[i] + robDfs(i + 2)
        const rob1 = robDfs(i + 1);

        memo[i] = Math.max(rob, rob1);
        return memo[i]
    }
    return robDfs()
};

console.log(rob([1, 2, 3, 1]))
// console.log(rob([2,7,9,3,1]))
// console.log(rob([2,1,1,2]))