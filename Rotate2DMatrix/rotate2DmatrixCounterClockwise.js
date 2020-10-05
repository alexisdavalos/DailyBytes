//Write a function to rotate a 2D square matrix (nested array) counter-clockwise once. The solution should support a square matrix of any size

const rotate = (matrix) => {
  // Your Code Here
};

// Test Cases Set Up

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

const rotatedMatrix = rotate(matrix);
console.log("\n----- Rotating Matrix -----\n");
console.log("original matrix:", matrix);
console.log("new rotated matrix:", rotatedMatrix);

const rotatedMatrix2 = rotate(matrix2);
console.log("\n----- Rotating Matrix -----\n");
console.log("original matrix:", matrix2);
console.log("new rotated matrix:", rotatedMatrix2);

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
