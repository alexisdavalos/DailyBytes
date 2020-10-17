# Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

# Tree Class - Do Not Edit
class Tree:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None
  


def binaryTreeMaxLevelValues(root):
  # Your Code Here
  return 

# Test Case 1:
# Ex: Given the following tree…
#     2
#    / \
#   10  15
#         \
#          20

tree = Tree(2)
tree.left = Tree(10)
tree.right = Tree(15)
tree.right.right = Tree(20)

print(binaryTreeMaxLevelValues(tree)) # return [2, 15, 20]

# Test Case 2:
# Ex: Given the following tree…
#
#           1
#          / \
#         5   6
#        / \   \
#       5   3   7

tree = Tree(1)
tree.left = Tree(5)
tree.right = Tree(6)
tree.left.left = Tree(5)
tree.left.right = Tree(3)
tree.right.right = Tree(7)

print(binaryTreeMaxLevelValues(tree)) # return [1, 6, 7]
