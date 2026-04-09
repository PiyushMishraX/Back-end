// const express = require('express');

// // express() // creates server // but not started

// const app = express()

// app.listen(3000) // method to start server ( 3000 = prot number ) // now use node server.js to use //if chartat in terminal is stuck in place then server is running
// the server is running locally so we can access using browser at // listen create/start a server that can crun in backend and node file.js executes it
// localhost:port -> localhost:3000

// for now it gives error becuase we haven't program  it for use to use


const express = require('express'); // imports the Express module

const app = express() // call express , the instace of server is created // genrally stored as app name // this line is server insatce creation

app.get("/", (req,res)=>{
    res.send("Hello World")
}) // this code does't appear in alredy runing server so close it ctrl+c then restart it node server.js
// here we programed the server to respond for user request ( here it is just opening the server and opening site) 


app.get("/about", (req,res)=>{ 
    res.send("About Page") // check at site/about // open after restarting server
})

app.listen(3000)  // it is for startind the server

// till this  learned how to create a server and program it for user , what response he can see

