class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def inOrderTraverse(self):
		# Store Tree Nodes While Traversing
		array = []
		# Recursively traverse nodes 
        if self is not None:
            inOrderTraverse(self.left, array)
            array.append(self.value)
            inOrderTraverse(self.right, array)
		# Return populated array
        return array

    def preOrderTraverse(self):
		# Store Tree Nodes While Traversing
		array = []
		# Recursively traverse nodes 
        if self is not None:
            array.append(self.value)
            preOrderTraverse(self.left, array)
            preOrderTraverse(self.right, array)
		# Return populated array
        return array


    def postOrderTraverse(self):
		# Store Tree Nodes While Traversing
		array = []
		# Recursively traverse nodes 
        if self is not None:
            postOrderTraverse(self.left, array)
            postOrderTraverse(self.right, array)
            array.append(self.value)
		# Return populated array
        return array
