# Part 1 #
##########

# Constructor a __repr__ method to print out a tree structure in the following format: [[1], [2, 3], [4, 5, 6, 7], [8, 9]]

# Where each sub-array returned is a level in the binary tree

class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    # Returns tree in an array, each level is a sub array
    def __repr__(self):
        # Your Code Here
        return


# Tree Construction
tree = Tree(1)
tree.left = Tree(2)
tree.right = Tree(3)
tree.left.left = Tree(4)
tree.left.right = Tree(5)
tree.left.left.left = Tree(8)
tree.left.left.right = Tree(9)
tree.right.left = Tree(6)
tree.right.right = Tree(7)

# Tree should print out: [[1], [2, 3], [4, 5, 6, 7], [8, 9]]
print('Original', tree)


# Part 2 #
##########

# Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

# Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

# O(n) time | O(n) space
def invertBinaryTree(tree):
    # Your Code Here
    return


# Inverted tree should print out: [[1], [3, 2], [7, 6, 5, 4], [9, 8]]
print('Inverted', invertBinaryTree(tree))
