function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    class GraphNode {
        constructor(
            public label: string,
            public edges: Record<string, number> = {}
        ) { }
    }
    const map: Record<string, GraphNode> = {};
    for (const [i, e] of equations.entries()) {
        const [a, b] = e;
        if (!map[a]) map[a] = new GraphNode(a);
        if (!map[b]) map[b] = new GraphNode(b);
        map[a].edges[b] = values[i]
        map[b].edges[a] = 1 / values[i]
    }
    const solutions: number[] = [];
    function dfs(head: GraphNode, goal: string, visited = new Set<string>()): number {
        visited.add(head.label);
        if (head.edges[goal]) return head.edges[goal];
        for (const [k, v] of Object.entries(head.edges)) {
            if (visited.has(k)) continue;
            const cost = v * dfs(map[k], goal, visited);
            if (!isNaN(cost)) return cost;
        }
        return NaN;
    }
    for (const q of queries) {
        const [a, b] = q;
        if (!map[a] || !map[b]) solutions.push(-1);
        else if (a === b) solutions.push(1);
        else solutions.push(dfs(map[a], b))
    }
    return solutions;
};

// function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
//     const g: Record<string, [string, number][]> = {};
//     const ans = Array.from({ length: queries.length }, () => -1);

//     for (let i = 0; i < equations.length; i++) {
//         const [a, b] = equations[i];
//         (g[a] ??= []).push([b, values[i]]);
//         (g[b] ??= []).push([a, 1 / values[i]]);
//     }

//     for (let i = 0; i < queries.length; i++) {
//         const [c, d] = queries[i];
//         const vis = new Set<string>();
//         const q: [string, number][] = [[c, 1]];

//         if (!g[c] || !g[d]) continue;
//         if (c === d) {
//             ans[i] = 1;
//             continue;
//         }

//         for (const [current, v] of q) {
//             if (vis.has(current)) continue;
//             vis.add(current);

//             for (const [intermediate, multiplier] of g[current]) {
//                 if (vis.has(intermediate)) continue;

//                 if (intermediate === d) {
//                     ans[i] = v * multiplier;
//                     break;
//                 }

//                 q.push([intermediate, v * multiplier]);
//             }

//             if (ans[i] !== -1) break;
//         }
//     }

//     return ans;
// }
/**
 [a, 2,b], [b,3,c]
 */

// const equations = [["a", "b"], ["b", "c"]];
// const values = [2.0, 3.0];
// const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]


const equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
const values = [3.0,4.0,5.0,6.0];
const queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]

// const equations = [["a", "b"], ["b", "c"], ["a", "c"]]
// const values = [2.0, 3.0, 6.0]
// const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]

console.log(calcEquation(equations, values, queries))