// Make a request to the google pay API.
// Use async/await rather than callback functions.
const url = ''
const apiKey = ''
const urlToShortenAlternative = ''
const data = JSON.stringify({destination: urlToShortenAlternative})
// GET request:
const myGETRequest = async () => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }
}
// note that error is just an arbitrary parameter.

// POST request:
const myPOSTRequest = async () => {
    try {
        const response = await fetch(
            url,
            {
            method: 'POST', 
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        }
        )
    } catch (error) {
        console.log(error)
    }
}