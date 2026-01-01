import { TreeNode } from "./104";

function goodNodesInPath(root: TreeNode | null, path: number[] = []): number {
    if(!root) return 0;
    path.push(root.val);
    return (Math.max(...path) === root.val ? 1 : 0) + goodNodesInPath(root.left, [...path]) + goodNodesInPath(root.right, [...path])
}

function goodNodes(root: TreeNode | null): number {
    return goodNodesInPath(root)
};

console.log(goodNodes(TreeNode.makeBinaryTreefromArray([3, 1, 4, 3, null, 1, 5])))
console.log(goodNodes(TreeNode.makeBinaryTreefromArray([3,3,null,4,2])))
console.log(goodNodes(TreeNode.makeBinaryTreefromArray([1])))