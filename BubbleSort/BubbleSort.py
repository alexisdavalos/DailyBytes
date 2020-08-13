# Space O(1) | # time O(n^2)
def bubbleSort(array):
    # keep track of sorted state w/ Boolean
	isSorted = False
	counter = 0
	# while arr not sorted
	while not isSorted:
		# assume its sorted until we check
		isSorted = True
		for i in range (len(array) -1 - counter):
			# check if current num is greater than its neighbor
			if array[i] > array[i + 1]:
				# helper function to swap values
				swap(i, i+1, array)
				# since we called swap, we must reiterate/check arr
				isSorted = False	
		# closes down the iteration range after every loop
		# largest number will get pushed to the right side of the arr
		counter +=1
	return array;

# Swap Array Values
def swap(i,j, array):
	# Swaps Values in Place
	array[i], array[j] = array[j], array[i]

#Driver Code
arr = [8,5,2,9,5,7,6,3]
print(bubbleSort(arr))

