// Sort the list

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList {
    head = null;
}

var sortList = function(head) {
    if (head !== null) {
        let curr = head;
        let dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;
        while (curr.next !== null) {
            if (curr.val > curr.next.val) {
                let temp = curr.next;
                curr.next = temp.next;
                prev.next = temp;
                temp.next = curr;

                prev = dummy;
                curr = dummy.next;
            } else {
                prev = prev.next;
                curr = curr.next;
            }
        }

        return dummy.next;
    } else {
        return null;
    }
};

let lt = new LinkedList();

lt.head = new ListNode(10);
lt.head.next = new ListNode(2);
lt.head.next.next = new ListNode(23);
lt.head.next.next.next = new ListNode(26);


const data = sortList(lt.head);
console.log(data)