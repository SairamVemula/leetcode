import { ListNode } from "./2095";

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let slow: ListNode | null = head;
    let prev: ListNode | null = head.next;
    let fast: ListNode | null = head?.next?.next ?? null;
    while (fast) {
        prev!.next = fast.next ?? null;
        fast.next = slow!.next;
        slow!.next = fast;
        slow = slow?.next;
        prev = prev?.next ?? null;
        fast = prev?.next ?? null;
    }
    return head;
};


console.log('end', oddEvenList(ListNode.fromArray([1, 2, 3, 4, 5]))?.toString())
console.log('end', oddEvenList(ListNode.fromArray([2, 1, 3, 5, 6, 4, 7]))?.toString())


/**
1,3,2,4,5
1,3,5,2,4

 */