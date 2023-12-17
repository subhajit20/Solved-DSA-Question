 function ListNode(val, next) {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
 }

 class LinkedList {
     head = null;
 }

 var Solution = function(head) {
     this.current = head;
 };

 Solution.prototype.getRandom = function() {
     let len = get_length(this.current);
     let ran = Math.ceil(Math.random() * len);
     //  console.log(ran);

     let linked_list = this.current;
     let i = 1;
     while (linked_list !== null) {
         if (i == ran) {
             return linked_list.val;
         } else {
             linked_list = linked_list.next;
             i++;
         }
     }
 };

 function get_length(head) {
     let current = head;
     let count = 0;
     while (current !== null) {
         count++;
         current = current.next;
     }

     return count;
 }


 let lt = new LinkedList();

 lt.head = new ListNode(1);
 lt.head.next = new ListNode(2);
 lt.head.next.next = new ListNode(3);

 let obj = new Solution(lt.head);
 let node = obj.getRandom();
 console.log(node)