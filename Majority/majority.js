//Create a function "majority" that accepts an array and a callback.

//The callback will take a parameter and will return either true or false.

//Majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

const majority = (inputArray, callback) => {
  // Your Code Here
};

// Test Cases Setup
const input = [2, 3, 19, 13, 1, 55];

console.log(majority(input, (elem) => elem > 2)); // true
console.log(majority(input, (elem) => elem > 10)); // false
console.log(majority(input, (elem) => elem > 50)); // false
