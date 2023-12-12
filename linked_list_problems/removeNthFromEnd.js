// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var removeNthFromEnd = function(head, n) {
    let nThNode = calculateLen(head) - n;
    let cnt = 0;

    let current = head;
    if (nThNode === 0) {
        head = head.next;
        return head;
    }
    while (current !== null) {
        cnt++;
        if (cnt === nThNode) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
};

function calculateLen(head) {
    let current = head;
    let cnt = 0;
    if (current == null) {
        return 0;
    } else {
        while (current !== null) {
            cnt = cnt + 1;
            current = current.next;
        }

        return cnt;
    }
}

let lt = new LinkedList();
lt.head = new ListNode(1);
lt.head.next = new ListNode(3);
lt.head.next.next = new ListNode(5);

console.log(lt.head)

removeNthFromEnd(lt.head, 2);

console.log(lt.head)