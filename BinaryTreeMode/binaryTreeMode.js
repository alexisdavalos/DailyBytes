// Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

// Tree Class - Do Not Edit
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeMode = (root) => {
  // Your Code Here
};

// Ex: Given the following tree...
//
//         2
//        / \
//       1   2

let tree = new Tree(2);
tree.left = new Tree(1);
tree.right = new Tree(2);

console.log("Mode:", binaryTreeMode(tree)); // return 2.

// Ex: Given the following tree...
//
//          7
//         / \
//       4     9
//      / \   / \
//     1   4 8   9
//                \
//                 9

tree = new Tree(7);
tree.left = new Tree(4);
tree.left.left = new Tree(1);
tree.left.right = new Tree(4);
tree.right = new Tree(9);
tree.right.left = new Tree(8);
tree.right.right = new Tree(9);
tree.right.right.right = new Tree(9);

console.log("Mode:", binaryTreeMode(tree)); // return 9.
