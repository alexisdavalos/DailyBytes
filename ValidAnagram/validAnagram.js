// This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

const validAnagram = (s, t) => {
  // Check s & t lengths, return false if different
  // Count all the occurences of characters in s and t
  // Check if the char count is even return true
  // Char count is odd return false

  let charCount = {};

  // First base case
  if (s.length !== t.length) {
    return false;
  }

  // Lengths are equal

  for (let i = 0; i < s.length; i++) {
    // Check s characters
    if (!charCount[s[i]]) {
      charCount[s[i]] = 1;
    } else {
      charCount[s[i]] += 1;
    }
    // Check t characters
    if (!charCount[t[i]]) {
      charCount[t[i]] = 1;
    } else {
      charCount[t[i]] += 1;
    }
  }

  // Check if key values are even or odd

  for (key in charCount) {
    if (charCount[key] % 2 === 0) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

// Ex: Given the following strings...

console.log(validAnagram("cat", "tac")); // =>, return true
console.log(validAnagram("listen", "silent")); // => return true
console.log(validAnagram("program", "function")); // => return false
