const express = require('express')
const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model');

const router = express.Router()

router.post("/create", async (req,res)=>{
    // console.log(req.body)

    // console.log(req.cookies);


    // check token ( if user cookies have token or not)
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"

        })
    } // still the post can be created with wrong token
    // token can be checked ( if it is created from our server or not ) using jsonwebtoken package ( same that creates)

    
    try{
        // jwt.verify(token, process.env.JWT_SECRET) // if server do not have created that token than jwt.verify throws an error and if error is catched than catch block handles it

        // if the token is real( correct ) than jwt.verify do not return an error nut returns the object which we encoded in token ( here the _id) 
        // const decoded = jwt.verify(token, process.env.JWT_SECRET) 
        // console.log(decoded); // { _id , iat //token cration timing } // data given at time of token creation
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET) 

        const user = await userModel.findOne({
            _id: decoded.id // returns the user with that specific if ( gives the data stored)
        })

        console.log(user);
        
        
    }catch(err){
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    res.send("Post created successfully")
    
})

module.exports = router;