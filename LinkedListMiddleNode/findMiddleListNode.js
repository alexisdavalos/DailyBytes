// This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.

const findMiddleNode = (linkedlist) => {
  // Your Code Here
};

// Node Class - Do Not Edit
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Linked List Class - Do Not Edit
class LinkedList {
  constructor(node = new Node("Head")) {
    this.head = node;
    this.tail = node;
  }
  addTail(value) {
    let newNode = new Node(value);
    if (this.head === null && this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  printList() {
    let string = "LinkedList: ";
    let cur = this.head;
    // Build out string from linked list
    while (cur !== null) {
      string += `(${cur.value}) -> `;
      cur = cur.next;
    }
    // Add null after reaching the end
    string += `null`;
    // Print List
    console.log(string);
  }
}

// Test Cases:
// 1->2->3->null, return 2
let list = buildLinkedList([1, 2, 3]);
let middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`); // => Should return 2

// 1->2->3->4->null, return 3
list = buildLinkedList([1, 2, 3, 4]);
middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`); // => Should return 3

// 1->null, return 1
list = buildLinkedList([1]);
middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`); // => Should return 1

// --------- Linked List Builder Function Do Not Edit ----------- //

// Create linked lists with array of values
function buildLinkedList(nodes) {
  // build new list with first node from arr
  let linkedlist = new LinkedList(new Node(nodes[0]));
  // Loop through input range and populate remainder of list
  for (let i = 1; i < nodes.length; i++) {
    linkedlist.addTail(nodes[i]);
  }
  return linkedlist;
}
