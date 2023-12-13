// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// https://leetcode.com/problems/swap-nodes-in-pairs/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var swapPairs = function(head) {
    let swapVal = null;
    let current = head;
    let prev = null;
    while (current !== null) {
        let temp;
        if (swapVal !== null) {
            swapVal = null;
            prev = current;
        } else if (swapVal === null && current.next !== null) {
            swapVal = current.val;
            if (prev === null) {
                temp = current.next;
                current.next = current.next.next;
                temp.next = current;
                current = temp;
                head = temp;
            } else {
                temp = current.next;
                current.next = current.next.next;
                temp.next = current;
                current = temp;
                prev.next = temp;
            }
        }

        current = current.next;
    }

    return head;
};

let lt = new LinkedList();
lt.head = new ListNode(1);
lt.head.next = new ListNode(3);
lt.head.next.next = new ListNode(4);
lt.head.next.next.next = new ListNode(5);


swapPairs(lt.head);