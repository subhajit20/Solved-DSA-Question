class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;

    insertWithRecursion(node, data) {
        let newNode = new Node(data);
        if (node.next === null) {
            node.next = newNode;
        } else {
            return this.insertWithRecursion(node.next, data);
        }
    }

    printAllNode(node) {
        while (node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }
}

let lt = new LinkedList();
lt.head = new Node(1);

lt.head.next = new Node(2);

lt.insertWithRecursion(lt.head, 10);
lt.insertWithRecursion(lt.head, 12);
lt.insertWithRecursion(lt.head, 14);
lt.insertWithRecursion(lt.head, 15);
lt.insertWithRecursion(lt.head, 17);
lt.insertWithRecursion(lt.head, 200);

lt.printAllNode(lt.head);