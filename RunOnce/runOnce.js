// Write a function that can only be called once!
// On the first call it should print a timestamp with the label 'First Run'
// If you try to run it again it shouldn't print anything

function runOnce() {
  let firstRun = false;
  return () => {
    !firstRun ? console.log("First Run", Date.now()) : "";
    // Ran the function, toggle boolean
    firstRun = true;
  };
}

let myRunOnce = runOnce();

myRunOnce();
myRunOnce();
