# Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

# O(n) time | O(n) space
def twoNumberSum(array, targetSum):
    # dictionary to track seen elements
    seen = {}
    # loop through n elements in array
    for idx, num in enumerate(array):
        # calculate difference between cur num and target
        diff = targetSum - num
        # if the difference is in our dict
        if diff in seen:
            # return array the matched numbers
            return [array[seen[diff]], num]
        # else add cur num and its idx to our dictionary
        elif diff not in seen:
            seen[num] = idx

    # return empty arr if no matches found
    return []

# Driver Code


array = [3, 5, -4, 8, 11, 1, -1, 6]
target = 10
# Expected output: [11, -1]
print(f'Searching for two number sum of {target} in: \n{array}')
print(f'\nResult: {twoNumberSum(array, target)}')
