def threeNumberSum(array, targetSum):
    
	result = []
	
	array.sort()
	
	for i in range(len(array) -1):
		low = i +1
		high = len(array) -1
		while low < high:
			if array[i] + array[low] + array[high] == targetSum:
				result.append(sorted([array[i], array[low], array[high]]))
				low +=1
				high -=1
			elif array[i] + array[low] + array[high] < targetSum:
				low +=1
			else:
				high -=1
	return result
		
	
	

