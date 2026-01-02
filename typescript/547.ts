function findCircleNum(rooms: number[][]): number {
    const provinces: Set<number>[] = [];
    function visit(from: number, keys = new Set<number>()) {
        keys.add(from);
    for (let i = 0; i < rooms[from].length; i++) {
            if (rooms[from][i] && !keys.has(i)) visit(i, keys);
        }
        return keys
    }
    for (let i = 0; i < rooms.length; i++) {
        if (!provinces.some(p => p.has(i))) {
            provinces.push(visit(i));
        }
    }
    return provinces.length
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))