// Given a binary tree, return a list of strings containing all root to leaf paths.

// Tree Class - Do Not Edit
class Tree {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

const rootToLeafPaths = (root) => {
	// Return null if empty tree
	if (root === null) return null;

	// Global Variable Initialization
	let path = "";
	let symbols = [];
	let paths = [];

	// Traverse input tree and builds path
	traverseTree(root, path);
	// Return populated paths array
	return paths;

	// Helper - recursive traversal function
	function traverseTree(tree, path) {
		// Starts building path at root O(n + n) time | O(n + n) space
		path += `${tree.val}->`;
		// Traverse left side first and pass path down - pushes nodes onto recursion stack O(n)
		if (tree.left) traverseTree(tree.left, path);
		// Traverse right side last and pass path down - pushes nodes onto recursion stack O(n)
		if (tree.right) traverseTree(tree.right, path);
		// When you reach a leaf node, clean arrow from end of path
		if (!tree.left && !tree.right) {
			let finalPath = path.split("");
			// removes arrow from final node
			finalPath.splice(finalPath.length - 2, 2);
			paths.push(finalPath.join(""));
			path = "";
		}
	}
};

// Ex: Given the following tree…
//
//    1
//  /   \
// 2     3

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);

console.log(rootToLeafPaths(tree)); // return ["1->2", "1->3"]

// Ex: Given the following tree…

tree = new Tree(8);
tree.left = new Tree(2);
tree.right = new Tree(29);
tree.right.left = new Tree(3);
tree.right.right = new Tree(9);
//     8
//    / \
//   2  29
//     /  \
//    3    9

console.log(rootToLeafPaths(tree)); // return ["8->2", "8->29->3", "8->29->9"]
