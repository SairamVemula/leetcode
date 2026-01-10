function combinationSum(candidates: number[], target: number): number[][] {
    const results:  number[][] = []
    function dfs(arr: number[] = [], sum = 0, i = 0) {
        while (i < candidates.length) {
            const _sum = sum + candidates[i];
            if (_sum > target) return dfs(arr, sum, i + 1);
            if (_sum === target) results.push([...arr, candidates[i]])
            if (_sum < target) dfs([...arr, candidates[i]], _sum, i)
            i++;
        }
  }
  dfs();
  return results;
};

// console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([8, 7, 4, 3], 11))
console.log(combinationSum([4,2,8], 8))