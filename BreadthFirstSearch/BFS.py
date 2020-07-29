class Node:
    def __init__(self, value):
        self.children = []
        self.value = value
   
    def __repr__(self):
        return f'({self.value})'

    def addChild(self, value):
        self.children.append(Node(value))
        return self

    # O(n + e) time | O(n) space
    def breadthFirstSearch(self, array=[]):
        # initialize a queue with root node | FIFO
        q = []
        q.append(self)
        
        # loop while the queue is not empty
        while len(q) > 0:
            # assign cur pointer to first node to be dequeued
            cur = q.pop(0)
            # add that node's value to output array 
            array.append(cur)
            # if node has children, add them to queue
            for child in cur.children:
                q.append(child)
        # return initial array
        return f'Tree Contains: {array}'

# Driver Code

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
for i in range(2,10):
    Tree.addChild(i)
print(Tree.breadthFirstSearch())
