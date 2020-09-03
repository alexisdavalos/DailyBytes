# Do not return anything, modify matrix in-place instead.
# You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
# DO NOT allocate another 2D matrix and do the rotation

def rotateClockwise(matrix):
    # transpose: swap columns for rows
    for i in range(len(matrix)):
        j = i
        while j < len(matrix):
            # swap column and row values excluding the diagonals
            matrix[j][i], matrix[i][j] = matrix[i][j], matrix[j][i]
            j += 1

    # loop through content of matrix
    for i in range(len(matrix)):
        # reverse content of every row
        reversed_row = matrix[i][::-1]
        matrix[i] = reversed_row

# Driver Code


matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7],
]

print(f'before clockwise rotation:')
for row in matrix:
    print(f'{row}')

rotateClockwise(matrix)
print(f'\nafter clockwise rotation:')
for row in matrix:
    print(f'{row}')

# Expected output:

# [4, 9, 5, 1]
# [5, 1, 6, 2]
# [6, 2, 7, 3]
# [7, 3, 8, 4]
