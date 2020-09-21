// Given a string, reverse all of its characters and return the // resulting string.
//
// Ex: Given the following strings...
//
// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

const reverseString = (string) => {
  // First Pass
  //   newString = string.split("").reverse().join("");

  // Second Pass
  //   newString = [];
  //   for (char of string) {
  //     newString.unshift(char);
  //   }
  //   return newString.join("");

  // Third Pass
  newString = "";

  for (char of string) {
    newString = char + newString;
  }

  return newString;
};

console.log(reverseString("The Daily Byte"));
