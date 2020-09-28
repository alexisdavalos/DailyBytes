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
}

// This question is asked by Microsoft. Given a linked list, containing unique numbers, return whether or not it has a cycle.
// Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)
//

const detectCycle = (linkedlist) => {
  let isCycle = false;
  let cur = linkedlist.head;
  let nodes = new Set();

  while (cur !== null) {
    if (nodes.has(cur)) {
      return !isCycle;
    } else {
      nodes.add(cur);
      cur = cur.next;
    }
  }

  return isCycle;
};

// Ex: Given the following linked lists...

// Test 1: 1->2->3->1 -> true (3 points back to 1)
let Head = new Node(1);
let list = new LinkedList(Head);
list.addTail(2);
list.addTail(3);
list.tail.next = Head; // <- Creates cycle
console.log(detectCycle(list));

// Test 2: 1->2->3 -> false
let list2 = new LinkedList(new Node(1));
list2.addTail(2);
list2.addTail(3);
console.log(detectCycle(list2));

// Test 3: 1->1 true (1 points to itself)
let Head2 = new Node(1);
let list3 = new LinkedList(Head2);
list3.tail.next = Head2; // <- Creates cycle
console.log(detectCycle(list3));
