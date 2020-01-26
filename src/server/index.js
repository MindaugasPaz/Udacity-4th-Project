projectData = {};
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var aylien = require('aylien_textapi')

const app = express()

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(`Your API key is ${process.env.API_KEY}`);

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     console.log('Servas veikia')
//     res.send(mockAPIResponse)
// })
app.use(express.json());

app.post('/addUserInput', (request, response) => {
    console.log('I got a request')
    console.log(request.body);
    const data = request.body;
    textapi.entities({ text: data.formText}, (error, textapiResponse) => {
        if (error !== null) {
            response.json({
                status: 'failed',
                formText: "Error has occured"
            });
            // console.log(textapiResponse);
        } else {
            response.json({
                status: 'success',
                formText: textapiResponse.entities.location
            });
        }
    })
});
