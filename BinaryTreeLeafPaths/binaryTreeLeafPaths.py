# Given a binary tree, return a list of strings containing all root to leaf paths.

# Tree Class - Do Not Edit
class Tree:
	def __init__(self, value):
		self.val = value
		self.left = None
		self.right = None
	

def rootToLeafPaths(root):
	# Your Code Here
	return


# Ex: Given the following tree…
#
#    1
#  /   \
# 2     3

tree = Tree(1)
tree.left = Tree(2)
tree.right = Tree(3)

print(rootToLeafPaths(tree)) # return ["1->2", "1->3"]

# Ex: Given the following tree…

tree = Tree(8)
tree.left = Tree(2)
tree.right = Tree(29)
tree.right.left = Tree(3)
tree.right.right = Tree(9)
#     8
#    / \
#   2  29
#     /  \
#    3    9

print(rootToLeafPaths(tree)) # return ["8->2", "8->29->3", "8->29->9"]
