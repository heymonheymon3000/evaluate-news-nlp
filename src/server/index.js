const dotenv = require('dotenv');
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config();
console.log(`Your APP ID is ${process.env.API_ID}`);
console.log(`Your API key is ${process.env.API_KEY}`);

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// https://api.aylien.com/api/v1

const app = express()
app.use(express.static('dist'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// Cors for cross origin allowance
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
