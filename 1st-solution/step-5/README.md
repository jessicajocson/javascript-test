## STEP 5: Add an “employeeType” parameter to your script’s function to pass employee type and log only the item(s) that match that type.

1. Create question5 function
    - In this function, it takes two parameters `(data, employeeType)` "employeeType" is added as parameter
    - `data` is an array of items, while `employeeType` is a string parameter

2. Use Promise.all
    - `Promise.all` ensures that all the items matching the employeeType are logged asynchronously and the function waits for all logging operations to complete before proceeding.

3. Use map function
    - `data.map` loops through each item in the data array, transforming each item and checking the employeeType.
    - For filtering and logging, the `if statement` is for checking if the employeeType of that item matches the given employeeType parameter for each item in the data array.

4. Return the array with only the item that match
    - To log the item that match a certain type, call the function `question5(data, "regular")` with the chosen employeeType parameter on the promise chain
    - Advantage of this solution is for asynchronous flexibility which means performing more complex asynchronous operations for each item in the future like fetching of additional data. 


Another simpler solution for this problem is thru filtering:

`const question5 = async (data, employeeType) => {`
    `const filteredData = data.filter((item) => item.employeeType === employeeType);`
    `filteredData.forEach((item) => console.log(item));`
`};`

- This solution is more readable and efficient because `filter` method directly gives a new array to the filtered items
- `forEach` method logs each item
- The disadvantage of this solution is although it is efficient, it not necessarily asynchronous for each item
- First solution which is by using `Promise.all` has more flexibility for practical problems and more scalability in the future



