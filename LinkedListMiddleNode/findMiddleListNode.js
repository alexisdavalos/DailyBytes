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
    // Print List
    console.log(string);
  }
}

// This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.

const findMiddleNode = (linkedlist) => {
  // Traverse linked list and count all nodes
  // Divide node count by 2 to find the middle
  // Traverse linked list until we reach middle node
  // If even # of nodes, return node closer to the end of the list

  let nodeCount = 0;
  let middle = 0;
  let cur = linkedlist.head;

  // Count all nodes
  while (cur !== null) {
    nodeCount += 1;
    cur = cur.next;
  }

  // If even # of nodes, return node closer to the end of the list
  if (nodeCount % 2 === 0) {
    middle = Math.ceil(nodeCount / 2 + 1);
  } else {
    middle = Math.ceil(nodeCount / 2);
  }

  // reset nodeCount
  nodeCount = 0;
  cur = linkedlist.head;

  // traverse linked list until we hit middle node
  while (cur !== null) {
    nodeCount += 1;
    if (middle === nodeCount) {
      return cur;
    } else {
      cur = cur.next;
    }
  }
};

// Test Cases:
// 1->2->3->null, return 2
let list = buildLinkedList([1, 2, 3]);
let middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`);

// 1->2->3->4->null, return 3
list = buildLinkedList([1, 2, 3, 4]);
middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`);

// 1->null, return 1
list = buildLinkedList([1]);
middle = findMiddleNode(list);
list.printList();
console.log(`Middle Node: ${middle.value}\n`);

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
