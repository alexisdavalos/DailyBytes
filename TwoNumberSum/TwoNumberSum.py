def twoNumberSum(array, targetSum):
    seen = {}

	for idx, num in enumerate(array):
		
		diff = targetSum - num
		if diff in seen:
			return [array[seen[diff]], num]
		elif diff not in seen:
			seen[num] = idx
			
	return []
			 
		
			
			

