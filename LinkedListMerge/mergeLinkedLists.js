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
      string += `${cur.value} -> `;
      cur = cur.next;
    }
    // Add null after reaching the end
    string += `null\n`;
    // Print List
    console.log(string);
  }
}

// This question is asked by Apple. Given two sorted linked lists, // merge them together in ascending order and return a reference to the merged list

// Function to merged two sorted lists
const mergeLinkedLists = (list1, list2) => {
  // Create pointers for list heads
  let l1 = list1.head;
  let l2 = list2.head;

  // Create a new linked list to populate a new list at O(n + m)
  const ll = new LinkedList();

  // Create pointer to linked list head
  let cur = ll.head;

  // Treverse l1 and l2 simulteanously
  while (l1 && l2) {
    // Compare node values and find the smallest value
    if (l1.value <= l2.value) {
      // make next node l1 in new list
      cur.next = l1;
      // update l1 down to next node
      l1 = l1.next;
    } else if (l1.value > l2.value) {
      // make next node l2 in new list
      cur.next = l2;
      // update l2 down to next node
      l2 = l2.next;
    }
    // update cur to next node after evaluation is done
    cur = cur.next;
  }

  // The while loop broke out because we reached null in one of the linked lists. Check which list is now null, and add the rest of the list to our new list.

  if (!l1) {
    // adds the rest of l2 to cur
    cur.next = l2;
  } else if (!l2) {
    // adds the rest of l1 to cur
    cur.next = l1;
  }

  // Return the newly constructed linked list
  return ll;
};

// Ex: Given the following cases...

// list1 = 1->2->3, list2 = 4->5->6->null
// return 1->2->3->4->5->6->null

let list1 = buildLinkedList([1, 2, 3]);
let list2 = buildLinkedList([4, 5, 6]);
let merged = mergeLinkedLists(list1, list2);
console.log("List 1: (1->2->3) + List 2: (4->5->6):");
merged.printList();

// list1 = 1->3->5, list2 = 2->4->6->null,
// return 1->2->3->4->5->6->null

list1 = buildLinkedList([1, 3, 5]);
list2 = buildLinkedList([2, 4, 6]);
merged = mergeLinkedLists(list1, list2);
console.log("List 1: (1->3->5) + List 2: (2->4->6):");
merged.printList();

// list1 = 4->4->7, list2 = 1->5->6->null
// return 1->4->4->5->6->7->null

list1 = buildLinkedList([4, 4, 7]);
list2 = buildLinkedList([1, 5, 6]);
merged = mergeLinkedLists(list1, list2);
console.log("List 1: (4->4->7) + List 2: (1->5->6):");
merged.printList();

// Create sorted linked lists with array of values
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
