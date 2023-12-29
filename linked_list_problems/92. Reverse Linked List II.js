// 92. Reverse Linked List II
/**
 * Given the head of a singly linked list and two integers left and right where left <= right, 
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseBetween = function(head, left, right) {
    let newlist = new ListNode();
    newlist.next = head;
    let len = get_len(head);
    let curr = head;
    let tail = head
    let tail_prev = null;
    let prev = null;
    let start = left;
    let new_list = false;
    let end = start;

    if (head == null) {
        return null
    }
    if (right > len || len < left) {
        return head;
    } else {
        while (curr !== null && left - 1 >= 1) {
            prev = curr;
            left--;
            curr = curr.next;
        }
        while (curr !== null) {
            tail = curr;
            end = start;
            while (tail.next !== null && end <= right - 1) {
                end++;
                tail_prev = tail;
                tail = tail.next;
            }

            let temp1 = new ListNode(curr.val);
            let temp2 = new ListNode(tail.val);

            if (new_list == true && start >= right) {
                return newlist.next
            } else if (new_list == false && start >= right) {
                return head;
            } else if (prev !== null) {
                let last = tail_prev.next;
                let first = prev.next;

                tail_prev.next = temp1;
                temp1.next = last.next;

                prev.next = temp2;
                temp2.next = first.next;

                prev = temp2;
                curr = temp2.next;

                start++;
                right--;

            } else if (prev === null) {
                new_list = true;

                let last = tail_prev.next;

                tail_prev.next = temp1;
                temp1.next = last.next;

                temp2.next = curr.next;

                newlist.next = temp2;
                prev = temp2;
                curr = temp2.next;
                start++;
                right--;
            }
        }
    }

};

function get_len(head) {
    let curr = head;
    let len = 0;

    while (curr !== null) {
        len++;
        curr = curr.next;
    }

    return len;
}

const lt = new ListNode(1);
lt.next = new ListNode(2);
lt.next.next = new ListNode(3);
// lt.next.next.next = new ListNode(4);
// lt.next.next.next.next = new ListNode(5);
// lt.next.next.next.next.next = new ListNode(5);


const data = reverseBetween(lt, 2, 3);

console.log(data);