// Write a function called ‘contains' that searches for a value in a nested object. It returns true if the object contains that value.
// Example:
//
var spaceXLaunch = {
  launch: {
    rocket: {
      stage: {
        core: {
          coreSerial: "B1056",
          payload: "CRS-17",
        },
      },
    },
  },
};

function contains(obj, value) {
  for (const key in obj) {
    // check if key value is an object type
    if (typeof obj[key] === "object") {
      // recurses and checks nested object
      return contains(obj[key], value);
    } else if (obj[key] === value) {
      // Found a match return true
      return true;
    }
  }
  // Looped through all keys and found no matches
  return false;
}

console.log(contains(spaceXLaunch, "B1056")); //true
console.log(contains(spaceXLaunch, "CRS-17")); //true
console.log(contains(spaceXLaunch, "abc")); //false
