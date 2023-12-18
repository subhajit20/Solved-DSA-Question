// 1721. Swapping Nodes in a Linked List
/**
 * You are given the head of a linked list, and an integer k.
 * Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList {
    head = null;
}

var swapNodes = function(head, k) {
    let len = get_length(head);
    // console.log(len);
    let begin = k;
    let end = (len - k) + 1;
    console.log(end);

    let current = head;
    // get beginning kth node
    let i = 1;
    while (current !== null) {
        if (i == k) {
            begin = current;
            break
        } else {
            i++;
            current = current.next;
        }
    }

    current = head;
    i = 1;
    // get end kth node
    while (current !== null) {
        if (i == end) {
            end = current;
            temp = begin.val;

            begin.val = end.val;
            end.val = temp;
            return head;
        } else {
            i++;
            current = current.next;
        }
    }
};

const get_length = (head) => {
    let current = head;
    let count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

let lt = new LinkedList();
lt.head = new ListNode(1);
lt.head.next = new ListNode(2);
lt.head.next.next = new ListNode(3);
lt.head.next.next.next = new ListNode(4);
lt.head.next.next.next.next = new ListNode(5);

let head = swapNodes(lt.head, 2);
console.log(head);