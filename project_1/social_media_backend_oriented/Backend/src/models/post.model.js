const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})

// const postModel = mongoose.model("any_nsmr", postSchema)
const postModel = mongoose.model("post", postSchema)

module.exports = postModel



/* 
    post = {
    image: String,
    caption: String,
    }

    //in future 
    user ={
    name:String,
    email: string,
    password: String,
    posts:[post1,post2,post3]
    }

    same type of data get sored in al collection
    different data are stored in different collection and
    ("post", postSchema) ---> post is name of the collection



*/