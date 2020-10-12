# Write a Breadth First Search method to the Node class. In other words, traverse the tree/graph in a Breadth First manner searching for a node level by level.

class Node:
    def __init__(self, value):
        self.children = []
        self.value = value

    def __repr__(self):
        return f'({self.value})'

    def addChild(self, value):
        self.children.append(Node(value))
        return self

    def breadthFirstSearch(self, target):
        # Your Code Here

        return


# Tree Construction
Tree = Node(1)
Tree.addChild(2)
Tree.children[0].addChild(3)
Tree.addChild(4)
Tree.children[0].addChild(23)
Tree.addChild(4)
Tree.children[0].addChild(33)
Tree.addChild(4)
Tree.addChild(5)
Tree.children[1].addChild(7)
for i in range(2, 10):
    Tree.addChild(i)


# The tree above should print out the following: 9
print(Tree.breadthFirstSearch(9))
