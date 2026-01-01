import { TreeNode } from "./104";

function rightSideView(root: TreeNode | null): number[] {
    const seen: number[] = [];
    const seenDeep = new Set<number>();
    function bfs(node: TreeNode | null, deep = 0){
        if(!node) return;
        if (!seenDeep.has(deep)) {
            seenDeep.add(deep);
            seen.push(node.val);
        }
        bfs(node.right, deep + 1);
        bfs(node.left, deep + 1);
    }
    bfs(root);
    return seen
};

console.log(rightSideView(TreeNode.makeBinaryTreefromArray([1, 2, 3, null, 5, null, 4])))
console.log(rightSideView(TreeNode.makeBinaryTreefromArray([1,2,3,4,null,null,null,5])))
console.log(rightSideView(TreeNode.makeBinaryTreefromArray([1,null,3])))
console.log(rightSideView(TreeNode.makeBinaryTreefromArray([])))