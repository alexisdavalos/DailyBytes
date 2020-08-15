def insertionSort(array):
    # Loop  throgh the array
    for i in range(len(array)):
        # j pointer resets to i every iteration
        j = i
        # avoid array index err while j > 0
        # check if current j pointer is less than previous value
        while j > 0 and array[j] <  array[j-1]:
            # swap values 
            array[j], array[j-1] = array[j-1], array [j]
            # decrement j to keep swapping values until reach beginning of sublist
            j -=1

    return array

# Driver Code
arr = [2,8,5,9,5,8,9,3,6,2,1]
print(f'Unsorted Array: {arr}')
print(f'Sorted Array: {insertionSort(arr)}')

