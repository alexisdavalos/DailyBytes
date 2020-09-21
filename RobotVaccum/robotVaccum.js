// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// O(n) time | O(n) space
const robotVacuum = (string) => {
  let hashTable = {};
  let moves = {
    L: "R",
    R: "L",
    D: "U",
    U: "D",
  };

  // counting robot instructions
  for (char of string) {
    // key not in hash table
    if (!hashTable[char]) {
      hashTable[char] = 1;
    } else {
      // increment key count by 1
      hashTable[char] += 1;
    }
  }

  // loop through keys in hash table
  for (key in hashTable) {
    // check if equal hash table oppostives counts
    if (hashTable[key] === hashTable[moves[key]]) {
      continue;
    } else {
      // encountered uneven key pairs break out of loop
      return false;
    }
  }
  // All keys had even counts
  return true;
};

// Ex: Given the following strings...

console.log(robotVacuum("LR")); // "LR", return true
console.log(robotVacuum("URURD")); // "URURD", return false
console.log(robotVacuum("RUULLDRD")); // "RUULLDRD", return true
