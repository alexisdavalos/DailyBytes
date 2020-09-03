//Implement function "after" that takes the number of times the callback can be executed as the first parameter and the callback function as the second parameter.

function after(timesToCall, callback) {
  // after returns function that decrements timesToCall
  return () => {
    if (timesToCall !== 0) {
      // Decrement timesToCall and invoke callback function
      timesToCall -= 1;
      return callback();
    }
  };
}

// test setup
const myAfterFunc = after(3, () => console.log("test"));

myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // prints test
myAfterFunc(); // nothing is printed
