//Implement a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.
//If you try to call the function before the interval has passed it should print ’Too fast’
//See function definition and testing setups for more clarifications

const debounce = (action, interval) => {
  // boolean to check if interval has passed
  let passed = false;
  // create promise that returns true when timeout is done
  let intervalPromise = new Promise((resolve) => {
    // timeout based on passed interval
    setTimeout(() => {
      resolve(true);
    }, interval);
  });
  // async function that waits for promise to be resolved
  return async () => {
    // waits for promise to resolve
    await intervalPromise.then((resolve) => {
      // toggles interval boolean to true
      if (resolve) {
        passed = true;
      }
    });
    // checks the state of passed boolean
    if (passed) {
      // invokes callback action
      action();
      // reset passed back to false after calling action
      passed = false;
    } else {
      // function is called before promise toggle passed
      console.log("too fast");
    }
  };
};

//testing setup
const myDebounce = debounce(() => console.log("test"), 1000);

// test 1
// myDebounce(); // test
// myDebounce(); // too fast

// // test 2
// myDebounce(); // test
// setTimeout(myDebounce, 2000); // test after 2 seconds

// test 3
myDebounce(); // test
setTimeout(myDebounce, 900); // too fast
