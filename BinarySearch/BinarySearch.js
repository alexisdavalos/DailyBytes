// runtime O(log(n)) | space O(1)
const binarySearch = (array, target) => {
  // Low pointer at the beginning of array
  let low = 0;
  // High pointer at the end of array
  let high = array.length - 1;
  // Loop while we traverse the array
  while (low <= high) {
    // Middle of array
    let middle = Math.floor((low + high) / 2);
    // Value at middle of array
    let match = array[middle];
    // Check if target is potential match
    if (target === match) {
      // return middle index value
      return middle;
    } else if (target < match) {
      // Closes the gap left, makes new high before the current middle
      high = middle - 1;
    } else {
      // Closes the gap right, makes new low next to the current middle
      low = middle + 1;
    }
  }
  // Broke out of the loop without finding a match
  return -1;
};

// Driver code
let array = [4, 5, 7, 8, 33, 4, 5, 7, 8, 113, 3, 4, 68, 3, 2, 5];
array.sort((a, b) => a - b);
console.log(array[binarySearch(array, 113)]);
