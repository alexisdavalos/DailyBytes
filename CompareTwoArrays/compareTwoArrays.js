// Implement your own deep comparison function for arrays.
// We'll limit them to only contain numbers or strings.
// One level deep is OK; however, if you have time you can try to make sure it can handle nested arrays. (Ping me on slack for a hint if you’re stuck)
function compareTwoArrays(arr1, arr2) {
  // Your Code Here
}

// Test cases to verify
console.log("Array Tests 1:", compareTwoArrays([1, 2, 3], [1, 2, 3])); // true
console.log("Array Tests 2:", compareTwoArrays([3, 3, 3], [1, 2, 3])); // false
console.log("Array Tests 3:", compareTwoArrays([1, 2, 3, 4], [1, 2, 3])); // false
console.log("Array Tests 4:", compareTwoArrays([1, 2, 3], [1, 2, 3, 4])); // false

// If you decide to attempt nested arrays
const a = [1, ["a", "b"], 3, 4];
const b = [1, ["a", "b"], 3, 4];
console.log("Nested Arrays Test 1:", compareTwoArrays(a, b)); // should return true

const c = [1, ["z", "z"], 3, 4];
const d = [1, ["a", "b"], 3, 4];
console.log("Nested Arrays Test 2:", compareTwoArrays(c, d)); // false

const e = [1, ["a", "b", ["c", "d"], "e"], 2, 3];
const f = [1, ["a", "b", ["c", "d"], "e"], 2, 3]; // true
console.log("Nested Arrays Test 3:", compareTwoArrays(e, f));

const g = [1, ["a", "b", ["c", "d"], "e"], 2, 3];
const h = [1, ["e", "f", ["g", "h"], "i"], 2, 3]; // false
console.log("Nested Arrays Test 4:", compareTwoArrays(g, h));
