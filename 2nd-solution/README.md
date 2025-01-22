## SECOND SOLUTION (Using resolve and reject and fs.readFile)

1. Import the necessary Node.js modules (fs and path)
    - `fs`: file system operations
    - `path`: for directory path
    - `require('fs').promises` - to be able to use the promise-based version of the fs

2. Create the main function handler
    - `handler` function returns a new Promise which performs a series of asynchronous tasks. First, it calls the `fetchData` function and then chains several methods to handle different parts
    - The `resolve` function is used to signal the successful completion of the task, while `reject` is used to handle errors

3. Create the fetchData function
    - purpose of this function is to read the filenamed data.json
    - reads the content asynchronously, parses from the JSON, returns the data

4. Add the fetchData() inside handler()
    - `fetchData` is an asynchronous function that reads the contents of data.json and returns a Promise. When the Promise is resolved, it provides the data from the JSON file.

5. Question 3: Create a script “test.js” that fetches data.json
    - The primary purpose of the .then method here is to handle the successful resolution of the fetchData Promise. It logs the fetched data and ensures that the data can be passed on to the next step in the promise chain.
    - Inside the .then method, console.log statements are executed to print and fetch data in a readable JSON format.
    - The data is returned at the end of the callback function.

6. Question 4: Log each content asynchronously by using Promises
    - Create a question4 function: `Promise.all` is used to ensure that the logging of each item in the data array is treated as an asynchronous task
    - `data.map` : goes through each item `(perItem)` in the data array and creates a new array of operations
    - Inside the handler function, call the `question4(data)` to log each item asynchronously

7. Question 5: Add an “employeeType” parameter to your script’s function to pass employee type and log only the item(s) that match that type.
    - Create a question5 function: In this function, it takes two parameters `(data, employeeType)` "employeeType" is added as parameter
    - Implement Promise.all: `Promise.all` ensures that all the items matching the employeeType are logged asynchronously
    - Create the map function: `data.map` loops through each item in the data array, transforming each item and checking the employeeType. For filtering and logging, the `if statement` is for checking if the employeeType of that item matches the given employeeType parameter for each item in the data array.
    - Return the array with only the item that matched the employeeType

8. Question 6: Add a field “position” to all items in the array via javascript “map” function, the value must be “developer”
    - Create a `map` function to transform the original array
    - Use the spread operator to copy all items
    - Add the new field by `item.position`
    - Return the data

7. Delete the second item in the array via javascript
    - Use Splice method for deleting an item in the data array
        - `data.splice(1,1)` means that it 
            * 1 : starts at index 1 (second item in the array)
            * 1 : remove one item starting from that index


NOTES:
- Here, I've used resolve and reject within a Promise to handle asynchronous operations more effectively.
- Arrow Function is used to provider shorter and cleaner syntax
- For the file reader, in this solution, I've used fs.readFile instead of fetch which makes server.js unnecessary. However, in practical scenarios, fetch and axios are commonly used in web applications to make HTTP requests to external APIs or servers
- The decision to place Question 6 and 7 directly inside the handler function is because it avoids unnecessary complexity, making it easier to understand and maintain. For more complex operations or those that require reuse, creating separate functions would be appropriate, but for these straightforward tasks, direct inclusion is justified.


## SETUP AND INSTALLATION:

1. Install Node.js 18+ or above
2. Make sure you are in the right directory `2nd-solution`
3. For the 1st solution install the dependencies:
    - `npm i`
4. Run the the application
    - `node test.js`