//Write a balancedParenthesis function that takes a string as input and returns a boolean — if the parentheses in the input string are ‘balanced’, then return true, else return false.

const balancedParenthesis = (input) => {
  // Your Code Here
};

// test cases
console.log(balancedParenthesis("[()]")); // => true
console.log(balancedParenthesis("[()]{}{[()()]()}")); // => true
console.log(balancedParenthesis("[()]{")); // => false
console.log(balancedParenthesis("[(])")); // => false
