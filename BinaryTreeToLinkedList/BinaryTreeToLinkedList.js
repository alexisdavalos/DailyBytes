// Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
// O(n + m) time | O(n + m)
const convertToLinkedList = (root) => {
  // Path to store tree nodes
  let path = [];
  // populates path in order (smallest > largest)
  traverseTree(root);
  // Creates new tree by slicing the first node in the path
  let newTree = new Tree(path.splice(0, 1)[0]);
  // Assign reference to new tree
  let cur = newTree;
  // Create Linked List by slicing away at the path
  while (path.length > 0) {
    // Slices the first node from path and creates new Tree from the value
    if (cur.right === null) cur.right = new Tree(path.splice(0, 1)[0]);
    // Updates reference to the newly created tree
    cur = cur.right;
  }
  // Returns Linked List
  return newTree;

  // In order tree traversal
  function traverseTree(tree) {
    if (tree.left) traverseTree(tree.left);
    path.push(tree.val);
    if (tree.right) traverseTree(tree.right);
  }
};

// Ex: Given the following tree...
//         5
//        / \
//       1   6
// return...
//
// 1
//  \
//   5
//    \
//     6

let tree = new Tree(5);
tree.left = new Tree(1);
tree.right = new Tree(6);
console.log(convertToLinkedList(tree));

// Ex: Given the following tree...
//
//        5
//       / \
//     2    9
//    / \
//   1   3
// return...
//
// 1
//  \
//   2
//    \
//     3
//      \
//       5
//        \
//         9

tree = new Tree(5);
tree.left = new Tree(2);
tree.left.left = new Tree(1);
tree.left.right = new Tree(3);
tree.right = new Tree(9);
console.log(convertToLinkedList(tree));

// Ex: Given the following tree...
//
// 5
//  \
//   6
// return...
//
// 5
//  \
//   6

tree = new Tree(5);
tree.right = new Tree(6);
console.log(convertToLinkedList(tree));
