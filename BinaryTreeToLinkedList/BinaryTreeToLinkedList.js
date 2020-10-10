// Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const convertToLinkedList = (root) => {
  // Your Code Here
};

// Ex: Given the following tree...
//         5
//        / \
//       1   6

let tree = new Tree(5);
tree.left = new Tree(1);
tree.right = new Tree(6);
console.log(convertToLinkedList(tree));

// return...
//
// 1
//  \
//   5
//    \
//     6

// Ex: Given the following tree...
//
//        5
//       / \
//     2    9
//    / \
//   1   3

tree = new Tree(5);
tree.left = new Tree(2);
tree.left.left = new Tree(1);
tree.left.right = new Tree(3);
tree.right = new Tree(9);
console.log(convertToLinkedList(tree));

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

// Ex: Given the following tree...
//
// 5
//  \
//   6

tree = new Tree(5);
tree.right = new Tree(6);
console.log(convertToLinkedList(tree));

// return...
//
// 5
//  \
//   6
