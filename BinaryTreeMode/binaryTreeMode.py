# Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

# Tree Class - Do Not Edit
class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    def __repr___(self):
        return f'{self.val}'


def binaryTreeMode(root):
    # Your Code Here
    return


# Ex: Given the following tree...
#
#         2
#        / \
#       1   2

tree = Tree(2)
tree.left = Tree(1)
tree.right = Tree(2)

print(f'Mode: {binaryTreeMode(tree)}')  # return 2.

# Ex: Given the following tree...
#
#          7
#         / \
#       4     9
#      / \   / \
#     1   4 8   9
#                \
#                 9

tree = Tree(7)
tree.left = Tree(4)
tree.left.left = Tree(1)
tree.left.right = Tree(4)
tree.right = Tree(9)
tree.right.left = Tree(8)
tree.right.right = Tree(9)
tree.right.right.right = Tree(9)

print(f'Mode: {binaryTreeMode(tree)}')  # return 9.
