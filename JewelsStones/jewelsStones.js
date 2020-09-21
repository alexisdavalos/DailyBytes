//This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

const jewelsStones = (jewels, stones) => {
  // loop through stones and check if any jewels exist
  // update count of jewels in stones

  let stoneJewels = 0;

  for (char of stones) {
    if (jewels.includes(char)) {
      stoneJewels += 1;
    }
  }

  return stoneJewels;
};

// Ex: Given the following jewels and stones...

console.log(jewelsStones("abc", "ac")); //jewels = "abc", stones = "ac", return 2
console.log(jewelsStones("Af", "AaaddfFf")); //jewels = "Af", stones = "AaaddfFf", return 3
console.log(jewelsStones("AYOPD", "ayopd")); //jewels = "AYOPD", stones = "ayopd", return 0
