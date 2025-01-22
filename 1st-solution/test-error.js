const fetch = require('node-fetch'); // Remove this, required only for Node.js versions below 18+

let myPromise2 = new Promise(function (myResolve, myReject) {
  myResolve('Hello World!');
});

// Create a Promise to fetch the JSON file
let myPromise = new Promise(function (myResolve, myReject) {
  fetch('http://localhost:8080/data.json') // Replace 8080 with port 3000 and remove .json
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(async (data) => {
      let promiseValue = await myPromise2;
      console.log(promiseValue);
      
      // Resolve the main promise with the data or something else
      myResolve(data); // You can resolve with data if you want to log it later
    })
    .catch((error) => {
      myReject('Error fetching the data: ' + error.message);
    });
});

// Consume the Promise
myPromise.then(
  function (employees) {
    employees.forEach((employee) => {
      console.log(`Name: ${employee.name}, Email: ${employee.email}, Type: ${employee.employeeType}`);
    });
  },
  function (error) {
    console.error(error);
  }
);