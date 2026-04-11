const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({

    title: String,
    description: String,
    // age:Number,
    // dob:Date,
})


const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel

/*

if we want to perform any operationon note we have to create a model for it

CRUD operations
Create - POST
Read - GET
Update - PATCH
Delete -DELETE

by creating model we skip the part of creating code for these operations in raw format 
*/