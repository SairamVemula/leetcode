function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const results: number[][] = []
    function dfs(arr: number[] = [], sum = 0, start = 0) {
        if (sum === target) {
            results.push([...arr])
            return;
        }
        let i = start;
        while (i < candidates.length) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                i++;
                continue;
            }

            const next = sum + candidates[i];
            if (next > target) break;

            arr.push(candidates[i]);
            dfs(arr, next, i + 1);
            arr.pop();
            i++;
        }
    }
    dfs();
    return results
};


console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
// console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30))