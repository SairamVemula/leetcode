function findPeakElement(nums: number[]): number {
    let li = 0, ri = nums.length - 1;
    while(li < ri){
        let mi = ri - li;
        if (mi > 0 && nums[mi] < nums[mi - 1])
            ri = mi - 1;
        else if(mi <  nums.length - 1 && nums[mi] < nums[mi + 1])
            li = mi + 1;
        else return mi;
    }
    return 0
};