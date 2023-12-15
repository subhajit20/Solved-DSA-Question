function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    head = null;
}

var partition = function(head, x) {
    return get_small(head, x);
};

function get_small(head, x) {
    let current = head;
    let small_nodes = new LinkedList();
    let big_nodes = new LinkedList();

    while (current != null) {
        if (current.val < x) {
            insert_node(small_nodes, current.val);
        }
        if (current.val >= x) {
            insert_node(big_nodes, current.val);
        }
        current = current.next;
    }

    return merge_list(small_nodes.head, big_nodes.head);
}

function insert_node(linkedList, val) {
    let small = null;

    if (linkedList.head === null) {
        linkedList.head = new ListNode(val);
        return linkedList;
    } else {
        let current = linkedList.head;
        while (current !== null) {
            if (current.next == null) {
                small = current;
                break;
            }
            current = current.next;
        }

        small.next = new ListNode(val);
        return linkedList;
    }
}

function merge_list(small, big) {
    if (small !== null) {
        let small_Last = small;
        while (small_Last !== null) {
            if (small_Last.next == null) {
                small_Last.next = big;
                break
            }

            small_Last = small_Last.next;
        }
        // console.log(small);
        read_list(small);
        return small;
    } else {
        return big;
    }
}

function read_list(head) {
    let current = head;

    while (current != null) {
        console.log(current.val);

        current = current.next;
    }
}

let lt = new LinkedList();
lt.head = new ListNode(1);
lt.head.next = new ListNode(4);
lt.head.next.next = new ListNode(3);
lt.head.next.next.next = new ListNode(2);
lt.head.next.next.next.next = new ListNode(5);
lt.head.next.next.next.next.next = new ListNode(2);

partition(lt.head, 3);