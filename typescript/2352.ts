function equalPairs(grid: number[][]): number {
    let equals = 0;
    const map = new Map<string,number>();
    const columns: number[][] = [[], []];
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i].join();
        map.set(row,(map.get(row) ?? 0) + 1);
        columns[i] = [];
        for (let j = 0; j < grid.length; j++) {
            columns[i].push(grid[j][i]);
        }
    }
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i].join();
        if(map.has(column)) equals += map.get(column)!;
    }
    return equals;
};

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))
// console.log(equalPairs([[11,1],[1,11]]))
console.log(equalPairs([[13,13],[13,13]]))
