//Given a binary tree, return whether or not it forms a reflection across its center (i.e. a line drawn straight down starting from the root).
//Note: a reflection is when an image, flipped across a specified line, forms the same image.

// Tree Class - Do Not Edit
class Tree {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

const binaryTreeSymmetry = (root) => {
	// Your Code Here
};

// Ex: Given the following tree…
//
//    2
//  /   \
// 1     1

let tree = new Tree(2);
tree.left = new Tree(1);
tree.right = new Tree(1);
console.log(binaryTreeSymmetry(tree));
// return true as when the tree is reflected across its center all the nodes match.

// Ex: Given the following tree…
//
//     1
//    / \
//   5   5
//    \    \
//     7    7

tree = new Tree(1);
tree.left = new Tree(5);
tree.left.right = new Tree(7);
tree.right = new Tree(5);
tree.right.right = new Tree(7);
console.log(binaryTreeSymmetry(tree));
// return false as when the tree is reflected across its center the nodes containing sevens do not match.
