//Create a function "majority" that accepts an array and a callback.

//The callback will take a parameter and will return either true or false.

//Majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

const majority = (inputArray, callback) => {
  // dict to count number of true/false cases in cb
  let majority = {
    true: 0,
    false: 0,
  };
  // Iterate through arr and perform callback
  for (let i = 0; i < inputArray.length; i++) {
    // cb returns true
    if (callback(inputArray[i])) {
      majority[true] += 1;
    } else {
      majority[false] += 1;
    }
  }
  // evaluate majority obj
  if (majority.true <= majority.false) {
    return false;
  } else {
    return true;
  }
};

// testing setup
const input = [2, 3, 19, 13, 1, 55];

console.log(majority(input, (elem) => elem > 2)); // true
console.log(majority(input, (elem) => elem > 10)); // false
console.log(majority(input, (elem) => elem > 50)); // false
