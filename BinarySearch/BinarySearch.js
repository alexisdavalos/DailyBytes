// runtime O(log(n)) | space O(1)
const binarySearch = (array, target) => {
  // Your Code Here
};

// Driver code
let array = [4, 5, 7, 8, 33, 4, 5, 7, 8, 113, 3, 4, 68, 3, 2, 5];
array.sort((a, b) => a - b);
console.log(array[binarySearch(array, 113)]); // Should return 113
