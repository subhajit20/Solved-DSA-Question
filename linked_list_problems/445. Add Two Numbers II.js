 function ListNode(val, next) {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
 }

 var addTwoNumbers = function(l1, l2) {
     let newlist = new ListNode();

     let carry = 0;
     let firstNum = '';
     let secondNum = '';

     while (l1 || l2) {
         if (l1 !== null) {
             firstNum += l1.val
             l1 = l1.next;
         }
         if (l2 !== null) {
             secondNum += l2.val
             l2 = l2.next;
         }

     }
     let sum = (parseInt(firstNum) + parseInt(secondNum)).toString();
     console.log(sum.length);
     let i = 0;
     while (i <= sum.length - 1) {
         insert(newlist, parseInt(sum[i]));
         i = i + 1
     }

     return newlist.next;
 };

 function insert(head, val) {
     let curr = head;
     if (curr.next === null) {
         curr.next = new ListNode(val);
     } else {
         while (curr.next !== null) {
             curr = curr.next;
         }
         curr.next = new ListNode(val);
     }
 }

 let list1 = new ListNode(7);
 list1.next = new ListNode(2);
 list1.next.next = new ListNode(4)
 list1.next.next.next = new ListNode(3);

 let list2 = new ListNode(5);
 list2.next = new ListNode(6);
 list2.next.next = new ListNode(4);

 let data = addTwoNumbers(list1, list2);

 while (data !== null) {
     console.log(data.val);

     data = data.next;
 }