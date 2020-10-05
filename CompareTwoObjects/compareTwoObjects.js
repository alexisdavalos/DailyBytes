// Implement your own deep comparison function for objects.
// Let’s limit objects to contain only numbers as properties.
// Hint: use Object.keys() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

function compareTwoObjects(obj1, obj2) {
  // Your Code Here
}

// Test Cases to verify function

// true
const a = { a: 1, b: 2 };
const b = { a: 1, b: 2 };

console.log(
  "Objects Tests 1:",
  compareTwoObjects(a, b),
  "\n  Expected: " + true + "\n"
);

// true
const c = { b: 2, a: 1 };
const d = { a: 1, b: 2 };

console.log(
  "Objects Tests 2:",
  compareTwoObjects(c, d),
  "\n  Expected: " + true + "\n"
);

// false
const e = { b: 100, a: 2 };
const f = { a: 1, b: 2 };

console.log(
  "Objects Tests 3:",
  compareTwoObjects(e, f),
  "\n Expected: " + false + "\n"
);

// false
const g = { a: 1, b: 2, c: 3 };
const h = { a: 1, b: 2 };

console.log(
  "Objects Tests 4:",
  compareTwoObjects(g, h),
  "\n Expected: " + false + "\n"
);

// false
const i = { a: 1, b: 2 };
const j = { a: 1, b: 2, c: 3 };

console.log(
  "Objects Tests 5:",
  compareTwoObjects(i, j),
  "\n Expected: " + false + "\n"
);

// true
const k = { a: undefined, b: 2 };
const l = { a: undefined, b: 2 };

console.log(
  "Objects Tests 6:",
  compareTwoObjects(k, l),
  "\n  Expected: " + true + "\n"
);

//false

const m = { a: 1, b: 2 };
const n = { a: undefined, b: 2 };

console.log(
  "Objects Tests 7:",
  compareTwoObjects(m, n),
  "\n Expected: " + false + "\n"
);

// false
const o = { a: undefined, b: 2 };
const p = { z: 1, b: 2 };

console.log(
  "Objects Tests 8:",
  compareTwoObjects(o, p),
  "\n Expected: " + false + "\n"
);
