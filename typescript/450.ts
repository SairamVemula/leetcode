import { TreeNode } from "./104";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    function dfs(node: TreeNode, move: 'left' | 'right') {
        if (!node[move]) return node;
        return dfs(node[move], move)
    }
    function searchAndDelete(node: TreeNode | null) {
        if (!node) return null;

        if (node.val === key) {
            if (node.right) {
                const deepestNode = dfs(node.right, 'left');
                deepestNode.left = node.left
                return node.right
            }
            else if (node.left) {
                const deepestNode = dfs(node.left, 'right');
                deepestNode.right = node.right;
                return node.left;
            }
            return null;
        }
        const [_node, move] = (key < node.val) ? [searchAndDelete(node.left), 'left' as const] : [searchAndDelete(node.right), 'right' as const];
        node[move] = _node;
        return node;
    }
    return searchAndDelete(root);
};


// console.log(deleteNode(TreeNode.makeBinaryTreefromArray([5, 3, 6, 2, 4, null, 7]), 3))
// console.log(deleteNode(TreeNode.makeBinaryTreefromArray([5,3,6,2,4,null,7]), 0))
// console.log(deleteNode(TreeNode.makeBinaryTreefromArray([]), 0))
// console.log(deleteNode(TreeNode.makeBinaryTreefromArray([0]), 0))
console.log(deleteNode(TreeNode.makeBinaryTreefromArray([5,3,7,2,4,6,8]), 5))