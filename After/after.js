//Implement function "after" that takes the number of times the callback can be executed as the first parameter and the callback function as the second parameter.

function after(timesToCall, callback) {
  // Your Code Here
}

// test setup
const myAfterFunc = after(3, () => console.log("test"));

myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // nothing is printed
