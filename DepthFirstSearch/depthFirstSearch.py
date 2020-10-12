class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def __repr__(self):
        return f'Node({self.name})'

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, target):
        # Your Code Here
        return


# Tree Construction
Tree = Node(1)
Tree.addChild(33)
Tree.addChild(33)
Tree.children[0].addChild(44)
Tree.children[0].addChild(55)

for i in range(2, 10):
    Tree.addChild(i)

# The tree above should print out the following: 44
print(Tree.depthFirstSearch(44))
