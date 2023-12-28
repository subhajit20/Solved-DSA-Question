function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function reverseKGroup(head, k) {
    return reverse(head, k);
}

function reverse(head, k) {
    let len = get_len(head);
    if (head == null) {
        return null;
    } else if (head.next == null) {
        return head;
    } else {
        let newlist = new ListNode(0);
        newlist.next = head;
        let kth = k;
        let passes = Math.floor(len / k);
        let pow = 1;
        let ending = kth * pow;

        let curr = head;
        let tail = head;
        let prev = null;
        let tail_prev = null;
        let start = 1;

        while (curr !== null && passes > 0) {
            let end = start;
            while (tail.next !== null && end <= ending - 1) {
                tail_prev = tail;
                end++;
                tail = tail.next;
            }
            let temp = new ListNode(tail.val);
            let temp2 = new ListNode(curr.val);

            if (curr == tail || start >= ending) {
                passes--;
                pow++;
                let prev_start = start;
                ending = kth * pow;
                start = ending - kth + 1;
                end = start;
                if (ending > len) {
                    return newlist.next;
                } else {
                    while (prev_start < start) {
                        prev_start++;
                        prev = curr;
                        curr = curr.next;
                    }
                    tail = curr;
                }
                // break;
            } else if (prev == null) {
                let last = tail_prev.next;
                tail_prev.next = temp2;
                temp2.next = last.next;
                temp.next = curr.next;
                newlist.next = temp;
                prev = temp;
                curr = temp.next;
                tail = curr;
                ending = ending - 1;
                start++;

            } else if (prev != null) {
                let last = tail_prev.next;
                let fast = prev.next;
                tail_prev.next = temp2;
                temp2.next = last.next;


                prev.next = temp;
                temp.next = fast.next;

                prev = temp;
                curr = temp.next;
                tail = curr;
                ending = ending - 1;
                start++;
            }
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
// lt.next.next.next.next = new ListNode(5);
// lt.next.next.next.next.next = new ListNode(6);
// lt.next.next.next.next.next.next = new ListNode(7);
// lt.next.next.next.next.next.next.next = new ListNode(8);
// lt.next.next.next.next.next.next.next.next = new ListNode(9);

let res = reverseKGroup(lt, 4);

// console.log(res);

while (res !== null) {
    console.log(res.val);

    res = res.next;
}