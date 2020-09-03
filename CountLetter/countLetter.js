// Write a function that counts the occurance of a letter within a given string

const myStr = "Good night, good night! parting is such sweet sorrow";

function countLetter(letter, string) {
  let char = string[0];
  let substring = string.slice(1);
  let count = 0;

  // Base Case
  if (string.length === 0) {
    return count;
  }
  // Matching char
  char === letter ? (count = 1) : (count = 0);

  return (count += countLetter(letter, substring));
}

console.log(countLetter("o", myStr));
