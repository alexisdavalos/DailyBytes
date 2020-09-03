//Implement a function "makeHistory" that returns a function (that will accept a string).

//The returned function will save a history of strings passed into the returned function (one per invocation only).

//Every time a string is passed into the function, the function should return that same string with the word 'done' after it. However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after.

//If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

const makeHistory = () => {
  // history for tracking elements
  let history = [];

  return (str) => {
    if (str !== "undo") {
      // save str to history and return element + done string
      history.push(str);
      return `${history[history.length - 1]} - done`;
    } else if (str === "undo" && history.length > 0) {
      // returns last element in history + undone string
      return `${history.pop()} - undone`;
    } else if (str === "undo" && history.length === 0) {
      // empty history, returns mssg
      return "nothing to undo";
    }
  };
};

// testing setup
const myHistory = makeHistory();

console.log(myHistory("exercise")); // exercise - done
console.log(myHistory("study")); // study - done
console.log(myHistory("cook")); // cook - done
console.log(myHistory("eat")); // eat - done
console.log(myHistory("sleep")); // sleep - done
console.log(myHistory("undo")); // sleep - undone
console.log(myHistory("undo")); // eat - undone
console.log(myHistory("watch tv")); // watch tv - done
console.log(myHistory("undo")); // watch tv - undone
console.log(myHistory("undo")); // cook - undone
console.log(myHistory("undo")); // study - undone
console.log(myHistory("undo")); // exercise - undone
console.log(myHistory("undo")); // nothing to undo
console.log(myHistory("undo")); // nothing to undo
