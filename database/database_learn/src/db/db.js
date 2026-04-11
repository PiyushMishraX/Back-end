// this file is to connect server and database
// here we create the database and connection is made in server.js file
// const mongoose = require("mongoose");

// async function connectDB() {

//     // this methods connect server with datbase
//     // await mongoose.connect("cluster_uri") // it connects with cluster we need to connect with db

//     // await mongoose.connect("uri/db")

//     await mongoose.connect("uri./db") // halley db
//     // but we haven't created db halley ,
//     // but mongoose.connect method try to connect with db if it do not find it creates that db
//     // use async await so code runs only when db connected

//     console.log("Connected with db");

// }


const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://User_backend_learning_1:Bmo5QvOMDN6m7pM1@backend-learning.6enzpps.mongodb.net/hello",
  );

  console.log("Connected with db");
}

// connectDB() // no

module.exports = connectDB // export to server.js for finally connecting