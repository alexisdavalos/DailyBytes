//Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

const treeLevelOrderTraversal = (root) => {
  let queue = [];
  let path = [];
  // return empty path if root is null
  if (root === null) return path;
  // add root to queue
  queue.push(root);

  while (queue.length > 0) {
    // Create array to store each row/level
    let level = [];
    // Keep track of the current queue size
    let size = queue.length;
    // Loop through current level in queue
    for (let i = 0; i < size; i++) {
      // Grab node from the current level in the queue
      let cur = queue.pop();
      // Check if node has children and add them to queue
      if (cur.left) queue.unshift(cur.left);
      if (cur.right) queue.unshift(cur.right);
      // Add node value to current level
      level.push(cur.val);
    }
    // Finished looping through level, add to the path
    path.push(level);
  }

  return path;
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
