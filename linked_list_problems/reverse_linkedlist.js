function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function reverseList(head) {
    let len = get_len(head);
    if (head == null) {
        return null;
    } else if (head.next == null) {
        return head;
    } else {
        let newlist = new ListNode(0);
        newlist.next = head;

        let curr = head;
        let tail = head;
        let prev = null;
        let tail_prev = null;
        let start = 1;

        while (curr !== null) {
            let end = 1;
            while (tail.next !== null && end <= len - 1) {
                tail_prev = tail;
                tail = tail.next;
                end++;
            }
            let temp = new ListNode(tail.val);
            let temp2 = new ListNode(curr.val);

            if (curr == tail || start >= end) {
                return newlist.next;
            } else if (prev == null) {
                let last = tail_prev;
                tail_prev.next = temp2;
                temp2.next = last.next.next;
                temp.next = curr.next;
                newlist.next = temp;
                curr = newlist.next;
                tail = newlist.next;
                prev = curr;
                curr = curr.next;
                len = len - 1;
            } else {
                let last = tail_prev.next;
                let fast = prev.next;
                tail_prev.next = temp2;
                temp2.next = last.next;

                prev.next = temp;
                temp.next = fast.next;

                prev = temp;
                curr = temp.next;
                tail = newlist.next;
                len = len - 1;
            }

            start++;
        }

        return newlist.next;
    }
}

function get_len(head) {
    let curr = head;
    let len = 0;

    while (curr !== null) {
        len++;
        curr = curr.next;
    }

    return len;
}

let lt = new ListNode(1);
lt.next = new ListNode(2);
lt.next.next = new ListNode(3);
lt.next.next.next = new ListNode(4);
lt.next.next.next.next = new ListNode(5);
lt.next.next.next.next.next = new ListNode(6);
lt.next.next.next.next.next.next = new ListNode(7);
lt.next.next.next.next.next.next.next = new ListNode(8);
lt.next.next.next.next.next.next.next.next = new ListNode(9);


let res = reverseList(lt);

console.log(res);

while (res !== null) {
    console.log(res.val);

    res = res.next;
}