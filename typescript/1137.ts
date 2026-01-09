const memo: Record<number, number> = { 0: 0, 1: 1, 2: 1 };
function tribonacci(n: number): number {
    if (n in memo) return memo[n];
    const sum = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    memo[n] = sum;

    return sum
};

console.log(tribonacci(4))
console.log(tribonacci(25))