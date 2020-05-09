import { fetch } from 'node-fetch';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    fetchTextApi(formText)
    .then(function(data) {
        document.getElementById('results').innerHTML = data.polarity
    })
}

async function fetchTextApi(input) {
    const response = await fetch('http://localhost:3000/textapi', {
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        method: 'POST',
        body: JSON.stringify({
            text: input
        }),
        headers: {"Content-Type": "application/json"}
    })

    try {
        const text = await response.json()
        console.log(text)
        return text
    } catch(error) {
        console.log('error',error)
    }
}

export { handleSubmit, fetchTextApi }
