# Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

# This is the class of the input binary tree. Do not Edit!
class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None


def visibleValues(root):
    # Your Code Here
    return


# Ex: Given the following tree…
#
# -->    4
#       / \
# -->  2   7
# return [4, 2]

tree = Tree(4)
tree.left = Tree(2)
tree.right == Tree(7)

# Ex: Given the following tree…
#
# -->        7
#          /  \
# -->     4     9
#        / \   / \
# -->   1   4 8   9
#                  \
# -->               9
# return [7, 4, 1, 9]

tree = Tree(7)
tree.left = Tree(4)
tree.right = Tree(9)
tree.left.left = Tree(1)
tree.left.right = Tree(4)
tree.right.left = Tree(8)
tree.right.right = Tree(9)
tree.right.right.right = Tree(9)
