// Given an array of integers and an integer.
// Write a function that moves all instances of that integer in the array
// to the end of the array and returns the array.

// The function should perform this in place (mutate the array)
// Maintaining the order of other integers is not required.

// O(n) time | O(1) space
const moveElementToEnd = (array, toMove) => {
  let elemCount = 0;
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // encountered a match
    if (array[i] === toMove) {
      // set match to null
      array[i] = null;
      // increase element count
      elemCount += 1;
    }
  }
  // push elements to end based on element count
  for (let i = 0; i < elemCount; i++) {
    array.push(toMove);
  }
  // filter null values out
  array = array.filter((element) => element != null);

  // return modified arr
  return array;
};

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
