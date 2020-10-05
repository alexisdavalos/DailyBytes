// This question is asked by Apple. Given two sorted linked lists merge them together in ascending order and return a reference to the merged list.

// Function to merged two sorted lists
const mergeLinkedLists = (list1, list2) => {
  // Your Code Here
};

// Node Class Do Not Edit
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Linked List Class Do Not Edit
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
      string += `${cur.value} -> `;
      cur = cur.next;
    }
    // Add null after reaching the end
    string += `null\n`;
    // Print List
    console.log(string);
  }
}

// Ex: Given the following cases...

// Test Case 1
// list1 = 1->2->3, list2 = 4->5->6->null
// return 1->2->3->4->5->6->null

let list1 = buildLinkedList([1, 2, 3]);
let list2 = buildLinkedList([4, 5, 6]);
let merged = mergeLinkedLists(list1, list2);
console.log("List 1: (1->2->3) + List 2: (4->5->6):");
merged.printList();

// Test Case 2
// list1 = 1->3->5, list2 = 2->4->6->null,
// return 1->2->3->4->5->6->null

list1 = buildLinkedList([1, 3, 5]);
list2 = buildLinkedList([2, 4, 6]);
merged = mergeLinkedLists(list1, list2);
console.log("List 1: (1->3->5) + List 2: (2->4->6):");
merged.printList();

// Test Case 3
// list1 = 4->4->7, list2 = 1->5->6->null
// return 1->4->4->5->6->7->null

list1 = buildLinkedList([4, 4, 7]);
list2 = buildLinkedList([1, 5, 6]);
merged = mergeLinkedLists(list1, list2);
console.log("List 1: (4->4->7) + List 2: (1->5->6):");
merged.printList();

// Build Linked List Function - Do Not Edit
function buildLinkedList(nodes) {
  // sort list
  nodes.sort((a, b) => a - b);
  // build new list with first node from arr
  let linkedlist = new LinkedList(new Node(nodes[0]));
  // Loop through input range and populate remainder of list
  for (let i = 1; i < nodes.length; i++) {
    linkedlist.addTail(nodes[i]);
  }
  return linkedlist;
}
