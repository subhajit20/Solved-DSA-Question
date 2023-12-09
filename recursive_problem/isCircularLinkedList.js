function hasCycle(node) {
    let first_pointer = node;
    let slow_pointer = node;
    while (first_pointer !== null && first_pointer.next !== null) {
        slow_pointer = slow_pointer.next;
        first_pointer = first_pointer.next.next;

        if (slow_pointer === first_pointer) {
            return true;
        }
    }

    return false;
}