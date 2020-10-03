# Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

# Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.


def invertBinaryTree(tree):
    queue = []

    if tree == None:
        return None

    queue.append(tree)

    while len(queue) > 0:
        cur = queue.pop()

        if cur != None:
            swapTreeNodes(cur)
        else:
            continue

        queue.insert(0, cur.left)
        queue.insert(0, cur.right)

    return tree


def swapTreeNodes(node):
    left = node.left
    node.left = node.right
    node.right = left


class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    def __repr__(self):
        return f'Root:({self.val}): left({self.left.val}) right({self.right.val})'


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


print(tree)
print(invertBinaryTree(tree))
