function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var mergeInBetween = function(list1, a, b, list2) {
    let x = 0;
    let curr = list1;
    let first_prev = null;
    let last_prev = null;

    if (list1 === null || list2 === null) {
        return null;
    }

    while (curr.next !== null) {
        if (x == a) {
            break;
        } else {
            x++;
            first_prev = curr;
            curr = curr.next;
        }
    }

    x = 0;
    curr = list1;
    while (curr.next !== null) {
        if (x == b) {
            break;
        } else {
            x++;
            curr = curr.next;
            last_prev = curr;
        }
    }

    // console.log(first_prev);
    // console.log(last_prev);
    let rest_nodes = null;
    let newlist = new ListNode();

    if (last_prev === null) {
        if (first_prev == null) {
            let newlist = new ListNode();
            newlist.next = list2;
            rest_nodes = newlist.next;

            return newlist.next;
        } else {
            first_prev.next = list2;
            rest_nodes = list1;

            return list1;
        }
    } else {
        if (first_prev == null) {
            newlist.next = list2;
            rest_nodes = newlist.next;

            while (rest_nodes.next !== null) {
                rest_nodes = rest_nodes.next;
            }

            rest_nodes.next = last_prev.next;

            return newlist.next;
        } else {
            first_prev.next = list2;
            rest_nodes = list1;

            while (rest_nodes.next !== null) {
                rest_nodes = rest_nodes.next;
            }

            rest_nodes.next = last_prev.next;

            return list1;
        }
    }

};

let list1 = new ListNode(0);
list1.next = new ListNode(1);
list1.next.next = new ListNode(2);
list1.next.next.next = new ListNode(3);
list1.next.next.next.next = new ListNode(4);
list1.next.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next.next = new ListNode(6);

let list2 = new ListNode(10000023);
list2.next = new ListNode(1000003);
list2.next.next = new ListNode(1000033);

let data = mergeInBetween(list1, 2, 5, list2);

console.log(data);