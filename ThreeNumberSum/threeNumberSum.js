// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any three numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no three numbers sum up to the target sum, the function should return an empty array.

const threeNumberSum = (array, targetSum) => {
  // Your Code Here
};

// Test Case Set up
let array = [3, 5, -4, 8, 11, 1, -1, 6, 9, 10];
let target = 18;
// Expected output: [[-1, 8, 11], [-1, 9, 10], [1, 6, 11], [1, 8, 9], [3, 5, 10], [3, 6, 9]]
console.log(`Searching for three number sum of ${target} in: \n${array}`);
console.log(`\nResult: ${threeNumberSum(array, target)}`);
