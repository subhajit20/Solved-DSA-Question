// 82. Remove Duplicates from Sorted List II
/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
 * leaving only distinct numbers from the original list. 
 * Return the linked list sorted as well.
 */


var deleteDuplicates = function(head) {
    if (head == null) {
        return head;
    } else {
        let dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;
        let curr = head;


        while (curr !== null) {
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            if (prev.next == curr) {
                prev = curr
            } else {
                prev.next = curr.next;
            }
            curr = curr.next;
        }

        return dummy.next;

    }
};