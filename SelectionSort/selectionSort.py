# O(n^2) time | O(1) space
def selectionSort(array):
    # loop through entire input array
    for i in range(len(array)):
        smallest_idx = i
        # loop through and find smallest idx
        for j in range(i + 1, len(array)):
            # compare rest of arr to find new smallest idx val
            if array[j] < array[smallest_idx]:
                # update smallest index
                smallest_idx = j
        # swap array values once we find the smallest idx in array
        array[smallest_idx], array[i] = array[i], array[smallest_idx]

    # Array is sorted, return it
    return array


# Driver Code
arr = [2, 8, 5, 9, 5, 8, 9, 3, 6, 2, 1]
print(f'Unsorted Array: {arr}')
print(f'Sorted Array: {selectionSort(arr)}')
