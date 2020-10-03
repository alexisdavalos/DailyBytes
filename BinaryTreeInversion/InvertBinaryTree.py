# Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.

# Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

# O(n) time | O(n) space
def invertBinaryTree(tree):
    # Initialize a queue to store tree nodes
    queue = []
    # Return None if input tree is None
    if tree == None:
        return None
    # Add root node into queue
    queue.append(tree)
    # Loop while the queue has nodes
    while len(queue) > 0:
        # Grab node off the queue
        cur = queue.pop()
        # If valid node, swap the children
        if cur != None:
            swapTreeNodes(cur)
        # Otherwise continue to next iteration
        else:
            continue
        # Add swapped children to the queue
        queue.insert(0, cur.left)
        queue.insert(0, cur.right)

    # Return the inverted tree
    return tree


# Swaps left and right node children
def swapTreeNodes(node):
    left = node.left
    node.left = node.right
    node.right = left


class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    # Returns tree in an array, each level is a sub array
    def __repr__(self):
        queue = []
        path = []
        if self == None:
            return f'Tree: (None)'
        queue.append(self)
        while(len(queue) > 0):
            level = []
            size = len(queue)
            for _ in range(size):
                cur = queue.pop()
                level.append(cur.val)
                if cur.left:
                    queue.insert(0, cur.left)
                if cur.right:
                    queue.insert(0, cur.right)
            path.append(level)

        return f'Tree: {path}'


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
# Inverted tree should print out: [[1], [3, 2], [7, 6, 5, 4], [9, 8]]
print('Inverted', invertBinaryTree(tree))
