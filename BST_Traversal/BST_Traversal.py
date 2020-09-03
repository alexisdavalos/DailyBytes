# Add three methods to the BST class that take in a a BST and an empty array. Traverse the BST, add its nodes' values to the input array, and return that array. The three functions should treverse the BST using the in-order, pre-order, and post-order tree traversal technicques.

# O(n) time | O(n)/O(d)
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __repr__(self):
        return f'{self.inOrderTraverse(self, array=[])}'

    def insert(self, value):
        # Given value is less than node's value
        if value < self.value:
            # Node is a leaf node, insert new node
            if self.left is None:
                self.left = BST(value)
        # Otherwise keep traversing the tree
            else:
                self.left.insert(value)
        # Given value is greater than node's value
        elif value > self.value:
            # Node is a leaf node, insert new node
            if self.right is None:
                self.right = BST(value)
            # Otherwise keep traversing the tree
            else:
                self.right.insert(value)

    def inOrderTraverse(self, tree, array=[]):
        # Recursively traverse nodes
        if tree is not None:
            self.inOrderTraverse(tree.left, array)
            array.append(tree.value)
            self.inOrderTraverse(tree.right, array)
            # Return populated array
        return array

    def preOrderTraverse(self, tree, array=[]):
        # Recursively traverse nodes
        if tree is not None:
            array.append(tree.value)
            self.preOrderTraverse(tree.left, array)
            self.preOrderTraverse(tree.right, array)
            # Return populated array
        return array

    def postOrderTraverse(self, tree, array=[]):
        # Recursively traverse nodes
        if tree is not None:
            self.postOrderTraverse(tree.left, array)
            self.postOrderTraverse(tree.right, array)
            array.append(tree.value)
            # Return populated array
        return array


# Driver Code
# Create BST
Tree = BST(1)
Tree.insert(2)
Tree.insert(5)
Tree.insert(5)
Tree.insert(10)
Tree.insert(15)
Tree.insert(22)


# Traversals
print(Tree.inOrderTraverse(Tree))
print(Tree.preOrderTraverse(Tree))
print(Tree.postOrderTraverse(Tree))
