const express = require('express')

const app = express();

app.get("/", (req, res)=>{
    // res.status(200).json({ message:"Hello!"});
    res.status(500).json({ message:"Hello!"}); // now running same test case of status(200) will fail
});

module.exports = app;