def isValidSubsequence(array, sequence):
	isValid = False
	subArrIdx = 0
	if len(array) < len(sequence):
		
		return False
	
	elif len(array) > len(sequence):
		for idx,num in enumerate(array):
			if subArrIdx >= len(sequence):
				break
			elif num == sequence[subArrIdx]:
				isValid = True
				subArrIdx +=1
			else:
				isValid = False	
	
	
	elif len(array) == len(sequence):
		
		for idx,num in enumerate(array):
			if num == sequence[subArrIdx]:
				isValid = True
				subArrIdx +=1
			else:
				isValid = False
				break
	
	
	return isValid
		

		
	
