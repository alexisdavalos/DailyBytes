# runtime O(log(n)) | space O(1)
def binarySearch(array, target):
	# Low pointer at the beginning of array
        low = 0
        # High pointer at the end of array
	high = len(array)-1
        # Loop while we traverse the array
	while low <= high:
                # Middle of array
		middle = (low + high) // 2
		# Value at middle of array
                match = array[middle]
                # Check if target is potential match
		if target == match:
                        # return middle index
			return middle
                # Target is less than the potential match
		if target < match:
                        # Move high pointer to left of current middle
			high = middle -1
		# Target is grater than the potential match
                else:
                        # Move low pointer to the right of current middle
			low = middle + 1
	# Broke out of loop and didn't find a match
        return -1

# Driver Code
arr = [4,7,11,14,17,24,28,36,44,88,159,355] 
target = 159
print(binarySearch(arr, target))
