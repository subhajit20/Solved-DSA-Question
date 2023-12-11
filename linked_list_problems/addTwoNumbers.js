function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class LinkedList {
  head = null;
}

var addTwoNumbers = function (l1, l2) {
  let borrow = 0;
  let l3 = new LinkedList();
  let sum = 0;
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      sum = l2.val + borrow;
      l2 = l2.next;
    } else if (l2 === null) {
      sum = l1.val + borrow;
      l1 = l1.next;
    } else if (l1 !== null && l2 !== null) {
      sum = l1.val + l2.val + borrow;
      l1 = l1.next;
      l2 = l2.next;
    }
    if (sum > 9) {
      borrow = 1;
      sum = sum - 10;
    } else {
      borrow = 0;
    }
    insert(l3, sum);
  }

  if (borrow === 1) {
    insert(l3, borrow);
  }

  return l3.head;
};

function insert(l3, sum) {
  if (l3.head === null) {
    l3.head = new ListNode(sum);
  } else {
    let current = l3.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new ListNode(sum);
  }
}
