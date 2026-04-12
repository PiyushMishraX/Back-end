const mongoose = require("mongoose")

async function connectDB(){
    
    await mongoose.connect("o");

    console.log("Connected to DB");
    
}

module.exports = connectDB