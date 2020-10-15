// Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

// This is the class of the input binary tree. Do not Edit!
class Tree {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }

const visibleValues = (root) =>{
    // Your Code Here
}

// Ex: Given the following tree…
// 
// -->    4
//       / \
// -->  2   7
// return [4, 2]

let tree = new Tree(4)
tree.left = new Tree(2)
tree.right == new Tree(7)

// Ex: Given the following tree…
// 
// -->        7
//          /  \
// -->     4     9
//        / \   / \
// -->   1   4 8   9
//                  \
// -->               9
// return [7, 4, 1, 9]

tree = new Tree(7)
tree.left = new Tree(4)
tree.right = new Tree(9)
tree.left.left = new Tree(1)
tree.left.right = new Tree(4)
tree.right.left = new Tree(8)
tree.right.right = new Tree(9)
tree.right.right.right = new Tree(9)