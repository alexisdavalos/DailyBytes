// Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

// Tree Class - Do Not Edit
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeMaxLevelValues = (root) => {
  let queue = [];
  let values = [];

  if (root === null) return root;
  queue.push(root);

  while (queue.length > 0) {
    let qSize = queue.length;
    let level = [];
    for (let i = 0; i < qSize; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    // evaluate level nodes
    if (level.length > 0) {
      values.push(Math.max(...level));
    }
  }
  return values;
};

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
tree.right.right = new Tree(20);

console.log(binaryTreeMaxLevelValues(tree)); // return [2, 15, 20]

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

console.log(binaryTreeMaxLevelValues(tree)); // return [1, 6, 7]
