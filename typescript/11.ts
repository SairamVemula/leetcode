function maxArea(height: number[]): number {
    let max = 0, i = 0, j = height.length - 1;
    while (i < j) {
            const current  = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(current, max)
            height[i] < height[j] ? i++ : j--;
    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));