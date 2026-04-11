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
    // mongoose create id uniquely for each note 

    res.status(201).json({
        message: "Note created"
    })
})

app.get('/notes', async( req , res)=>{

    // const notes = await noteModel.find() // find returns all notes from db as an array of object // if no elements then empty array

    // const notes = await noteModel.findOne({
    //     title: "test_title4"
    // }) // find that one // returns a single object // if not found return null 

    // const notes = await noteModel.find({
    //     title: "test_title"
    // }) // find all eith title name test


    /* 

    find => [{},{}] or []
    findOne => {} or null
    */

    const notes = await noteModel.find() 

    res.status(200).json({
        message:"Notes fetched successfully",
        Notes : notes
    })

})

app.delete("/notes/:id", async(req,res)=>{

    const id = req.params.id // req when something is coming 

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"Notes deleted successfully",
    })




})

module.exports = app