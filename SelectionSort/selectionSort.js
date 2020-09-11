// O(n^2) time | O(1) space

const selectionSort = (array) => {
  // loop through entire input array
  for (let i = 0; i < array.length; i++) {
    smol_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      // check rest of arr for smaller idx values
      if (array[j] < array[smol_idx]) {
        smol_idx = j;
      }
    }
    // swap outer loop element with smallest idx value found
    temp = array[i];
    array[i] = array[smol_idx];
    array[smol_idx] = temp;
  }
  // broke out of main loop, return sorted arr
  return array;
};

// Driver Code
let arr = [2, 8, 5, 9, 5, 8, 9, 3, 6, 2, 1];
console.log(`Unsorted Array: ${arr}`);
console.log(`Sorted Array: ${selectionSort(arr)}`);
