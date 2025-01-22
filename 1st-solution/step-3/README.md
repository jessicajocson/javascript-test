## STEP 3: Create a script “test.js” that fetches data.json

1. Create a handler function
    - handler is an asynchronous function that sequentially executes promises and returns a resolved promise.
    - Within the promise, it logs a message to the console, calls fetchData() to retrieve data, logs the fetched data, and returns the data.
    - If there's an error during execution, it logs the error.

2. Create the fetchData function
    - fetchData is an asynchronous function that makes an HTTP GET request to http://localhost:3000/data.
    - using fs.readFile is the better solution for this problem, but for now fetch is used because it is commonly used in real-world applications and complex problem solving like in building APIs
    - It then processes the response as JSON.
    - It iterates over the JSON data, logging each item and resolving a promise for each item.
    - If there's an error during the fetch or processing, it throws the error.

3. Create the IIFE (Immediately Invoked Function Expression)
    This immediately invokes an asynchronous function that calls handler(), ensuring the entire script runs as soon as it's loaded.


NOTES:
- Opted for Promise Chaining method because it is commonly used in practical scenarios such as building APIs. For example, Authentication/Authorization will be returned first, while the other tasks are being executed. If the authentication failed, error will be returned.
- async/await method is also applied because it makes the asynchronous code looks like the code is executed in synchronous manner and readable. 