const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    // email: String, // making sure that email is unique for each use ( at server level)
    email:{
      type: String,
      unique: true
    } ,
    password: String
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;