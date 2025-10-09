function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    nums1 = Array.from(set1.values())
    nums2 = Array.from(set2.values())
    const len = Math.max(nums1.length, nums2.length);
    const result: number[][] = [[], []];
    for (let i = 0; i < len; i++) {
        console.log([nums1[i] !== undefined , !set2.has(nums1[i]), nums2[i] !== undefined , !set1.has(nums2[i])])
        if (nums1[i] !== undefined && !set2.has(nums1[i])) result[0].push(nums1[i])
        if (nums2[i] !== undefined && !set1.has(nums2[i])) result[1].push(nums2[i])
    }
    return result
};


console.log(findDifference([1,2,3],[2,4,6]
))