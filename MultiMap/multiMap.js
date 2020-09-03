//Implement a function "multiMap" that takes two parameters. First - an array of elements (numbers or strings), second - an array of functions that take one argument, perform some action and then print the result. Both arrays have to be the same size. For each element in the first input array call the function in the second input array.

//See function definition and test cases for more clarification

const multiMap = (inputArray, actionsArray) => {
  // Checks input and action arr lengths
  if (inputArray.length === actionsArray.length) {
    // call every action with respective input
    for (let i = 0; i < inputArray.length; i++) {
      actionsArray[i](inputArray[i]);
    }
  } else {
    // input error
    return -1;
  }
};

// testing setup

const input = [2, 3, "desk"];
const actions = [
  (elem) => console.log(elem * 2),
  (elem) => console.log(elem + 10),
  (elem) => console.log(elem + "s"),
];

multiMap(input, actions);

/* your output should be:
4
13
desks
*/
