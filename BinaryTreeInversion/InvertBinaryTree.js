// Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

const invertBinaryTree = (tree) => {
  // Your Code Here
};

// This is the class of the input binary tree. Do not Edit!
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Tree Construction
const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
tree.left.left.left = new Tree(8);
tree.left.left.right = new Tree(9);
tree.right.left = new Tree(6);
tree.right.right = new Tree(7);

console.log("original:", tree);
console.log("\ninverted:", invertBinaryTree(tree)); // Each level should be swapped
