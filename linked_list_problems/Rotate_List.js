// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.
// Question link - https://leetcode.com/problems/rotate-list/description/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var rotateRight = function(head, k) {
    let current = head;
    let len = getLenght(current);
    let minRotation = k % len;
    console.log(minRotation)

    if (current === null || current.next === null || minRotation === 0) {
        return current;
    } else {
        while (current !== null) {
            if (current.next == null && minRotation !== 0) {
                minRotation = minRotation - 1;
                prev.next = null;
                current.next = head;
                head = current;
                if (minRotation === 0) {
                    return head;
                }
                current = head;
            } else {
                prev = current;
                current = current.next;
            }
        }

        return head;
    }
};

function getLenght(head) {
    current = head;
    count = 0;

    while (current !== null) {
        count = count + 1;
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

let res = rotateRight(lt.head, 2);
console.log(res);