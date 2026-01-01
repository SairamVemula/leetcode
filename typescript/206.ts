import { ListNode } from "./2095";

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    let next: ListNode | null = head.next;
    while (current) {
        current.next = prev;
        prev = current;
        current = next;
        next = next?.next ?? null;
    }
    return prev;
};

console.log('end', reverseList(ListNode.fromArray([1, 2, 3, 4, 5]))?.toString())