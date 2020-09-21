// Given a string, return whether or not you can arrange the string to make a Palindrome.

// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Your function does the following:
// Take in a string, any set of chars
// Returns Boolean

const makePalindrome = (string) => {
  let stringCount = {};

  // Count the occurence of every char in string
  for (let i = 0; i < string.length; i++) {
    if (stringCount[string[i]]) {
      stringCount[string[i]] += 1;
    } else {
      stringCount[string[i]] = 1;
    }
  }
  // Grab the values counted from stringCount
  const counts = Object.values(stringCount);
  let odd = 0;
  let even = 0;

  // Count the odd vs even values
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  // At most a palindrome can have 1 odd char
  return odd <= 1;
};

// Test Cases

console.log(makePalindrome("aabb")); // aabb => true (abba)
console.log(makePalindrome("asdf")); // asdf => false
console.log(makePalindrome("asdfasdf")); // asdfasdf => true (asdffdsa)
console.log(makePalindrome("aaabb")); // aaabb => true (baaab)
console.log(makePalindrome("racecar")); // racecar => true
