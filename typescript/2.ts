// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    print(){
        const list = [];
        const root = this;
        while (root.next) {
            list.push(root.val);
        }
        console.log(list);
    }
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let root: ListNode | null =  null;
    let next: ListNode;
    while (l1 || l2) {
        const n = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(n / 10);
        next = new ListNode();
        next.val = n % 10;
        next.next = new ListNode();
        if(!root) root = next;
        next = next.next;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    return root;
};