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
	// Your Code Here
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
