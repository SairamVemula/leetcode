function removeDuplicates(nums: number[]): number {
    let i = 0, j = 1;
    while (j < nums.length){
        if(nums[i] !== nums[j]){
            nums[++i] = nums[j];
        }
        j++;
    }
    nums.splice(i + 1, nums.length);
    return nums.length
};

console.log(removeDuplicates([1, 1, 2]))