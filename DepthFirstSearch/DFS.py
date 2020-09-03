class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def __repr__(self):
        return f'Node({self.name})'

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array=[]):
        # Add current node to array
        array.append(self)
        # Traverse throguh all the children recursively
        for child in self.children:
            child.depthFirstSearch(array)
        return array

# Driver Code


Tree = Node(1)
Tree.addChild(33)
Tree.addChild(33)
Tree.children[0].addChild(44)
Tree.children[0].addChild(55)

for i in range(2, 10):
    Tree.addChild(i)

print(Tree.depthFirstSearch())
