// main work of this file is to 
// create the server

const express = require("express")

const app = express()
app.use(express.json()) // create body data redable for express

const notes = []

// user -> frontend -> title and description -> create api 

// app.post('/notes')  // create /notes api mehtod psot
//  POST /notes
app.post('/notes', (req, res)=>{ // req mai data aayega 

    // console.log(req.body); // data qill come in req.body
    // we have to sent data from frontend , but to sent data from browser qw need to create a ui , instead for testing we use POSTMAN
    // output is undefined so we have to use middleware ( future topic)

    notes.push(req.body);

    // 201 succes creating new resourc 
    res.status(201).json({
        message: "note created successfully" // see in postman response
    })
}) 

module.exports = app // export server after creation // expoting instance of server