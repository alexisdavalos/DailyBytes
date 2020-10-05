//Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

const treeLevelOrderTraversal = (root) => {
  // Your Code Here
};

// This is the class of the input binary tree.
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Tree Construction
const tree = new Tree(3);
tree.left = new Tree(9);
tree.right = new Tree(20);
tree.right.left = new Tree(15);
tree.right.right = new Tree(7);

// Given the binary tree above, the function should return:
// [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

console.log(treeLevelOrderTraversal(tree));
