function pivotIndex(nums: number[]): number {
    const left: number[] = new Array(nums.length).fill(0);
    const right: number[] = new Array(nums.length).fill(0);
    let maxIndex = undefined;
    for (let i = 1; i < nums.length; i++) {
        const l = left[i - 1] + nums[i - 1];
        const r = right[nums.length - i] + nums[nums.length - i];
        left[i] = l;
        right[nums.length - i - 1] = r;
    }
    if (left[0] === right[nums.length - 1]) return 0
    for (let i = 1; i < nums.length; i++) {
        if (left[i] === right[i]) return i
    }
    return maxIndex ?? -1;
};

console.log(pivotIndex([-1,-1,0,1,1,0]))