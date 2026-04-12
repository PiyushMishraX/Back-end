const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service")


const app = express();
app.use(express.json()); // it created data redeable (log req.body --> undefined) for body -> raw format not other such as form-data which we are using so we use an other middleware 
// which is mutler - Multer is a Node.js middleware for Express that handles multipart/form-data
// npm i multer

const upload = multer({Storage: multer.memoryStorage() })

// upload.single("image") --> image --> same as key name we are sending
app.post('/create-post', upload.single("image"), async (req,res)=>{

    console.log(req.body);
    console.log(req.file); // buffer is acutal file which we will upload in image kit
    
} )

app.post('/posts', async (req,res)=>{

    
} )

module.exports = app;