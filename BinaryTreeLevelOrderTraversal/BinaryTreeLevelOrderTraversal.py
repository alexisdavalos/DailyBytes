class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    def __repr__(self):
        return f'{self.val}'


def treeLevelOrderTraversal(root):
    # Your Code Here
    return


# Tree Construction
tree = Tree(3)
tree.left = Tree(9)
tree.right = Tree(20)
tree.right.left = Tree(15)
tree.right.right = Tree(7)


# Given the binary tree above, the function should return:
# [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
print('Path:', treeLevelOrderTraversal(tree))
