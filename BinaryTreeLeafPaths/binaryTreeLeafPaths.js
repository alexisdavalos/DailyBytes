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
	let path = "";
	let paths = [];
	traverseTree(root, path);
	return paths;
	function traverseTree(tree, path) {
		path += `${tree.val}->`;
		if (tree.left) traverseTree(tree.left, path);
		if (tree.right) traverseTree(tree.right, path);
		if (tree.left === null && tree.right === null) {
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
