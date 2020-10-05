// Write a function called ‘contains' that searches for a value in a nested object. It returns true if the object contains that value.
// Example: SpaceXLaunch
let spaceXLaunch = {
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

const contains = (obj, value) => {
  // Your Code Here
};

console.log(contains(spaceXLaunch, "B1056")); //true
console.log(contains(spaceXLaunch, "CRS-17")); //true
console.log(contains(spaceXLaunch, "abc")); //false
