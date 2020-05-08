const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(express.static('../../dist'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../../dist', 'index.html'))
})

app.listen(3000, function () {
    console.log('Listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
