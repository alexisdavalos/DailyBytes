//This question is asked by Microsoft. Given a string, return the index of its //first unique character. If a unique character does not exist, return -1.

const firstUniqueChar = (string) => {
  let charCount = {};

  // Count all characters
  for (char of string) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else if (charCount[char]) {
      charCount[char] += 1;
    }
  }

  // Loop through string in original order
  for (char of string) {
    if (char in charCount && charCount[char] < 2) {
      // found first unique char
      return string.indexOf(char);
    }
  }
  // Unique character does not exist
  return -1;
};

// Ex: Given the following strings...

console.log(firstUniqueChar("abcabd")); // => "abcabd", return 2
console.log(firstUniqueChar("thedailybyte")); // => "thedailybyte", return 1
console.log(firstUniqueChar("developer")); // => "developer", return 0
