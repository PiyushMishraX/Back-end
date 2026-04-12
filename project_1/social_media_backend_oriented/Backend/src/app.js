const express = require('express');

const app = express();
app.use(express.json()); // it created data redeable (log req.body --> undefined) for body -> raw format not other such as form-data which we are using so we use an other middleware


app.post('/create-post', async (req,res)=>{

    console.log(req.body);
    
} )


module.exports = app;