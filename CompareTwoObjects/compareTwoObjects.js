// Implement your own deep comparison function for objects.
// Let’s limit objects to contain only numbers as properties.
// Hint: use Object.keys() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//
// As with the problem above, one level deep is OK; however, if you’re feeling adventurous try nested objects.
//

function compareTwoObjects(obj1, obj2) {
  // Grab size of input objects for comparison
  equalSize =
    Object.keys(obj1).length === Object.keys(obj2).length ? true : false;

  // If object lengths differ they are not equal
  if (!equalSize) {
    return false;
  } else {
    // Loop through keys and compare
    for (const key in obj1) {
      // If Key exists in obj2
      if (obj2.hasOwnProperty(key)) {
        // Check if Key values are equal on both object
        if (obj1[key] === obj2[key]) {
          // Values are equal, continue looping
          continue;
        } else {
          // Key values are not equal break out of loop
          return false;
        }
      } else {
        // Key does not exist in obj2
        return false;
      }
    }
    // If loop finishes the objects are equal
    return true;
  }
}

// Test cases to verify
// true
const a = { a: 1, b: 2 };
const b = { a: 1, b: 2 };

console.log(compareTwoObjects(a, b));

// true
const c = { b: 2, a: 1 };
const d = { a: 1, b: 2 };

console.log(compareTwoObjects(c, d));

// false
const e = { b: 100, a: 2 };
const f = { a: 1, b: 2 };

console.log(compareTwoObjects(e, f));

// false
const g = { a: 1, b: 2, c: 3 };
const h = { a: 1, b: 2 };

console.log(compareTwoObjects(g, h));

// false
const i = { a: 1, b: 2 };
const j = { a: 1, b: 2, c: 3 };

console.log(compareTwoObjects(i, j));

// true
const k = { a: undefined, b: 2 };
const l = { a: undefined, b: 2 };

console.log(compareTwoObjects(k, l));

//false

const m = { a: 1, b: 2 };
const n = { a: undefined, b: 2 };

console.log(compareTwoObjects(m, n));

// false
const o = { a: undefined, b: 2 };
const p = { z: 1, b: 2 };

console.log(compareTwoObjects(o, p));
