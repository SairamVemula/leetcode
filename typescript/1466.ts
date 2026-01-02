// function minReorder(n: number, connections: number[][]): number {
//     const map: Record<number, number[]> = {};
//     const cMap = new Map()
//     let changes = 0;
//     function change(node: number, lastNode?: number) {
//         for (const [i, c] of connections.entries()) {
//             if (!map[node]?.includes(i) && c.includes(node)) {
//                 map[node] = [...(map[node] ?? []), i];
//                 let next = c[0];
//                 if (c[0] === node) {
//                     next = c[1]
//                     connections[i] = [c[1], c[0]];
//                     changes++;
//                 }
//                 map[next] = [...(map[next] ?? []), i];
//                 // console.log({ node, c, map, next, lastNode })
//                 if (lastNode !== next) {
//                     change(next, node)
//                 }
//             }
//         }
//     }
//     change(0);
//     return changes
// };

function minReorder(n: number, connections: number[][]): number {
    const edges: Record<number, Set<number>> = {};
    const neighbors: Record<number, Set<number>> = {};
    const visited = new Set<number>([0]);
    let changes = 0;

    for (const c of connections) {
        edges[c[0]] = (edges[c[0]] ?? new Set()).add(c[1])
        neighbors[c[0]] = (neighbors[c[0]] ?? new Set()).add(c[1])
        neighbors[c[1]] = (neighbors[c[1]] ?? new Set()).add(c[0])
    }

    function change(node: number) {
        for (const c of neighbors[node]) {
            if (!visited.has(c)) {
                visited.add(c);
                if (!edges[c]?.has(node)) {
                    edges[node]?.delete(c);
                    (edges[c] ?? new Set()).add(node);
                    changes++;
                }
                change(c)
            }
        }
    }
    change(0);
    return changes
};


console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]))
console.log(minReorder(6, [[1, 0], [1, 2], [3, 2], [3, 4]]))
console.log(minReorder(3, [[1, 0], [2, 0]]))