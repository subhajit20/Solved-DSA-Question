// 23. Merge k Sorted Lists
/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var mergeKLists = function(lists) {
    if (lists.length <= 0) {
        return null;
    } else {
        let newlist = new ListNode();
        newlist.next = lists[0];

        for (let i = 1; i <= lists.length - 1; i++) {
            prev = null;
            curr = newlist.next;
            while (curr !== null && lists[i] !== null) {
                if (curr.val < lists[i].val) {
                    prev = curr;
                    curr = curr.next;
                } else if (curr.val >= lists[i].val) {
                    if (prev !== null) {
                        let temp = new ListNode(lists[i].val);
                        prev.next = temp;
                        temp.next = curr;
                        prev = prev.next;
                    } else {
                        prev = new ListNode(lists[i].val);
                        prev.next = newlist.next;
                        newlist.next = prev;
                    }
                    lists[i] = lists[i].next
                }
            }

            if (lists[i] !== null) {
                insert(newlist, lists[i]);
            }
        }

        let p = newlist.next;
        while (p !== null) {
            console.log(p.val);
            p = p.next;
        }
        return newlist.next;
    }
};

function insert(head, node) {
    if (head.next === null) {
        head.next = node;
    } else {
        let curr = head.next;

        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }
}

let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = new ListNode(2);
l3.next = new ListNode(6);

// let l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(2);

// let l2 = new ListNode(1);
// l2.next = new ListNode(1);
// l2.next.next = new ListNode(2);


const lists = [l1, l2, l3];

mergeKLists(lists);