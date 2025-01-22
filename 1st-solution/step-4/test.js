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