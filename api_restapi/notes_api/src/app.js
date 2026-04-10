// main work of this file is to 
// create the server

const express = require("express")

const app = express()
app.use(express.json()) // create body data redable for express

const notes = []

// user -> frontend -> title and description -> create api 

// app.post('/notes')  // create /notes api mehtod psot


//  POST /notes
// app.post('/notes', (req, res)=>{ // req mai data aayega 

//     // console.log(req.body); // data qill come in req.body
//     // we have to sent data from frontend , but to sent data from browser qw need to create a ui , instead for testing we use POSTMAN
//     // output is undefined so we have to use middleware ( future topic)

//     notes.push(req.body);

//     // 201 succes creating new resource 
//     res.status(201).json({
//         message: "note created successfully" // see in postman response
//     })
// }) 

app.post('/notes', (req, res)=>{ 
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    })
}) 

// api for sending all notes to frontend from server using GET method to fetch data from server
// api GET /notes --> same name different method
app.get('/notes', (req,res)=>{

    res.status(200).json({
        message: "notefetched suucessfully",
        notes: notes
    })
})

//  delete /notes:index -> delete element at index 0 to n-1 for n notes
//  delete /notes:1 
// delete /notes: -> static
// index -> dynamic written after :


app.delete('/notes/index',(req,res)=>{

    const index = req.params.index  // the value of index is stored at the index variable

    // delete /notes:1 -> req to delete index at 1
    //  delete /notes:67 -> req to delete index at 67\

    delete notes[ index ]

    res.status(200).json({
        message: "note deleted successfully"
    })
})

module.exports = app // export server after creation // expoting instance of server