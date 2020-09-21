// This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
//
// Ex: Given the following strings...
//
// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

const palindromeCheck = (string) => {
  // stripping punctuation from string
  let originalString = string
    .match(/[^_\W]+/g)
    .join("")
    .toLowerCase();
  // reverse the original stripped string
  let palindrome = originalString.split("").reverse().join("");
  // check if the two strings are equal
  return originalString === palindrome ? true : false;
};

console.log(palindromeCheck("level")); // => true
console.log(palindromeCheck("algorithm")); // => false
console.log(palindromeCheck("A man, a plan, a canal: Panama.")); // => true
