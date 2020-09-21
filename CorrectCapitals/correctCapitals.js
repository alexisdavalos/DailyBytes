//This question is asked by Google. Given a string, return whether //or not it uses capitalization correctly. A string correctly uses //capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true

const correctCapitals = (string) => {
  // Variable initialization
  let capitalLetters = {};
  let valid = false;

  // count number of capital letters
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase() && !capitalLetters[string[i]]) {
      // Store count and index as arr value pair
      capitalLetters[string[i]] = [1, i];
    } else if (capitalLetters[string[i]]) {
      // stores count in first index
      capitalLetters[string[i]][0] += 1;
      // adds index to arr if more occurrence of same key
      capitalLetters[string[i]].push(i);
    }
  }
  // Arr of all capital letters store in dict
  let keys = Object.keys(capitalLetters);
  // all upper case
  if (keys.length === string.length) {
    // toggle valid and return
    return !valid;
  }
  // all lower case
  if (keys.length === 0) {
    // toggle valid and return
    return !valid;
  }
  // check if first character capital only by grabbing index from dict
  let keyIdx = capitalLetters[keys[0]][1];
  if (keys.length === 1 && string[keyIdx] === string[0]) {
    // toggle valid and return
    return !valid;
  }
  // No conditions met, return valid as false
  return valid;
};

console.log("USA:", correctCapitals("USA")); // "USA", => true
console.log("Calvin:", correctCapitals("Calvin")); // "Calvin", => true
console.log("compUter:", correctCapitals("comUter")); // "compUter", => false
console.log("coding:", correctCapitals("coding")); // "coding", => true
