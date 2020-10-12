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
    # Store node values in a dictionary
    path = {}
    # Empty tree edge case
    if root == None:
        return -1
    # Traverse tree and count node values
    countTreeNodes(root, path)
    # Grab all the items in dictionary and sort them
    entries = sorted(path.items())
    # Return key of the last item in the entries dict items
    return (entries[len(entries) - 1][0])


def countTreeNodes(tree, path):
    # Add node val to dictionary
    if tree.val not in path:
        path[tree.val] = 1
    else:
        path[tree.val] += 1
        # Traverse children nodes
    if tree.left:
        countTreeNodes(tree.left, path)
    if tree.right:
        countTreeNodes(tree.right, path)


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
