// Write a function that returns the factorial of a number. A factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Example factorial of 4 is 4*3*2*1 = 24
// Please use a recursive function to solve this.

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    num *= factorial(num - 1);
    return num;
  }
}

const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
