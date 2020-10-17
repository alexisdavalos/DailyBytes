// Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

// Tree Class - Do Not Edit
class Tree {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }

const binaryTreeMaxLevelValues = (root) =>{
    // Your Code Here
}


// Test Case 1:
// Ex: Given the following tree…
//     2
//    / \
//   10  15
//         \
//          20

let tree = new Tree(2);
tree.left = new Tree(10);
tree.right = new Tree(15);

console.log(binaryTreeMaxLevelValues(tree)) // return [2, 15, 20]

// Test Case 2:
// Ex: Given the following tree…
// 
//           1
//          / \
//         5   6
//        / \   \  
//       5   3   7 

tree = new Tree(1);
tree.left = new Tree(5);
tree.right = new Tree(6);
tree.left.left = new Tree(5);
tree.left.right = new Tree(3);
tree.right.right = new Tree(7);

// return [1, 6, 7]