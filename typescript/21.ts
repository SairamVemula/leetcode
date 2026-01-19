import { ListNode } from "./2095";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const list = new ListNode();
    let head = list;
    while(list1 && list2){
        if(list1.val < list2.val){
            head.next = list1;
            list1 = list1.next
        }else{
            head.next = list2;
            list2 = list2.next
        }
        head = head.next;
    }

    head.next = list1 ? list1 : list2

    return list.next
};


// console.log(mergeTwoLists(ListNode.fromArray([1,2,4]),ListNode.fromArray([1,3,4])))
console.log(mergeTwoLists(ListNode.fromArray([]),ListNode.fromArray([0])))