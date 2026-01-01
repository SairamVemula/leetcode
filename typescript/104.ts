
// Definition for a binary tree node.
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    static makeBinaryTreefromArray(arr: Array<number | null>): TreeNode | null {
        if (!arr.length || arr[0] === null) return null

        const root = new TreeNode(arr[0])
        const queue: TreeNode[] = [root]
        let i = 1

        while (queue.length > 0 && i < arr.length) {
            const current = queue.shift()!

            // left child
            if (arr[i] !== null && arr[i] !== undefined) {
                current.left = new TreeNode(arr[i]!)
                queue.push(current.left)
            }
            i++

            // right child
            if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
                current.right = new TreeNode(arr[i]!)
                queue.push(current.right)
            }
            i++
        }

        return root
    }

    toString(): string {
        return this.print()
    }

    [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.print()
    }

    print(): string {
        const height = this.getHeight(this)
        const width = Math.pow(2, height) * 2
        const lines: string[][] = Array.from(
            { length: height * 2 - 1 },
            () => Array(width).fill(" ")
        )

        this.fill(lines, this, 0, Math.floor(width / 2), height)

        return lines.map(line => line.join("").trimEnd()).join("\n")
    }

    private fill(
        lines: string[][],
        node: TreeNode | null,
        row: number,
        col: number,
        height: number
    ) {
        if (!node || row >= lines.length) return

        const val = String(node.val)
        for (let i = 0; i < val.length; i++) {
            if (col + i < lines[row].length) lines[row][col + i] = val[i]
        }

        const gap = Math.floor(Math.pow(2, height - Math.floor(row / 2) - 2))
        if (gap <= 0) return

        if (node.left) {
            if (col - gap >= 0) lines[row + 1][col - gap] = "/"
            this.fill(lines, node.left, row + 2, col - gap * 2, height)
        }

        if (node.right) {
            if (col + gap < lines[row].length) lines[row + 1][col + gap] = "\\"
            this.fill(lines, node.right, row + 2, col + gap * 2, height)
        }
    }

    private getHeight(node: TreeNode | null): number {
        if (!node) return 0
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }
}


function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// console.log(TreeNode.makeBinaryTreefromArray([3, 9, 20, null, null, 15, 7]))
// console.log(maxDepth(TreeNode.makeBinaryTreefromArray([3, 9, 20, null, null, 15, 7])))
// console.log(maxDepth(TreeNode.makeBinaryTreefromArray([1,null,2])))