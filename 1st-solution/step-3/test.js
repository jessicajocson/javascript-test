const handler = async () =>
    Promise.resolve()
        .then(async () => {
            console.log(`Question 3: Create a script “test.js” that fetches data.json`)
            const data = await fetchData()
            console.log(`[FETCHED DATA]: ${JSON.stringify(data, null, 2)}`)
            console.log(`-------------------------------------------\n`)
            return data
        })
        .catch((err) => {
            console.log(`${err}`)
        })


const fetchData = async () => {
    return await fetch('http://localhost:3000/data')
        .then(async (response) => {
            const jsonData = await response.json();

            const logPromises = jsonData.map((item) => {
                return new Promise((resolve) => {
                    console.log(item);
                    resolve();
                });
            });
        })
        .catch((err) => {
            throw err
        })
}


(async () => {
    await handler()
})()