const handler = async () =>
    Promise.resolve()
        .then(async () => {
            console.log(`Question 3: Create a script “test.js” that fetches data.json`)
            const data = await fetchData()
            console.log(`[FETCHED DATA]: ${JSON.stringify(data, null, 2)}`)
            console.log(`-------------------------------------------\n`)
            return data
        })
        .then(async (data) => {
            console.log(`Question 4: Log each content asynchronously by using Promises`)
            await question4(data)
            console.log(`-------------------------------------------\n`)
            return data
        })
        .then(async (data) => {
            console.log(`Question 5: Add an “employeeType” parameter to your script’s function to pass employee type and log only the item(s) that match that type.`)
            await question5(data, "regular")
            console.log(`-------------------------------------------\n`)
            return data
        })
        .then(async (data) => {
            console.log(`Question 6: Add a field “position” to all items in the array via javascript “map” function, the value must be “developer”`)
            data.map((item) => {
                item.position = "devloper"
            })
            console.log(`${JSON.stringify(data, null, 2)}`)
            console.log(`-------------------------------------------\n`)
            return data
        })
        .catch((err) => {
            console.log(`${err}`)
        })

const question4 = async (data) => {
    await Promise.all(
        data.map((perItem) => {
            console.log(perItem)
        }
        ))
}

const question5 = async (data, employeeType) => {
    await Promise.all(
        data.map((perItem) => {

            if (employeeType === perItem.employeeType) {
                console.log(perItem)
            }
        }
        )
    )
}

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};


(async () => {
    await handler()
})()