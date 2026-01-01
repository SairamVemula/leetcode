import { ListNode } from "./2095";

function pairSum(head: ListNode | null): number {
    const stack: number[] = [];
    let slow: ListNode | null = head;
    let fast = head?.next ?? null;
    while (fast) {
        stack.push(slow!.val);
        slow = slow?.next ?? null;
        fast = fast?.next?.next ?? null;
    }
    let max = Number.MIN_SAFE_INTEGER;
    while (slow) {
        max = Math.max((slow!.val + stack.pop()!), max)
        slow = slow?.next ?? null;
    }
    return max
};

console.log(pairSum(ListNode.fromArray([5, 4, 2, 1])))
console.log(pairSum(ListNode.fromArray([4, 2, 2, 3])))