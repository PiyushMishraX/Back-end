const express = require('express');
const noteModel = require("./models/note.model")



const app = express();
app.use(express.json());

// note = { title, description} to store in database we have to tell db the format and how the data will be stored

/*
    creating api ( storing in db instead of notes array)

    POST /notes => Create a note
    GET /notes => get notes
    DELETE /notes => Delete a note
    PATCH /notes => Update a note

*/

app.post("/notes", async (req,res)=>{

    const data = req.body /* {title,description} */

    await noteModel.create({
        title:data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

module.exports = app