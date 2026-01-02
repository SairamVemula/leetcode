import { TreeNode } from "./104";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let node = root;
    while (node) {
        if (node.val === val) return node;
        node = node[val < node.val ? 'left' : 'right'];
    }
    return null;
};