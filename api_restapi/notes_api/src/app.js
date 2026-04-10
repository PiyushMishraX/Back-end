// main work of this file is to 
// create the server

const express = require("express")

const app = express()

const notes = []

// user -> frontend -> title and description -> create api 

// app.post('/notes')  // create /notes api mehtod psot
//  POST /notes
app.post('/notes', (req, res)=>{ // req mai data aayega 

    console.log(req.body); // data qill come in req.body
    

}) 

module.exports = app // export server after creation // expoting instance of server