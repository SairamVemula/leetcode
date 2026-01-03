function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const rotten: [number, number, number][] = [];
    for (const [x, row] of grid.entries()) {
        for (const [y, col] of row.entries()) {
            if (col === 2) rotten.push([x, y, 0])
        }
    }

    let maxMins = 0;

    function nextMinRottenOranges([x, y, mins]: [number, number, number]) {
        const moves: [number, number, number][] = [];
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] === 1) {
                grid[nx][ny] = 2;
                moves.push([nx, ny, mins + 1])
            }
        }
        if(moves.length) maxMins = mins + 1;
        return moves
    }

    for (const r of rotten) {
        rotten.push(...nextMinRottenOranges(r));
    }

    for (const [x, row] of grid.entries()) {
        for (const [y, col] of row.entries()) {
            if (col === 1) return -1
        }
    }

    return maxMins;
};