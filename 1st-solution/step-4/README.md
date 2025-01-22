## STEP 4: Log each content asynchronously by using Promises.

1. Create a { Promise.all } function 
    The purpose of the Promise.all is to process the data asynchronously or to wait for ALL promises inside it to complete. This ensures that the logging operations are finished before moving on.
2. Make a { data.map((perItem)=>{}) } 
    This map function goes through each item (perItem) in the data array and creates a new array of operations. 
3. Add a { console.log(perItem) }
    Here, the data is asynchronously logged because for each item in the data array, it logs the item.
4. Inside the handler function, call the question4(data) to log each item asynchronously
