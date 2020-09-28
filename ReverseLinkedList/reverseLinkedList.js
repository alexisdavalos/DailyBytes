// Node Class
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Linked List Class
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
    // Return List as String
    return string;
  }
}

// Given a non-empty linked list as input, write a function that returns a reversed list.

const reverseLinkedList = (linkedlist) => {
  // Initialize variables
  let cur = linkedlist.head;
  let prev = null;

  // Update the tail to be the first node
  linkedlist.tail = cur;

  // Traverse the linked list
  while (cur !== null) {
    // Reverse the pointers as we walk the list
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // Update the head to be the last node
  linkedlist.head = prev;
};

// Test Cases:
// 1->2->3->null, return 3->2->1->null
let list = buildLinkedList([1, 2, 3]);
console.log("Original", list.printList());
reverseLinkedList(list);
console.log("Reversed", list.printList());

// 1->2->3->null, return 3->2->1->null
list = buildLinkedList([3, 4, 5, 7, 9, 6]);
console.log("Original", list.printList());
reverseLinkedList(list);
console.log("Reversed", list.printList());

// ------------ Linked List Builder Function -------------- //

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
