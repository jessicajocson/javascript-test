const fs = require('fs').promises;
const path = require('path');

const handler = () => {
  return new Promise((resolve, reject) => {
    fetchData()
      .then((data) => {
        console.log(`Question 3: Create a script “test.js” that fetches data.json`);
        console.log(`[FETCHED DATA]: ${JSON.stringify(data, null, 2)}`);
        console.log(`-------------------------------------------\n`);
        return data;
      })
      .then(async (data) => {
        console.log(`Question 4: Log each content asynchronously by using Promises`);
        await question4(data);
        console.log(`-------------------------------------------\n`);
        return data;
      })
      .then(async (data) => {
        console.log(`Question 5: Add an “employeeType” parameter to your script’s function to pass employee type and log only the item(s) that match that type.`);
        await question5(data, "regular");
        console.log(`-------------------------------------------\n`);
        return data;
      })
      .then((data) => {
        console.log(`Question 6: Add a field “position” to all items in the array via javascript “map” function, the value must be “developer”`);
        data = data.map((item) => {
          item.position = "developer";
          return item;
        });
        console.log(`${JSON.stringify(data, null, 2)}`);
        console.log(`-------------------------------------------\n`);
        return data;
      })
      .then((data) => {
        console.log(`Question 7: Delete the second item in the array via javascript delete the second item in the array`);
        data.splice(1, 1);
        console.log(`${JSON.stringify(data, null, 2)}`);
        console.log(`-------------------------------------------\n`);
        resolve(data);
      })
      .catch((err) => {
        console.log(`${err}`);
        reject(err);
      });
  });
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
  return await fs.readFile(filePath, 'utf8')
    .then((results) => {
      const data = JSON.parse(results);
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

(async () => {
    await handler();
})();
