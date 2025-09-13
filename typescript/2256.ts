// Example 1:

// Input: nums = [2,5,3,9,5,3]
// Output: 3
// Explanation:
// - The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.
// - The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.
// - The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.
// - The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.
// - The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.
// - The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.
// The average difference of index 3 is the minimum average difference so return 3.
// Example 2:

// Input: nums = [0]
// Output: 0
// Explanation:
// The only index is 0 so return 0.
// The average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.


// function minimumAverageDifference(nums: number[]): number {
//     let minAvg: number | undefined;
//     let minAvgIndex = 0;
//     for (let i = 0; i < nums.length; i++) {
//         const [one, one_length, two, two_length] = nums.reduce((acc: [number, number, number, number], n, j) => {
//             if (j <= i) {
//                 acc[0] += n;
//                 acc[1] += 1;
//             }
//             else {
//                 acc[2] += n;
//                 acc[3] += 1;
//             };
//             return acc;
//         }, [0, 0, 0, 0]);
//         const _minAvg = Math.abs(Math.floor(one / (one_length || 1)) - Math.floor(two / (two_length || 1)));
//         if (minAvg === undefined || _minAvg < minAvg) {
//             minAvg = _minAvg;
//             minAvgIndex = i;
//         }
//     }
//     return minAvgIndex;
// };

function minimumAverageDifference(nums: number[]): number {
    let minAvg: number | undefined;
    let minAvgIndex = 0;
    let sum1 = 0
    let sum2 = nums.reduce((acc, n) => (acc += n, acc), 0)
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
        sum2 -= nums[i];
        const _minAvg = Math.abs(Math.floor((sum1) / (i + 1)) - Math.floor(sum2 / ((nums.length - (i + 1)) || 1)));
        if (minAvg === undefined || _minAvg < minAvg) {
            minAvg = _minAvg;
            minAvgIndex = i;
        }
    }
    return minAvgIndex;
};

console.log(minimumAverageDifference([4,2,0]))