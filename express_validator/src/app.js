const express = require('express')
const validationRules = require('./middleware/validator.middleware')

const app = express();

app.use(express.json())


//  express validator // here validation runs first ( as a middleware) // this below is  dummy api not production usabalbe

// app.post("/register", (req, res)=>{ // without validator the data field are clear without validation

app.post("/register",validationRules.registerUserValidationRUles, (req, res)=>{
    const { username, email, password} = req.body;

    res.status(201).json({message: "User registered successfully", user: {username, email}})
})

module.exports = app;



// invalid data 
// {
//     "username": 12345678,
//     "email": "test",
//     "password": "test"
// }