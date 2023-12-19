// 1019. Next Greater Node In Linked List
/**
 * You are given the head of a linked list with n nodes.
 * For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.
 * Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var nextLargerNodes = function(head) {
    let result = [];
    let stack = [];
    let index = 0;
    while (head) {
        result[index] = 0;
        while (stack.length > 0 && head.val > stack[stack.length - 1].val) {
            result[stack.pop().index] = head.val;
        }

        stack.push({ val: head.val, index: index });
        head = head.next;
        index++;
    }
    return result;
};
let lt = new LinkedList();

lt.head = new ListNode(2);
lt.head.next = new ListNode(1);
lt.head.next.next = new ListNode(5);
// lt.head.next.next.next = new ListNode(3);
// lt.head.next.next.next.next = new ListNode(5);
// lt.head.next.next.next.next.next = new ListNode(4);


let data = nextLargerNodes(lt.head);
console.log(data);