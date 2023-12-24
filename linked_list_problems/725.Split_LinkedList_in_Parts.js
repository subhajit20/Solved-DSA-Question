// 725. Split Linked List in Parts
/**
 * Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
 * The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.
 * The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.
 * Return an array of the k parts.
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var splitListToParts = function(head, k) {
    let len = get_len(head);
    let curr = head;
    let parts = Math.floor(len / k);
    let extralength = len % k;
    console.log(parts);
    let allnodes = new Array(k);
    let prev = null;

    for (let i = 0; i < k; i++) {
        allnodes[i] = curr;

        let partlength = parts + (i < extralength ? 1 : 0);

        for (let x = 0; x <= partlength - 1; x++) {
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = null;
        }

    }

    console.log(allnodes);
    return allnodes;
};

function insert(head, val) {
    if (head.head == null) {
        head.head = new ListNode(val);
    } else {
        let curr = head.head;
        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = new ListNode(val);
    }
}

const get_len = (head) => {
    let cnt = 0;
    let curr = head;

    while (curr !== null) {
        cnt++;
        curr = curr.next;
    }

    return cnt;
};

let lt = new LinkedList();

lt.head = new ListNode(1);
lt.head.next = new ListNode(2);
lt.head.next.next = new ListNode(3);

splitListToParts(lt.head, 5);