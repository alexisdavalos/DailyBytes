import axios from "axios";

let spaceXData = [];

// O(n) time | O(n) space
const fetchData = async () => {
  // makes http request to spacex api
  await axios
    .get("https://api.spacexdata.com/v3/history")
    .then((res) => {
      // loop through res object data
      res.data.forEach((element) => {
        // check element wikipedia link is not null
        if (element.links.wikipedia !== null) {
          // push link to arr
          spaceXData.push(element.links.wikipedia);
        }
      });
    })
    // catches error and logs it
    .catch((err) => console.log(err));
  // loop through spacex data and print each element
  if (spaceXData.length !== 0) {
    spaceXData.forEach((element) => {
      console.log(element);
    });
  }
};

fetchData();

// Assignment Instructions:

//Create a program that will pull data from SpaceX api 'https://api.spacexdata.com/v3/history’ and display wikipedia link for each history event that comes back.
//Wikipedia link is stored in the links object. Do not print null results.
//Please implement using regular promises as well as using async/await syntax.
