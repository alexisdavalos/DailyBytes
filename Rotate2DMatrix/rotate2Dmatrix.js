//Write a function to rotate a 2D square matrix (nested array) counter-clockwise once. The solution should support a square matrix of any size

// O(n) time (unsure) | O(n) space
const rotate = (matrix) => {
  // Variable Initialization
  const newMatrix = [];
  const size = matrix.length;

  // Fill new matrix with 0s given input size
  // O(n) time | O(n) space
  for (let i = 0; i < size; i++) {
    newMatrix.push(new Array(size).fill(0));
  }

  // Transpose and swap rows with columns from input matrix
  // O(n*n) time | O(1) space
  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      console.log(newMatrix);
      newMatrix[i][j] = matrix[j][i];
      newMatrix[j][i] = matrix[i][j];
    }
  }

  // Flip vertically by reversing the rows
  // O(n/2) time | O(1) space
  for (let i = 0; i < size / 2; i++) {
    let end = size - 1;
    [newMatrix[i], newMatrix[end - i]] = [newMatrix[end - i], newMatrix[i]];
  }
  // Also possible to simply do newMatrix.reverse()

  // Return rotated matrix
  return newMatrix;
};

// Solution with O(1) space | rotating the matrix in place
const rotate2 = (matrix) => {
  // Variable Initialization
  const size = matrix.length;

  // Transpose and swap rows with columns in place
  // O(n*n) time | O(1) space
  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Flip vertically by reversing the rows
  // O(n/2) time | O(1) space
  for (let i = 0; i < size / 2; i++) {
    let end = size - 1;
    [matrix[i], matrix[end - i]] = [matrix[end - i], matrix[i]];
  }

  // Return rotated matrix
  return matrix;
};

// Driver Code

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let matrix2 = [
  [3, 4, 5, 6, 7],
  [8, 9, 7, 6, 4],
  [3, 4, 2, 4, 5],
  [2, 3, 7, 5, 3],
  [5, 6, 3, 2, 7],
];

// Doesn't manipulate matrix input
const rotatedMatrix = rotate(matrix);
console.log("\n----- Rotating Matrix w/ No Side Effects -----\n");
console.log("original matrix:", matrix);
console.log("new rotated matrix:", rotatedMatrix);

// Manipulates matrix input
console.log("\n----- Rotating Matrix w/ Side Effects -----\n");
console.log("original matrix:", matrix2);
rotate2(matrix2);
console.log("manipulated/rotated matrix:", matrix2);

// rotate(matrix) should display

// original matrix: [
//     [ 1, 2, 3, 4 ],
//     [ 5, 6, 7, 8 ],
//     [ 9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
//   ]
// rotated matrix: [
//     [ 4, 8, 12, 16 ],
//     [ 3, 7, 11, 15 ],
//     [ 2, 6, 10, 14 ],
//     [ 1, 5, 9, 13 ]
//   ]

// rotate2(matrix2) should display:

// original matrix: [
//     [ 3, 4, 5, 6, 7 ],
//     [ 8, 9, 7, 6, 4 ],
//     [ 3, 4, 2, 4, 5 ],
//     [ 2, 3, 7, 5, 3 ],
//     [ 5, 6, 3, 2, 7 ]
//   ]
// manipulated/rotated matrix: [
//     [ 7, 4, 5, 3, 7 ],
//     [ 6, 6, 4, 5, 2 ],
//     [ 5, 7, 2, 7, 3 ],
//     [ 4, 9, 4, 3, 6 ],
//     [ 3, 8, 3, 2, 5 ]
//   ]
