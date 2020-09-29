// You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forward in the array; the inteer -3 repreents a jump of three indices backward in the array.

// If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. Similarly a jump of 1 at the last index in the arrays brings us to index 0.

// Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.

const hasSingleCycle = (array) => {
  let i = 0;
  let count = 0;
  while (count < array.length) {
    // We're back to the first element
    if (count > 0 && i === 0) {
      // Multiple cycles exist
      return false;
    }
    // Count current element
    count += 1;
    // Find next indext
    i = getNextIdx(i, array);
  }
  return i === 0;
};

const getNextIdx = (i, array) => {
  // Jump is the value of the current element
  let jump = array[i];
  // Next idx is i + jump value and modulo wraps us around when we're out of bounds
  let nextIdx = (i + jump) % array.length;
  // If nextIdx is positive we're good
  if (nextIdx >= 0) {
    return nextIdx;
  } else {
    // nextIdx is negative, so we offset by adding the length of the array
    return nextIdx + array.length;
  }
};

// Test Cases
let array = [2, 3, 1, -4, -4, 2];
console.log(hasSingleCycle(array)); // => true

array = [2, 2, -1];
console.log(hasSingleCycle(array)); // => true

array = [1, 1, 0, 1, 1];
console.log(hasSingleCycle(array)); // => false

array = [1, 1, 1, 1, 2];
console.log(hasSingleCycle(array)); // => false
