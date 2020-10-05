// Write HOF as a function that takes in an object and returns the same object with new props

const myObj = {
  foo: "bar",
  bar: "foo",
};

const HOF = (object) => (props) => {
  // Your Code Here
};

// For Example: myObject { foo: "bar", bar: "foo" }
// Should become myObject { foo: "bar", bar: "foo", x: "y", y: "x"}
console.log(HOF(myObj)({ x: "y", y: "x" }));
