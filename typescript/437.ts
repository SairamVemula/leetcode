import { TreeNode } from "./104";

//BRUTE FORCE
// function pathSum(root: TreeNode | null, targetSum: number): number {
//     const set = new Set<TreeNode>();
//     function traversePath(node: TreeNode | null, sum: number = 0, reset = false): number {
//         if (!node) return 0;
//         if (reset && set.has(node)) return 0;
//         if (reset && !set.has(node)) set.add(node);
//         let count = 0;
//         sum += node.val;
//         if (sum == targetSum) count++;
//         count += traversePath(node.left, sum);
//         count += traversePath(node.right, sum);
//         count += traversePath(node.right, 0, true);
//         count += traversePath(node.left, 0, true);
//         return count;
//     }
//     return traversePath(root);
// };

// OPTIMIZED
function pathSum(root: TreeNode | null, targetSum: number): number {
    const map = new Map<number, number>([[targetSum, 1]]);
    let ans = 0;
    function dfs(node: TreeNode | null, sum = 0) {
        if (!node) return;
        const currSum = sum + node.val;
        const goal = currSum + targetSum;
        ans += map.get(currSum) ?? 0;
        map.set(goal, (map.get(goal) ?? 0) + 1);
        dfs(node.left, currSum)
        dfs(node.right, currSum)
        map.set(goal, (map.get(goal) ?? 0) - 1);
    }
    dfs(root)
    return ans;
};


console.log(pathSum(TreeNode.makeBinaryTreefromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8))
console.log(pathSum(TreeNode.makeBinaryTreefromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22))
console.log(pathSum(TreeNode.makeBinaryTreefromArray([1, null, 2, null, 3, null, 4, null, 5]), 3))
console.log(pathSum(TreeNode.makeBinaryTreefromArray([0, 1, 1]), 1))

// console.log(TreeNode.makeBinaryTreefromArray([1,null,2,null,3,null,4,null,5]))