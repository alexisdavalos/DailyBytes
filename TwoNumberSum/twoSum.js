//This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
//Note: you may not sum a number with itself.

//Ex: Given the following...

const twoSum = (array, target) => {
  const seen = new Set();
  for (num of array) {
    // calculate difference
    let difference = Math.abs(target - num);

    if (!seen.has(num)) {
      // add number to set
      seen.add(num);
    }

    if (seen.has(difference)) {
      // found match
      return difference + num === target;
    }
  }
  // broke out of loop and didnt find a match
  return false;
};

console.log(twoSum([1, 3, 8, 2], 10)); // [1, 3, 8, 2], k = 10, return true (8 + 2)
console.log(twoSum([3, 9, 13, 7], 8)); // [3, 9, 13, 7], k = 8, return false
console.log(twoSum([4, 2, 6, 5, 2], 4)); // [4, 2, 6, 5, 2], k = 4, return true (2 + 2)
