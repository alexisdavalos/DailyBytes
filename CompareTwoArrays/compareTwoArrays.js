function compareTwoArrays(arr1, arr2) {
  // Equality Boolean Initialized
  let equal = false;
  // If one array is larger they are not the same
  if (arr1.length > arr2.length || arr2.length > arr1.length) {
    // Arrays are not equal since the lengths are different
    return equal;
  } else {
    // Check the elements of the array
    equal = checkElements(arr1, arr2, equal);
    return equal;
  }
  // Recursive Helper Function
  function checkElements(arr1, arr2, equal) {
    for (let i = 0; i < arr1.length; i++) {
      // if array element is an array
      if (typeof arr1[i] === "object" && typeof arr2[i] === "object") {
        // recurse to check nested arr and return value
        return checkElements(arr1[i], arr2[i], equal);
      } else if (arr1[i] === arr2[i]) {
        // Elements are equal
        equal = true;
      } else {
        // Elements are not equal
        equal = false;
        return equal;
      }
    }
    return equal;
  }
}
// Test cases to verify
console.log(compareTwoArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareTwoArrays([3, 3, 3], [1, 2, 3])); // false
console.log(compareTwoArrays([1, 2, 3, 4], [1, 2, 3])); // false
console.log(compareTwoArrays([1, 2, 3], [1, 2, 3, 4])); // false

// If you decide to attempt nested arrays
const a = [1, ["a", "b"], 3, 4];
const b = [1, ["a", "b"], 3, 4];
console.log(compareTwoArrays(a, b)); // true

const c = [1, ["z", "z"], 3, 4];
const d = [1, ["a", "b"], 3, 4];
console.log(compareTwoArrays(c, d)); // false

const e = [1, ["a", "b", ["c", "d"], "e"], 2, 3];
const f = [1, ["a", "b", ["c", "d"], "e"], 2, 3]; // true
console.log(compareTwoArrays(e, f));

const g = [1, ["a", "b", ["c", "d"], "e"], 2, 3];
const h = [1, ["e", "f", ["g", "h"], "i"], 2, 3]; // false
console.log(compareTwoArrays(g, h));
