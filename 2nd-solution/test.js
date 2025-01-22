const fs = require('fs').promises;
const path = require('path');

const handler = async () => {
  try {
    console.log(`Question 3: Create a script "test.js" that fetches data.json`);
    const data = await fetchData();
    console.log(`[FETCHED DATA]: ${ JSON.stringify(data, null, 2) }`);
    console.log(`-------------------------------------------\n`);

    console.log(`Question 4: Log each content asynchronously by using Promises`);
    await question4(data);
    console.log(`-------------------------------------------\n`);

    console.log(`Question 5: Add an "employeeType" parameter to filter records`);
    await question5(data, "regular");
    console.log(`-------------------------------------------\n`);

    console.log(`Question 6: Add a field "position" using map function`);
    data.forEach(item => {
      item.position = "developer";
    });
    console.log(`${ JSON.stringify(data, null, 2) }`);
    console.log(`-------------------------------------------\n`);

    console.log(`Question 7: Delete the second item in the array`);
    data.splice(1, 1);
    console.log(`${ JSON.stringify(data, null, 2) }`);
    console.log(`-------------------------------------------\n`);

    return Promise.resolve(data);
  } catch (error) {
    console.log(`${ error }`);
    return Promise.reject(error);
  }
};

const question4 = async (data) => {
  await Promise.all(
    data.map((perItem) => {
      console.log(perItem);
    })
  );
};

const question5 = async (data, employeeType) => {
  await Promise.all(
    data.map((perItem) => {
      if (employeeType === perItem.employeeType) {
        console.log(perItem);
      }
    })
  );
};

// Use `fs.readFile` for reading local files in a Node.js environment.
const fetchData = async () => {
  const filePath = path.join(__dirname, 'data.json');
  try {
    const results = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(results);
    return data;
  } catch (err) {
    throw err;
  }
};

(async () => {
  try {
    await handler();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
})();
