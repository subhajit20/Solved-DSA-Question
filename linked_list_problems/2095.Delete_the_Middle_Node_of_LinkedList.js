// 2095. Delete the Middle Node of a Linked List
/**
 * You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 */

// Question - https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var deleteMiddle = function(head) {
    if (head == null) {
        return null;
    } else if (head.next == null) {
        return null;
    } else {
        let len = get_len(head);
        let mid = parseInt(len / 2) + 1;
        let cnt = 1;
        let curr = head;
        let prev;

        while (curr != null) {
            if (cnt === mid) {
                prev.next = curr.next;
                return head;
            } else {
                cnt++;
                prev = curr;
                curr = curr.next;
            }
        }

    }
};

function get_len(head) {
    let len = 0;
    let curr = head;

    while (curr !== null) {
        len++;

        curr = curr.next;
    }

    return len;
}

let lt = new LinkedList();

lt.head = new ListNode(1);
lt.head.next = new ListNode(2);
lt.head.next.next = new ListNode(3);
lt.head.next.next.next = new ListNode(4);

const data = deleteMiddle(lt.head);
console.log(data)