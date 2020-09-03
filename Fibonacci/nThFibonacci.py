# runtime O(n) | spacetime O(n)
# this solution using memoization
# to optimize # of recursive calls added to stack

def getNthFib(n):
    # Initialize storage for memoization
    cache = {}
    # fib sequence: 0,1,2,3,5,8,13,21...
    # nth fib formula: nthFib = F(n-1) + F(n-2)
    # check if n is first two fib numbers
    if n == 1:
        return 0
    if n == 2:
        return 1
    # Store fib numbers in cache while recursing the nth number
    elif n not in cache:
        cache[n] = getNthFib(n-1) + getNthFib(n-2)
    # Return the nth number from cache
    return cache[n]


# Driver Code
print(getNthFib(15))
