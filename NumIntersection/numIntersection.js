// This question is asked by Google. Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// First Solution w/ Sets
const numIntersection = (nums1, nums2) => {
  let intersection = new Set(nums1.filter((x) => nums2.includes(x)));
  return [...intersection];
};

// Second Solution w/ Arrays
const numIntersection2 = (nums1, nums2) => {
  let intersection = [];

  for (num of nums1) {
    if (nums2.includes(num) && !intersection.includes(num)) {
      intersection.push(num);
    }
  }
  return intersection;
};

// Ex: Given the following arrays...

// First Pass w/ Sets
console.log("Solution w/ Sets:");
console.log(numIntersection([2, 4, 4, 2], [2, 4])); // => return [2, 4]
console.log(numIntersection([1, 2, 3, 3], [3, 3])); // => return [3]
console.log(numIntersection([2, 4, 6, 8], [1, 3, 5, 7])); // => return []

console.log("\nSolution w/ Arrays:");
console.log(numIntersection2([2, 4, 4, 2], [2, 4])); // => return [2, 4]
console.log(numIntersection2([1, 2, 3, 3], [3, 3])); // => return [3]
console.log(numIntersection2([2, 4, 6, 8], [1, 3, 5, 7])); // => return []
