def threeNumberSum(array, targetSum):
    result = []
    for i in range(0, len(array)):
        for j in range(i+1, len(array)):
            for k in range(j+1, len(array)):
                if array[i] + array[k] + array[j] == targetSum:
                    sub_list = sorted([array[i], array[k], array[j]])
                    result.append(sub_list)

    if len(result) > 0:
        return sorted(result)
    else:
        return []
