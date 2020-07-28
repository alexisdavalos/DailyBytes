class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, array):
        q = []
        q.append(self)
        while len(q) > 0:
            cur = q.pop(0)
            array.append(cur.name)
            for child in cur.children:
                q.append(child)
        return array

# Driver Code

Tree = Node(1)
for i in range(2,10):
    Tree.addChild(i)
arr = []
print(Tree.breadthFirstSearch(arr))
