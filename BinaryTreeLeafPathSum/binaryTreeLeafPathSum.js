// Given a binary tree and a target, return whether or not there exists a root to leaf path such that all values along the path sum to the target.

// Tree Class - Do Not Edit
class Tree {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

const binaryTreeLeafPathSum = (root, target) => {
	if (!root) return null;
	let sum = 0;
	let boolean = false;
	traverseTree(root, sum);
	return boolean;
	function traverseTree(root, sum) {
		sum += root.val;
		if (root.left) traverseTree(root.left, sum);
		if (root.right) traverseTree(root.right, sum);
		if (!root.left && !root.right) {
			if (sum === target) {
				boolean = true;
			}
		}
	}
};
// Ex: Given the following tree…

//       1
//      / \
//     5   2
//    /   / \
//   1  12   29

let tree = new Tree(1);
tree.left = new Tree(5);
tree.right = new Tree(2);
tree.left.left = new Tree(1);
tree.right.left = new Tree(12);
tree.right.right = new Tree(29);

console.log(`Testing Tree #1`);
console.log(`Root to leaf path sum of 15:`, binaryTreeLeafPathSum(tree, 15)); // true
console.log(`Root to leaf path sum of 7:`, binaryTreeLeafPathSum(tree, 7)); // true
console.log(`Root to leaf path sum of 43:`, binaryTreeLeafPathSum(tree, 43)); // false

// Ex: Given the following tree…

//      104
//     /   \
//   39     31
//  / \    /  \
// 32  1  9    10

tree = new Tree(104);
tree.left = new Tree(39);
tree.right = new Tree(31);
tree.left.left = new Tree(32);
tree.left.right = new Tree(1);
tree.right.left = new Tree(9);
tree.right.right = new Tree(10);

console.log(`\nTesting Tree #2`);
console.log(`Root to leaf path sum of 175:`, binaryTreeLeafPathSum(tree, 175)); // true
console.log(`Root to leaf path sum of 87:`, binaryTreeLeafPathSum(tree, 87)); // false
console.log(`Root to leaf path sum of 144:`, binaryTreeLeafPathSum(tree, 144)); // true
