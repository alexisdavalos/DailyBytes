class Tree:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

    def __repr__(self):
        return f'{self.val}'


def treeLevelOrderTraversal(root):
    # Keep track of the current queue size
    queue = []
    # Create array to store each row/level
    path = []
    # Return empty path if root is None
    if root == None:
        return path
    # Add root node to queue
    queue.append(root)
    # Perform BFS to traverse the tree
    while(len(queue) > 0):
        level = []
        size = len(queue)
        for _ in range(size):
            # Grab node from the current level in the queue
            cur = queue.pop()
            # Check if node has children and add them to queue
            if cur.left:
                queue.insert(0, cur.left)
            if cur.right:
                queue.insert(0, cur.right)
            # Add node value to current level
            level.append(cur.val)
        # Finished looping through level, add to the path
        path.append(level)

    # Finished traversing tree, return the path
    return path


# Tree Construction
tree = Tree(3)
tree.left = Tree(9)
tree.right = Tree(20)
tree.right.left = Tree(15)
tree.right.right = Tree(7)


# Given the binary tree above, the function should return:
# [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
print('Path:', treeLevelOrderTraversal(tree))
