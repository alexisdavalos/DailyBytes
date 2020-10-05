// Create a function "cycleIterator" that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const cycleIterator = (input) => {
  // Your Code Here
};

// Test Case Set Up

const myFunc = cycleIterator(["John", "Mary", "Jane", "David"]);
myFunc(); // prints John
myFunc(); // prints Mary
myFunc(); // prints Jane
myFunc(); // prints David
myFunc(); // prints John
myFunc(); // prints Mary
