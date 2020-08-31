# Given an array of integers and an integer.
# Write a function that moves all instances of that integer in the array
# to the end of the array and returns the array.

# The function should perform this in place (mutate the array)
# Maintaining the order of other integers is not required. 

# O(n) time | O(1) space
def moveElementToEnd(array, toMove):
    # loop through array
	for element in array:
		# found a match
		if element == toMove:
			# remove the element
			array.remove(element)
			# add it to the end of the list
			array.append(toMove)
	
	# return modified element
	return array

