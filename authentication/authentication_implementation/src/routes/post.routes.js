const express = require('express')
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/create", (req,res)=>{
    // console.log(req.body)

    // console.log(req.cookies);


    // check token ( if user cookies have token or not)
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"

        })
    } 
})

module.exports = router;