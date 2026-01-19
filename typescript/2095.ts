
// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    static fromArray(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;

        let head: ListNode = new ListNode(arr[0]);
        let current = head;

        for (let i = 1; i < arr.length; i++) {
            const newNode = new ListNode(arr[i]);
            current.next = newNode;
            current = newNode;
        }

        return head;
    }
    toString(): string {
        const values: number[] = [];
        let curr: ListNode | null = this;

        while (curr) {
            values.push(curr.val);
            curr = curr.next;
        }

        return values.join(" -> ");
    }
        [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.toString()
    }
}

// brute force

// function deleteMiddle(head: ListNode | null): ListNode | null {
//     if(!head) return null;
//     const array = [head];
//     let traverse = head;
//     while (traverse?.next) {
//         array.push(traverse.next);
//         traverse = traverse.next;
//     }
//     if (array.length === 1) return null
//     const middle = Math.floor(array.length / 2);
//     if (array[middle - 1]) {
//         array[middle - 1].next = array[middle + 1] ?? null;
//     }
//     return head;
// };

// optimal
function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return null;

    let slow: ListNode = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null= null;

    while(fast && fast.next){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next!;
    }

    prev!.next = slow.next;

    return head;
};


// console.log(deleteMiddle(ListNode.fromArray([1,3,4,7,1,2,6]))?.toString())
// console.log(deleteMiddle(ListNode.fromArray([1,2,3,4]))?.toString())
// console.log(deleteMiddle(ListNode.fromArray([2,1]))?.toString())