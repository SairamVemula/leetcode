function combinationSum3(k: number, n: number): number[][] {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result: number[][] = [];
    function dfs(arr: number[] = [], sum = 0, start = 0) {
        if (arr.length === k) {
            if (sum === n)
                result.push([...arr])
            return;
        }
        if (sum > n) return;
        for (let l = start; l < numbers.length; l++) {
            const next = sum + numbers[l];
            arr.push(numbers[l]);
            dfs(arr, next, l + 1)
            arr.pop();
        }
    }
    dfs()

    return result;
};

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))