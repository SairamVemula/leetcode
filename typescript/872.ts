import { TreeNode } from "./104";

function leafSequence(root: TreeNode | null): string {
    if (!root) return '';
    if (!root.left && !root.right) return root.val +',';
    return '' + leafSequence(root.left) + leafSequence(root.right)
}
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return leafSequence(root1) === leafSequence(root2)
};


console.log(leafSimilar(TreeNode.makeBinaryTreefromArray([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]), TreeNode.makeBinaryTreefromArray([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])))
console.log(leafSimilar(TreeNode.makeBinaryTreefromArray([1, 2, 3]), TreeNode.makeBinaryTreefromArray([1, 3, 2])))
console.log(leafSimilar(TreeNode.makeBinaryTreefromArray([3,5,1,6,2,9,8,null,null,7,14]), TreeNode.makeBinaryTreefromArray([3,5,1,6,71,4,2,null,null,null,null,null,null,9,8])))