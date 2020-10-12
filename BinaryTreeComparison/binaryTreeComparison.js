// Given two binary trees, return whether or not the two trees are identical. Note: identical meaning they exhibit the same structure and the same values at each node.

// Tree Class - Do Not Edit
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeComparison = (treeA, treeB) => {
  // Your Code Here
};

// Test Cases:
// Ex: Given the following trees...
//         2
//        / \
//       1   3
//     2
//    / \
//   1   3

let treeA = new Tree(2);
treeA.left = new Tree(1);
treeA.right = new Tree(3);
let treeB = new Tree(2);
treeB.left = new Tree(1);
treeB.right = new Tree(3);

console.log(binaryTreeComparison(treeA, treeB)); // => true

// Ex: Given the following trees...
//
//         1
//          \
//           9
//            \
//            18
//     1
//    /
//   9
//    \
//     18

let treeC = new Tree(1);
treeC.right = new Tree(9);
treeC.right.right = new Tree(18);
let treeD = new Tree(1);
treeD.left = new Tree(9);
treeD.left.right = new Tree(18);

console.log(binaryTreeComparison(treeC, treeD)); // => false

// Ex: Given the following trees...
//
//         2
//        / \
//       3   1
//     2
//    / \
//   1   3

let treeE = new Tree(2);
treeE.left = new Tree(3);
treeE.right = new Tree(1);
let treeF = new Tree(2);
treeF.left = new Tree(1);
treeF.right = new Tree(3);

console.log(binaryTreeComparison(treeE, treeF)); // => false
