const express = require('express');
const mutler = require('mutler');



const app = express();
app.use(express.json()); // it created data redeable (log req.body --> undefined) for body -> raw format not other such as form-data which we are using so we use an other middleware 
// which is mutler - Multer is a Node.js middleware for Express that handles multipart/form-data
// npm i multer

const upload = multer({Storage: multer.memoryStorage() })


app.post('/create-post', async (req,res)=>{

    console.log(req.body);
    
} )

app.post('/posts', async (req,res)=>{

    
} )

module.exports = app;