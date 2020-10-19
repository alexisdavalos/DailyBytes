//Given an n-ary tree, return its level order traversal.
//Note: an n-ary tree is a tree in which each node has no more than N children.

// Tree Class - Do Not Edit
class Tree {
	constructor(value) {
		this.val = value;
		this.children = [];
	}
}

const treeLevels = (root) => {
	// Your Code Here
};

// Test Case 1
// Ex: Give the following n-ary tree…
//
//     8
//   / | \
//  2  3  29

let tree = new Tree(8);
tree.children = [new Tree(2), new Tree(3), new Tree(29)];
console.log(treeLevels(tree)); // return [[8], [2, 3, 29]]

// Test Case 2
// Ex: Given the following n-ary tree…
//
//      2
//    / | \
//   1  6  9
//  /   |   \
// 8    2    2
//    / | \
//  19 12 90

tree = new Tree(2);
tree.children = [new Tree(1), new Tree(6), new Tree(9)];
tree.children[0].children = [new Tree(8)];
tree.children[1].children = [new Tree(2)];
tree.children[2].children = [new Tree(2)];
tree.children[0].children[0].children = [];
tree.children[1].children[1].children = [
	new Tree(19),
	new Tree(12),
	new Tree(90),
];
tree.children[2].children[2].children = [];

console.log(treeLevels(tree)); // return [[2], [1, 6, 9], [8, 2, 2], [19, 12, 90]]
