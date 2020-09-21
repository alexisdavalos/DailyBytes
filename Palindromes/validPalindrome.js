// This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.

// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

// Thanks,
// The Daily Byte

const validPalindrome = (string, char = null) => {
  if (char !== null) {
    string = string.replace(char, "");
  }

  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false
console.log(validPalindrome("abcba")); // "abcba", => true
console.log(validPalindrome("foobof", "o")); // "foobof" (remove "o"), => true
console.log(validPalindrome("foobof", "b")); // "foobof" (remove "b"), => true
console.log(validPalindrome("abccab")); // "abccab", => false
