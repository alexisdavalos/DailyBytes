// Reverse a string, but keeep any special characters in their original positions
// example: "ab$cdefg%" -> "gf$edcba%"

const reverseSpecialString = (string) => {
  // Map new copy of string with null values
  let reverseString = new Array(string.length).fill(null);
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    // Filter out non numerical characters
    if (string[i] >= "a" && string[i] <= "z") {
      // add to stack
      stack.push(string[i]);
    } else {
      // toggle special character in place
      reverseString[i] = string[i];
    }
  }

  // Reverse populate the nulls with remaining characters in stack
  for (let i = 0; i < string.length; i++) {
    if (reverseString[i] === null) {
      reverseString[i] = stack.pop();
    }
  }

  // Join array into new string
  return reverseString.join("");
};

// Test Cases
console.log(reverseSpecialString("ab$cdefg%")); // "ab$cdefg%" => "gf$edcba%"
console.log(reverseSpecialString("cgf/$fcd4[defgg,%")); // "cgf/$fcd4[defgg,%" => "ggf/$edd4[cffgc,%"
