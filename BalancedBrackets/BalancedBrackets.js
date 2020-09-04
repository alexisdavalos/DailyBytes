//Write a balancedParenthesis function that takes a string as input and returns a boolean — if the parentheses in the input string are ‘balanced’, then return true, else return false.

const balancedParenthesis = (input) => {
  // Create brackets obj
  const brackets = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  // Create sets to store opening and closing brackets
  const openBrackets = new Set(Object.values(brackets));
  const closeBrackets = new Set(Object.keys(brackets));

  // Create a stack to store parenthesis as we loop through
  let stack = [];

  // Loop through input string
  input.split("").forEach((char) => {
    // Check if open bracket
    if (openBrackets.has(char)) {
      // Add bracket to stack
      stack.push(char);
    } else if (closeBrackets.has(char)) {
      // Check if matching open bracket is at the top of stack
      if (brackets[char] === stack[stack.length - 1]) {
        // Pop it off
        stack.pop();
      }
    }
  });

  // Check if stack is empty and return boolean
  return stack.length > 0 ? false : true;
};

// test cases
console.log(balancedParenthesis("[()]")); // => true
console.log(balancedParenthesis("[()]{}{[()()]()}")); // => true
console.log(balancedParenthesis("[()]{")); // => false
console.log(balancedParenthesis("[(])")); // => false
