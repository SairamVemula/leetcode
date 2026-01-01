import { TreeNode } from "./104";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function dfs(node: TreeNode | null): TreeNode | null {
        if (!node || node.val === p?.val || node.val === q?.val) return node;
        const left = dfs(node.left)
        const right = dfs(node.right)
        if (!left) return right;
        else if (!right) return left
        return node;
    }
    return dfs(root)
};


console.log(lowestCommonAncestor(TreeNode.makeBinaryTreefromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), TreeNode.makeBinaryTreefromArray([5]), TreeNode.makeBinaryTreefromArray([4])))