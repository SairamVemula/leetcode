import { TreeNode } from "./104";

function maxLevelSum(root: TreeNode | null): number {
    const map = new Map<number, number>();
    function bfs(node: TreeNode | null, level = 0) {
        if (!node) return;
        map.set(level, (map.get(level) ?? 0) + node.val);
        bfs(node.right, level + 1);
        bfs(node.left, level + 1);
    }
    bfs(root)
    const values = Array.from(map.values());
    const max = Math.max(...values);
    const index = values.findIndex(v => v === max);
    return index + 1
};

console.log(maxLevelSum(TreeNode.makeBinaryTreefromArray([1, 7, 0, 7, -8, null, null])))