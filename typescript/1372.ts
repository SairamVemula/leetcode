import { TreeNode } from "./104";

function longestZigZag(root: TreeNode | null): number {
    let ans = 0;
    function zigzagDfs(node: TreeNode | null, move: 'right' | 'left', sum = 0) {
        if (!node)
            return
        ans = Math.max(ans, sum)
        if (move === 'left') {
            zigzagDfs(node.left, 'right', sum + 1);
            zigzagDfs(node.right, "left", 1);
        } else {
            zigzagDfs(node.right, 'left', sum + 1);
            zigzagDfs(node.left, 'right',  1);
        }
    }
    zigzagDfs(root, 'left')
    zigzagDfs(root, 'right')
    return ans
};


console.log(longestZigZag(TreeNode.makeBinaryTreefromArray([1, null, 2, 3, 4, null, null, 5, 6, null, 7, null, null, null, 8])))
// console.log(longestZigZag(TreeNode.makeBinaryTreefromArray([1,1,1,null,1,null,null,1,1,null,1])))