/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0, j = nums.length - 1
    while (i < j) {
        if(nums[i] === 0){
            const slice = nums.splice(i, 1);
            console.log(slice, nums, j)
            nums.splice(j,0,...slice);
            j--;
            continue;
        }
        i++;
    }
};

const test4 = [0,0,1];
moveZeroes(test4);
console.log(test4)